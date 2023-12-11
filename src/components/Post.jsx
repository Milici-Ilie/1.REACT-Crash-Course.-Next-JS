import { Link } from "react-router-dom";
import classes from "./Post.module.css"; //📳📳[CSS MODULES]📳📳
// const names = ["Milici", "Manuel"]; //🧨🧨[DYNAMIC VALUES]🧨🧨

function Post({ id, author, body }) {
  //🥠🥠[USING PROPS]🥠🥠
  // const chosenName = Math.random() > 0.5 ? names[0] : names[1]; //🧨🧨[DYNAMIC VALUES]🧨🧨 here we create a chance of 50% for both names to be chosen, with "0.5"

  return (
    <li className={classes.post}>
      <Link to={id}>
        <p className={classes.author}>{author}</p>
        <p className={classes.text}>{body}</p>
      </Link>
    </li>
  );
}

export default Post;
