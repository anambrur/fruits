import "./App.css";
import Navmenu from "./Components/Navmenu";
import ModalSearch from "./Components/ModalSearch";
import Hero from "./Components/Hero";
import Featurs from "./Components/Featurs";
import FeaturProduct from "./Components/FeaturProduct";
import Banner from "./Components/Banner";
import BestSell from "./Components/BestSell";
import CustomerReview from "./Components/CustomerReview";
import Footer from "./Components/Footer";
import Products from "./Components/Products";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
const [products, setProducts]=useState([])


  useEffect(() => {
    axios
      .get("http://localhost/reactjs/frutis/backend/getAllApi/getProducts.php")
      .then((res) => {
        setProducts(res.data);
      });

    },[]);

  return (
    <>
      <Navmenu />
      <ModalSearch />
      <Hero />
      <Featurs />

      <Products all_products_data={products}/>
      {/* Fruits Shop End*/}

      {/* Featurs Start */}
      <div className="container-fluid service py-5">
        <div className="container py-5">
          <div className="row g-4 justify-content-center">
            {/* FeaturProduct */}
            <FeaturProduct />
            <FeaturProduct />
            <FeaturProduct />
          </div>
        </div>
      </div>

      <Banner />
      {/* Banner Section End */}
      {/* Bestsaler Product Start */}
      <div className="container-fluid py-5">
        <div className="container py-5">
          <div className="text-center mx-auto mb-5" style={{ maxWidth: 700 }}>
            <h1 className="display-4">Bestseller Products</h1>
            <p>
              Latin words, combined with a handful of model sentence structures,
              to generate Lorem Ipsum which looks reasonable.
            </p>
          </div>
          <div className="row g-4">
            <BestSell />
            <BestSell />
            <BestSell />
            <FeaturProduct />
            <FeaturProduct />
            <FeaturProduct />
          </div>
        </div>
      </div>
      {/* Bestsaler Product End */}
      {/* Fact Start */}
      <div className="container-fluid py-5">
        <div className="container">
          <div className="bg-light p-5 rounded">
            <div className="row g-4 justify-content-center">
              <CustomerReview />
              <CustomerReview />
              <CustomerReview />
              <CustomerReview />
            </div>
          </div>
        </div>
      </div>

      {/* Footer Start */}
      <Footer />
    </>
  );
}

export default App;
