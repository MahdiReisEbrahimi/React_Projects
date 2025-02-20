const Card = (props) => {
  const className = `rounded-3xl bg-gray-700 p-3 m-3 ${props.className}`;
  return <div className={className}>{props.children}</div>;
};

export default Card;
