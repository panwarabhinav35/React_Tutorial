import { useContext, useRef } from "react";
import { MdAddBox } from "react-icons/md";
import { TODOItems } from "../Store/Todo-itemsStore";


function AddToDo(){
    const {AddNewItem}=useContext(TODOItems)
    let todoNameRef=useRef("");
    let todoDateRef=useRef("");

    const handelAddButtonClicked=(e)=>{

       
        e.preventDefault();
        const todoName=todoNameRef.current.value;
        const todoDate=todoDateRef.current.value;
        if(todoName.length!=0 && todoDate.length!=0){
            AddNewItem(todoName,todoDate)
            todoNameRef.current.value="";
            todoDateRef.current.value="";     
        }
        else{
            if(todoName.length===0 && todoDate.length===0){
                alert("Please Enter the Task and Date");
            }
            else if(todoDate.length===0){
                alert("Please Enter the Date");
            }
            else{
                alert("Please Enter the Task");
            }
            
        }
        

    }
    return <div className="container text-center">

        <form className="row Abhirow" onSubmit={handelAddButtonClicked}>
            
            <div className="col-6">
                <input ref={todoNameRef} type="text" placeholder="Enetr TODO here" />
            </div>
            <div className="col-4">
                <input ref={todoDateRef} type="date"/>
            </div>
            <div className="col-2">
                <button type="submit" className="btn btn-success Abhibutton" ><MdAddBox /></button>
            </div>
           
        </form>
    </div>
}
export default AddToDo;