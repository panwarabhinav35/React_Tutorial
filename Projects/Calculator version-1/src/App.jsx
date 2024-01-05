
import styles from './App.module.css'
import Display from './Components/Display'
import ButtonsContainer from './Components/ButtonsContainer'

function App() {
  

  return (
    <>
      <center>
        <div className={styles.calculator} >
          <Display/>  
          <ButtonsContainer/>
        </div>
      </center>
    </>
  )
}

export default App
