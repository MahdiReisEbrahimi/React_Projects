"use client";
import { useRef, useState } from "react";
import Image from "next/image";

export default function ImagePicker({ label, name }) {
  const [pickedImage, setPickedImage] = useState();
  function handleImageChange(event) {
    const file = event.target.files[0];
    if (!file) return;

    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPickedImage(fileReader.result);
    };

    fileReader.readAsDataURL(file);
  }

  const inputRef = useRef();
  function handlePickClick() {
    inputRef.current.click();
  }

  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <div>
        <div className="relative w-40 h-40 bg-amber-200">
          {!pickedImage ? (
            <p className="flex justify-center items-center">No Image Picked</p>
          ) : (
            <Image src={pickedImage} alt="image selected by the user" fill />
          )}
        </div>
        <input
          type="file"
          id={name}
          accept="image/png , image/jpeg"
          name={name}
          className="opacity-0"
          onChange={handleImageChange}
          ref={inputRef}
        />

        <button
          onClick={handlePickClick}
          type="button"
          className="flex rounded-sm bg-blue-400 mb-3 p-2 cursor-pointer"
        >
          Pick an Image
        </button>
      </div>
    </div>
  );
}
