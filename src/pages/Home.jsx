import React, { useState } from "react";
import Tab from "../componet/home/Tab";
import TaskList from "../componet/home/taskList/TaskList";

function Home() {
  const [list, setList] = useState([
    {
      id: new Date(),
      task: "task 1",
      isCompleted: false,
    },
  ]);
  return (
    <div>
      <Tab list={list} setList={setList} />
      <TaskList list={list} setList={setList} />
    </div>
  );
}

export default Home;
