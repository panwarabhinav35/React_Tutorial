import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../Store/PostListStore";
import Welcome from "./Welcome";
import LoadingSpinner from "./LoadingSpinner";


const PostList=()=>{
    const {postList,fetching}=useContext(PostListData);
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