import classes from "./MainNavigation.module.css";
import { Link } from "react-router-dom";
function MainNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <Link to={"/"}>HomePage</Link>
          </li>
          <li>
            <Link to={"/events"}>Events Page</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
