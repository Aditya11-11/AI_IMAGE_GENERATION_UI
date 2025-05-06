import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const FemaleDetails = () => {
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    ethnicity: "",
    age: "",
  });

  const ethnicities = [
    "Argentinean", "American", "Indian", "Chinese", "French", "German",
    "Japanese", "Brazilian", "Mexican", "Canadian", "Italian", "Spanish"
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="container text-white mt-5" style={{ paddingBottom: "20px" }}>
      <h2 className="text-center"> Complete with Name, Ethnicity, and Age</h2>
      <p className="text-center">Choose "Simple" for a simplified experience or "Advanced" for more control.</p>

      {/* Form Fields */}
      <form className="mt-4">
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            placeholder="Enter Name"
            className="form-control bg-dark text-white border-0"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Last Name</label>
          <input
            type="text"
            placeholder="Enter Last Name"
            className="form-control bg-dark text-white border-0"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Ethnicity</label>
          <select
            className="form-select bg-dark text-white border-0"
            name="ethnicity"
            value={formData.ethnicity}
            onChange={handleChange}
            required
          >
            <option value="">Select Ethnicity</option>
            {ethnicities.map((ethnicity) => (
              <option key={ethnicity} value={ethnicity}>
                {ethnicity}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label">Age</label>
          <input
            type="number"
            placeholder="Enter Age"
            className="form-control bg-dark text-white border-0"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
            min="1"
          />
        </div>
      </form>

      {/* Navigation Buttons */}
      <div className="d-flex justify-content-between mt-4">
        <Link to="/FemaleRelation" className="btn btn-dark px-5 py-2">← Previous</Link>
        <Link to="/createimage" className="btn btn-dark px-5 py-2">Next →</Link>
      </div>
    </div>
  );
};

export default FemaleDetails;
