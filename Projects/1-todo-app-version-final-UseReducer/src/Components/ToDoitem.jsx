import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { TODOItems } from "../Store/Todo-itemsStore";
function ToDoItem({toDoName,toDoDate}){
    const {deleteItem}=useContext(TODOItems);

    return<div className="container">
        <div className="row Abhirow">
            <div className="col-6">
                {toDoName}
            </div>
            <div className="col-4">
                {toDoDate}
            </div>
            <div className="col-2">
                <button type="button" className="btn btn-danger" onClick={()=>deleteItem(toDoName)}><MdDelete /></button>
            </div>
        </div>
    </div>
}
export default ToDoItem;