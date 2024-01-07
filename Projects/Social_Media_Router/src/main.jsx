import React from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider, createBrowserRouter } from "react-router-dom"
import App from './Components/Routes/App.jsx'
import "bootstrap/dist/css/bootstrap.min.css"
import CreatePost, { createPostAction } from './Components/CreatePost.jsx'
import PostList from './Components/PostList.jsx'
import { postLoader } from './Components/PostList.jsx'

const router = createBrowserRouter([
  {
    path:"/",
    element: <App/>,
    children: [
      {
        path : "/",
        element: <PostList/>,
        loader:postLoader
      },
      {
        path: "/create-post",
        element:<CreatePost/>,
        action:createPostAction
      }
    ]
  },
  
  
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
