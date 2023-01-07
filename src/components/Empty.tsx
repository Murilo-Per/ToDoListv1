import ClipBoard from "../assets/Clipboard.png";

interface EmptyProps{
  countTask: number,
}

export function Empty({countTask}:EmptyProps){
  if(countTask <= 0){ 
    return (
      <div className="h-full flex flex-col items-center justify-center py-16 px-6 border-t border-solid border-gray-400">
          <img
            className="mb-4"
            src={ClipBoard}
            alt="Clipboard"
          />
          <p className="w-full font-bold text-center text-gray-300">
            Você ainda não tem tarefas cadastradas
          </p>
          <p className="w-full text-center text-gray-300">
            Crie tarefas e organize seus itens a fazer
          </p>
      </div>
    );
  } else {return <></>}
}