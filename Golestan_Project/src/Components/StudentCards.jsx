import styles from './StudentCards.module.css'

const StudentCard = (props) => {

    const deleteButtonClickHandler = (event) => {
        event.preventDefault();
        const id = event.target.getAttribute("id");
        props.onChange(id);
    }

    return (
        <div className={styles.containerS}>
            <div className={styles.fields}>{props.nameK}</div>
            <div className={styles.fields}>{props.numberK}</div>
            <div>
                <button className={styles.button}>login</button>
                <button id={props.id} onClick={deleteButtonClickHandler} className={styles.button}>Delete</button>
            </div>
        </div>
    );

}

export default StudentCard;