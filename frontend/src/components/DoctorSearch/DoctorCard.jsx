import React from "react";

const DoctorCard = ({
  doctor = {},
}) => {
  const id = doctor.doctor_id;
  const name = doctor.doctor_name || "ไม่ระบุชื่อ";
  const specialty = doctor.specialty_name || "-";
  const hospital = doctor.hospital_name || "-";
  const image = doctor.image || null;

  return (
    <div className="card mt-2 shadow" style={{ width: "280px" }}>
      {image ? (
        <img
          src={image}
          alt={name}
          style={{ width: "100%", height: 300, objectFit: "cover" }}
        />
      ) : (
        <div style={{ height: 300, background: "#f5f7fa" }} />
      )}

      <div className="bg-navy text-white p-3">
        <div className="text-center mb-2">
          <h5 className="mb-0" key={id}>
            {name}
          </h5>
          <small>ความชำนาญแพทย์ : {specialty}</small>
          <div className="small">โรงพยาบาล : {hospital}</div>
        </div>

        <div className="d-flex gap-2 justify-content-center">
          <button
            className="btn btn-lg bg-white text-dark w-50 fs-6"
          >
            นัดหมาย
          </button>

          <button
            className="btn btn-lg bg-white text-dark w-50 fs-6"
          >
            รายละเอียด
          </button>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;
