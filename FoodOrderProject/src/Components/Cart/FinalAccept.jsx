import React, { useContext } from "react";
import AuthContext from "../../Context/Auth-context";

const FinalAccept = () => {
  const ctx = useContext(AuthContext);
  return (
    <React.Fragment>
      <button
        onClick={ctx.onSpaceClick}
        className="mt-2 bg-green-600 hover:bg-green-700 hover:cursor-pointer text-white font-bold py-2 px-6 rounded-lg transition duration-200"
      >
        تایید نهایی ✅
      </button>
    </React.Fragment>
  );
};

export default FinalAccept;
