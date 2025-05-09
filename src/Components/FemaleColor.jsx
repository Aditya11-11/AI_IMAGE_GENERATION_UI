import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { Link } from "react-router-dom";

const FemaleEyeHair = () => {
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
    { name: "Short", img: "/img/h1" },
    { name: "Bob", img: "/img/femalehair2.jpg" },
    { name: "Long", img: "/img/h2long.jpg" },
    { name: "Bun", img: "/img/femalehair4.jpg" },
    { name: "Curly", img: "/img/h3.jpg" },
    { name: "Wavy", img: "/img/h4.jpg" },
    { name: "Asymmetrical", img: "/img/h5.jpg" },
    { name: "Undercut", img: "/img/femalehair8.jpg" },
    { name: "Hime Cut", img: "/img/h6" },
    { name: "Ponytail", img: "/img/h7" },
    { name: "Twintail", img: "/img/h8" },
    { name: "Braid", img: "/img/h9" },
  ];

  // Save selections to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("eye_color", selectedEyeColor);
    localStorage.setItem("hair_color", selectedHairColor);
    localStorage.setItem("hair_style", selectedHairStyle);
  }, [selectedEyeColor, selectedHairColor, selectedHairStyle]);


  // const handleGenerateImage = async () => {
  //   // Constructing the prompt and data
  //   const characterData = {
  //     type: localStorage.getItem("gender"),
  //     bodyShape: localStorage.getItem("body_shape"),
  //     breastSize: localStorage.getItem("breast_size"),
  //     buttSize: localStorage.getItem("butt_size"),
  //     skinColor: localStorage.getItem("skin_color"),
  //     eyeColor: localStorage.getItem("eye_color"),
  //     hairColor: localStorage.getItem("hair_color"),
  //     hairStyle: localStorage.getItem("hair_style"),
  //   };
  
  //   // const prompt = `Generate an image of a ${characterData.gender} character with ${characterData.body_shape} body shape, ${characterData.breast_size} breast size, ${characterData.butt_size} butt size, ${characterData.skin_color} skin color, ${characterData.eye_color} eyes, ${characterData.hair_color} hair, and ${characterData.hair_style} hairstyle.`;
  
  //   // Log the data to check it
  //   console.log("Generated Data:", { characterData });
  
  //   const generateData = { characterData };
  
  //   try {
  //     const response = await axios.post("https://image-generation-production.up.railway.app/text-to-image", generateData, {
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     });
  
  //     console.log("Generated Image:", response.data);
  //   } catch (error) {
  //     console.error("Error generating image:", error.response ? error.response.data : error.message);
  //   }
  // };
  const handleGenerateImage = async () => {
    const userId = localStorage.getItem("user_id"); // Retrieve user_id from localStorage
  
    if (!userId) {
      console.error("User ID is missing. Please log in.");
      alert("Please log in to continue.");
      return;  // Exit early if user_id is not available
    }
  
    const generateData = {
      user_id: userId,  // Include the user_id in the data
      gender: localStorage.getItem("gender"),
      age: localStorage.getItem("age"),
      body_shape: localStorage.getItem("body_shape"),
      breast_size: localStorage.getItem("breast_size"),
      butt_size: localStorage.getItem("butt_size"),
      skin_color: localStorage.getItem("skin_color"),
      eye_color: localStorage.getItem("eye_color"),
      hair_color: localStorage.getItem("hair_color"),
      hair_style: localStorage.getItem("hair_style"),
      nationality: localStorage.getItem("nationality"),
    };
  
    console.log("Generated Data:", generateData);
  
    const token = localStorage.getItem("token");  // Retrieve the token from localStorage
    console.log("Token:", token); // Log the token to check if it's available
    if (!token) {
      console.error("Token is missing. Please log in.");
      alert("Please log in to continue.");
      return;  // Exit early if token is missing
    }
  
    try {
      const response = await axios.post(
        "https://image-generation-production.up.railway.app/text-to-image",
        generateData,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,  // Include the token in the Authorization header
          },
        }
      );
  
      console.log("Generated Image:", response.data);
    } catch (error) {
      console.error("Error generating image:", error.response ? error.response.data : error.message);
    }
  };
  
  

  return (
    <div className="container text-center mt-5 text-white" style={{ paddingBottom: "20px" }}>
      <h2>Define Eye Color and Hair Appearance</h2>
      <p>Choose "Simple" for a simplified experience or "Advanced" for more control.</p>

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
              style={{ cursor: "pointer", width: "180px", height: "180px" }}
            />
            <p>{style.name}</p>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="d-flex justify-content-between mt-4">
        <Link to="/CreatePhoto" className="btn btn-outline-light px-5 py-2">← Previous</Link>
        <Link to="/FemaleRelation" className="btn btn-outline-light px-5 py-2" onClick={handleGenerateImage}>Next →</Link>
      </div>
    </div>
  );
};

export default FemaleEyeHair;
