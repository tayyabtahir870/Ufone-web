import React from "react";

function Recharge() {
  return (
    <div className="container">
      <div className="row">
        <div className=" onlineheading mt-4">
          <marquee behavior="" direction="left">
            Get 10% instant cashback on recharge of prepaid balance and Super
            Card from My Ufone, ufone.com & UPaisa App.
          </marquee>
        </div>
      </div>

      <div className="row">
        <div className="col-md-7">
          <h1 className="recharge mt-3">Ufone 4G Online Recharge</h1>
          <p className="recharge-para">
            Recharge your Ufone 4G number online with your Credit/Debit or
            UPaisa account and get 10% cashback.
          </p>
          <p className="mobile-num">Please enter your mobile number below.</p>
          <div className="row">
            <div className="col-md-7">
              <input
                className="rinput mt-1"
                type="text"
                class="rinput"
                id="num"
                maxlength="11"
                placeholder="Type mobile number 03XX XXX XX XX"
              />
            </div>
            <div className="col-md-5">
              <button type="button" id="show" class="orange_btnSloped">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Submit
              </button>
            </div>
            <div>
              <h4 className="guidelines mt-5">Recharge Guidelines</h4>
              <ul className="list-unstyled">
                <li className="listguide mt-3"><img src="Assests/bullet.jpg" alt="" /> Users can perform 5 transactions per card in 24 hours.</li>
                <li className="listguide mt-3"><img src="Assests/bullet.jpg" alt="" /> Online card usage must be permitted from the bank.</li>
                <li className="listguide mt-3"><img src="Assests/bullet.jpg" alt="" /> Customer can make minimum of Rs. 90 and maximum of Rs. 10,000 per transaction</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-5">
          <img
            className="img-fluid p-5"
            src="Assests/recharge by card.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Recharge;
