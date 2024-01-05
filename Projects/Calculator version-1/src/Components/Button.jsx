import styles from './Button.module.css';
 function Button({buttons}){
    return(
        <>
            <button className={styles.buttons}>{buttons}</button>
        </>
    )

 }
 export default Button;