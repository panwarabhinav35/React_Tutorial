const Container=({children})=>{
    return(
        <>
        <div className="card" style={{width: "auto"}}>
            <div className="card-body">
                {children}
            </div>
</div></>
    )

}
export default Container;