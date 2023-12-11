import React from "react";
import ReactDOM from "react-dom/client";
import Posts, { loader as postsLoader } from "./routes/Posts";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import NewPost, { action as newPostAction } from "./routes/NewPost";
import RootLayout from "./routes/RootLayout";
import PostDetails, {
  loader as postDetailsLoader,
} from "./routes/PostDetaills";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Posts />,
        loader: postsLoader,
        children: [
          { path: "/create-post", element: <NewPost />, action: newPostAction }, //🙉🙉[SUBMITTING DATA]🙉🙉 we can create "actions"and submitt them to our files/contents, check the "NewPost.jsx" file to see the exported function that take action === we imported the "action" function from above
          { path: "/:id", element: <PostDetails />, loader: postDetailsLoader }, //🍃🍃[DYNAMIC ROUTES]🍃🍃 this is how the App will know wich content was selected finding it by "id"
        ],
      },
    ],
  },
]); //🦞🦞[ADDING ROUTING]🦞🦞 first, we need to replace the actual page <App/> with the <RouterProvider /> from bellow 👇 than we need to create this variable "router" witch will take the "createBrowserRouter" as a value from the "react-router-dom", than we must create the connection between "path's", for ex: "\", "\create-post" or any name, that's up to you ==== the <RootLayout/> is now the Parent component of our files/pages

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
