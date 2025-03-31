export default function Input({ labelText, id, isDataOk, ...props }) {
  return (
    <div className="flex flex-col mt-2 mb-2">
      <label className="text-left text-[13px]" htmlFor={id}>
        {labelText}
        {isDataOk || "  *"}
      </label>
      <input
        className={` ${
          isDataOk ? "border-white" : "border-red-300 bg-red-100"
        } border-[2px] bg-gray-300  rounded-[3px] text-black p-0.5 focus:bg-gray-300 focus:border-gray-300`}
        id={id}
        {...props}
      />
    </div>
  );
}
