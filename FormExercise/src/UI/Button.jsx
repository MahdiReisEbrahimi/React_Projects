export default function Button({ type, buttonText , onClick }) {

  function clickHandler() {
    onClick()
  }
  return (
    <button
      onClick={clickHandler}
      type={type}
      className="bg-green-700 p-2 cursor-pointer ml-5 rounded-[2px]"
    >
      {buttonText}
    </button>
  );
}
