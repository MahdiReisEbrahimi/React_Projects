import { useContext } from "react";
import AuthContext from "../../Context/Auth-context";
import Letters from "./Letters";

export default function LettersMap() {
  const ctx = useContext(AuthContext);
  return (
      <ul>
        {ctx.letters.map((letter) => {
          return <Letters key={letter.id} letter={letter} />;
        })}
      </ul>
  );
}
