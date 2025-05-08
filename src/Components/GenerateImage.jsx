import React from "react";

const GeneratedImage = () => {
  const imageUrl = localStorage.getItem("generatedImageUrl");

  return (
    <div className="container text-center mt-5">
      <h2>Your Generated Image</h2>
      {imageUrl && imageUrl !== "/static/generated_images/" ? (
        <img src={imageUrl} className="img-fluid" alt="Generated" />
      ) : (
        <p>No image generated yet.</p>
      )}
    </div>
  );
};

export default GeneratedImage;
