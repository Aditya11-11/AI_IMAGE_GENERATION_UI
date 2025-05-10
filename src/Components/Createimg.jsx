import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Createimg = () => {
  const navigate = useNavigate();
  const [imageUrl, setImageUrl] = useState(null);

  // Load image from localStorage when component mounts
  useEffect(() => {
    const url = localStorage.getItem("generatedImageUrl");
    
    console.log('Stored URL:', url);
    if (url) {
      setImageUrl(url);
    } else {
      alert("Image generation failed. Please try again.");
      navigate("/Createphoto"); // Redirect if no image found
    }
  }, [navigate]);

  // Save image to the Gallery
  const saveImageToGallery = async () => {
    if (!imageUrl) {
      alert("No image URL found!");
      return;
    }

    const userId = localStorage.getItem("user_id"); // Get user ID from localStorage
    const token = localStorage.getItem("token"); // Get the user's token (if needed for authorization)
  
    if (!userId || !token) {
      alert("User is not logged in. Please log in to save the image.");
      return;
    }
  
    const imageData = {
      user_id: userId, // Send the user_id with the image data
      image_url: imageUrl, // Send the image URL to be saved
    };
  
    // Ensure full URL is sent to backend
    // const fullImageUrl = imageUrl.startsWith("http") ? imageUrl : `http://${imageUrl}`;
    
    // console.log("Sending image URL:", fullImageUrl); // Debugging
  
  //   try {
  //     const res = await axios.post(
  //       "http://localhost:5000/save-image",
  //       { image_url: url }, // Send full URL
  //       { headers: { "Content-Type": "application/json" } } // Ensure JSON format
  //     );
  
  //     if (res.data.success) {
  //       alert("Image saved successfully!");
  //     } else {
  //       alert("Error: " + res.data.error);
  //     }
  //   } catch (error) {
  //     console.error("AxiosError", error);
  //     alert("Failed to save image. Check console for details.");
  //   }
  };
  // Handle skipping image
  const handleSkip = () => {
    localStorage.removeItem("generatedImageUrl");
    navigate("/Createphoto");
  };

  return (
    <div className="container text-center mt-5 text-white">
      <h2>Say Hello to Your Creation!</h2>
      <p>It's time to see what your new character can do. Let the adventure begin!</p>

      {imageUrl ? (
        <img
          // src={imageUrl.startsWith("http") ? imageUrl : `http://${imageUrl}`}
          src={imageUrl}
          alt="Generated Character"
          className="img-fluid rounded my-3"
          style={{ maxWidth: "400px" }}
        />
      ) : (
        <p>No image found. Please generate again.</p>
      )}

      <div className="d-flex justify-content-center gap-3">
        <button className="btn btn-secondary" onClick={handleSkip}>
          ← Skip & Generate Again
        </button>
        {imageUrl && (
          <button className="btn btn-primary" onClick={saveImageToGallery}>
            Save
          </button>
        )}
      </div>
    </div>
  );
};

export default Createimg;
