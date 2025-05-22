import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import CreateImageFinal from "./CreateImageFinal";
const FemaleDetails = () => {
  const navigate = useNavigate(); 
  const image_url = localStorage.getItem("generatedImageUrl");  
  const [formData, setFormData] = useState({
    name: "",
    ethnicity: "",
    age: "",
    tone: "",
    talking: "",
    nature: "",
    prefered_language: "",
    image: null, // Image will be stored here
    image_url:image_url, // Default image URL is empty at the beginning
  });

  // Save form data to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(formData));
  }, [formData]);

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

  const ethnicities = [
    "Argentinean", "American", "Indian", "Chinese", "French", "German",
    "Japanese", "Brazilian", "Mexican", "Canadian", "Italian", "Spanish",
  ];
  const tone = [
    "Calm", "Cheerful", "Formal", "Friendly", "Informal", "Serious",
  ];
  const talking = [
    "Fast", "Slow", "Clear", "Mumbled", "Excited", "Bored",
  ];
  const nature = [
    "Curious", "Cautious", "Adventurous", "Shy", "Outgoing", "Reserved",
  ];
  const prefered_language = [
    "English", "Spanish", "French", "German", "Chinese", "Japanese",
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
      <h2 className="text-center">Complete with Name, Ethnicity, and Age</h2>
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

        {/* <div className="mb-3">
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
        </div> */}

        {/* Image URL Input */}
        {/* {formData.image_url ? (
          <div className="mb-3">
            <label className="form-label">Image URL</label>
            <input
              type="text"
              className="form-control bg-dark text-white border-0"
              name="image_url"
              value={formData.image_url}
              readOnly
            />
          </div>
        ) : (
          <div className="mb-3">
            <label className="form-label">Upload Image</label>
            <input
              type="file"
              className="form-control bg-dark text-white border-0"
              name="image"
              onChange={handleImageUpload}
            />
          </div>
        )} */}

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
          <select
            className="form-select bg-dark text-white border-0"
            name="tone"
            value={formData.tone}
            onChange={handleChange}
            required
          >
            <option value="">Select</option>
            {tone.map((toneOption) => (
              <option key={toneOption} value={toneOption}>
                {toneOption}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label">Way of Talking</label>
          <select
            className="form-select bg-dark text-white border-0"
            name="talking"
            value={formData.talking}
            onChange={handleChange}
            required
          >
            <option value="">Select</option>
            {talking.map((talkingOption) => (
              <option key={talkingOption} value={talkingOption}>
                {talkingOption}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label">Nature</label>
          <select
            className="form-select bg-dark text-white border-0"
            name="nature"
            value={formData.nature}
            onChange={handleChange}
            required
          >
            <option value="">Select Nature</option>
            {nature.map((natureOption) => (
              <option key={natureOption} value={natureOption}>
                {natureOption}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label">Preferred Language</label>
          <select
            className="form-select bg-dark text-white border-0"
            name="prefered_language"
            value={formData.prefered_language}
            onChange={handleChange}
            required
          >
            <option value="">Select Language</option>
            {prefered_language.map((languageOption) => (
              <option key={languageOption} value={languageOption}>
                {languageOption}
              </option>
            ))}
          </select>
        </div>
      </form>

      {/* Navigation Buttons */}
      <div className="d-flex justify-content-between mt-4">
        <Link to="/FemaleRelation" className="btn btn-dark px-5 py-2">← Previous</Link> 
        <Link to="/createimage" className="btn btn-dark px-5 py-2" onClick={handleGenerateImage}>Next →</Link>
      </div>
    </div>
  );
};

export default FemaleDetails;

