import React from "react";
import QRCode from "react-qr-code";

const Qrcode = (props) => {
  const totalAmount = props.amount;
  console.log(totalAmount);

  return (
    <div>
      <QRCode value={`${totalAmount}`} />
    </div>
  );
};

export default Qrcode;
