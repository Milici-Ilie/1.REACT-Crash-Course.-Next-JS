import { Outlet } from "react-router-dom";
import MainHeader from "../components/MainHeader";

function RootLayout() {
  return (
    <>
      <MainHeader />
      <Outlet />
    </>
  ); //🦞🦞[ADDING ROUTING]🦞🦞 So, the <Outlet/> is just a "placeHolder" where our pages will render their PROPS and still be connected with the <MainHeader/> displaying the content of <MainHeader/> 🦞🦞[ADDING ROUTING]🦞🦞
}

export default RootLayout;
