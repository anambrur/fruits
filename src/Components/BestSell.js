import React from "react";

export default function BestSell() {
  return (
    <>
      <div className="col-lg-6 col-xl-4">
        <div className="p-4 rounded bg-light">
          <div className="row align-items-center">
            <div className="col-6">
              <img
                src="img/best-product-1.jpg"
                className="img-fluid rounded-circle w-100"
                alt=""
              />
            </div>
            <div className="col-6">
              <a href="#" className="h5">
                Organic Tomato
              </a>
              <div className="d-flex my-3">
                <i className="fas fa-star text-primary" />
                <i className="fas fa-star text-primary" />
                <i className="fas fa-star text-primary" />
                <i className="fas fa-star text-primary" />
                <i className="fas fa-star" />
              </div>
              <h4 className="mb-3">3.12 $</h4>
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
      </div>
    </>
  );
}
