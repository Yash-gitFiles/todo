import React, { useState } from "react";
import styles from "../../styles/home/addUpdateTask.module.css";

const initialState = {
  task: "",
  due: "",
  isCompleted: false,
};

function AddUpdateTask({ toggleModal, list, setList, selectedTask }) {
  const [formState, setFormState] = useState(selectedTask || initialState);

  function handleAdd() {
    setList([
      ...list,
      {
        id: new Date(),
        task: formState.task,
        due: formState.due,
        isCompleted: false,
      },
    ]);
    toggleModal();
  }

  function handleUpdate() {
    const updateTask = list.map((value) => {
      if (value.id === selectedTask.id) {
        return {
          ...value,
          task: formState.task,
          due: formState.due,
          isCompleted: formState.isCompleted,
        };
      }
      return value;
    });
    setList(updateTask);
    toggleModal();
  }

  function handleChange(e) {
    console.log("e.target.name", e.target.checked);
    if (e.target.name === "isCompleted") {
      setFormState({ ...formState, [e.target.name]: e.target.checked });
    } else {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  }

  console.log("formState", formState);

  return (
    <div className={styles.container}>
      <label htmlFor="task"></label>
      <input
        type="text"
        onChange={handleChange}
        name="task"
        value={formState.task}
      />

      <label htmlFor="due"></label>
      <input
        type="date"
        onChange={handleChange}
        name="due"
        value={formState.due}
      />
      <div className={styles.checkBox}>
        <label htmlFor="">isCompleted</label>
        <input
          type="checkbox"
          checked={formState.isCompleted}
          name="isCompleted"
          id="isCompleted"
          onChange={handleChange}
        />
      </div>

      <button onClick={selectedTask ? handleUpdate : handleAdd}>
        {selectedTask ? "Update Task" : "Add Task"}
      </button>
    </div>
  );
}

export default AddUpdateTask;
