import AppName from "./Components/AppName"
import ToDoItems from "./Components/TODOItems";

import "./App.css"
function App(){
  const toDoItems=[
    {
    name1:'Buy Milk',
    date:'4/10/23'
    },
    {
      name1:'Go to College',
      date:'4/10/23'
    },
    {
      name1:'Leetcode',
      date:'4/10/23'
    },
    {
      name1:'React',
      date:'4/10/23'
    }
  ] 
  return <center style={{margin:"10px"}}className='todo-container'>
    <AppName/>
    <ToDoItems toDoItems={toDoItems}/>
  </center>
}
export default App;
