import React, { useState } from "react";
import {
  useRavePayment,
  RavePaymentButton,
  RaveProvider
} from "react-ravepayment";
const API_publicKey = "FLWPUBK_TEST-dab61d7c9544646fb55d37a6e6f710ff-X";
const Payment = () => {
  const [details, setDetails] = useState({
    amount: 1000,
    txref: "rave-123456",
    customer_email: "victorjonah199@gmail.com",
    customer_phone: "08086249721",
    PBFPubKey: API_publicKey,
    onSuccess: () => {},
    onClose: () => {}
  });

  const onChange = e => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  // Test MasterCard PIN authentication
  // 5531 8866 5214 2950
  // cvv 564
  // Expiry: 09/22
  // Pin 3310
  // otp 12345
  const { customer_email, customer_phone } = details;
  const { initializePayment } = useRavePayment(details);

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
        }}
      >
        <input
          type="email"
          name="email"
          value={customer_email}
          placeholder="Email"
        />
        <input
          onChange={e => onChange(e)}
          type="text"
          id="number"
          name="number"
          value={customer_phone}
          placeholder="Phone number"
          required
        />

        <div>
          <button onClick={() => initializePayment()}>Pay Dues</button>
        </div>
      </form>
    </div>
  );
};

export default Payment;
