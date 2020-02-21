import React, { useState } from "react";
import {
  useRavePayment,
  RavePaymentButton,
  RaveProvider
} from "react-ravepayment";
const API_publicKey = "FLFLWPUBK_TEST-b970131ad4cf343d38857bf33d5733c4-X";
const Payment = () => {
  const [details, setDetails] = useState({
    amount: 10,
    txref: "rave-123456",
    customer_email: "victorjonah199@gmail.com",
    customer_phone: "234099940409",
    PBFPubKey: API_publicKey,
    onSuccess: () => {},
    onClose: () => {}
  });

  const { customer_email, customer_phone } = details;
  const onChange = e => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  // Test MasterCard PIN authentication
  // 5531 8866 5214 2950
  // cvv 564
  // Expiry: 09/22
  // Pin 3310
  // otp 12345

  return (
    <div>
      <RaveProvider {...details}>
        <form>
          <input
            onChange={e => onChange(e)}
            type="email"
            id="email"
            name="email"
            value={customer_email}
            placeholder="Email"
            style={{ fontFamily: "Arial, FontAwesome" }}
            required
          />
          <input
            onChange={e => onChange(e)}
            type="number"
            id="number"
            name="number"
            value={customer_phone}
            placeholder="Number"
            style={{ fontFamily: "Arial, FontAwesome" }}
            required
          />
        </form>
        <RavePaymentButton>Pay Dues</RavePaymentButton>
      </RaveProvider>
    </div>
  );
};

export default Payment;
