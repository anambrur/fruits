import React from "react";
import Navmenu from "../Components/Navmenu";
import ModalSearch from "../Components/ModalSearch";
import SinglePageHeader from "../Components/SinglePageHeader";
import Error404 from "../Components/Error404";
import Footer from "../Components/Footer";

export default function ErrorPage() {
  return (
    <>
      <Navmenu />
      <ModalSearch />
      <SinglePageHeader />
      <Error404 />
      <Footer />
    </>
  );
}
