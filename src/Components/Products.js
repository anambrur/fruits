import React from "react";
import FruitsHeader from "./FruitsHeader";
import FruitItem from "./FruitItem";

export default function Products({all_products_data}) {

    
  return (
    <>
      <div className="container-fluid fruite py-5">
        <div className="container py-5">
          <div className="tab-class text-center">
            {/* FruitsHeader */}
            <FruitsHeader/>

            <div className="tab-content">
              <div id="tab-1" className="tab-pane fade show p-0 active">
                <div className="row g-4">
                  <div className="col-lg-12">
                    <div className="row g-4">
                      {/* FruitItems */}
                    {all_products_data.map((d,i)=><FruitItem One_product={d}/>)}
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
