import MealItem from "./MealItem";

export default function MealsGrid({ meals }) {
  return (
    <ul className="grid grid-cols-3 gap-4">
      {meals.map((meal) => (
        <li key={meal.id} className="border-2 p-2">
          <MealItem {...meal} />
        </li>
      ))}
    </ul>
  );
}
