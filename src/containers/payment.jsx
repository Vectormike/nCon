import React, { useState } from "react";
import {
  useRavePayment,
  RavePaymentButton,
  RaveProvider
} from "react-ravepayment";
const API_publicKey = "FLWPUBK-57c817a478afbf77d29822f912046b0d-X";
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
