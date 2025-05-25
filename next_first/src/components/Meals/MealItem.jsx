import Image from "next/image";
import Link from "next/link";
import { deleteMealsWithInvalidImageUrls } from "../../../lib/meals";

export default function MealItem({
  title,
  slug,
  image,
  summary,
  creator,
  content,
}) {
  deleteMealsWithInvalidImageUrls();
  return (
    <div>
      {/* {console.log("Meal image:", image)} */}

      <Image src={image} width={200} height={110} alt={slug} />
      <h3 className="font-bold text-lg">{title}</h3>
      <p className="text-sm mb-1">{summary}</p>
      <p className="mb-3">Created By {creator}</p>
      <Link
        href={`/meals/${slug}`}
        className="text-green-800 font-bold bg-white rounded-lg p-1.5 mt-2 hover:bg-green-700 hover:text-white"
      >
        More Details
      </Link>
    </div>
  );
}
