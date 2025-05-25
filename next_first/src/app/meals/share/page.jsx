import Input from "@/components/Input";
import ImagePicker from "@/components/Meals/image-picker";
import { shareMeal } from "@/../lib/actions";
import SubmitButton from "@/components/Meals/SubmitButton";

export default function ShareMealsPage() {
  return (
    <div className="mt-20 m-10">
      <h2 className="text-white ml-10 text-lg font-bold">
        Enter your Food Details Please
      </h2>
      <form action={shareMeal} className="bg-gray-400 p-5 m-10">
        <div className="flex justify-between">
          <Input
            name={"your_name"}
            label={"YOUR NAME"}
            type={"text"}
            className="basis-7/15"
          />
          <Input
            name={"email"}
            label={"YOUR EMAIL"}
            type={"text"}
            className="basis-7/15"
          />
        </div>
        <Input
          name={"title"}
          label={"TITLE"}
          type={"text"}
          className="basis-full"
        />

        <Input
          name={"summary"}
          label={"SHORT SUMMARY"}
          type={"text"}
          className="basis-full"
        />

        <Input
          name={"instructions"}
          label={"INSTRUCTIONS"}
          type={"body"}
          className="basis-full"
        />

        <ImagePicker label="Your image" name="image" />
        <SubmitButton />
      </form>
    </div>
  );
}
