import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Feedback from "../Feedback/Feedback";
import "./Payment.css";

const Payment = () => {
  const location = useLocation();
  const [payMsg, setPayMsg] = useState("");
  const [payStatus, setPayStatus] = useState(false);
  const amount = location.state;
  //console.log(amount);

  const submitPay = (e) => {
    e.preventDefault();
    setPayStatus(true);
    console.log(payStatus);

    setPayMsg(`Payment of Rs. ${amount} successfully completed...`);
  };

  return (
    <div>
      <div class="container1">
        <div class="centre-content">
          <h1 class="price">
            Pay Safe<span>/-</span>
          </h1>
          <p class="course">Rs.{amount}</p>
        </div>

        {/* <div class="last-content">
               <button type="button" class="pay-now-btn">
            Apply Coupons
          </button>
          <button type="button" class="pay-now-btn">
            Pay with Netbanking
          </button><button type="button" class="pay-now-btn">
            Netbanking options
          </button> 
        </div> */}

        {!payStatus ? (
          <div class="card-details">
            <p id="pay_head">Pay using Credit or Debit card</p>

            <form onSubmit={submitPay}>
              <div class="card-number">
                <label id="form_label"> Card Number </label>
                <input
                  type="number"
                  class="card-number-field"
                  placeholder="###-###-###"
                  required
                />
              </div>

              <div class="date-number">
                <label id="form_label"> Expiry Date </label>
                <input
                  type="number"
                  class="date-number-field"
                  placeholder="MM-YY"
                  required
                />
              </div>

              <div class="cvv-number">
                <label id="form_label"> CVV number </label>
                <input
                  type="number"
                  class="cvv-number-field"
                  placeholder="xxx"
                  required
                />
              </div>
              <div class="nameholder-number">
                <label id="form_label">Card Holder Name</label>
                <input
                  type="text"
                  class="card-name-field"
                  placeholder="Enter your Name"
                  required
                />
              </div>
              <input type="submit" class="submit-now-btn" value="Pay" />
            </form>
          </div>
        ) : (
          <div id="payMsg">
            <div>{payMsg}</div>
            <div>
              <Feedback />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Payment;
