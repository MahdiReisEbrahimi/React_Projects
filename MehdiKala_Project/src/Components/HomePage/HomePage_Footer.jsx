import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

export default function HomePage_Footer() {
  const [guide, setGuide] = useState(false);

  function clickHandler() {
    if (guide === true) setGuide(false);
    else setGuide(true);
  }

  return (
    <footer className="p-3">
      <div className="flex justify-between items-center w-7/8 m-auto">
        <div className="m-1">راهنمای خرید از مهدی کالا</div>
        {guide ? <IoIosArrowUp /> : <IoIosArrowDown />}
      </div>
      <hr />
      <div
        onClick={clickHandler}
        className="flex justify-between items-center w-7/8 m-auto"
      >
        <div className="m-1">حقوق مشتریان</div>
        {guide ? <IoIosArrowUp /> : <IoIosArrowDown />}
      </div>
      {guide && (
        <p className="w-4/5 m-auto text-sm">
          مشتریان میتوانند در ۴ مرحله حقوق خود را دنبال کنند. این ۴ مرحله شامل
          مسائل مختلفی اعم از راهیابی به سناریو های متفاوت و ... را امکان پذیر
          میکند. برای مطالعه بیشتر در این باره میتوانید به سایت های دولتی مراجعه
          کنید.
        </p>
      )}
      <hr />
    </footer>
  );
}
