// import { useState } from "react";
import { Form, Link, redirect } from "react-router-dom";
import classes from "./NewPost.module.css";
import Modal from "../components/Modal";
//📮📮[STATE MANAGEMEN]📮📮 now we must import this file in our "PostList.jsx" file to display the content
// function NewPost({ onCancel, onAddPost }) {
function NewPost() {
  // function NewPost({ onAddPost }) {
  // const [enteredBody, setEnteredBody] = useState(""); //🌃🌃[EVENT LISTENER & STATES]🌃🌃 here we can sent whatever we want inside of the "useState" HOOK, this is how we change/sent the text from our INPUT in a new component
  // //=================================================
  // // stateData[0]; //current value
  // // stateData[1]; //state updating function ====> those 2 are just explanation about the destructured Array from above where we take 2 arguments: [enteredBody, setEnteredBody]. now we ca call/insert the new values with the "setEnteredBody" wich will always pass the values in the "enteredBody" that will re-render the content
  // function changeBodyHandler(event) {
  //   // console.log(event.target.value); //this will display in our console everything that we type in the "INPUT" field
  //   setEnteredBody(event.target.value);
  // } //🌃🌃[EVENT LISTENER & STATES]🌃🌃 now we must sent this function in our "onChange" prop bellow in the <textarea/> 👇 ... onChange={changeBodyHandler}
  //------------------------------------ 🏋️‍♀️🏋️‍♀️[LIFTING THE STATE UP]🏋️‍♀️🏋️‍♀️ WE LIFT UP THIS STATE 🏋️‍♀️🏋️‍♀️[LIFTING THE STATE UP]🏋️‍♀️🏋️‍♀️------------------------------------------
  // --------------so first to LIFT UP a state we must past in the "props" as we see above in the function (here) 👆, than we past where is need it, check down in the "onChange" 👇 and set what name we what acording/connecting with the "props" value.------ now go and check the "PostList.jsx" file and see the "onBodyChange" function there and also the "useState" HOOK ... check down in the <textarea></textarea> and also in the <input/>
  //🔯🔯[SUBMIT THE FORM]🔯🔯 👇👇👇
  // const [enteredBody, setEnteredBody] = useState("");
  // const [enteredAuthor, setEnteredAuthor] = useState("");
  // function bodyChangeHandler(event) {
  //   setEnteredBody(event.target.value);
  // }
  // function authorChangeHandler(event) {
  //   setEnteredAuthor(event.target.value);
  // }

  // function submitHandler(event) {
  //   event.preventDefault(); //this will prevent the browser to reload when we "submit" the content, pressing the button. otherwise the browser will reload the page and will delete the text that was written in the INPUT fields .... very IMPORTANT this "event.preventDefault()"
  //   const postData = {
  //     body: enteredBody,
  //     author: enteredAuthor,
  //   }; // those values are from the destructured variables from above
  //   // console.log(postData); //to see if this works

  // onAddPost(postData); //📯📯[UPDATING STATES DYNAMICALLY]📯📯
  // onCancel(); //by calling this PROP as a function it will act ass a function, so after the MODAL WINDOW will submit the form/data's will be closed automatically
  // }
  //🔯🔯[SUBMIT THE FORM]🔯🔯 👆👆👆

  return (
    <Modal>
      {/* 🦞🦞[ADDING ROUTING]🦞🦞 wrapping all the content inside of the <Modal/> */}
      {/* <form className={classes.form} onSubmit={submitHandler}> */}
      <Form method="post" className={classes.form}>
        {/* 🔯🔯[SUBMIT THE FORM]🔯🔯 to "submit" the info's from the INPUT field's we use "onSubmit={submitHandler}" from above 👆 that is provided from REACT out of the box === also we need to include the functions "bodyChangeHandler" and "authorChangeHandler" down in our "onChange={...here...}" function/prop */}
        <p>
          <label htmlFor="body">Text</label>
          <textarea id="body" name="body" required rows={3} />
        </p>

        <p>
          <label htmlFor="name">Your name</label>
          <input type="text" id="name" name="author" required />
        </p>
        {/* 🧈🧈[FORM BUTTONS]🧈🧈 check the code from bellow 👇, by default the <button>...</button> has the "type = "submit"", meaning that this will submit the form, therefore we need to set the "Cancel" Button to "type="button"" to not submite when is clicked, and just to close the MODAL WINDWOW === also ofc we need to pass the new PROP that will cancel the FORM/MODAL WINDOWS, check up 👆 in the PROPS function the "onCancel" prop, than we connect it with our button using "onClick={onCancel}" */}
        <p className={classes.actions}>
          <Link to="/" type="button">
            Cancel
          </Link>
          <button>Submit</button>
        </p>
      </Form>
    </Modal>
  );
}

export default NewPost;

export async function action({ request }) {
  const formData = await request.formData();
  const postData = Object.fromEntries(formData); //{body: '...', author: '...'}
  await fetch("http://localhost:8080/posts", {
    method: "POST",
    body: JSON.stringify(postData),
    headers: { "Content-Type": "appliction/json" },
  }); //🙉🙉[SUBMITTING DATA]🙉🙉 function that takes action === to make this work check the <textarea/> and <input/> from above for "name="..."" ==== for this to work we must include our content, the content from "return" inside of <Form> ... here ... </Form> offered by React

  return redirect("/");
}
