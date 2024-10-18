import React from "react";
import styles from "../../../styles/home/taskList/header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

function Header({ addTask }) {
  return (
    <div className={styles.container}>
      <h3>Todo-Task </h3>
      <button onClick={addTask}>
        <FontAwesomeIcon icon={faPlus} />
        &nbsp; Add Task
      </button>
    </div>
  );
}

export default Header;
