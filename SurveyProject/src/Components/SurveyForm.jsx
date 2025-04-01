import { motion } from "framer-motion";
import Input from "../UI/Input";
import Button from "../UI/Button";

export default function SurveyForm() {
  return (
    <div className="bg-pink-600 m-5 p-5 ">
      <form action="">
        <h2 className="text-[clamp(1rem,3.5vw,2rem)] text-black mb-3">
          Share Your Opinion With us
        </h2>
        <div className="w-full sm:flex sm:justify-around">
          <Input labelText={"Name"} id={"name"} name={"name"} type={"text"} />
          <Input
            labelText={"Title"}
            id={"title"}
            name={"title"}
            type={"text"}
          />
        </div>
        <div className="sm:w-67/72 sm:flex sm:flex-col sm:m-auto">
          <div className="flex flex-col mt-2 w-full sm:mb-4">
            <label
              htmlFor="title"
              className="text-[clamp(1rem,3vw,2rem)] font-bold sm:mt-3"
            >
              YourOpinion
            </label>
            <motion.textarea
              whileHover={{ scale: 1.02 }}
              id="title"
              type="text"
              rows="7"
              className="bg-white rounded-sm p-[2px] font-bold"
            />
          </div>
          <div className="sm:flex sm:justify-end">
            <Button text={"Submit"} type="submit" />
          </div>
        </div>
      </form>
    </div>
  );
}
