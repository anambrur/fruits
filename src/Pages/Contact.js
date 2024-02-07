import React from "react";
import Navmenu from "../Components/Navmenu";
import ModalSearch from "../Components/ModalSearch";
import SinglePageHeader from "../Components/SinglePageHeader";
import ContactInfo from "../Components/ContactInfo";
import Footer from "../Components/Footer";

export default function Contact() {
  return (
    <>
      <Navmenu/>
      
      <ModalSearch/>
      
      <SinglePageHeader/>
      
      <ContactInfo/>
      
      <Footer/>
    </>
  );
}
