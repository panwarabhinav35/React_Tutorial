import AppName from "./Components/AppName"
import ToDoItems from "./Components/TODOItems";

import "./App.css"
function App(){
  const toDoItems=[] 
  return <center style={{margin:"10px"}}className='todo-container'>
    <AppName/>
    <ToDoItems toDoItems={toDoItems}/>
  </center>
}
export default App;
