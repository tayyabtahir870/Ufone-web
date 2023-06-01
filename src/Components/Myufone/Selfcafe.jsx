import React from "react";
import Faqs from "../Utils/Faqs";

function Selfcafe() {
  return (
    <div>
      <div>
        <img
          className="img-fluid banner"
          src="Assests/selfcare.jpg"
          alt=""
          width={1600}
        />
      </div>
      <div className="container p-5">
        <div className="row">
          <h1 className="mt-4 login">Ufone Login</h1>
          <p className="description">
            Manage all your Ufone accounts with a single Self Care login. Buy
            Super Card, know your call history, or recharge your prepaid number
            in few simple <br /> steps using the Ufone Self Care.
          </p>
        </div>
        <div className="row">
          <div className="col-md-6 ">
            <h2 className="access">Full Access</h2>
            <p className="description">
              Get complete access and manage multiple Ufone Numbers from one{" "}
              <br />
              account with Ufone Self Care account registration. Register now!
            </p>
            <div className="description">
              Enter your mobile number:
              <input
                name="msisdn"
                type="text"
                maxlength="11"
                id="msisdn"
                class="loginfeild"
                placeholder="03xxxxxxxxx"
                required=""
              ></input>
            </div>
            <br />

            <div className="description">
              Password:
              <input
                type="password"
                id="password"
                name="password"
                class="loginfeild"
                required=""
              />
            </div>
            <div>
              <button className="sign-in mt-3">Login</button>
            </div>
            <div className="mt-3">
              <a className="forgetpassward" href="password.php">
                Forgot Password{" "}
              </a>{" "}
              &nbsp;&nbsp;
              <a className="forgetpassward" href="register.php">
                Not Registered?
              </a>
            </div>
          </div>

          <div className="col-md-6">
            <h2 className="access">Individual Access</h2>
            <p className="description">
              Get complete access and manage your current Ufone Number with{" "}
              <br /> Ufone Self Care login. Register now!
            </p>
            <div className="description">
              Enter your mobile number:
              <input
                name="msisdn"
                type="text"
                maxlength="11"
                id="msisdn"
                class="loginfeild"
                placeholder="03xxxxxxxxx"
                required=""
              ></input>
            </div>
            <br />

            <div className="description">
              CNIC:
              <input
                type="TEXT"
                id="cnic"
                name="cnic"
                class="loginfeild"
                required=""
              />
            </div>
            <div>
              <button className="sign-in mt-3">Login</button>
            </div>
          </div>
        </div>
        <div className="row">
          <h2 className="description-1 mt-5">Convenience on the go with My Ufone App</h2>
          <p className="description">
            Latest My Ufone App on Android platform offers fresh new look and
            better user experience. Now use your most favorite features with
            extra <br /> convenience and at greater ease. Subscribe to your all-time
            favorite Ufone products in a matter of seconds. Get your hands on
            the newest App <br /> version to experience it all on your personal device.
          </p>
          <p className="description">Latest My Ufone App version is available on Android and iOS: </p>
          <div>
          <img className="img-fluid" src="Assests/playstore.jpg" alt="" /> &nbsp;
          <img className="img-fluid" src="Assests/appstore.jpg" alt="" width={160} />
          </div>
        </div>
        <div className="row">
             <Faqs/>
        </div>
      </div>
    </div>
  );
}

export default Selfcafe;
