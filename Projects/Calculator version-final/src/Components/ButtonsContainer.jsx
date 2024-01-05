import styles from './ButtonsContainer.module.css'
import Button from './Button'
const ButtonsContainer=({displayValue,setdisplayValue}) =>{
    let buttonNames = ['C' , '1', '2', '+', '3', '4', '5', '-', '6', '7', '8', '*', '9', '0', '/', '=' , '.']
    const onButtonClick=(buttonName) =>{
        console.log(`${buttonName}`);
        if(buttonName==="C"){
            setdisplayValue("")
        }
        else if(buttonName==="="){
            const result=eval(displayValue)
            setdisplayValue(result)
        }
        else{
            let newDisplayValue=displayValue+ buttonName;
            setdisplayValue(newDisplayValue)
        }
        
    }

    return(
        <>
            <div className={styles.buttonsContainer}>
                {buttonNames.map((buttonName =>(<Button key={buttonName} buttons={buttonName} onButtonClick={()=>onButtonClick(buttonName)}/>)))}
          </div>
        </>
    )
}
export default ButtonsContainer;