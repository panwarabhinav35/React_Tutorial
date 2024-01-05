import { useState } from "react";
import Item from "./Item";


function FoodItems({items}){
    //Map method
    //conditional rendering
    let [textOnClick,setTextOnclick]=useState();
    let [orderredItems,setOrderedItems]=useState([]);
    const handleOnclick=(item)=>{
      //setTextOnclick(`${item}`);
      let newItems=[...orderredItems,item]
      setOrderedItems(newItems)
    }
    const handleOnclickRemove=(item)=>{
      let newItems=[...orderredItems]
      for (let i = 0; i < newItems.length; i++) { 
        if (newItems[i] === item) { 
            newItems.splice(i, 1); 
        } 
      } 
      setOrderedItems(newItems)
    }
    
    return(
        <>
        <ul className="list-group">
        <li className="list-group-item liclass">Ordered items: {orderredItems+" "}</li>
          {items.map((item) =>(
            <Item  key={item} foodItems={item} handleOnclickRemove={()=>handleOnclickRemove(item)} handleOnclick={()=>handleOnclick(item)}/>
          ))}
        </ul>
        </>
    )

}
export default FoodItems;