import { Trash } from "phosphor-react";
import { useState } from "react";
import { CheckTask } from "./CheckTask";

interface CardsProps {
  id: string,
  task: string,
  isDone: boolean,
  onTaskDelete: (id: string) => void,
  onTaskUpdate: (id: string, isCheck:boolean) => void,

}

export function Cards({isDone = false, task, id, onTaskDelete, onTaskUpdate}: CardsProps){

  const [styleText, setStyleText] = useState("w-px-[632px] h-10 text-center text-gray-100");

  function handleTaskDelete(){
    onTaskDelete(id);
  }

  function handleTaskUpdate(isCheck: boolean){

    if (isCheck) {
      setStyleText("w-px-[632px] h-10 text-center text-gray-300 line-through");
    } else {
      setStyleText("w-px-[632px] h-10 text-center text-gray-100");
    }
    
    onTaskUpdate(id, isCheck);
  }  

  return (
    <div
      key={id} 
      className="bg-gray-400 rounded-lg border border-solid border-gray-500 h-[72px] mt-3 first:mt-0 flex items-start justify-between p-4"
    >
      <CheckTask 
        isChecked={isDone}
        onTaskCheck={handleTaskUpdate}
      />

      <p className={styleText}>
        {task}
      </p>
      <button
        onClick={handleTaskDelete}
      >
        <Trash 
          size={22}
          className="text-gray-100 hover:text-danger-400"
        />
      </button>
    </div>
  );
}