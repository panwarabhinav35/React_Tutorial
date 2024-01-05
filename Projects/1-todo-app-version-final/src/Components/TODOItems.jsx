import { useState } from "react";
import AddToDo from "./Add todo";
import ToDoItem from "./ToDoitem";
import Welcome from "./Welcome";

function ToDoItems({toDoItems}){
    const [todoItems,settodoitems]=useState(toDoItems);
    const handelNewItem=(name,date)=>{
        //console.log(`${name}.....${date}`)
        // const newItems=[...todoItems,{name1:name,dueDate:date}]
        // settodoitems(newItems)
        //OR
        settodoitems((currValue)=>[...currValue,{name1:name,dueDate:date}]);
    }
    const handelOnClick=(name)=>{
        let newItems=[...todoItems]
        for (let i = 0; i < newItems.length; i++) { 
        if (newItems[i].name1 === name) { 
            newItems.splice(i, 1); 
        } 
      } 
      settodoitems(newItems)

    }
    return(
    <>
    <div className="Items-container">
    <AddToDo onNewItem={handelNewItem} />
    {todoItems.length===0 && <Welcome/>}
    {todoItems.map((item) => <ToDoItem key={item.name1} toDoName={item.name1} toDoDate={item.dueDate} handelOnClick={handelOnClick}/>)
    }
    </div>
    </>)

}
export default ToDoItems;