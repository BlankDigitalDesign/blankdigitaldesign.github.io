import React, { useState } from "react";

const FormSelect = ({ handleSelect, selectedService }) => {
  const [selectValue, setSelectValue] = useState("");
  console.log("selectedService", selectedService);
  return (
    <select
      onChange={(e) => {
        handleSelect(e);
        setSelectValue(e.target.value);
        console.log("e", e.target.value);
      }}
      name="service"
      value={selectedService ? selectedService : selectValue}
    >
      <option value={0}>PLEASE SELECT</option>
      <option value="Free Consultation">FREE CONSULTATION</option>
      <option value="Commercial Package">COMMERCIAL PACKAGE</option>
      <option value="Specialty Service - German Roach Treatment">
        SPECIALTY SERVICE - GERMAN ROACH TREATMENT
      </option>
      <option value="Specialty Service Undiagnosed Ant Species Treatment/Application">
        SPECIALTY SERVICE - FIRE ANT TREATMENT
      </option>
      <option value="Specialty Service - Residential Flea Treatment">
        SPECIALTY SERVICE - UNDIAGNOSED ANT SPECIES TREATMENT
      </option>
      <option value="Specialty Service - Sod Webworm Treatment">
        SPECIALTY SERVICE - SOD WEBWORM TREATMENT
      </option>
      <option value="Residential Application - Termite Treatment">
        RESIDENTIAL APPLICATION - TERMITE TREATMENT
      </option>
      <option value="Residential Pest Inspection">
        RESIDENTIAL PEST INSPECTION
      </option>
      <option value="Warranty Call - Service Touch-Up">
        WARRANTY CALL - SERVICE TOUCH-UP
      </option>
      <option value="Specialty Service - Rodent Trapping/Removal/Remediation/Exclusion">
        RODENT TRAPPING/REMOVAL/REMEDIATION/EXCLUSION
      </option>
      <option value="T5 Form - WDI Inspection Report">
        T5 FORM - WDI INSPECTION REPORT
      </option>
      <option value="Residential Appointment - Gold Package">
        RESIDENTIAL APPOINTMENT - GOLD PACKAGE
      </option>
      <option value="Residential Appointment - Bronze Package">
        RESIDENTIAL APPOINTMENT - BRONZE PACKAGE
      </option>
    </select>
  );
};

export default FormSelect;
