import { useState } from 'react'
import './App.css'
import Header from '../Header'
import FOoter from '../Footer'
import SideBar from '../SideBar'
import CreatePost from '../CreatePost'
import PostList from '../PostList'
import PostListProvider from '../../Store/PostListStore'
import { Outlet } from 'react-router-dom'




function App() {
   
  return(
    <>
    <PostListProvider>
      <div className='appContainer'>
        <SideBar ></SideBar>
        <div className='content'>
          <Header></Header>
          <Outlet></Outlet>    
          <FOoter></FOoter>
        </div>
        
      </div>
    </PostListProvider>
    </>
    
  )
  
}

export default App;