import Button from "../UI/Button";
import Input from "../UI/Input";

export default function Form() {
  return (
    <div className="bg-gray-800 text-white p-15">
      <h1>Welcome on board!</h1>
      <p>We just need a little bit of data from you.</p>
      <form>
        <Input labelText={"EMAIL"} type={"email"} id={1} />
        <div className="flex justify-between">
          <Input labelText={"PASSWORD"} type={"number"} id={2} />
          <Input labelText={"CONFIRM PASSWORD"} type={"number"} id={3} />
        </div>
        <hr className="mt-5 mb-5" />
        <div className="flex justify-between">
          <Input labelText={"First Name"} type={"text"} id={4} />
          <Input labelText={"Last Name"} type={"text"} id={5} />
        </div>
        <div className="flex flex-col mt-2 mb-2">
          <label htmlFor="cars" className="text-left text-[13px]">
            WHAT IS YOUR JOB?
          </label>
          <select
            className="bg-gray-300 text-black font-bold p-0.5 flex w-4/5 rounded-[3px] "
            id="cars"
            name="cars"
          >
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </select>
        </div>
        <div className=" flex flex-col border-2 border-white h-33 mt-5">
          <p className="flex m-2">How did you find us?</p>

          <div className="flex items-center">
            <input
              className="align-middle p-1 m-2 mr-1.5"
              id="check1"
              type="checkbox"
            />
            <label htmlFor="check1">Google</label>
          </div>
          <div className="flex items-center">
            <input
              className="align-middle p-1 m-2 mr-1.5"
              id="check2"
              type="checkbox"
            />
            <label htmlFor="check2">Telegram</label>
          </div>
          <div className="flex items-center">
            <input
              className="align-middle p-1 m-2 mr-1.5"
              id="check3"
              type="checkbox"
            />
            <label htmlFor="check3">Other</label>
          </div>
        </div>
        <div className="flex items-center mt-4">
          <input
            className="align-middle p-1 mr-1.5"
            id="check4"
            type="checkbox"
          />
          <label htmlFor="check4">I Agree with term of use.</label>
        </div>
        <div>
          <input type="reset" />
          <Button buttonText="sign up" type="submit" />
        </div>
      </form>
    </div>
  );
}
