import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";


const MenCreate = () => {
  const [selectedType, setSelectedType] = useState("boy");
  const [age, setAge] = useState("");
  const [selectedShape, setSelectedShape] = useState("");
  const [selectedBreastSize, setSelectedBreastSize] = useState("");
  const [selectedButtSize, setSelectedButtSize] = useState("");
  const [selectedSkin, setSelectedSkin] = useState("#f3d1c4");


  useEffect(() => {
    localStorage.setItem("gender", selectedType);
    localStorage.setItem("age", age);
    localStorage.setItem("body_shape", selectedShape);
    localStorage.setItem("skin_color", selectedSkin);
  }, [selectedShape, selectedSkin, selectedType, age]);

  const handleSelectType = (type) => {
    setSelectedType(type);
    console.log(`Selected: ${type} with Age: ${age}`);
    // Add your logic here for what happens when a type is selected
  }; 


  const bodyShapes = [
    { name: "Skinny", img: "/img/outputboy1.jpg" },
    { name: "Athletic", img: "/img/outputboy2.jpg" },
    { name: "Chubby", img: "/img/outputboy3.jpg" },
    { name: "Fat", img: "/img/outputboy4.jpg" },
  ];

  // const breastSizes = [
  //   { name: "Small", img: "https://via.placeholder.com/100?text=Small" },
  //   { name: "Medium", img: "https://via.placeholder.com/100?text=Medium" },
  //   { name: "Large", img: "https://via.placeholder.com/100?text=Large" },
  //   { name: "Extra Large", img: "https://via.placeholder.com/100?text=Extra+Large" },
  // ];

  // const buttSizes = [
  //   { name: "Small", img: "https://via.placeholder.com/100?text=Small" },
  //   { name: "Medium", img: "https://via.placeholder.com/100?text=Medium" },
  //   { name: "Large", img: "https://via.placeholder.com/100?text=Large" },
  //   { name: "Extra Large", img: "https://via.placeholder.com/100?text=Extra+Large" },
  // ];

  const skinColors = ["#f3d1c4", "#e3b28f", "#c99674", "#a86d50", "#82523d", "#5d3a2a"];

  return (
    <div className="container text-center mt-5 text-white" style={{ paddingBottom: "20px" }}>
      <h2>Your Character Begins Here - Define the Essentials!</h2>
      <p>Choose "Simple" for a simplified experience or "Advanced" for more control.</p>

      {/* Simple & Advanced Buttons */}
      {/* <div className="btn-group mt-3">
        <button className="btn btn-light active">Simple</button>
        <button className="btn btn-secondary">Advanced</button>
      </div> */}

      {/* Body Type Selection */}
      <h4 className="mt-4">Choose Body Type</h4>
     <div className="row justify-content-center">
           {/* Female Option */}
           <div className="col-6 col-md-3">
             <img
               src="/img/output1.jpg"
               alt="Female"
               className={`img-fluid border rounded p-2 ${selectedType === "Female" ? "border-primary" : ""}`}
               style={{ width: "250px", height: "250px" }}
             />
             <br />
             <Link to="/CreatePhoto"
               className="btn btn-primary mt-2"
               onClick={() => handleSelectType("Female")}
             >
               Select Female
             </Link>
           </div>
     
           {/* Male Option */}
           <div className="col-6 col-md-3">
             <img
               src="/img/outputboy.jpg"
               alt="Male"
               className={`img-fluid border rounded p-2 ${selectedType === "boy" ? "border-primary" : ""}`}
               style={{ width: "250px", height: "250px" }}
             />
             <br />
             <Link to="/MaleCreate"
               className="btn btn-primary mt-2"
               onClick={() => handleSelectType("boy")}
             >
               Select Male
             </Link>
           </div>
         </div>

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
              className={`img-fluid border rounded p-2 ${selectedShape === shape.name ? "border-primary" : ""}`}
              onClick={() => setSelectedShape(shape.name)}
              style={{ cursor: "pointer", width: "180px", height: "180px" }}
            />
            <p>{shape.name}</p>
          </div>
        ))}
      </div>



      {/* Skin Color Selection */}
      <h4 className="mt-4">Choose Skin Color</h4>
      <div className="d-flex justify-content-center flex-wrap">
        {skinColors.map((color, index) => (
          <div
            key={index}
            className={`rounded-circle m-2 ${selectedSkin === color ? "border border-primary" : ""}`}
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
      <Link to="/MaleColor" className="btn btn-light mt-4 px-5 py-2"> Generate Image</Link>
    </div>
  );
};

export default MenCreate;
