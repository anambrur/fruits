import axios from "axios";
import React, { useState } from "react";

export default function AddProduct() {
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");
  const [details, setDetails] = useState("");
  const [price, setPrice] = useState("");

  const saveProducts = () => {
     (name === "" && photo === "" && details === "" && price === "") ?
      alert("Please fill name FIeld"):
      axios
        .post(
          "http://localhost/reactjs/frutis/backend/getAllApi/saveProducts.php",
          { NAME: name, PHOTO: photo, DETAILS: details, PRICE: price },
          { headers: { "Content-Type": "application/json" } }
        )
        .then((res) => console.log(res.data));
  };

  return (
    <>
      <div className="container">
        <div className="row pt-5">
          <div className="col-md-6">
            <div class="input-group mb-3">
              <input
                type="text"
                class="form-control"
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
              />
            </div>
            <div class="input-group mb-3">
              <input
                type="text"
                class="form-control"
                onChange={(e) => setPhoto(e.target.value)}
                placeholder="Photo"
              />
            </div>
            <div class="input-group mb-3">
              <input
                type="text"
                class="form-control"
                onChange={(e) => setDetails(e.target.value)}
                placeholder="Details"
              />
            </div>
            <div class="input-group mb-3">
              <input
                type="number"
                class="form-control"
                onChange={(e) => setPrice(e.target.value)}
                placeholder="Price"
              />
            </div>
            <div class="input-group mb-3">
              <input
                type="submit"
                onClick={saveProducts}
                class="btn btn-warning"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
