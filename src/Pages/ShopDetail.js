import React, { useEffect, useState } from "react";
import Navmenu from "../Components/Navmenu";
import ModalSearch from "../Components/ModalSearch";
import SinglePageHeader from "../Components/SinglePageHeader";
import SingleProduct from "../Components/SingleProduct";
import ShopSidebar from "./../Components/ShopSidebar";
import Footer from "../Components/Footer";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function ShopDetail() {
  const { id } = useParams();

  const [sing_pro_details, setSing_pro_details] = useState({
    id: "",
    name: "",
    photo: "",
    details: "",
    price: "",
  });
  // console.log(sing_pro_details)
  useEffect(() => {
    axios
      .get(
        `http://localhost/reactjs/adminpro-react/backend/API/ProductAPI/getIDProduct.php?id=${id}`
      )
      .then((res) => setSing_pro_details(res.data));
  }, []);
  return (
    <>
      {/* Navbar start */}
      <Navmenu />
      <ModalSearch />

      {/* Single Product Start */}
      <h1>1</h1>

      <div className="container-fluid py-5 mt-5">
        <div className="container py-5">
          <div className="row g-4 mb-5">
            <SingleProduct Single_product_details={sing_pro_details} />

            <ShopSidebar />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
