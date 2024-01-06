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
   const [selectedTab,setselectedTab]=useState("Home");
  return(
    <>
    <PostListProvider>
      <div className='appContainer'>
        <SideBar selectedTab={selectedTab} setselectedTab={setselectedTab}></SideBar>
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