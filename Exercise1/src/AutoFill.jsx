import { useRef, useState } from "react";
import { useClickOutside } from "./hooks/useClickOutside";
const companies = ["ford", "bmw", "ferrary"];
export default function AutoFill() {
  const [query, setQuery] = useState("");
  const [showOptions, setShowOptions] = useState(false);
  const [options, setOptions] = useState(companies);
  const wrapperRef = useRef(null);

  function handleOutsideClick() {
    setShowOptions(false);
  }
  useClickOutside(wrapperRef, handleOutsideClick);

  function inputFocusHabdler() {
    setShowOptions(true);
  }

  function inputChangeHandler(event) {
    setQuery(event.target.value);
    setOptions(
      companies.filter((companie) =>
        companie.toLowerCase().includes(event.target.value.toLowerCase())
      )
    );
  }

  function optionClickHandler(option) {
    setShowOptions(false);
    setQuery(option);
    setOptions(
      companies.filter((companie) =>
        companie.toLowerCase().includes(option.toLowerCase())
      )
    );
  }

  return (
    <div ref={wrapperRef} className="text-black p-10 bg-amber-300">
      <input
        value={query}
        type="text"
        className="border-2 p-2 rounded-lg"
        placeholder="your compony"
        onChange={inputChangeHandler}
        onFocus={inputFocusHabdler}
      />
      {showOptions && (
        <div className="absolute p-1 rounded-md w-56 border-1 mt-1">
          <ul>
            {options.map((option) => (
              <li
                className="bg-gray-900 hover:cursor-pointer text-white font-bold mb-1 rounded-md p-1 hover:bg-gray-800"
                key={option}
                onClick={() => optionClickHandler(option)}
              >
                {option.toUpperCase()}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
