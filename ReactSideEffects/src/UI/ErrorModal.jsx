import Button from "./Button";

const ErrorModal = (props) => {
  const clickHandler = (params) => {
    props.clickHandler(1);
  };

  return (
    <div className="fixed top-0 left-0 w-full h-screen backdrop-blur-xs flex justify-center items-center p-20 flex-col">
      <div className="bg-blue-200 border-2 p-10 rounded-3xl flex flex-col items-center ">
        <h2 className="font-bold text-2xl">{props.h1}</h2>
        <p className="mt-5 mb-2">{props.hint}</p>
        <Button
          className="w-1/2"
          onClick={clickHandler}
          type="submit"
          text="OK"
        ></Button>
      </div>
    </div>
  );
};

export default ErrorModal;
