import styles from './Item.module.css'
function Item({foodItems , handleOnclickRemove , handleOnclick}){
    return(
        <li className="list-group-item liclass ">{foodItems}  
            
            <button className={styles.button} onClick={handleOnclickRemove}>Remove</button>
            <button className={styles.button} onClick={handleOnclick}>BUY</button>
            
        </li>
    )
}
export default Item;