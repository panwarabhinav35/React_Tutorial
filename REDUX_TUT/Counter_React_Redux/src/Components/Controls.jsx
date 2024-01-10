import { useRef } from "react";
import { useDispatch } from "react-redux";

const Controls=()=>{
    const inputValue=useRef("");
    const dispatch=useDispatch();

    const handelIncrement=()=>{
        dispatch({type:"INCREMENT"})
        
    }
    const handelDecrement=()=>{
        dispatch({type:"DECREMENT"})

    }
    const handelADD=()=>{
        dispatch({type:"ADD",
        payload:{value:inputValue.current.value}
    
    })
    inputValue.current.value="";

    }
    const handelSubtract=()=>{
        dispatch({type:"SUBTRACT",
        payload:{value:inputValue.current.value}
    
    })
    inputValue.current.value="";

    }
    const handelPrivacy=()=>{
        dispatch({type:"PRIVACY_TOGGLE"})
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