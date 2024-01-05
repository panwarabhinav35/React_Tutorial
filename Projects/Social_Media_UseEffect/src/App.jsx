import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import FOoter from './Components/Footer'
import SideBar from './Components/SideBar'
import CreatePost from './Components/CreatePost'
import PostList from './Components/PostList'
import PostListProvider from './Store/PostListStore'




function App() {
   const [selectedTab,setselectedTab]=useState("Home");
  return(
    <>
    <PostListProvider>
      <div className='appContainer'>
        <SideBar selectedTab={selectedTab} setselectedTab={setselectedTab}></SideBar>
        <div className='content'>
          <Header></Header>
          {selectedTab==='Home'?<PostList></PostList> : <CreatePost></CreatePost> }       
          <FOoter></FOoter>
        </div>
        
      </div>
    </PostListProvider>
    </>
    
  )
  
}

export default App;