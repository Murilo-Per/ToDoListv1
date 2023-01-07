import { PlusCircle } from "phosphor-react";
import { ChangeEvent, FormEvent, InvalidEvent, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Cards } from "./Cards";
import { Counters } from "./Counters";
import { Empty } from "./Empty";

// const task = [
//   {
//     id: '1',
//     task: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur fugit natu',
//     isDone: true,
//   },
//   {
//     id: '2',
//     task: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur fugit natu',
//     isDone: false,
//   },
//   {
//     id: '3',
//     task: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur fugit natu',
//     isDone: true,
//   },
//   {
//     id: '4',
//     task: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur fugit natu',
//     isDone: false,
//   },
// ]

export function Task(){

  const [ tasks, setTasks ] = useState<{id: string, task: string, isDone:boolean}[]>([]); 
  const [ tasksText, setTasksText ] = useState('');
  const [ countTask, setCountTask ] = useState(0);
  const [ countTaskChecked, setCountTaskChecked ] = useState(0);

  function handleCreateTask(event: FormEvent){
    event.preventDefault();
        
    const uid = uuidv4();
    const newTask = {id:uid, task:tasksText, isDone:false};

    setTasks([...tasks, newTask]);
    setTasksText('');
  }

  function handleTextTask(event: ChangeEvent<HTMLInputElement>){
    event.target.setCustomValidity('');
    setTasksText(event.target.value);
  }

  function handleTextInvalid(event: InvalidEvent<HTMLInputElement>){
    event.target.setCustomValidity('Digite uma tarefa!');
  }

  function handleTaskDelete(idToDelete: string){
    const tasksWithoutDeleted = tasks.filter(({ id }) => {
      return id !== idToDelete;
    });
    
    setTasks(tasksWithoutDeleted); 
  }

  function handleTaskUpdate(idTask: string, isCheck: boolean){
    const newTaskCheck = tasks.map(task => {
      return task.id === idTask ? {...task, isDone:isCheck } : task;
    });
    
    setTasks(newTaskCheck);
  }
  
  useEffect(() => {
    setCountTask(tasks.length);
  }, [tasks]);
  
  useEffect(() => {
    handleCountTaskChecked();
  }, [tasks]);

  function handleCountTaskChecked(){
    const tasksChecked = tasks.filter(task => {
      return task.isDone === true;
    })    
    setCountTaskChecked(tasksChecked.length);
  }

  return (
    <div className="max-w-3xl mx-4 text-xs md:mx-auto md:text-sm">
      <form 
        onSubmit={handleCreateTask}
        className="mb-16 -mt-7 gap-2 flex justify-between"
      >
        <input
          type="text"
          placeholder="Adicione uma nova tarefa..."
          maxLength={100}
          value={tasksText} 
          onChange={handleTextTask}
          onInvalid={handleTextInvalid}
          required
          className="w-full rounded-lg p-4 border border-solid bg-gray-500 text-gray-200 border-gray-700"
        />

        <button 
          type="submit"
          className="w-24 h-14 bg-blue-600 hover:bg-blue-400 text-gray-100 font-bold leading-6 rounded-lg flex items-center gap-1 pl-5"
        >
          Criar
          <PlusCircle size={16} />
        </button>
      </form>

      <Counters 
        tasksCount={countTask} 
        tasksDone={countTaskChecked}
      />

      <div className="group h-px-[408]">
        <main className="">
          {tasks.map(({id, task, isDone}) => {
             return (
                <Cards 
                  id={id}
                  task={task} 
                  isDone={isDone} 
                  onTaskDelete={handleTaskDelete}
                  onTaskUpdate={handleTaskUpdate}
                />
              );
          })}
        </main>
        <Empty countTask={countTask}/>
      </div>
    </div>
  );  
}