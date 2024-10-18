import React, { useState } from "react";
import styles from "../../styles/home/tab.module.css";

function Tab({ list, setList }) {
  const [backUpList, setBackUpList] = useState(null);

  function handleAll() {
    if (backUpList) {
      setList(backUpList);
      setBackUpList(null);
    }
  }
  function handleToday() {
    const handleToday = (backUpList || list).filter((value) => {
      if (value.due === new Date().toISOString().split("T")[0]) {
        return true;
      } else {
        return false;
      }
    });
    if (!backUpList) {
      setBackUpList(list);
    }
    setList(handleToday);
  }
  function handlePending() {
    const handlePending = (backUpList || list).filter((value) => {
      if (value.isCompleted === false) {
        return true;
      } else {
        return false;
      }
    });
    if (!backUpList) {
      setBackUpList(list);
    }
    setList(handlePending);
  }
  function handleOverDue() {
    const handleOverDue = (backUpList || list).filter((value) => {
      if (
        new Date().getTime() - 1000 * 60 * 60 * 24 >
        new Date(value.due).getTime()
      ) {
        return true;
      } else {
        return false;
      }
    });
    if (!backUpList) {
      setBackUpList(list);
    }
    setList(handleOverDue);
  }
  function handleCompleted() {
    const handleCompleted = (backUpList || list).filter((value) => {
      if (value.isCompleted) {
        return true;
      }
      return false;
    });
    if (!backUpList) {
      setBackUpList(list);
    }
    setList(handleCompleted);
  }

  return (
    <div className={styles.tabContainer}>
      <button onClick={handleAll}>All</button>
      <button onClick={handleToday}>Today</button>
      <button onClick={handlePending}>Pending</button>
      <button onClick={handleOverDue}>Over-Due</button>
      <button onClick={handleCompleted}>Completed</button>
    </div>
  );
}

export default Tab;
