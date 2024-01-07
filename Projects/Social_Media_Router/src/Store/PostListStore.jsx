import { useReducer,useState,useEffect } from "react";
import { createContext } from "react";

export const PostList=createContext({
    postList:[],
    addPost:()=>{},
    deletePost:()=>{}
});
const postListReducer=(currPostList,action)=>{
    let newPostList=currPostList;
    if(action.type==='DELETE_POST'){
        newPostList=currPostList.filter(post => post.id!==action.payload.postId);

    }
    else if(action.type==='ADD_POST'){
        newPostList=[action.payload,...currPostList]
    }
    else if(action.type==='ADD_INITIAL_POSTS'){
        newPostList=action.payload.posts;
    }
    return newPostList;

}


    


const PostListProvider=({children})=>{
    const [postList,dispatchpostList]=useReducer(postListReducer,[]);

    
    

    const addPost=(post)=>{
        dispatchpostList({
            type:"ADD_POST",
            payload:post
            
        })

    }

    const addInitialPosts=(posts)=>{
        dispatchpostList({
            type:"ADD_INITIAL_POSTS",
            payload:posts,
            
        })

    }

    const deletePost=(postId)=>{
        dispatchpostList({
            type:'DELETE_POST',
            payload:{
                postId,
            }
        })
    }

    return(
        <PostList.Provider value={{postList,addPost,deletePost}}>{children}</PostList.Provider>
    )

}
export default PostListProvider;