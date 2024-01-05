import AppName from "./Components/AppName"
import ToDoItems from "./Components/TODOItems";
import { useReducer} from "react";

import "./App.css"
import { TODOItems } from "./Store/Todo-itemsStore";

const todoItemsReducer=(currtodoItems,action)=>{
  let newtodoItems=currtodoItems;
  if(action.type==="NEW_ITEM"){
    newtodoItems=[...currtodoItems,{
      name1:action.payload.name,
      dueDate:action.payload.date
    }]
  }
  else if(action.type==="DELETE_ITEM"){
    newtodoItems=[...currtodoItems]
    for (let i = 0; i < newtodoItems.length; i++) { 
      if (newtodoItems[i].name1 === action.payload.name) { 
          newtodoItems.splice(i, 1); 
      }

    }
  
  }
  return newtodoItems;
}



function App(){
  const[todoItems, dispatchtodoItems]=useReducer(todoItemsReducer,[]);

  const AddNewItem=(name,date)=>{
        const newItemAction={
          type: "NEW_ITEM",
          payload:{
            name,
            date
          }
        }
        dispatchtodoItems(newItemAction)
    }
  const deleteItem=(name)=>{ 
      const deleteItemAction={
        type: "DELETE_ITEM",
        payload:{
          name
        }
      }
      dispatchtodoItems(deleteItemAction)
  }
  return <center style={{margin:"10px"}}className='todo-container'>
    <TODOItems.Provider value={{todoItems,AddNewItem,deleteItem}}>
    <AppName/>
    <ToDoItems/>
    </TODOItems.Provider>
  </center>
}
export default App;
