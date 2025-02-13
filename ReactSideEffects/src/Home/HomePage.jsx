import HomeBody from "./HomeBody";
import HomeHeader from "./HomeHeader";

const HomePage = (props) => {
  return (
    <div>
      <HomeHeader text="users" />
      <HomeBody userName = {props.userName} />
    </div>
  );
};

export default HomePage;
