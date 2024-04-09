import React from "react";
import Task from "./Task";
import TaskList from "./TaskList";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Task />
        <TaskList />
      </Provider>
    </div>
  );
}

export default App;
