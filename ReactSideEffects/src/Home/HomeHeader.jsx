import Button from "../UI/Button";

const HomeHeader = (props) => {
  return (
    <header className="bg-blue-500 w-full h-20 flex justify-between items-center">
      <h1 className="ml-7 font-bold text-2xl text-amber-50">A Typical Page</h1>
      <div>
        <Button className="ml-0" text="Users" />
        <Button text="Admin" />
        <Button text="Logout" />
      </div>
    </header>
  );
};

export default HomeHeader;
