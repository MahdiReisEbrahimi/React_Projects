import { FaSearch } from "react-icons/fa";

export default function HomePage_Header() {
  return (
    <form
      action=""
      className="flex flex-col bg-blue-200 p-2 mb-4 w-5/6 items- m-auto rounded-lg"
    >
      <label htmlFor="homePage_SearchBar" className="mb-1">
        جستجو در <span className="font-bold text-blue-900">مهدی کالا</span>
      </label>
      <div className="flex m-auto">
        <input
          id="homePage_SearchBar"
          type="text"
          className="rounded-lg bg-white p-1"
        />
        <button className="p-1 pl-2 pr-2 bg-white rounded-lg mr-1 cursor-pointer">
          <FaSearch />
        </button>
      </div>
    </form>
  );
}
