import { useRef } from "react";
import { useDispatch } from "react-redux";
import { counterActions, privacyActions } from "./Store/Index";

const Controls=()=>{
    const inputValue=useRef("");
    const dispatch=useDispatch();

    const handelIncrement=()=>{
        dispatch(counterActions.increment());
        
    }
    const handelDecrement=()=>{
        dispatch(counterActions.decrement());

    }
    const handelADD=()=>{
        
        dispatch(counterActions.add({
            value:inputValue.current.value

        }))
    
  
    inputValue.current.value="";

    }
    const handelSubtract=()=>{
        dispatch(counterActions.subtract({
            value:inputValue.current.value

        }))
    inputValue.current.value="";

    }
    const handelPrivacy=()=>{
        dispatch(privacyActions.toggle())
    }

    return(
        <>
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <button onClick={handelIncrement} type="button" className="btn btn-primary">+1</button>
            <button onClick={handelDecrement} type="button" className="btn btn-success">-1</button>
            <button onClick={handelPrivacy} type="button" className="btn btn-warning">Privacy</button>
            
        </div>
        <br></br>
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <input ref={inputValue} type="text" placeholder="Enetr value here" className="numberInput"/>
            <button onClick={handelADD} type="button" className="btn btn-info">ADD</button>
            <button onClick={handelSubtract} type="button" className="btn btn-danger">SUBTRACT</button>
            
        </div>
        </>
    )
}
export default Controls;