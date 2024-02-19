import React from "react";
import Navmenu from './../Components/Navmenu';
import ModalSearch from './../Components/ModalSearch';
import SinglePageHeader from './../Components/SinglePageHeader';
import BilingDetails from "../Components/BilingDetails";
import BilingProduct from "../Components/BilingProduct";
import Footer from "../Components/Footer";

export default function Chackout() {
  return (
    <>
      <Navmenu/>
      
      <ModalSearch/>
      
      <div className="container-fluid py-5">
        <div className="container py-5">
          <h1 className="mb-4">Billing details</h1>
          <form action="#">
            <div className="row g-5">
              <BilingDetails/>
              <BilingProduct/>
            </div>
          </form>
        </div>
      </div>
      {/* Checkout Page End */}
      <Footer/>
    </>
  );
}
