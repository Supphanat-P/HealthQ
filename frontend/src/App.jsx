import React from "react";
import { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Doctor from "./components/DoctorSearch/Doctor.jsx";
import Appointment from "./components/Appointment/Appointment";
import { Routes, Route, Link } from "react-router-dom";
import { CircularProgress } from "@mui/material";
import { useData } from "./context/DataContext.jsx";

function App() {
  const { loading } = useData();

  if (loading)
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          width: "100vw",
        }}
      >
        <CircularProgress size={80} thickness={5} />
      </div>
    );

  return (
    <>
      <div className="container">
        <nav className="">
          <Link to="/" className="btn btn-outline-primary me-2">
            <i className="bi bi-person-badge"></i> Doctor
          </Link>
          <Link to="/appointment" className="btn btn-outline-success">
            <i className="bi bi-calendar-check"></i> Appointment
          </Link>
        </nav>
        <Routes>
          <Route path="/" element={<Doctor />} />
          <Route path="/appointment" element={<Appointment />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
