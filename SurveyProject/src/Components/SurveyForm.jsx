import { motion } from "framer-motion";
import Input from "../UI/Input";
import Button from "../UI/Button";

export default function SurveyForm() {
  return (
    <div className="bg-pink-500 m-5 p-5 h-75">
      <form action="">
        <h2 className="font-bold text-[20px] text-black mb-3">
          Share your opinion
        </h2>
        <div className="flex justify-between">
          <Input labelText={"Name"} id={"name"} name={"name"} type={"text"} />
          <Input
            labelText={"Title"}
            id={"title"}
            name={"title"}
            type={"text"}
          />
        </div>
        <div className="flex flex-col mt-2 w-full">
          <label htmlFor="title" className="text-[15px] font-bold">
            YourOpinion
          </label>
          <motion.textarea
            whileHover={{ scale: 1.02 }}
            id="title"
            type="text"
            rows="3"
            className="bg-white rounded-[3px] p-[2px] font-bold"
          />
        </div>
        <Button text={"Submit"} type="submit" />
      </form>
    </div>
  );
}
