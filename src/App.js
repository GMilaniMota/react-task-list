import React, { useState } from "react";
import "./components/Tasks";


import "./App.css"
import Tasks from "./components/Tasks";

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: '1',
      title: 'Estudar',
      completed: false,
    },
    {
      id: '2',
      title: 'Cozinhar',
      completed: true,
    },
  ]);

  return (
    <>
      <div className="container">
        <Tasks tasks={tasks} />
      </div>
    </>
  );

};

export default App;