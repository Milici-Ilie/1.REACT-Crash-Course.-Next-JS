// import { useState } from "react";
// import MainHeader from "../components/MainHeader";
import { Outlet } from "react-router-dom";
import PostList from "../components/PostList";

function Posts() {
  // const [modalIsVisible, setModalIsVisible] = useState(false); //🔘🔘[POP-UP BUTTON]🔘🔘 here we LIFTED UP the state to make it ussable for our Button and also to be able to connect the Button with the "PostList.jsx" file === now we must past new PROPS in the "PostList.jsx" file to make this work, "isPosting"  PROP ==== and now this "isPosting" will take the "return" values, in our case the "Ternary Expression" and will check if is "true" or not to display the WINDOW MODAL .....=== now we must include "isPosting" down in our <main> <PostsList ...here.../> </main> and sett it to "{modalIsVisible}" ==== also check the " onCreatePost={showModalHandler} " and " onStopPosting={hideModalHandler} " ===== now we must accept that new PROP "onStopPosting={hideModalHandler}"in the "PostList/jsx"

  // function showModalHandler() {
  //   setModalIsVisible(true);
  // } //🔘🔘[POP-UP BUTTON]🔘🔘

  // function hideModalHandler() {
  //   setModalIsVisible(false);
  // } //🔘🔘[POP-UP BUTTON]🔘🔘

  return (
    //📀📀[REUSING COMPONENTS]📀📀
    //🔘🔘[POP-UP BUTTON]🔘🔘 importing the <MaineHeader/>
    <>
      {/* <MainHeader onCreatePost={showModalHandler} /> */}
      <Outlet />
      {/* 🦞🦞[ADDING ROUTING]🦞🦞 the <Outlet/>  */}
      <main>
        {/* <PostList isPosting={modalIsVisible} onStopPosting={hideModalHandler} /> */}
        <PostList />
      </main>
    </>
  );
} //HERE WE "CLOSED" EVERYTHING BECAUSE WE REFACTORED THE CODE AT THE END

export default Posts;

export async function loader() {
  const response = await fetch("http://localhost:8080/posts");
  const resData = await response.json();
  return resData.posts;
}
