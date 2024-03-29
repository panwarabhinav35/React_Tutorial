import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../Store/PostListStore";
import Welcome from "./Welcome";
import LoadingSpinner from "./LoadingSpinner";


const PostList=()=>{
    const {postList,addInitialPosts}=useContext(PostListData);
    const [fetching,setFetching]=useState(false);
    useEffect(()=>{
        setFetching(true);
        const controller= new AbortController();
        const signal =controller.signal;
        fetch('https://dummyjson.com/posts',{signal})
        .then(res => res.json())
        .then(data =>{
        addInitialPosts(data.posts)
        setFetching(false);
    })
    return ()=>{
        console.log("Component mrgya");
        controller.abort();
    }
    },[]);

    return(
        <>
        {fetching && <LoadingSpinner></LoadingSpinner>}
        {!fetching && <center><Welcome></Welcome></center>}
        <div className="postContainer">
        {postList.map((post)=><Post key={post.id} post={post} ></Post>)}
        </div>
        </>
    )
}
export default PostList;