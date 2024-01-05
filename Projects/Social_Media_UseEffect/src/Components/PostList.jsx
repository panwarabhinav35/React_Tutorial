import { useContext } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../Store/PostListStore";
import Welcome from "./Welcome";

const PostList=()=>{
    const {postList,addInitialPosts}=useContext(PostListData);

    const handleOnCLick=()=>{
        fetch('https://dummyjson.com/posts')
        .then(res => res.json())
        .then(data =>{
            addInitialPosts(data.posts)
        });
    }
    return(
        <>
        <center><Welcome handleOnCLick={handleOnCLick}></Welcome></center>
        <div className="postContainer">
        {postList.map((post)=><Post key={post.id} post={post} ></Post>)}
        </div>
        </>
    )
}
export default PostList;