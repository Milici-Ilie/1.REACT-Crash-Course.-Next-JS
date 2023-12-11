import { useNavigate } from "react-router-dom";
import classes from "./Modal.module.css";
//👶👶[CHILDREN PROPS]👶👶 now we want to pass those info's in the "PostList.jsx" file and style our content, to do this we need to pass the {children} check bellow 👇 === the "children" is about the content between the opening <Modal> ... </Modal> and the closing </Modal>, only there this "chldren" in our situation will activate
// function Modal({ children, onClose }) {
function Modal({ children }) {
  //🤕🤕[LINKING & NAVIGATING]🤕🤕
  const navigate = useNavigate();

  function closeHandler() {
    navigate("/"); //🤕🤕[LINKING & NAVIGATING]🤕🤕 or we can replace the ".." with "/", both of them do the same thing, going back to the parent content
  }

  return (
    <>
      {/* 🔍🔍[MODAL WINDOW/POP-UP]🔍🔍 here we passed the "onClose" up 👆 in the "Modal" function and also down 👇 in the "onClick={onClose}" */}
      {/* <div className={classes.backdrop} onClick={onClose} /> */}
      <div className={classes.backdrop} onClick={closeHandler} />
      <dialog open className={classes.modal}>
        {children}
      </dialog>
    </>
    //🔍🔍[MODAL WINDOW/POP-UP]🔍🔍 "onClick={}"from the "backdrop" div
    // 👶👶[CHILDREN PROPS]👶👶 the "open" is sett by default to "true", if we want it to be true, meaning that our POP=UP content will be displayed, we can set the "open={false}" if need it
  ); //👶👶[CHILDREN PROPS]👶👶 so this is how we create a new component using "children" and than wrap another component, with our settings we take the POP=UP content and give him our setting/styles/values/etc
}

export default Modal;
