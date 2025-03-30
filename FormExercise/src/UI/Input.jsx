export default function Input({
  type,
  labelText,
  id,
  onChangeValue,
  parentvalue,
}) {
  function inputChangeHandler(event) {
    onChangeValue(event.target.value);
  }

  return (
    <div className="flex flex-col mt-2 mb-2">
      <label className="text-left text-[13px]" htmlFor={id}>
        {labelText}
        {parentvalue.trim().length < 2 ? " *" : ""}
      </label>
      <input
        value={parentvalue || ""}
        onChange={inputChangeHandler}
        className={`${
          parentvalue.trim().length === 0 ? "border-red-600" : "border-white"
        } border-[2px] bg-gray-300 w-4/5 rounded-[3px] text-black p-0.5`}
        type={type}
        id={id}
      />
    </div>
  );
}
