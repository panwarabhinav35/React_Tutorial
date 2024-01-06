import { useContext } from "react";
import { PostList } from "../Store/PostListStore";

const Welcome=()=>{
    const {postList}=useContext(PostList);
    return(<>
        {postList.length===0?<>
        <h1 style={{marginTop:"250px"}}>No Posts yet</h1>
        </>: null}
        </>
    )
}
export default Welcome;