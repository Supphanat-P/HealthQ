import React, { createContext, useContext, useEffect, useState } from "react";

const DataContext = createContext(null);

export const useData = () => useContext(DataContext);

export const DataProvider = ({ children }) => {
  const [specialties, setSpecialties] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [hospitals, setHospitals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    Promise.all([
      fetch("http://localhost:5000/specialties").then((r) => r.json()),
      fetch("http://localhost:5000/doctors").then((r) => r.json()),
      fetch("http://localhost:5000/hospitals").then((r) => r.json()),
    ])
      .then(([specialtiesData, doctorsData, hospitalsData]) => {
        if (!mounted) return;
        const s = specialtiesData || [];
        const d = doctorsData || [];

        const specialtyMap = new Map();
        s.forEach((sp) => {
          const id = sp.specialty_id || sp.id || sp._id;
          const name = sp.specialty_name || sp.name || sp.specialty || "";
          if (id != null) specialtyMap.set(id, name);
        });

        const hospitalMap = new Map();
        (hospitalsData || []).forEach((h) => {
          const id = h.hospital_id || h.id || h._id;
          const name = h.hospital_name || h.name || h.title || "";
          if (id != null) hospitalMap.set(id, name);
        });

        const Doctors = d.map((doc) => {
          const specId = doc.specialty_id || doc.specialty || doc.specialtyId;
          const specialty_name =
            doc.specialty_name || specialtyMap.get(specId) || null;

          const hospId = doc.hospital_id || doc.hospital || doc.hospitalId;
          const hospital_name =
            doc.hospital_name || hospitalMap.get(hospId) || null;

          return { ...doc, specialty_name, hospital_name };
        });

        setSpecialties(s);
        setDoctors(Doctors);
        setHospitals(hospitalsData || []);
        setLoading(false);
      })
      .catch((err) => {
        if (!mounted) return;
        console.error("DataProvider load error:", err);
        setError(err);
        setLoading(false);
      });

    return () => {
      mounted = false;
    };
  }, []);

  const value = {
    specialties,
    doctors,
    hospitals,
    loading,
    error,
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

export default DataContext;
