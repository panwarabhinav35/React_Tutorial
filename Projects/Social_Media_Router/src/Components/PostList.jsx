import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../Store/PostListStore";
import Welcome from "./Welcome";
import LoadingSpinner from "./LoadingSpinner";
import { useLoaderData } from "react-router-dom";


const PostList=()=>{
    const postList=useLoaderData();
    return(
        <>
        {/* {fetching && <LoadingSpinner></LoadingSpinner>} */}
        {/* {<center><Welcome></Welcome></center>} */}
        <div className="postContainer">
        {postList.map((post)=><Post key={post.id} post={post} ></Post>)}
        </div>
        </>
    )
}

export const postLoader=()=>{
    return fetch('https://dummyjson.com/posts')
    .then(res => res.json())
    .then(data =>{
            return(data.posts)
    })
}
export default PostList;