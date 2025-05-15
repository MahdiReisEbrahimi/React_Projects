import MealsGrid from "@/components/Meals/MealsGrid";
import Link from "next/link";
import { getMeals } from "../../../lib/meals";
import { Suspense } from "react";

async function Meals2() {
  const meals = await getMeals();
  return <MealsGrid meals={meals} />;
}

export default function Meals() {
  return (
    <>
      <header className="text-center text-white mt-20 mb-20">
        <h1 className="text-lg font-bold mb-3">
          Delicious meals, created <span className="">by you</span>
        </h1>
        <p className="text-sm">Choose your favorite recipie...</p>
        <p className="font-bold mt-7 ">
          <Link
            href="/meals/share"
            className="bg-orange-500 rounded-lg p-2 text-black"
          >
            Share your favorite revepie...
          </Link>
        </p>
      </header>
      <main className="text-white text-center m-4 p-3 bg-gray-600 rounded-lg">
        <Suspense fallback={<p>Loading...</p>}>
          <Meals2 />
        </Suspense>
      </main>
    </>
  );
}
