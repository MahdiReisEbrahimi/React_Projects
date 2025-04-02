import LettersMap from "./Letters/LettersMap";
import SurveyForm from "./Form/SurveyForm";

export default function VoteContainer() {
  return (
    <div className="w-full m-auto shadow-2xl flex flex-col sm:mt-30 sm:w-3/4">
      <SurveyForm />
      <LettersMap />
    </div>
  );
}
