import React, { useState } from "react";
import Header from "./Header";
import List from "./List";
import styles from "../../../styles/home/taskList/taskList.module.css";
import Modal from "../../common/Modal";
import AddUpdateTask from "../AddUpdateTask";

function 
TaskList({ list, setList }) {
  const [open, setOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

  function toggleModal() {
    setOpen(!open);
    setSelectedTask(null);
  }

  return (
    <div>
      <Header addTask={toggleModal} />
      <List
        list={list}
        setList={setList}
        setSelectedTask={setSelectedTask}
        toggleModal={toggleModal}
      />
      {open && (
        <Modal
          toggleModal={toggleModal}
          title={selectedTask ? "Edit Task" : "Add  Task"}
          body={
            <AddUpdateTask
              selectedTask={selectedTask}
              toggleModal={toggleModal}
              list={list}
              setList={setList}
            />
          }
        />
      )}
    </div>
  );
}

export default TaskList;
