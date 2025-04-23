import HomePage_Header from "../Components/HomePage/HomePage_Header";
import HomePage_Slider from "../Components/HomePage/HomePage_Slider";
import HomePage_SearchBar from "../Components/HomePage/HomePage_SearchBar";

export default function Home() {
  return (
    <>
      <HomePage_Header />
      <HomePage_SearchBar />
      <HomePage_Slider />

      <div>hello. This is HomePage.</div>
    </>
  );
}
