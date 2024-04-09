import React from "react";
import { useSelector,useDispatch } from "react-redux";

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const deleteTask = (id) => {
     dispatch({
        type:'tasks/taskDeleted',
        payload : {
            id
        }
     });
     console.log("task deleted...");
  }

//   console.log("tasks : ",tasks);

  return (
    <>  
    <ul className="taskList">
      {tasks.tasks.map((task) => {
        console.log(task.id);
        return (
          <>
            <li className="task" key={task.id}>
              {task.text}
              <button
                className="deleteTask"
                onClick={() => deleteTask(task.id)}
              >
                Delete Task
              </button>
            </li>
          </>
        );
      })}
    </ul>
    </>
  );
};

export default TaskList;
