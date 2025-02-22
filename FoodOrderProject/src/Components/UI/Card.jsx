const Card = (props) => {
  const className = `rounded-2xl bg-gray-700 p-4 m-3 ${props.className}`;
  return <div className={className}>{props.children}</div>;
};

export default Card;
