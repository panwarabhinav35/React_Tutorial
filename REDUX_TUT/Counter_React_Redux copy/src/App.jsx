import { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import Header from './Components/Header'
import DisplayCounter from './Components/DisplayCounter'
import Container from './Components/Container'
import Controls from './Components/Controls'
import { useSelector } from 'react-redux'
import PrivacyMSG from './Components/PrivacyMsg'

function App() {
  const privacy=useSelector(store=>store.privacy);

  return (
    <>
      <div className="px-4 py-5 my-5 text-center">
      <Container>
        <Header></Header>
        <div className="col-lg-6 mx-auto">
          {privacy?<PrivacyMSG></PrivacyMSG>:<DisplayCounter></DisplayCounter>}
          <Controls></Controls>
        </div>
    </Container>
    
  </div>
    </>
  )
}

export default App
