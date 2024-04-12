import React from "react";
import { useSelector, useDispatch } from "react-redux";

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);
  const filter = useSelector((state) => state.filters);
  const dispatch = useDispatch();
  let FilteredArray = [];

  const deleteTask = (id) => {
    dispatch({
      type: "tasks/taskDeleted",
      payload: {
        id,
      },
    });
    console.log("task deleted...");
  };

  const completeTask = (id) => {
    dispatch({
      type: "tasks/taskCompleted",
      payload: {
        id,
      },
    });
    console.log("task marked as completed...");
  };

  filter.value === "active"
    ? (FilteredArray = tasks.tasks.filter((task) => task.completed === false))
    : filter.value === "complete"
    ? (FilteredArray = tasks.tasks.filter((task) => task.completed === true))
    : (FilteredArray = tasks.tasks);

  return (
    <>
      {FilteredArray.length === 0 ? (
        <h5>
          Please add some tasks that has to be completed before the day ends. :)
        </h5>
      ) : (
        <>
          <ul className="taskList">
            {FilteredArray.map((task) => {
              console.log(task.id);
              return (
                <>
                  <input
                    type="checkbox"
                    checked={task.completed}
                    disabled={task.completed}
                    onChange={() => completeTask(task.id)}
                  />
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
      )}
    </>
  );
};

export default TaskList;
