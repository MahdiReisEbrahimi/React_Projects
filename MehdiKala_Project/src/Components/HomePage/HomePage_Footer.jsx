import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

export default function HomePage_Footer() {
  const [guide, setGuide] = useState(false);
  const [customerRihgts, setCustomerRihgts] = useState(false);
  const [mehdiClub, setMehdiClub] = useState(false);

  function clickHandler(input) {
    switch (input) {
      case "guide":
        setGuide((prev) => !prev);
        break;

      case "rights":
        setCustomerRihgts((prev) => !prev);
        break;

      case "club":
        setMehdiClub((prev) => !prev);
        break;
    }
  }

  return (
    <footer className="">
      <div
        onClick={() => clickHandler("guide")}
        className="flex justify-between items-center w-7/8 m-auto"
      >
        <div className="m-1">راهنمای خرید از مهدی کالا</div>
        {guide ? <IoIosArrowUp /> : <IoIosArrowDown />}
      </div>
      {guide && (
        <p className="w-4/5 m-auto text-sm mb-4 mt-2 border-r-1 pr-3 pl-3">
          مشتریان میتوانند در ۴ مرحله حقوق خود را دنبال کنند. این ۴ مرحله شامل
          مسائل مختلفی اعم از راهیابی به سناریو های متفاوت و ... را امکان پذیر
          میکند. برای مطالعه بیشتر در این باره میتوانید به سایت های دولتی مراجعه
          کنید.
        </p>
      )}
      <hr />
      <div
        onClick={() => clickHandler("rights")}
        className="flex justify-between items-center w-7/8 m-auto"
      >
        <div className="m-1 mt-3">حقوق مشتریان</div>
        {customerRihgts ? <IoIosArrowUp /> : <IoIosArrowDown />}
      </div>
      {customerRihgts && (
        <p className="w-4/5 m-auto text-sm mb-4 mt-2 border-r-1 pr-3 pl-3">
          مشتریان میتوانند در ۴ مرحله حقوق خود را دنبال کنند. این ۴ مرحله شامل
          مسائل مختلفی اعم از راهیابی به سناریو های متفاوت و ... را امکان پذیر
          میکند. برای مطالعه بیشتر در این باره میتوانید به سایت های دولتی مراجعه
          کنید.
        </p>
      )}
      <hr />
      <div
        onClick={() => clickHandler("club")}
        className="flex justify-between items-center w-7/8 m-auto"
      >
        <div className="m-1 mt-3">مهدی کلاب</div>
        {mehdiClub ? <IoIosArrowUp /> : <IoIosArrowDown />}
      </div>
      {mehdiClub && (
        <p className="w-4/5 m-auto text-sm mb-4 mt-2 border-r-1 pr-3 pl-3">
          مشتریان میتوانند در ۴ مرحله حقوق خود را دنبال کنند. این ۴ مرحله شامل
          مسائل مختلفی اعم از راهیابی به سناریو های متفاوت و ... را امکان پذیر
          میکند. برای مطالعه بیشتر در این باره میتوانید به سایت های دولتی مراجعه
          کنید.
        </p>
      )}
    </footer>
  );
}
