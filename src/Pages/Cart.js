import React from "react";
import Navmenu from "../Components/Navmenu";
import ModalSearch from './../Components/ModalSearch';
import SinglePageHeader from './../Components/SinglePageHeader';
import CartSection from "../Components/CartSection";
import Footer from "../Components/Footer";


export default function Cart() {
  return (
    <>
      <Navmenu/>
     
     <ModalSearch/>
      
      {/* <SinglePageHeader/> */}
     
      <CartSection/>
      <Footer/>
    </>
  );
}
