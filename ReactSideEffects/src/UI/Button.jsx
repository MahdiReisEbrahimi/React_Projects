const Button = (props) => {
  const className = `p-2 border-2 shadow-2xl bg-blue-900 rounded-3xl m-4 text-white font-bold text-2xl hover:bg-white hover:text-blue-900 cursor-pointer ${props.className}`;
  const clickHandler = () => {
    props.onClick();
  };
  return (
    <button onClick={clickHandler} type={props.type} className={className}>
      {props.text}
    </button>
  );
};

export default Button;
