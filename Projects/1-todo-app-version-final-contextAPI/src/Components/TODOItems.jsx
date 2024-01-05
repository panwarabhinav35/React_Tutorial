import { useContext, useState } from "react";
import AddToDo from "./Add todo";
import ToDoItem from "./ToDoitem";
import Welcome from "./Welcome";
import { TODOItems } from "../Store/Todo-itemsStore";

function ToDoItems(){
    const {todoItems} =useContext(TODOItems)

    return(
    <>
    <div className="Items-container">
    <AddToDo />
    {todoItems.length===0 && <Welcome/>}
    {todoItems.map((item) => <ToDoItem key={item.name1} toDoName={item.name1} toDoDate={item.dueDate}/>)
    }
    </div>
    </>)

}
export default ToDoItems;