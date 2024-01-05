import styles from './Button.module.css';
 function Button({buttons,onButtonClick}){
    return(
        <>
            <button className={styles.buttons} onClick={onButtonClick}>{buttons}</button>
        </>
    )

 }
 export default Button;