import { useState, useEffect } from "react";
import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "fit-content",
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: 2,
  p: 4,
  outline: "none",
};

import { useData } from "../../context/DataContext.jsx";

const HospitalModal = ({
  open = false,
  onClose = () => {},
  selectedHospitals = [],
  setSelectedHospitals = () => {},
}) => {
  const { hospitals = [], loading, error } = useData() || {};

  return (
    <div>
      <Modal open={open} onClose={onClose}>
        <Box sx={{ ...style, fontFamily: "Kanit, Inter, Arial, sans-serif" }}>
          <Typography
            id="modal-modal-title"
            className="text-center mt-0 text-navy fw-bold"
            variant="h6"
            component="h2"
          >
            เลือกโรงพยาบาล
          </Typography>

          <div id="modal-modal-description" style={{ marginTop: 12 }}>
            {loading && <div>Loading hospitals...</div>}
            {error && (
              <div className="text-danger">Failed to load hospitals</div>
            )}
            <div className="d-flex flex-column gap-2">
              {hospitals.map((hospital) => (
                <button
                  key={hospital.hospital_id}
                  className="btn btn-outline-primary"
                  onClick={() => {
                    setSelectedHospitals((prev) => {
                      if (
                        prev.some((p) => p.hospital_id === hospital.hospital_id)
                      )
                        return prev;
                      return [...prev, hospital];
                    });
                    onClose();
                  }}
                >
                  {hospital.hospital_name}
                </button>
              ))}
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
};
export default HospitalModal;
