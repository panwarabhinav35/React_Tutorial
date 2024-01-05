import ClockHeading from "./Components/ClockHEading";
import ClockSlogan from "./Components/ClockSlogan";
import CurrentTime from "./Components/Currenttime";
import "./App.css";
import FoodItems from "./Components/Food items ";
import ErrorMessage from "./Components/ErrorMessage";
import FoodInputs from "./Components/FoodInput";
import { useState } from "react";

function App() {
  //let foodItems=[];
  
  let [foodItems,setfoodItems]=useState([])
  // if(foodItems.length==0){
  //   return(<>
  //   <center>
  //   <ErrorMessage items={foodItems}/></center></>
  //   )
  // }

  // let textStateArr =useState("Food item entered by user: ");
  // let textToShow=textStateArr[0];
  // let setTextState=textStateArr[1];

  //or it can be written as
   let [textToShow, setTextState]=useState("N/A");

  const handelKeyDown=(e)=>{
    if(e.key == "Enter"){
      let newItems=[...foodItems,e.target.value]
      setfoodItems(newItems)
      setTextState("N/A")
      e.target.value=""
      
    }
  }
  
  const handelOnChange= (e)=>{
      //console.log(e.target.value);
      if(e.target.value.length==0){
        setTextState("N/A")
      }
      else{
        setTextState(e.target.value);
      }
      
    }
  return (
    // used as fragments to return it as a single component
    
    <>
    <center>
      <div className="Container">
        <h1>HEALTHY FOOD</h1>
        
        <FoodInputs  handelOnChange={handelOnChange} handelKeyDown={handelKeyDown}/><br/>
        <p>Food item entered by a user: <span style={{border:"solid"}}>{textToShow}</span> </p>
        <ErrorMessage items={foodItems}/>
        <FoodItems items={foodItems}/>
      </div>
        
      <ClockHeading></ClockHeading>
      <ClockSlogan />
      <CurrentTime />
    </center>
      
    
    </>
  )
}

export default App
