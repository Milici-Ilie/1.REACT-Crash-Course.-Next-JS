import { useLoaderData } from "react-router-dom";
import Post from "./Post";
// import NewPost from "../routes/NewPost";
import classes from "./PostList.module.css"; //this is how we import a class from a CSS file, using "classes", or any name, for ex: "StyleComponent", etc
// import { useEffect, useState } from "react";
// import Modal from "./Modal";

function PostList() {
  const posts = useLoaderData();
  // function PostList({ isPosting, onStopPosting }) { JUST A MODEL WITH THE PROPS ================
  // //🔘🔘[POP-UP BUTTON]🔘🔘 we must pass this PROP "onStopPosting" in to our <Modal/> from bellow 👇
  // // const [modalIsVisible, setModalIsVisible] = useState(true); //🔍🔍[MODAL WINDOW/POP-UP]🔍🔍 by default we sett it to "true", the MODAL WINDOW to be visible, now go and check the "Modal.jsx" file, there we will include the "onClick" prop in the "background" component ... also check the function "hideModalHandler" from bellow 👇
  // const [enteredBody, setEnteredBody] = useState(""); //🏋️‍♀️🏋️‍♀️[LIFTING THE STATE UP]🏋️‍♀️🏋️‍♀️ we placed the "useState" HOOK here bcs this is the parent file wich take care of the "NewPost.jsx" and also of "App.jsx" file
  // const [enteredAuthor, setEnteredAuthor] = useState(""); //🏋️‍♀️🏋️‍♀️[LIFTING THE STATE UP]🏋️‍♀️🏋️‍♀️

  // // function hideModalHandler() {
  // //   setModalIsVisible(false);
  // // } //🔍🔍[MODAL WINDOW/POP-UP]🔍🔍 now we must pass this function down in the <Modal> ... </Modal> 👇 "onClose={hideModalHandler}" or any name, is up to you....... ❗❗ and now we can pass that "onClose" prop to the "Modal.jsx" file and use the info's

  // function bodyChangeHandler(event) {
  //   setEnteredBody(event.target.value); //🏋️‍♀️🏋️‍♀️[LIFTING THE STATE UP]🏋️‍♀️🏋️‍♀️
  // }

  // function authorChangeHandler(event) {
  //   setEnteredAuthor(event.target.value); //🏋️‍♀️🏋️‍♀️[LIFTING THE STATE UP]🏋️‍♀️🏋️‍♀️ also check the passing data's/props in the "NewPost.jsx" file down 👇 in the "return" <NewPost/>, and also in the <ul> ... <Post ... /> ... </ul>
  // }
  // const [posts, setPosts] = useState([]); //📯📯[UPDATING STATES DYNAMICALLY]📯📯 in order to do this we need to call a PROP "useState" with an empty Array [] where we will store the new data's from the INPUT field/ MODAL WINDOW
  // const [isFetching, setIsFetching] = useState(false); //💫💫[LOADING STATE]💫💫   so we set the "Loading State" to (true) in the "useEffect" from bellow 👇, exactly after the "async" and set it back to (false) after "setPosts" 💫💫[LOADING STATE]💫💫 === also now check bellow 👇 in the "return" how to implement the function "isFetching", when should activate and when not, check the "Ternarry operations"

  // useEffect(() => {
  //   async function fetchPosts() {
  //     setIsFetching(true);
  //     // const response = await fetch("http://localhost:8080/posts");
  //     // const resData = await response.json();
  //     setPosts(resData.posts);
  //     setIsFetching(false);
  //   }
  //   fetchPosts();
  // }, []); //🦅🦅[EFFECT WITH USEEFFECT]🦅🦅 for "useEffect" to work he need a Fuction and an Array 🦅🦅[EFFECT WITH USEEFFECT]🦅🦅

  // function addPostHandler(postData) {
  //   // fetch("http://localhost:8080/posts", {
  //   //   method: "POST",
  //   //   body: JSON.stringify(postData),
  //   //   headers: { "Content-Type": "appliction/json" },
  //   // }); //🎒🎒[BACKEND REQUESTS]🎒🎒 so with "fetch()" (gived from the browser out of the box) we can take/fetch data and sent data ==== this will take an HTTP request, local API for data backend, the "/posts" is coming from the "app.js" file, there we'll find "app.post('/posts' .....", so our URL will call this value of "posts" to create a new content

  //   setPosts((existingPosts) => [postData, ...existingPosts]);
  // } //📯📯[UPDATING STATES DYNAMICALLY]📯📯 this function will pass the new data inside of our state "setPosts" from the destructured variable 👆 ==== also check the implementation of this function down 👇 in the <Modal/> ... "onAddPost={addPostHandler}", now we can pass the PROP "onAddPost" to the <NewPost/> wich is included inside of the <Modal> ... here ... </Modal>

  return (
    <>
      {/* 👶👶[CHILDREN PROPS]👶👶 to make the content to POP-UP when the button is pressed we must include the <NewPost/> inside of the <Modal>...here...</Modal> file */}
      {/* 🔍🔍[MODAL WINDOW/POP-UP]🔍🔍 ❗❗❗❗ IMPORTANT ... ===== >> to make our code to function we create a Ternary Expression method that will check if the "useState" is "true" or "false" and according to that value will display or close th POP-UP/MODAL WINDOW when the BCKG is clicked, check the Method from bellow 👇 {modalIsVisible ? (...etc )} */}
      {/* 🧈🧈[FORM BUTTONS]🧈🧈 check the "onCancel" from <NewPost/> */}

      {/* {isPosting ? (
        <Modal onClose={onStopPosting}>
          <NewPost
            onCancel={onStopPosting}
            onAddPost={addPostHandler}
          />
        </Modal>
      ) : null} */}
      {posts.length > 0 && (
        <ul className={classes.posts}>
          {/* 💫💫[LOADING STATE]💫💫 */}
          {posts.map((post) => (
            <Post
              key={post.id}
              id={post.id}
              author={post.author}
              body={post.body}
            />
          ))}
        </ul>
        // 📃📃[OUTPUTTING LIST DATA]📃📃 we can call here the "author" and "body" because those are coming from the function "addPostHandler" from above 👆 wich is inserted in the <Modal />, there we insert the "postData" in the "useState" Array with the "map" method at the state "setPosts", check the "onAddPost={addPostHandler}", the "onAddPost" is coming from "NewPost.jsx" file, inside of "submitHandler" function
      )}
      {posts.length === 0 && (
        <div style={{ textAlign: "center", color: "white" }}>
          <h2>There are no posts yet.</h2>
          <p>Start adding some!</p>
          {/* 💫💫[LOADING STATE]💫💫 */}
        </div>
      )}
      {/* {isFetching && (
        <div style={{ textAlign: "center", color: "white" }}>
          <p>Loading posts...</p>
        </div>
      )} */}
      {/* 💫💫[LOADING STATE]💫💫 Implementing our "Loading State", spinner, text or anything 💫💫[LOADING STATE]💫💫 */}
    </>
  );
}

export default PostList;
