export default function Button({ type, buttonText}) {

  return (
    <button
      type={type}
      className="bg-green-700 p-2 cursor-pointer ml-5 mt-5 rounded-[2px]"
    >
      {buttonText}
    </button>
  );
}
