import React from "react";
import Navmenu from "../Components/Navmenu";
import ModalSearch from "../Components/ModalSearch";
import Footer from './../Components/Footer';
import ShopBody from "../Components/ShopBody";

export default function Shop() {
  return (
    <>
      <Navmenu />
      <ModalSearch />
      <ShopBody/>
      <Footer/>
    </>
  );
}
