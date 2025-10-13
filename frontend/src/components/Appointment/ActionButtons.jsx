import React from "react";

const ActionButtons = ({ onReset = () => {}, onNext = () => {} }) => {
  return (
    <div className="d-flex flex justify-content-between mt-5">
      <button
        onClick={onReset}
        className="d-flex align-items-center justify-content-center border-0 shadow-sm "
        style={{
          width: "125px",
          height: "57px",
          color: "#002D73",
          backgroundColor: "#FFFFFF",
          borderRadius: "5px",
          padding: "10px",
          fontSize: "18px",
          gap: "10px",
        }}
      >
        <i className="bi bi-chevron-left"></i>
        เริ่มใหม่
      </button>
      <button
        onClick={onNext}
        className="d-flex align-items-center justify-content-center border-0 shadow-sm"
        style={{
          width: "125px",
          height: "57px",
          color: "#ffffff",
          background: "#002D73",
          borderRadius: "5px",
          padding: "10px",
          fontSize: "18px",
          gap: "10px",
        }}
      >
        <i className="bi bi-chevron-right"></i>
        ต่อไป
      </button>
    </div>
  );
};

export default ActionButtons;
