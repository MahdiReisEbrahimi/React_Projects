import './StudentCards.css'

const StudentCard = (props) => {

    const deleteButtonClickHandler = (event) => {
        event.preventDefault();
        const id = event.target.getAttribute("id");
        props.onChange(id);
    }

    return (
        <div className="containerS">
            <div className="fields">{props.nameK}</div>
            <div className="fields">{props.numberK}</div>
            <div>
                <button className="button">login</button>
                <button id={props.id} onClick={deleteButtonClickHandler} className="button">Delete</button>
            </div>
        </div>
    );

}

export default StudentCard;