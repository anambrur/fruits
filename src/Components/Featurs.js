import React from "react";

export default function Featurs() {
  return (
    <>
      <div className="col-md-6 col-lg-3">
        <div className="featurs-item text-center rounded bg-light p-4">
          <div className="featurs-icon btn-square rounded-circle bg-secondary mb-5 mx-auto">
            <i className="fas fa-car-side fa-3x text-white" />
          </div>
          <div className="featurs-content text-center">
            <h5>Free Shipping</h5>
            <p className="mb-0">Free on order over $300</p>
          </div>
        </div>
      </div>
    </>
  );
}
