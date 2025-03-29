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
      </label>
      <input
        value={parentvalue}
        onChange={inputChangeHandler}
        className="bg-gray-300 border-none w-4/5 rounded-[3px] text-black p-0.5"
        type={type}
        id={id}
      />
    </div>
  );
}
