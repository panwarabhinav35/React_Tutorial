
import styles from './App.module.css'
import Display from './Components/Display'
import ButtonsContainer from './Components/ButtonsContainer'
import { useState } from 'react'

function App() {
  
  let [calVal,setCalVal]=useState("");

  return (
    <>
      <center>
        <div className={styles.calculator} >
          <Display displayValue={calVal} />  
          <ButtonsContainer displayValue={calVal} setdisplayValue={setCalVal}/>
        </div>
      </center>
    </>
  )
}

export default App
