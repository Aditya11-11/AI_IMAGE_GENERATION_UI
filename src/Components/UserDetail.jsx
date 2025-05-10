import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import axios from "axios";
import {  useNavigate } from "react-router-dom";

const UserDetailsForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    ethnicity: "",
    age: "",
    tone: "",
    talking: "",
    nature: "",
    prefered_language: "",
    image: null, // Image will be stored here
    image_url:"https://api.deepai.org/job-view-file/74722b4e-bdb5-4878-b324-f54f6176595b/outputs/output.jpg", 
  });
  const handleGenerateImage = async () => {
    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("ethnicity", formData.ethnicity);
    formDataToSend.append("age", formData.age);
    formDataToSend.append("tone", formData.tone);
    formDataToSend.append("talking", formData.talking);
    formDataToSend.append("nature", formData.nature);
    formDataToSend.append("prefered_language", formData.prefered_language);
    formDataToSend.append("image_url", formData.image_url);
  
    if (formData.image) {
      formDataToSend.append("image", formData.image);  // If an image file is selected
    }

      
    const token = localStorage.getItem("token");  // Retrieve the token from localStorage
    console.log("Token:", token); // Log the token to check if it's available
    if (!token) {
      console.error("Token is missing. Please log in.");
      alert("Please log in to continue.");
      return;  // Exit early if token is missing
    }
  
    try {
      const response = await axios.post(
        "https://image-generation-production.up.railway.app/analyze_image_prompt",
        formDataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data", // Ensure Content-Type is multipart
            Authorization: `Bearer ${token}`,
          },
        }
      );
  
      console.log("Generated Image:", response.data);
  
      // Save the generated image URL in localStorage
      localStorage.setItem("generatedImageUrl", response.data.image_url); // Assuming the response has the image URL
  
      const storedUrl = localStorage.getItem("generatedImageUrl");
      console.log('Stored URL:', storedUrl);
      
      // Redirect to the '/createimage' page after the image is generated
      navigate("/createimage");
    } catch (error) {
      console.error("Error generating image:", error);
    }
  };


   useEffect(() => {
      localStorage.setItem("formData", JSON.stringify(formData));
    }, [formData]);
  
  const ethnicities = [
    "Argentinean", "American", "Indian", "Chinese", "French", "German",
    "Japanese", "Brazilian", "Mexican", "Canadian", "Italian", "Spanish"
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, image: file, image_url: "" }); // Set image and clear image URL
    }
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
        
        {/* Other fields */}
        <div className="mb-3">
          <label className="form-label">Tone</label>
          <input
            type="text"
            placeholder="Enter Tone"
            className="form-control bg-dark text-white border-0"
            name="tone"
            value={formData.tone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Way of Talking</label>
          <input
            type="text"
            placeholder="Enter Talking"
            className="form-control bg-dark text-white border-0"
            name="talking"
            value={formData.talking}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Nature</label>
          <input
            type="text"
            placeholder="Enter Nature"
            className="form-control bg-dark text-white border-0"
            name="nature"
            value={formData.nature}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Preferred Language</label>
          <input
            type="text"
            placeholder="Enter Preferred Language"
            className="form-control bg-dark text-white border-0"
            name="prefered_language"
            value={formData.prefered_language}
            onChange={handleChange}
            required
          />
        </div>
      </form>

      {/* Navigation Buttons */}
      <div className="d-flex justify-content-between mt-4">
        <Link to="/maleRelationship" className="btn btn-dark px-5 py-2">← Previous</Link>
        <Link to="/createimage" className="btn btn-dark px-5 py-2" onClick={handleGenerateImage}>Next →</Link>
      </div>
    </div>
  );
};

export default UserDetailsForm;
