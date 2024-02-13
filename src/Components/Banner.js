import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBanner } from "../Reducer/counterSlice";

export default function Banner() {
  const banner = useSelector((state) => state.counter.banner);
  const dispatch = useDispatch();
  // console.log(banner);

  useEffect(() => {
    dispatch(getBanner());
  }, []);
  return (
    <>
      {banner.map((d, i) => {
        return (
          <div className="container-fluid banner bg-secondary my-5"key={i}>
            <div className="container py-5">
              <div className="row g-4 align-items-center">
                <div className="col-lg-6">
                  <div className="py-4">
                    <h1 className="display-3 text-white">{d.title}</h1>
                    <p className="fw-normal display-3 text-dark mb-4">
                      {d.store}
                    </p>
                    <p className="mb-4 text-dark">{d.details}</p>
                    <a
                      href="#"
                      className="banner-btn btn border-2 border-white rounded-pill text-dark py-3 px-5"
                    >
                      BUY
                    </a>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="position-relative">
                    <img
                      src={`http://localhost/reactjs/adminpro-react/backend/images/${d.photo}`}
                      className="img-fluid w-100 rounded"
                      alt=""
                    />
                    <div
                      className="d-flex align-items-center justify-content-center bg-white rounded-circle position-absolute"
                      style={{ width: 140, height: 140, top: 0, left: 0 }}
                    >
                      <h1 style={{ fontSize: 100 }}>1</h1>
                      <div className="d-flex flex-column">
                        <span className="h2 mb-0">50$</span>
                        <span className="h4 text-muted mb-0">kg</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
