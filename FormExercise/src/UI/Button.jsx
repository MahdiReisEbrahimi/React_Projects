export default function Button({ type, buttonText , onClick }) {

  function clickHandler() {
    onClick()
  }
  return (
    <button
      onClick={clickHandler}
      type={type}
      className="bg-green-700 p-2 cursor-pointer rounded-[2px] mt-2"
    >
      {buttonText}
    </button>
  );
}
