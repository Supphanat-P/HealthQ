import React, { useMemo, useState } from "react";
import DoctorCard from "./DoctorCard.jsx";
import { useData } from "../../context/DataContext.jsx";

const Doctor = () => {
  const { doctors = [], loading } = useData() || {};
  return (
    <div className="container">
      <h1 className="text-navy mt-3">ค้นหาเเพทย์</h1>

      <div className="input-group shadow mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="ค้นหาโดย ชื่อ, ความชำนาญ, โรงพยาบาล"
        />
        <button className="btn bg-navy text-white" title="ตัวกรอง">
          ตัวกรอง
        </button>
      </div>

      <div className="d-flex gap-4 mb-3">
        <h3 className="bg-navy text-white rounded fs-6 mt-2 p-2 align-items-center">
          ชื่อโรงพยาบาล
        </h3>
        <h3 className="bg-navy text-white rounded fs-6 mt-2 p-2 align-items-center">
          ความชำนาญแพทย์
        </h3>
      </div>

      <div className="d-flex flex-wrap gap-4 justify-content-center">
        {doctors.map((doctor) => (
          <DoctorCard key={doctor.doctor_id} doctor={doctor} />
        ))}
      </div>
    </div>
  );
};

export default Doctor;
