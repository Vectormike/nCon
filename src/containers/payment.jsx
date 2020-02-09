import React, { useState } from "react";
import {
  useRavePayment,
  RaveProvider,
  RavePaymentButton
} from "react-ravepayment";

const config = {
  txref: "rave-123456",
  customer_email: "user@example.com",
  customer_phone: "234099940409",
  amount: 2000,
  PBFPubKey: "FLWPUBK-57c817a478afbf77d29822f912046b0d-X",
  onSuccess: () => {},
  onClose: () => {}
};

const Payment = () => {
  return (
    <div>
      <RaveProvider {...config}>
        <RavePaymentButton>Pay Dues</RavePaymentButton>
      </RaveProvider>
    </div>
  );
};

export default Payment;
