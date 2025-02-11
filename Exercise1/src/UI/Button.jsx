const Button = (props) => {
    return (
        <button
            className="
            bg-amber-400 border-2 
            hover:bg-amber-950 
            hover:text-amber-50 
            hover:cursor-pointer 
            border-black rounded-2xl 
            font-bold 
            p-2 "
            type={props.type}
        >{props.text}</button>
    );
}

export default Button;