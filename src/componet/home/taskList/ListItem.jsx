import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styles from "../../../styles/home/taskList/listItem.module.css";

function ListItem({ task, list, setList, setSelectedTask, toggleModal }) {
  function handleDelete() {
    const deleteList = list.filter((value) => {
      if (task.id === value.id) {
        return false;
      } else {
        return true;
      }
    });
    setList(deleteList);
  }

  function handleEdit() {
    toggleModal();
    setSelectedTask(task);
  }
  return (
    <div className={styles.container}>
      <div>
        <input type="checkbox" checked={task.isCompleted} />
        <p>{task.task}</p>
      </div>
      <p>{new Date(task.due).toLocaleDateString("en-IN")}</p>
      <div>
        <button onClick={handleEdit}>
          <FontAwesomeIcon icon={faEdit} />
        </button>
        <button onClick={handleDelete}>
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </div>
    </div>
  );
}

export default ListItem;
