import React, { useState, useEffect } from "react";
import AppointmentHeader from "./AppointmentHeader";
import RadioChoice from "./RadioChoice";
import ActionButtons from "./ActionButtons";
import Stepper from "../Stepper/Stepper";
import HospitalModal from "./HospitalModal";
import SpecialtyModal from "./SpecialtyModal";

const Appointment = () => {
  const [hospitalOption, setHospitalOption] = useState("");
  const [doctorOption, setDoctorOption] = useState("");

  useEffect(() => {
    console.log("doctor : ", doctorOption);
  }, [doctorOption]);

  const handleReset = () => {
    setHospitalOption("");
    setDoctorOption("");
  };

  const [HospitalModalOpen, setHospitalModalOpen] = useState(false);
  const [SpecialtyModalOpen, setSpecialtyModalOpen] = useState(false);
  const [selectedSpecialties, setSelectedSpecialties] = useState([]);
  const [selectedHospitals, setSelectedHospitals] = useState([]);

  const handleNext = () => {
    console.log("next: ", { selectedHospitals, selectedSpecialties });
  };

  useEffect(() => {
    setHospitalModalOpen(hospitalOption === "self");
  }, [hospitalOption]);
  useEffect(() => {
    setSpecialtyModalOpen(doctorOption === "self");
  }, [doctorOption]);

  return (
    <>
      <HospitalModal
        open={HospitalModalOpen}
        onClose={() => setHospitalModalOpen(false)}
        selectedHospitals={selectedHospitals}
        setSelectedHospitals={setSelectedHospitals}
      />
      <SpecialtyModal
        open={SpecialtyModalOpen}
        onClose={() => setSpecialtyModalOpen(false)}
        selectedSpecialties={selectedSpecialties}
        setSelectedSpecialties={setSelectedSpecialties}
      />
      <AppointmentHeader />
      <div className="container-fluid mb-5">
        <div className="row align-items-center justify-content-center">
          <div className="col-auto d-flex align-items-center">
            <Stepper Step={1} />
          </div>

          <div className="col-auto d-flex justify-content-center">
            <div
              className="d-flex flex-column p-4 justify-content-center shadow rounded bg-softgray"
              style={{ width: "fit-content", marginRight: "12rem" }}
            >
              <RadioChoice
                label="เลือกโรงพยาบาล"
                name="hospital"
                value={hospitalOption}
                onChange={setHospitalOption}
                options={[
                  { value: "self", label: "เลือกโรงพยาบาลเอง" },
                  { value: "auto", label: "ระบบเลือกให้โดยอัตโนมัติ" },
                ]}
                selectedValue={
                  selectedHospitals && selectedHospitals.length > 0
                    ? "คุณเลือก : " +
                      selectedHospitals.map((s) => s.hospital_name).join(", ")
                    : ""
                }
              />

              <RadioChoice
                label="เลือกแพทย์"
                name="doctor"
                value={doctorOption}
                onChange={setDoctorOption}
                options={[
                  { value: "self", label: "เลือกแพทย์เอง" },
                  { value: "auto", label: "ระบบเลือกให้โดยอัตโนมัติ" },
                ]}
                selectedValue={
                  selectedSpecialties && selectedSpecialties.length > 0
                    ? "คุณเลือก : " +
                      selectedSpecialties
                        .map((s) => s.specialty_name)
                        .join(", ")
                    : ""
                }
              />

              <ActionButtons onReset={handleReset} onNext={handleNext} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Appointment;
