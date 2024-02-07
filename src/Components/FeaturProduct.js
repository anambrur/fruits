import React from "react";

export default function FeaturProduct() {
  return (
    <>
      <div className="col-md-6 col-lg-4">
        <a href="#">
          <div className="service-item bg-secondary rounded border border-secondary">
            <img
              src="img/featur-1.jpg"
              className="img-fluid rounded-top w-100"
              alt=""
            />
            <div className="px-4 rounded-bottom">
              <div className="service-content bg-primary text-center p-4 rounded">
                <h5 className="text-white">Fresh Apples</h5>
                <h3 className="mb-0">20% OFF</h3>
              </div>
            </div>
          </div>
        </a>
      </div>
    </>
  );
}
