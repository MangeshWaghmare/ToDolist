import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [todolist, settodolist] = useState([]);

  let saveToDoList = (event) => {
    let todoname = event.target.todoname.value;
    if (!todolist.includes(todoname)) {
      let finalToDoList = [...todolist, todoname];
      settodolist(finalToDoList);
    } else {
      alert("ToDo Name Already Exist...");
    }
    event.preventDefault();
  };

  let list = todolist.map((value, index) => {
    return (
      <ToDoListItems
        value={value}
        key={index}
        indexNumber={index}
        todolist={todolist}
        settodolist={settodolist}
      />
    );
  });
  return (
    <>
      <div className="App">
        <h1>To Do List For Your Daily Targets</h1>
        <form onSubmit={saveToDoList}>
          <input type="text" name="todoname"></input> <button>Save</button>
        </form>

        <div className="outerDiv">
          <ul>{list}</ul>
        </div>
      </div>
    </>
  );
}

export default App;

function ToDoListItems({ value, indexNumber, todolist, settodolist }) {
  let [status, setstatus] = useState(false);

  let deleteRow = () => {
    let finalData = todolist.filter((v, i) => i != indexNumber);
    settodolist(finalData);
  };

  let checkStatus = () => {
    setstatus(!status);
  };

  return (
    <li className={status ? "completetodo" : ""} onClick={checkStatus}>
      {indexNumber + 1 + "."} {value}
      <span onClick={deleteRow}>&times;</span>
    </li>
  );
}
