import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, deleteTask } from "../../redux/ToDO/ToDO";

function ToDoApp() {
  const toDoos = useSelector((state: any) => state.toDo);
  const dispatch = useDispatch();
  const [task, setTask] = useState("");
  const [isAddModalShow, setIsAddModalShow] = useState(false);

  const addToDo = () => {
    console.log("task added");
    if (!task) {
      alert("Please enter task!");
      return null;
    }
    dispatch(addTask({ taskId: Math.random(), task }));
    setIsAddModalShow(!isAddModalShow);
    setTask("");
  };

  const deleteTaskById = (id: number) => {
    dispatch(deleteTask(id));
  };

  return (
    <div>
      {toDoos.data.length !== 0 ? (
        toDoos.data.map((elm, index) => (
          <div
            key={index}
            style={{
              width: "100px",
              margin: "auto",
              padding: "10px",
              height: "70px",
              border: "1px solid lime",
              marginBottom: "10px",
            }}
          >
            <p
              onClick={() => {
                deleteTaskById(elm.taskId);
              }}
              style={{ color: "red", cursor: "pointer" }}
            >
              X
            </p>
            <p>{elm.task}</p>
          </div>
        ))
      ) : (
        <p>You don't have any tasks!</p>
      )}
      <br />
      <button onClick={() => setIsAddModalShow(!isAddModalShow)}>
        Add Task
      </button>
      {isAddModalShow && (
        <form
          style={{
            width: "100%",
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            top: "0px",
            left: "0px",
            backdropFilter: "blur(5px)",
          }}
          onSubmit={(e) => {
            e.preventDefault();
            addToDo();
          }}
        >
          <div
            style={{
              width: "max-content",
              padding: "10px",
              height: "100px",
              backgroundColor: "white",
            }}
          >
            <label htmlFor="task">Enter Task</label>
            <br />
            <input
              name={"task"}
              value={task}
              onChange={(e) => setTask(e.target.value)}
            />
            <br />
            <br />
            <button
              type="button"
              onClick={() => setIsAddModalShow(!isAddModalShow)}
            >
              Cancel
            </button>{" "}
            <button type="submit">Add Task</button>
          </div>
        </form>
      )}
    </div>
  );
}

export default ToDoApp;
