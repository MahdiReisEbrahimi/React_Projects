import HomePage_Header from "../Components/HomePage/HomePage_Header";
import HomePage_Slider from "../Components/HomePage/HomePage_Slider";
import HomePage_SearchBar from "../Components/HomePage/HomePage_SearchBar";
import HomePage_Events from "../Components/HomePage/HomePage_Events";
import HomePage_Popular from "../Components/HomePage/HomePage_Popular";
import HomePage_Footer from "../Components/HomePage/HomePage_Footer";

export default function Home() {
  return (
    <div className="h-screen overflow-auto">
      <HomePage_Header />
      <HomePage_SearchBar />
      <HomePage_Slider />
      <HomePage_Popular />
      <HomePage_Events />
      <HomePage_Footer />
    </div>
  );
}
