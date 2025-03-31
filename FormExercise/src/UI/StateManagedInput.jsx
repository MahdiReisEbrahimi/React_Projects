export default function StateManagedInput({
  id,
  labelText,
  onChange,
  hasInputError,
  didEdit,
  ...props
}) {
  function changeHandler(event) {
    onChange(event.target.value);
  }
  return (
    <div className="flex flex-col mt-3 mb-2">
      <label htmlFor={id} className="text-left text-[13px]">
        {labelText}
      </label>
      <input
        onChange={changeHandler}
        id={id}
        {...props}
        className="border-[2px] bg-gray-300  rounded-[3px] text-black p-0.5 focus:bg-gray-300 focus:border-gray-300"
      />
      <div>
        {hasInputError && (
          <div className="absolute text-[11px] mt-1 text-left text-red-300 ml-1">
            * {hasInputError}
          </div>
        )}
      </div>
    </div>
  );
}
