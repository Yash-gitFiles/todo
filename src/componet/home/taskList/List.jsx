import React from "react";
import ListItem from "./ListItem";

function List({ list, setList, setSelectedTask, toggleModal }) {
  return (
    <div>
      {list?.map((value) => {
        return (
          <ListItem
            toggleModal={toggleModal}
            key={value.id}
            task={value}
            list={list}
            setList={setList}
            setSelectedTask={setSelectedTask}
          />
        );
      })}
    </div>
  );
}

export default List;
