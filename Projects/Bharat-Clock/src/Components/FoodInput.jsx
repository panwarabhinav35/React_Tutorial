const FoodInputs=({handelOnChange , handelKeyDown})=>{
    // const handelOnChange= (e)=>{
    //     console.log(e.target.value);
    // }
    return(
    <li className="list-group-item liclass">
        {/* {<input style={{width:"100%"}} type="text" placeholder="Enter food item here: " onChange={(e) => handelOnChange(e)}/>} */}
        {<input style={{width:"100%"}} type="text" placeholder="Enter food item here: " onChange={handelOnChange} onKeyDown={handelKeyDown}/>}
        </li>)

}
export default FoodInputs;