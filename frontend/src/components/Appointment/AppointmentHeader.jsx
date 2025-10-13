import React from "react";
import Stepper from "../Stepper/Stepper.jsx";
const AppointmentHeader = () => {
  return (
    <div className="text-center justify-center  align-items-center mb-4 pb-4">
      <h1 className="m-auto text-navy">จองคิวตรวจ</h1>
      <div
        className="align-content-center m-auto"
        style={{
          height: "4px",
          width: "205px",
          backgroundImage:
            "linear-gradient(to right, #002D73, #386FAA, #8DD3FF, #8DD3FF)",
          margin: "80px 60px",
        }}
      />

    </div>
  );
};

export default AppointmentHeader;
