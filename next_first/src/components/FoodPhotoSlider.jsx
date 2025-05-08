"use client";
import img1 from "@/../assets/burger.jpg";
import img2 from "@/../assets/curry.jpg";
import img3 from "@/../assets/dumplings.jpg";
import Image from "next/image";

import { useEffect, useState } from "react";

export default function FoodPhotoSlider() {
  const images = [img1, img2, img3];
  const [imageSrc, setImageSrc] = useState(img1);

  useEffect(() => {
    const timer = setInterval(() => {
      setImageSrc((previous) => {
        return previous == img1 ? img2 : previous == img2 ? img3 : img1;
      });
    }, 2000);
  }, []);

  return (
    <div className="w-3/5 flex justify-center m-auto rounded-4xl">
      <Image alt="slider" className="rounded-4xl" src={imageSrc} />;
    </div>
  );
}
