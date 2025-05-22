// export default CreateImageFinal
import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const CreateImageFinal = () => {
  const [imageUrl, setImageUrl] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const storedImageUrl = localStorage.getItem('generatedImageUrl');
    if (storedImageUrl) {
      setImageUrl(storedImageUrl);
    }
  }, []);

  const handleSaveAndReload = () => {
    // Navigate to /dashboard first
    navigate('/chat');

    // Then reload after a short delay
    setTimeout(() => {
      window.location.reload();
    }, 100); // 100ms delay to allow navigation to complete
  };

  return (
    <div>
      <Container fluid className="d-flex justify-content-center align-items-center vh-100 bg-dark text-white">
        <div className="text-center">
          <h1 className="mb-4">Say Hello to Your Creation!</h1>
          <p>It's time to see what your new character can do. Let the adventure begin!</p>

          {imageUrl ? (
            <div>
              <img src={imageUrl} alt="Generated" className="img-fluid" />
            </div>
          ) : (
            <p>No image generated yet. Please generate an image first.</p>
          )}

          <div className="d-flex justify-content-center mt-4">
            <button
              onClick={handleSaveAndReload}
              className="btn btn-dark px-5 py-2 text-center"
              style={{ border: '1px solid gray' }}
            >
              Save
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CreateImageFinal;
