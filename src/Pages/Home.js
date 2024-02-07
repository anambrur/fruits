import React from "react";
import Navmenu from './../Components/Navmenu';
import ModalSearch from "../Components/ModalSearch";
import Hero from "../Components/Hero";
import Featurs from "../Components/Featurs";
import Products from "../Components/Products";
import AddFeatureProducts from "../Components/AddFeatureProducts";
import Banner from "../Components/Banner";
import BestSellProducts from "../Components/BestSellProducts";
import CustomerReviews from "../Components/CustomerReviews";
import OurClinetSaying from "../Components/OurClinetSaying";
import Footer from "../Components/Footer";
import FreahOrgaVages from "../Components/FreahOrgaVages";

export default function Home() {
  return (
    <>
      <Navmenu/>
      <ModalSearch/>
      <Hero/>
      <Featurs/>
      <Products/>
      <AddFeatureProducts/>
      <FreahOrgaVages/>
      <Banner/>
      <BestSellProducts/>
      <CustomerReviews/>
      <OurClinetSaying/>
      <Footer/>
    </>
  );
}
