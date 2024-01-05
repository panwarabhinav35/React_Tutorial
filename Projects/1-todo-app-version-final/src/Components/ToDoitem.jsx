import { MdDelete } from "react-icons/md";
function ToDoItem({toDoName,toDoDate,handelOnClick}){
    return<div className="container">
        <div className="row Abhirow">
            <div className="col-6">
                {toDoName}
            </div>
            <div className="col-4">
                {toDoDate}
            </div>
            <div className="col-2">
                <button type="button" className="btn btn-danger" onClick={()=>handelOnClick(toDoName)}><MdDelete /></button>
            </div>
        </div>
    </div>
}
export default ToDoItem;