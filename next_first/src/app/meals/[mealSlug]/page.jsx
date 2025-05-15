import { notFound } from "next/navigation";
import { getMeal } from "../../../../lib/meals";
import Image from "next/image";

export default function Slug({ params }) {
  const meal = getMeal(params.mealSlug);
  if (!meal) {
    notFound();
  }

  return (
    <div
      dir="rtl"
      className="p-7 flex justify-around mt-30 items-center bg-gray-400"
    >
      <div dir="ltr">
        <h2 className="font-bold text-lg">{meal.title}</h2>
        <p className="text-sm mt-8">{meal.summary}</p>
        <p className="text-sm mt-2">Created By : {meal.creator}</p>
      </div>

      <Image
        src={meal.image}
        alt={meal.title}
        width={300}
        height={300}
        className="rounded-lg "
      />
    </div>
  );
}
