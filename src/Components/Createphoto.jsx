import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const CharacterSelection = () => {
  const [selectedType, setSelectedType] = useState("Male");
  const [selectedShape, setSelectedShape] = useState("");
  const [selectedBreastSize, setSelectedBreastSize] = useState("");
  const [selectedButtSize, setSelectedButtSize] = useState("");
  const [selectedSkin, setSelectedSkin] = useState("#f3d1c4");
  const [age, setAge] = useState("");

  useEffect(() => {
    localStorage.setItem("gender", selectedType);
    localStorage.setItem("age", age);
    localStorage.setItem("body_shape", selectedShape);
    localStorage.setItem("breast_size", selectedBreastSize);
    localStorage.setItem("butt_size", selectedButtSize);
    localStorage.setItem("skin_color", selectedSkin);
  }, [selectedShape, selectedBreastSize, selectedButtSize, selectedSkin,selectedType]);

  const handleSelectType = (type) => {
    setSelectedType(type);
    console.log(`Selected: ${type} with Age: ${age}`);
  };

  const bodyShapes = [
    { name: "Skinny", img: "/img/outputFamale1.jpg" },
    { name: "Well Built", img: "/img/outputFemale2.jpg" },
    { name: "Athletic", img: "/img/outputFemale3.jpg" },
    { name: "Curvy", img: "/img/outputFemale4.jpg" },
  ];

  const breastSizes = [
    { name: "Small", img: "/img/outputFemale5.jpg" },
    { name: "Medium", img: "/img/outputFemale6.jpg" },
    { name: "Large", img: "/img/outputFemale7.jpg" },
    { name: "Extra Large", img: "/img/outputFemale8.jpg" },
  ];

  const buttSizes = [
    { name: "Small", img: "/img/butt1.jpg" },
    { name: "Medium", img: "/img/butt2.jpg" },
    { name: "Large", img: "/img/butt3.jpg" },
    { name: "Extra Large", img: "/img/butt4.jpg" },
  ];

  const skinColors = ["#f3d1c4", "#e3b28f", "#c99674", "#a86d50", "#82523d", "#5d3a2a"];

  return (
    <div className="container text-center mt-5 text-white" style={{ paddingBottom: "20px" }}>
      <h2>Your Character Begins Here - Define the Essentials!</h2>
      <p>Choose "Simple" for a simplified experience or "Advanced" for more control.</p>

      {/* Body Type Selection */}
      <h4 className="mt-4">Choose Body Type</h4>
      <div className="row justify-content-center">
        <div className="col-6 col-md-3">
          <img
            src="/img/output1.jpg"
            alt="Female"
            className={`img-fluid border rounded p-2 ${selectedType === "Female" ? "border-primary border-2" : ""}`}
            style={{ width: "250px", height: "250px" }}
          />
          <br />
          <Link to="/CreatePhoto" className="btn btn-primary mt-2" onClick={() => handleSelectType("Female")}>
            Select Female
          </Link>
        </div>

        <div className="col-6 col-md-3">
          <img
            src="/img/outputboy.jpg"
            alt="Male"
            className={`img-fluid border rounded p-2 ${selectedType === "Male" ? "border-primary border-2" : ""}`}
            style={{ width: "250px", height: "250px" }}
          />
          <br />
          <Link to="/MaleCreate" className="btn btn-primary mt-2" onClick={() => handleSelectType("Male")}>
            Select Male
          </Link>
        </div>
      </div>

      {/* Age Input */}
      <div className="mt-4">
        <label className="form-label">Enter Age</label>
        <input
          type="number"
          placeholder="Enter Age"
          className="form-control bg-dark text-white border-0"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          required
          min="1"
        />
      </div>

      {/* Body Shape Selection */}
      <h4 className="mt-4">Choose Body Shape</h4>
      <div className="row justify-content-center">
        {bodyShapes.map((shape) => (
          <div className="col-6 col-md-2" key={shape.name}>
            <img
              src={shape.img}
              alt={shape.name}
              className={`img-fluid border rounded p-2 ${selectedShape === shape.name ? "border-primary border-2" : ""}`}
              onClick={() => setSelectedShape(shape.name)}
              style={{ cursor: "pointer", width: "150px", height: "150px" }}
            />
            <p>{shape.name}</p>
          </div>
        ))}
      </div>

      {/* Breast Size Selection */}
      <h4 className="mt-4">Choose Breast Size</h4>
      <div className="row justify-content-center">
        {breastSizes.map((size) => (
          <div className="col-6 col-md-2" key={size.name}>
            <img
              src={size.img}
              alt={size.name}
              className={`img-fluid border rounded p-2 ${selectedBreastSize === size.name ? "border-primary border-2" : ""}`}
              onClick={() => setSelectedBreastSize(size.name)}
              style={{ cursor: "pointer", width: "150px", height: "150px" }}
            />
            <p>{size.name}</p>
          </div>
        ))}
      </div>

      {/* Butt Size Selection */}
      <h4 className="mt-4">Choose Butt Size</h4>
      <div className="row justify-content-center">
        {buttSizes.map((size) => (
          <div className="col-6 col-md-2" key={size.name}>
            <img
              src={size.img}
              alt={size.name}
              className={`img-fluid border rounded p-2 ${selectedButtSize === size.name ? "border-primary border-2" : ""}`}
              onClick={() => setSelectedButtSize(size.name)}
              style={{ cursor: "pointer", width: "150px", height: "150px" }}
            />
            <p>{size.name}</p>
          </div>
        ))}
      </div>

      {/* Skin Color Selection */}
      <h4 className="mt-4">Choose Skin Color</h4>
      <div className="d-flex justify-content-center flex-wrap">
        {skinColors.map((color, index) => (
          <div
            key={index}
            className={`rounded-circle m-2 ${selectedSkin === color ? "border border-primary border-2" : ""}`}
            style={{
              width: "40px",
              height: "40px",
              backgroundColor: color,
              cursor: "pointer",
            }}
            onClick={() => setSelectedSkin(color)}
          ></div>
        ))}
      </div>

      {/* Next Button */}
      <Link to="/FemaleEyeHair" className="btn btn-light mt-4 px-5 py-2">
        Generate Image
      </Link>
    </div>
  );
};

export default CharacterSelection;
