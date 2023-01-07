interface CountersProps{
  tasksCount: number,
  tasksDone: number,
}

export function Counters({tasksCount, tasksDone}: CountersProps) {
  return (
    <div className="h-6 flex justify-between mb-6">
    <span className="font-bold text-blue-600">
      Tarefas Criadas
      <span className="bg-gray-400 text-gray-100 rounded-full ml-2 px-2">
      {tasksCount}
      </span>
    </span>

    <span className="font-bold text-purple-600">
      Concluidas
      <span className="bg-gray-400 text-gray-100 rounded-full ml-2 px-2">
       {tasksDone}
      </span>
    </span>
  </div>    
  );
}