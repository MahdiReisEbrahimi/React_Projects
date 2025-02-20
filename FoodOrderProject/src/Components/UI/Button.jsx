import { MdLocalGroceryStore } from "react-icons/md";

const Button = (props) => {
  const className = `flex  justify-around items-center  hover:bg-black hover:border-2 border-black hover:text-white p-3 bg-blue-400 rounded-2xl font-bold  cursor-pointer border-2 ${props.className}`;

  const ClickHandler = () => {
    props.onClick();
  };

  return (
    <div>
      <button type={props.type} className={className} onClick={ClickHandler}>
        {props.text}
        {props.hasIcon && <MdLocalGroceryStore />}
      </button>
    </div>
  );
};

export default Button;
