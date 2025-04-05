export default function ReduxCounter() {
  return (
    <div className="rounded-2xl font-bold w-1/2 bg-white shadow-lg shadow-gray-400 m-auto flex flex-col items-center p-10 text-purple-700">
      <p className="p-3 text-2xl mb-7">REDUX COUNTER</p>
      <h2>-- CONTER VALUE --</h2>
      <button className="cursor-pointer hover:bg-purple-700 bg-gray-800 p-3 rounded-2xl mt-5 text-white font-bold">
        Toggle Counter
      </button>
    </div>
  );
}
