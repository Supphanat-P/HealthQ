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

const SpecialtyModal = ({
  open = false,
  onClose = () => {},
  selectedSpecialties = [],
  setSelectedSpecialties = () => {},
}) => {
  const { specialties = [], loading, error } = useData() || {};
  return (
    <div>
      <Modal open={open} onClose={onClose}>
        <Box sx={{ ...style }}>
          <Typography
            id="modal-modal-title"
            className="text-center mt-0 text-navy fw-bold"
            variant="h6"
            component="h2"
          >
            เลือกความชำนาญแพทย์
          </Typography>

          <div id="modal-modal-description" style={{ marginTop: 12 }}>
            {loading && <div>Loading doctors...</div>}
            {error && <div className="text-danger">Failed to load doctors</div>}
            <div
              className="d-flex flex-wrap justify-content-center"
              style={{
                gap: "0.5rem",
                maxHeight: "70vh",
                minWidth: "800px",
                overflowY: "auto",
              }}
            >
              {specialties.map((specialty) => (
                <button
                  key={specialty.specialty_id}
                  className="btn btn-outline-primary shadow text-navy text-start"
                  style={{ width: "250px", height: "70px" }}
                  onClick={() => {
                    setSelectedSpecialties((prev) => {
                      if (
                        prev.some(
                          (p) => p.specialty_id === specialty.specialty_id
                        )
                      )
                        return prev;
                      return [...prev, specialty];
                    });
                    onClose();
                  }}
                >
                  {specialty.specialty_name}
                </button>
              ))}
              <button
                key="other"
                className="btn btn-outline-primary shadow text-navy text-start"
                style={{ width: "250px", height: "70px" }}
              >
                อื่นๆ
              </button>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
};
export default SpecialtyModal;
