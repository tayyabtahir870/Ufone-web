import React from 'react'

function Internet() {
  return (
    <div className='internet'>
         <div class="container  ">
          <div className="row">
            <h2 className="offers mt-5 p-3">Internet Bundles</h2>
          </div>
          <div class="row">
            <div class="col-md-4 mt-2">
              <div className="d-flex">
                <div>
                  <img
                    className="img-fluid"
                    src="Assests/a4.png"
                    width={350}
                    alt=""
                  />
                </div>
                <div className="p-3">
                  <h4 className="title">Sab Se Bari Offer</h4>
                  <a className="text-deco" href="">
                    
                    <p className="rupees">
                    Enjoy streaming, <br /> downloading


                    </p>
                    {/* <button className="btn">Subscribe</button> */}
                    <a
                      class=" mt-5 paoc-popup-click paoc-popup-cust-6579 paoc-popup-button paoc-popup-btn paoc-popup popupaoc-button"
                      href="javascript:void(0);"
                    >
                      Subscribe
                    </a>
                  </a>
                </div>
              </div>
            </div>

            <div class="col-md-4">
              <div className="d-flex">
                <div>
                  <img
                    className="img-fluid"
                    src="Assests/a5.png"
                    width={350}
                    alt=""
                  />
                </div>
                <div className="p-3">
                  <h4 className="title">UPower 260</h4>
                  <a className="text-deco" href="">
                    
                    <p className="rupees">
                    Price 260 , Internet <br /> 16GBs ( includes 8GB <br /> from 2am to 2pm )
                    </p>
                    {/* <button className="btn">Subscribe</button> */}
                    <a
                      class="paoc-popup-click paoc-popup-cust-6579 paoc-popup-button paoc-popup-btn paoc-popup popupaoc-button"
                      href="javascript:void(0);"
                    >
                      Subscribe
                    </a>
                  </a>
                </div>
              </div>
            </div>

            <div class="col-md-4">
              <div className="d-flex">
                <div>
                  <img
                    className="img-fluid"
                    src="Assests/a6.png"
                    width={350}
                    alt=""
                  />
                </div>
                <div className="p-3">
                  <h4 className="title">Monthly Heavy Internet</h4>
                  <a className="text-deco" href="">
                    
                    <p className="rupees">
                    Enjoy non-stop <br /> streaming, <br /> downloading …
                    </p>
                    {/* <button className="btn">Subscribe</button> */}
                    <a
                      class=" mt-5 paoc-popup-click paoc-popup-cust-6579 paoc-popup-button paoc-popup-btn paoc-popup popupaoc-button"
                      href="javascript:void(0);"
                    >
                      Subscribe
                    </a>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Internet