import React, { useState } from 'react';
import axios from 'axios';

function FinalStep({ influencerData, onPrev, onComplete }) {
  const [generatedImageUrl, setGeneratedImageUrl] = useState('');
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    setLoading(true);
    try {
      // Build a prompt from influencerData. Adjust prompt structure as needed.
      const prompt = `
Realistic high-quality photograph of a beautiful young female influencer,
- Ethnicity: ${ethnicity}
- Skin Tone: ${skinColor},
- Age: ${age} years old,
- Body Shape: ${selectedShape},
- Breast size: ${selectedBreastSize},
- Butt size: ${selectedButtSize},
- Attractive facial features,
- Influencer style, vibrant setting, professional lighting.
`;
      const response = await axios.post('/api/generate-image', { prompt });
      setGeneratedImageUrl(response.data.imageUrl);
    } catch (error) {
      console.error(error);
      alert('Error generating influencer image');
    }
    setLoading(false);
  };

  const handleSave = () => {
    // Save influencer data if needed; then complete and redirect.
    onComplete();
  };

  return (
    <div>
      <h2>Final Step: Generate Your Influencer</h2>
      <button onClick={onPrev}>Previous</button>
      <button onClick={handleGenerate} disabled={loading}>
        {loading ? 'Generating...' : 'Generate Image'}
      </button>
      {generatedImageUrl && (
        <div>
          <img src={generatedImageUrl} alt="Generated Influencer" style={{maxWidth: '300px'}} />
          <button onClick={handleSave}>Save and Continue</button>
        </div>
      )}
    </div>
  );
}

export default FinalStep;
