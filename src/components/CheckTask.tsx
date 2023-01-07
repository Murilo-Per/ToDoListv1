import { Check, Circle } from "phosphor-react";

interface CheckTaskProps{
  isChecked: boolean,
  onTaskCheck: (Check: boolean) => void,
}

export function CheckTask({isChecked, onTaskCheck}: CheckTaskProps){
  function handleTaskCheck(Check: boolean) {
    onTaskCheck(Check); 
  }
  
  if(isChecked){
    return (
      <Check 
        size={24} 
        className="bg-purple-600 text-gray-100 rounded-full p-1 hover:bg-purple-200"
        onClick={() => handleTaskCheck(!isChecked)}
      />
    );
  } else {
    return (
      <Circle 
        size={24}
        className="border-2 border-solid border-purple-200 hover:border-purple-600 text-gray-400 hover:text-blue-300 hover:bg-blue-300 rounded-full "  
        onClick={() => handleTaskCheck(!isChecked)}      
      />
    )
  }  
}