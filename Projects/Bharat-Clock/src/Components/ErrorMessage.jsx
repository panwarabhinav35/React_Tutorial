function ErrorMessage({items}){
    
    let emptyMessage=items.length==0?<h3>Please add food before buying</h3>:null
    return(
        <>
        {emptyMessage}
        </>
    )
    
}
export default ErrorMessage;