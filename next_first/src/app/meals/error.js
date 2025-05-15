"use client";
export default function Error() {
  return (
    <div className="text-center m-auto rounded-lg mt-20 p-3 bg-gray-300 w-1/2">
      <h2 className="text-red-700 font-bold">An error accured!</h2>
      <p className="text-sm mt-2">
        Failed to fetch Meals. Please try again later...
      </p>
    </div>
  );
}
