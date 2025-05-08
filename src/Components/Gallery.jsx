import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Gallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get('http://localhost:5000/get_generated_images');
        setImages(response.data.images);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, []);

  return (
    <div className="gallery">
      {images.length === 0 ? (
        <p>No images available.</p>
      ) : (
        images.map((image, index) => (
          <img key={index} src={image} alt={`Generated ${index}`} />
        ))
      )}
    </div>
  );
};

export default Gallery;