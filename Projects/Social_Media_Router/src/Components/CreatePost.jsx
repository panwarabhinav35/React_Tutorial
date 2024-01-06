import { useContext } from "react";
import { useRef } from "react";
import { PostList } from "../Store/PostListStore";
import { useNavigate } from "react-router-dom";

const CreatePost=()=>{
    const navigate=useNavigate();
    const {addPost} = useContext(PostList)
    const userIdElement=useRef("");
    const postTitleElement=useRef("");
    const postContentElement=useRef("");
    const reactionsElement=useRef("");
    const tagsElement=useRef("");

    const handleSubmit=(e)=>{
        e.preventDefault();
        const userId=userIdElement.current.value;
        const postTitle=postTitleElement.current.value;
        const postBody=postContentElement.current.value;
        const reactions=reactionsElement.current.value;
        const tags=tagsElement.current.value.split(" ")

        
        userIdElement.current.value="";
        postTitleElement.current.value="";
        postContentElement.current.value="";
        reactionsElement.current.value="";
        tagsElement.current.value=""

                
        fetch('https://dummyjson.com/posts/add', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                title:postTitle,
                body: postBody,
                reactions:reactions,
                userId:userId,
                tags:tags,
            })
        })
        .then(res => res.json())
        .then(post => addPost(post));
        navigate("/")
    }
    return(
        <form className="createPost" onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="userId" className="form-label">User ID</label>
                <input type="text" ref={userIdElement} className="form-control" id="userId" />
            </div>
            <div className="mb-3">
                <label htmlFor="title" className="form-label">Post Title</label>
                <input type="text" ref={postTitleElement} className="form-control" id="title" />
            </div>
            <div className="mb-3">
                <label htmlFor="body" className="form-label">Post Content</label>
                <textarea type="text" ref={postContentElement} rows="4" className="form-control" id="title" />
            </div>
            <div className="mb-3">
                <label htmlFor="reactions" className="form-label">Reactions</label>
                <input type="text" ref={reactionsElement} className="form-control" id="reactions" />
            </div>
            <div className="mb-3">
                <label htmlFor="tags" className="form-label">Tags</label>
                <input type="text" ref={tagsElement} className="form-control" id="tags" />
            </div>
            
            <button type="submit" className="btn btn-primary">Post</button>
        </form>
    )

}
export default CreatePost;