import React from "react";
import { NavLink } from "react-router-dom";

export default function FruitItem() {
  return (
    <>
      <div className="col-md-6 col-lg-4 col-xl-3">
        <NavLink to="">
          <div className="rounded position-relative fruite-item">
            <div className="fruite-img">
              <img
                src="img/fruite-item-5.jpg"
                className="img-fluid w-100 rounded-top"
                alt=""
              />
            </div>
            <div
              className="text-white bg-secondary px-3 py-1 rounded position-absolute"
              style={{ top: 10, left: 10 }}
            >
              Fruits
            </div>
            <div className="p-4 border border-secondary border-top-0 rounded-bottom">
              <h4>fdhjgdf</h4>
              <p>dgdfg</p>
              <div className="d-flex justify-content-between flex-lg-wrap">
                <p className="text-dark fs-5 fw-bold mb-0">
                  $ 55 / kg
                </p>
                <a
                  href="#"
                  className="btn border border-secondary rounded-pill px-3 text-primary"
                >
                  <i className="fa fa-shopping-bag me-2 text-primary" /> Add to
                  cart
                </a>
              </div>
            </div>
          </div>
        </NavLink>
      </div>
    </>
  );
}
