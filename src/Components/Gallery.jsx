
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const Gallery = () => {
//   const [images, setImages] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     const fetchImages = async () => {
//       try {
//         // Retrieve the user ID from localStorage
//         const userId = localStorage.getItem("user_id");

//         console.log(userId);

//         if (!userId) {
//           setError("User is not logged in. Please login.");
//           setLoading(false);
//           return;
//         }

//         // Make the API request to fetch images
//         const response = await axios.get('https://image-generation-production.up.railway.app/image_data', {
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem("token")}`, // Ensure token is passed in the headers
//           },
//           params: {
//             user_id: userId,  // Send user_id as a query parameter
//           }
//         });

//         console.log(response.data);

//         // Check if the response contains images and is an array
//         const imagesData = response.data;

//         // Assuming the images data is an array of objects
//         if (Array.isArray(imagesData) && imagesData.length > 0) {
//           // Extract image URLs from the response
//           const imageUrls = imagesData.map((image) => image.image_url);
//           setImages(imageUrls);
//         } else {
//           setError("No images found for this user.");
//         }
//       } catch (error) {
//         setError('Error fetching images. Please try again later.');
//         console.error('Error fetching images:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchImages();
//   }, []);

//   return (
//     <div className="container gallery">
//     <div className="row d-flex justify-content-center align-items-center">
//       <div
//         className="col-md-12"
//         style={{
//           padding: "10px",
//           margin: "10px",
//         }}
//       >
//         {loading && <p>Loading images...</p>}
//         {error && <p>{error}</p>}
//         {images.length === 0 && !loading && !error ? (
//           <p>No images available.</p>
//         ) : (
//           <div className="row">
//             {images.map((image, index) => (
//               <div
//                 key={index}
//                 className={`col-3 p-2 ${
//                   index === 0 ? "ml-3" : ""} ${index === images.length - 1 ? "mr-3" : ""}`} // Margin for first and last images
//               >
//                 {/* Individual Image Container with Border */}
//                 <div
//                   className="image-container"
//                   style={{
//                     width: "100%", // Ensure each div takes the full width
//                     height: "auto",
//                     display: "flex", // Flexbox for centering image
//                     justifyContent: "center",
//                     alignItems: "center",
//                     border: "1px solid yellow", // Individual border for each image container
//                     borderRadius: "10px", // Optional rounded corners for the div
//                   }}
//                 >
//                   <img
//                     src={image} // Use the image URL directly
//                     alt={`Generated ${index}`}
//                     className="gallery-image"
//                     style={{
//                       width: "100%", // Make the image fill the div
//                       height: "auto", // Keep the aspect ratio intact
//                       borderRadius: "8px", // Optional rounded corners for images
//                     }}
//                   />
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   </div>
  

  
//   );
// };

// export default Gallery;


import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const userId = localStorage.getItem("user_id");
        if (!userId) {
          setError("User is not logged in. Please login.");
          setLoading(false);
          return;
        }

        const response = await axios.get('https://image-generation-production.up.railway.app/image_data', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          params: { user_id: userId }
        });

        const imagesData = response.data;

        if (Array.isArray(imagesData) && imagesData.length > 0) {
          // Store full image objects with id, image_url, etc.
          setImages(imagesData);
        } else {
          setError("No images found for this user.");
        }
      } catch (error) {
        setError('Error fetching images. Please try again later.');
        console.error('Error fetching images:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  const handleDelete = async (imageId) => {
    const confirmed = window.confirm("Are you sure you want to delete this image?");
    if (!confirmed) return;

    try {
      await axios.delete(`https://image-generation-production.up.railway.app/image_data_delete`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        data: { image_id: imageId } // Send the image ID in the request body
      });

      // Remove the deleted image from state
      setImages(prevImages => prevImages.filter(img => img.id !== imageId));
    } catch (err) {
      console.error("Error deleting image:", err);
      alert("Failed to delete image. Please try again later.");
    }
  };

  return (
    <div className="container gallery">
      <div className="row d-flex justify-content-center align-items-center">
        <div className="col-md-12" style={{ padding: "10px", margin: "10px" }}>
          {loading && <p>Loading images...</p>}
          {error && <p>{error}</p>}
          {images.length === 0 && !loading && !error ? (
            <p>No images available.</p>
          ) : (
            <div className="row">
              {images.map((image, index) => (
                <div
                  key={image.id}
                  className={`col-3 p-2 ${index === 0 ? "ml-3" : ""} ${index === images.length - 1 ? "mr-3" : ""}`}
                >
                  <div
                    className="image-container"
                    style={{
                      width: "80%",
                      height: "auto",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      border: "1px solid yellow",
                      borderRadius: "10px",
                      marginLeft: "auto",
                      marginRight: "auto",
                    }}
                  >
                    <img
                      src={image.image_url}
                      alt={`Generated ${index}`}
                      className="gallery-image"
                      style={{
                        width: "100%",
                        height: "auto",
                        borderRadius: "8px",
                      }}
                    />
                  </div>

                  {/* Delete Button */}
                  <div className="text-center mt-2">
                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() => handleDelete(image.id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
