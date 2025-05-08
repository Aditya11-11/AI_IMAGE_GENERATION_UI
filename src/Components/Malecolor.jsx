import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import axios from "axios";

const EyeHairSelection = () => {
  const [selectedEyeColor, setSelectedEyeColor] = useState("#3D1F14"); // Default eye color
  const [selectedHairColor, setSelectedHairColor] = useState("#FFFFFF"); // Default hair color
  const [selectedHairStyle, setSelectedHairStyle] = useState("Undercut"); // Default hair style

  const eyeColors = ["#3D1F14", "#A66A2C", "#4B7090", "#5A98C9", "#4473B3", "#D7DFE5", "#A4C639"];
  const hairColors = [
    "#E2C29B", "#C09A71", "#8B5A2B", "#6A3E1E", "#4F2A14", "#3B1C0F", 
    "#FFFFFF", "#C0C0C0", "#808080", "#404040", "#000000",
    "#FF0000", "#FFA500", "#FFFF00", "#00FF00", "#00FFFF", "#0000FF", "#FF00FF"
  ];
  const hairStyles = [
    { name: "Undercut", img: "/img/hairboy1" },
    { name: "Pompadour", img: "/img/hairboy2" },
    { name: "Man bun", img: "/img/boyhair3.jpg" },
    { name: "Long", img: "/img/hairboy4" },
  ];

  useEffect(() => { 
    localStorage.setItem("eye_color", selectedEyeColor);
    localStorage.setItem("hair_color", selectedHairColor);
    localStorage.setItem("hair_style", selectedHairStyle);
  } , [selectedEyeColor, selectedHairColor, selectedHairStyle]);

  const handleGenerateImage = async () => {
    // Constructing the data as per the request body format
    const generateData = {
      gender: localStorage.getItem("gender"),
      age: localStorage.getItem("age"), // Make sure this value is stored in localStorage
      body_shape: localStorage.getItem("body_shape"),
      skin_color: localStorage.getItem("skin_color"),
      eye_color: localStorage.getItem("eye_color"),
      hair_color: localStorage.getItem("hair_color"),
      hair_style: localStorage.getItem("hair_style"),
     // Make sure this value is also stored
    };
  
    // Log the data to check it
    console.log("Generated Data:", generateData);
  
    try {
      const response = await axios.post(
        "https://image-generation-production.up.railway.app/text-to-image",
        generateData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
  
      console.log("Generated Image:", response.data);
    } catch (error) {
      console.error("Error generating image:", error.response ? error.response.data : error.message);
    }
  };


  return (
    <div className="container text-center mt-5 text-white" style={{  paddingBottom: "20px" }}>
      <h2>Define Eye Color and Hair Appearance</h2>
      <p>Choose "Simple" for a simplified experience or "Advanced" for more control.</p>

      {/* Simple & Advanced Buttons */}
      {/* <div className="btn-group mt-3">
        <button className="btn btn-light active">Simple</button>
        <button className="btn btn-secondary">Advanced</button>
      </div> */}

      {/* Eye Color Selection */}
      <h4 className="mt-4">Eye Color</h4>
      <div className="d-flex justify-content-center flex-wrap">
        {eyeColors.map((color, index) => (
          <div
            key={index}
            className={`rounded-circle m-2 ${selectedEyeColor === color ? "border border-primary" : ""}`}
            style={{
              width: "35px",
              height: "35px",
              backgroundColor: color,
              cursor: "pointer",
            }}
            onClick={() => setSelectedEyeColor(color)}
          ></div>
        ))}
      </div>

      {/* Hair Color Selection */}
      <h4 className="mt-4">Hair Color</h4>
      <div className="d-flex justify-content-center flex-wrap">
        {hairColors.map((color, index) => (
          <div
            key={index}
            className={`rounded-circle m-2 ${selectedHairColor === color ? "border border-primary" : ""}`}
            style={{
              width: "35px",
              height: "35px",
              backgroundColor: color,
              cursor: "pointer",
            }}
            onClick={() => setSelectedHairColor(color)}
          ></div>
        ))}
      </div>

      {/* Hair Style Selection */}
      <h4 className="mt-4">Hair Style</h4>
      <div className="row justify-content-center">
        {hairStyles.map((style) => (
          <div className="col-6 col-md-3" key={style.name}>
            <img
              src={style.img}
              alt={style.name}
              className={`img-fluid border rounded p-2 ${selectedHairStyle === style.name ? "border-primary" : ""}`}
              onClick={() => setSelectedHairStyle(style.name)}
              style={{ cursor: "pointer", width: "180px", height: "200px" }}
            />
            <p>{style.name}</p>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="d-flex justify-content-between mt-4">
        <Link to="/MaleCreate" className="btn btn-outline-light px-5 py-2">← Previous</Link>
        <Link to="/MaleRelationship" className="btn btn-outline-light px-5 py-2" onClick={handleGenerateImage}>Next →</Link>
      </div>
    </div>
  );
};

export default EyeHairSelection;
