import { useContext } from "react";
import { PostList } from "../Store/PostListStore";

const Welcome=({handleOnCLick})=>{
    const {postList}=useContext(PostList);
    return(<>
        {postList.length===0?<>
        <h1 style={{marginTop:"250px"}}>No Posts yet</h1>
        <button type="button" className="btn btn-primary" onClick={handleOnCLick}>Fetch Data from Server</button>
        </>: null}
        </>
    )
}
export default Welcome;