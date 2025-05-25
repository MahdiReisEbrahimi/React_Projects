"use client";

import { useFormStatus } from "react-dom";

export default function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="font-bold cursor-pointer bg-black rounded-sm text-white p-2"
    >
      {pending ? "Submitting..." : "Share Meal"}
    </button>
  );
}
