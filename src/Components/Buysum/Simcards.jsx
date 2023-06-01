import React from "react";

function Simcards() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <h1 className="newsimheading my-4">Buy New SIM Cards</h1>
          <div className="switchufone mb-4">
            <div>
              <button className="buysimtop p-2">Buy SIM</button>
            </div>
            <div>
              <img src="Assests/switch.png" alt="" />
            </div>
          </div>
          <hr />
        </div>
        <div className="row">
          <div className="col-md-4 newsimdelivery">
            <div>
              <h2 className="newsimtext">
                Classic <br /> Offer
              </h2>
              <p className="newsimpara">
                Data : 4GB Internet (1GB Facebook <br /> and 1GB WhatsApp),{" "}
                <br /> On-Net Mins : 1000 <br /> Dial : *1000# to Subscribe{" "}
                <br /> Price : 250
              </p>
            </div>
          </div>
          <div className="col-md-4 newsimdelivery1">
            <div>
              <h2 className="newsimtext">
                New SIM <br />
                Offer
              </h2>
              <p className="newsimpara">
                Data: 6 GB (1.5 GB FB + 1.5 GB WA), <br /> U-U Minutes: 1500,{" "}
                <br /> Off-Net Minutes: 20, SMS: 500, <br /> Validity: 7 Days,{" "}
                <br /> Dial : *1000# to Subscribe, <br /> Price: Rs. 200
              </p>
            </div>
          </div>
          <div className="col-md-4 newsimdelivery1">
            <div>
              <h2 className="newsimtext">Super Card Max</h2>
              <h4 className="newsimtext1">Double Offer Digital</h4>
              <p className="newsimpara">
                Data : 4GB Internet (1GB Facebook <br /> and 1GB WhatsApp),{" "}
                <br /> On-Net Mins : 1000 <br /> Dial : *1000# to Subscribe{" "}
                <br /> Price : 250
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 newsimdelivery1">
            <div>
              <h2 className="newsimtext">Super Card Gold</h2>
              <h4 className="newsimtext1">Double Offer Digital</h4>
              <p className="newsimpara">
                Data: 60 GB <br /> U-U Mins: 10500 <br /> Off-Net Mins: 1200,
                SMS 10000, <br />
                Validity : 30 days <br /> Price : 1099
              </p>
            </div>
          </div>
          <div className="col-md-4"></div>
          <div className="col-md-4"></div>
        </div>
      </div>
    </div>
  );
}

export default Simcards;
