import React from "react";
import { Form } from "react-bootstrap";

const RadioChoice = ({
  label,
  name,
  value,
  onChange,
  options = [
    { id: "-1", value: "self", label: "เลือกเอง" },
    { id: "-2", value: "auto", label: "ระบบเลือกให้โดยอัตโนมัติ" },
  ],
  selectedValue = "",
}) => {
  return (
    <div>
      <p className="text-gray fw-bold">{label}</p>
      <Form className="d-flex flex-row gap-5 pb-4">
        {options.map((opt, idx) => (
          <Form.Group className="radio-btn" key={opt.value + idx}>
            <Form.Check.Input
              type="radio"
              id={`${name}-${idx}`}
              name={name}
              value={opt.value}
              checked={value === opt.value}
              onChange={(e) => onChange(e.target.value)}
              style={{ width: "24px", height: "24px" }}
            />
            <Form.Check.Label htmlFor={`${name}-${idx}`} className="text-gray">
              {opt.label}
            </Form.Check.Label>
          </Form.Group>
        ))}
      </Form>
      <p>{selectedValue ? selectedValue : ""}</p>
    </div>
  );
};

export default RadioChoice;
