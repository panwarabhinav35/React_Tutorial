import AppName from "./Components/AppName"
import ToDoItems from "./Components/TODOItems";
import { useContext,useState } from "react";

import "./App.css"
import { TODOItems } from "./Store/Todo-itemsStore";
function App(){
 
  const [todoItems,settodoitems]=useState([]);

  const AddNewItem=(name,date)=>{
        settodoitems((currValue)=>[...currValue,{name1:name,dueDate:date}]);
    }
    const deleteItem=(name)=>{
        let newItems=[...todoItems]
        for (let i = 0; i < newItems.length; i++) { 
        if (newItems[i].name1 === name) { 
            newItems.splice(i, 1); 
        } 
      } 
      settodoitems(newItems)

    }
  return <center style={{margin:"10px"}}className='todo-container'>
    <TODOItems.Provider value={{todoItems,AddNewItem,deleteItem}}>
    <AppName/>
    <ToDoItems/>
    </TODOItems.Provider>
  </center>
}
export default App;
