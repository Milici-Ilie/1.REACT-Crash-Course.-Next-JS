import { Link } from "react-router-dom";
import { MdPostAdd, MdMessage } from "react-icons/md";
import classes from "./MainHeader.module.css";

//🔘🔘[POP-UP BUTTON]🔘🔘
//🤕🤕[LINKING & NAVIGATING]🤕🤕 including our code inside  of <Link> ... </Link>
function MainHeader() {
  return (
    <header className={classes.header}>
      <h1 className={classes.logo}>
        <MdMessage />
        React Poster
      </h1>
      <p>
        <Link to="/create-post" className={classes.button}>
          <MdPostAdd size={18} />
          New Post
        </Link>
      </p>
    </header>
  );
}

export default MainHeader;
