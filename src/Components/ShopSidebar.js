import React from "react";

export default function ShopSidebar() {
  return (
    <>
      <div className="col-lg-3">
        <div className="row g-4">
          <div className="col-lg-12">
            <div className="mb-3">
              <h4>Categories</h4>
              <ul className="list-unstyled fruite-categorie">
                <li>
                  <div className="d-flex justify-content-between fruite-name">
                    <a href="#">
                      <i className="fas fa-apple-alt me-2" />
                      Apples
                    </a>
                    <span>(3)</span>
                  </div>
                </li>
                <li>
                  <div className="d-flex justify-content-between fruite-name">
                    <a href="#">
                      <i className="fas fa-apple-alt me-2" />
                      Oranges
                    </a>
                    <span>(5)</span>
                  </div>
                </li>
                <li>
                  <div className="d-flex justify-content-between fruite-name">
                    <a href="#">
                      <i className="fas fa-apple-alt me-2" />
                      Strawbery
                    </a>
                    <span>(2)</span>
                  </div>
                </li>
                <li>
                  <div className="d-flex justify-content-between fruite-name">
                    <a href="#">
                      <i className="fas fa-apple-alt me-2" />
                      Banana
                    </a>
                    <span>(8)</span>
                  </div>
                </li>
                <li>
                  <div className="d-flex justify-content-between fruite-name">
                    <a href="#">
                      <i className="fas fa-apple-alt me-2" />
                      Pumpkin
                    </a>
                    <span>(5)</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="mb-3">
              <h4 className="mb-2">Price</h4>
              <input
                type="range"
                className="form-range w-100"
                id="rangeInput"
                name="rangeInput"
                min={0}
                max={500}
                defaultValue={0}
                oninput="amount.value=rangeInput.value"
              />
              <output
                id="amount"
                name="amount"
                min-velue={0}
                max-value={500}
                htmlFor="rangeInput"
              >
                0
              </output>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="mb-3">
              <h4>Additional</h4>
              <div className="mb-2">
                <input
                  type="radio"
                  className="me-2"
                  id="Categories-1"
                  name="Categories-1"
                  defaultValue="Beverages"
                />
                <label htmlFor="Categories-1"> Organic</label>
              </div>
              <div className="mb-2">
                <input
                  type="radio"
                  className="me-2"
                  id="Categories-2"
                  name="Categories-1"
                  defaultValue="Beverages"
                />
                <label htmlFor="Categories-2"> Fresh</label>
              </div>
              <div className="mb-2">
                <input
                  type="radio"
                  className="me-2"
                  id="Categories-3"
                  name="Categories-1"
                  defaultValue="Beverages"
                />
                <label htmlFor="Categories-3"> Sales</label>
              </div>
              <div className="mb-2">
                <input
                  type="radio"
                  className="me-2"
                  id="Categories-4"
                  name="Categories-1"
                  defaultValue="Beverages"
                />
                <label htmlFor="Categories-4"> Discount</label>
              </div>
              <div className="mb-2">
                <input
                  type="radio"
                  className="me-2"
                  id="Categories-5"
                  name="Categories-1"
                  defaultValue="Beverages"
                />
                <label htmlFor="Categories-5"> Expired</label>
              </div>
            </div>
          </div>
          <div className="col-lg-12">
            <h4 className="mb-3">Featured products</h4>
            <div className="d-flex align-items-center justify-content-start">
              <div className="rounded me-4" style={{ width: 100, height: 100 }}>
                <img
                  src="img/featur-1.jpg"
                  className="img-fluid rounded"
                  alt=""
                />
              </div>
              <div>
                <h6 className="mb-2">Big Banana</h6>
                <div className="d-flex mb-2">
                  <i className="fa fa-star text-secondary" />
                  <i className="fa fa-star text-secondary" />
                  <i className="fa fa-star text-secondary" />
                  <i className="fa fa-star text-secondary" />
                  <i className="fa fa-star" />
                </div>
                <div className="d-flex mb-2">
                  <h5 className="fw-bold me-2">2.99 $</h5>
                  <h5 className="text-danger text-decoration-line-through">
                    4.11 $
                  </h5>
                </div>
              </div>
            </div>
            <div className="d-flex align-items-center justify-content-start">
              <div className="rounded me-4" style={{ width: 100, height: 100 }}>
                <img
                  src="img/featur-2.jpg"
                  className="img-fluid rounded"
                  alt=""
                />
              </div>
              <div>
                <h6 className="mb-2">Big Banana</h6>
                <div className="d-flex mb-2">
                  <i className="fa fa-star text-secondary" />
                  <i className="fa fa-star text-secondary" />
                  <i className="fa fa-star text-secondary" />
                  <i className="fa fa-star text-secondary" />
                  <i className="fa fa-star" />
                </div>
                <div className="d-flex mb-2">
                  <h5 className="fw-bold me-2">2.99 $</h5>
                  <h5 className="text-danger text-decoration-line-through">
                    4.11 $
                  </h5>
                </div>
              </div>
            </div>
            <div className="d-flex align-items-center justify-content-start">
              <div className="rounded me-4" style={{ width: 100, height: 100 }}>
                <img
                  src="img/featur-3.jpg"
                  className="img-fluid rounded"
                  alt=""
                />
              </div>
              <div>
                <h6 className="mb-2">Big Banana</h6>
                <div className="d-flex mb-2">
                  <i className="fa fa-star text-secondary" />
                  <i className="fa fa-star text-secondary" />
                  <i className="fa fa-star text-secondary" />
                  <i className="fa fa-star text-secondary" />
                  <i className="fa fa-star" />
                </div>
                <div className="d-flex mb-2">
                  <h5 className="fw-bold me-2">2.99 $</h5>
                  <h5 className="text-danger text-decoration-line-through">
                    4.11 $
                  </h5>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-center my-4">
              <a
                href="#"
                className="btn border border-secondary px-4 py-3 rounded-pill text-primary w-100"
              >
                Vew More
              </a>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="position-relative">
              <img
                src="img/banner-fruits.jpg"
                className="img-fluid w-100 rounded"
                alt=""
              />
              <div
                className="position-absolute"
                style={{
                  top: "50%",
                  right: 10,
                  transform: "translateY(-50%)",
                }}
              >
                <h3 className="text-secondary fw-bold">
                  Fresh <br /> Fruits <br /> Banner
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
