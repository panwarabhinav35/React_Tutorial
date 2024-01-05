function AddToDo(){
    return <div className="container text-center">

        <div className="row Abhirow">
            <div className="col-6">
                <input type="text" placeholder="Enetr TODO here"/>
            </div>
            <div className="col-4">
                <input type="date"/>
            </div>
            <div className="col-2">
                <button type="button" className="btn btn-success Abhibutton">ADD</button>
            </div>
        </div>
    </div>
}
export default AddToDo;