export default function LoginForm() {


  return (
    <form className="rounded-lg w-1/2 m-auto border-2 border-white p-5 mt-25 flex flex-col items-center">
      <div className="flex flex-col w-full">
        <label htmlFor="user" className="text-white ">
          UserName
        </label>
        <input
          type="text"
          name="user"
          id="user"
          className="w-full mb-3 bg-white rounded-lg p-2 pt-1 pb-1"
        />
      </div>

      <div className="flex flex-col w-full">
        <label htmlFor="pass" className="text-white ">
          Password
        </label>
        <input
          type="text"
          name="pass"
          id="pass"
          className="w-full bg-white rounded-lg p-2 pt-1 pb-1"
        />
      </div>

      <button className="cursor-pointer font-bold hover:bg-blue-300 w-1/2  bg-white rounded-lg p-2 mt-4">
        SUBMIT
      </button>
    </form>
  );
}
