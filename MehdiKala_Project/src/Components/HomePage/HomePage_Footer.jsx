import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

export default function HomePage_Footer() {
  const [guide, setGuide] = useState(false);
  const [customerRihgts, setCustomerRihgts] = useState(false);

  function clickHandler(input) {
    switch (input) {
      case "guide":
        setGuide((prev) => !prev);
        break;

      case "rights":
        setCustomerRihgts((prev) => !prev);
        break;
    }
  }

  return (
    <footer className="p-3">
      <div
        onClick={() => clickHandler("guide")}
        className="flex justify-between items-center w-7/8 m-auto"
      >
        <div className="m-1">راهنمای خرید از مهدی کالا</div>
        {guide ? <IoIosArrowUp /> : <IoIosArrowDown />}
      </div>
      <hr />
      <div
        onClick={() => clickHandler("rights")}
        className="flex justify-between items-center w-7/8 m-auto"
      >
        <div className="m-1">حقوق مشتریان</div>
        {customerRihgts ? <IoIosArrowUp /> : <IoIosArrowDown />}
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
