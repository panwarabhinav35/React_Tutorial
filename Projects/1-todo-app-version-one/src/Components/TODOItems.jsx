import AddToDo from "./Add todo";
import ToDoItem from "./ToDoitem";
function ToDoItems({toDoItems}){
    return(
    <>
    <div className="Items-container">
    <AddToDo/>
    {toDoItems.map((item) => <ToDoItem key={item.name1} toDoName={item.name1} toDoDate={item.date}/>)
    }
    </div>
    </>)

}
export default ToDoItems;