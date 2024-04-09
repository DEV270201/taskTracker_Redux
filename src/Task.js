import React,{useState} from "react";
import { useDispatch } from "react-redux";

const Task = () => {
  
  const[input,setInputState] = useState("");
  const dispatch = useDispatch();

  const updateInput = (e) => {
    setInputState(e.target.value);
  }

  const addTask = () => {
    if(input.trim() === "")
      return;

    //dispatch action for adding the task
    dispatch({
        type: 'tasks/taskAdded',
        payload: {
            text: input
        }
    })

    setInputState("");
  }

  return (
    <>
      <div className="task_adder">
         <h3>Add a new task : </h3>
         <input className="taskInput" placeholder="Task..." type="text" value={input} onChange={updateInput} />
         <button className="addTask" onClick={addTask}>Add Task</button>
      </div>
    </>
  )

}

export default Task;