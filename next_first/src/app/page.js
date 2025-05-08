import FoodPhotoSlider from "@/components/FoodPhotoSlider";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <header className="mb-10 p-10 mt-[4rem] w-3/5">
        <h2 className="text-orange-400 font-bold">
          NEXTLEVEL FOOD FOR NEXTLEVEL FOODIES
        </h2>
        <p className="m-2 text-white">
          Taste & share food from all over the world.
        </p>
        <div className="flex justify-around mt-7">
          <button className="cursor-pointer text-orange-400">
            Join the Community
          </button>
          <button className="bg-orange-400 cursor-pointer hover:bg-orange-200 font-bold p-1.5 rounded-lg">
            Explore Meals
          </button>
        </div>
      </header>
      <main >
        <FoodPhotoSlider />
      </main>
    </>
  );
}
