import React, { useState } from 'react';
import FinalStep from './FinalStep';

function Wizard() {
  const [step, setStep] = useState(1);
  const [influencerData, setInfluencerData] = useState({
    gender: 'female',
    bodyType: '',
    bustSize: '',
    skinColor: '',
    eyeColor: '',
    hairColor: '',
    hairStyle: '',
    relationship: [],
    personalityFlavors: [],
    name: '',
    lastName: '',
    ethnicity: '',
    age: ''
  });

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const updateData = (newData) => {
    setInfluencerData({ ...influencerData, ...newData });
  };

  // For simplicity, we include only two sample steps and the final step.
  // In practice, you can break this into multiple components.
  switch (step) {
    case 1:
      return (
        <div>
          <h2>Step 1: Basic Details</h2>
          <label>
            Body Type:
            <select
              onChange={(e) => updateData({ bodyType: e.target.value })}
              value={influencerData.bodyType}
            >
              <option value="">Select</option>
              <option value="skinny">Skinny</option>
              <option value="wellBuilt">Well Built</option>
            </select>
          </label>
          <br />
          <label>
            Skin Color:
            <select
              onChange={(e) => updateData({ skinColor: e.target.value })}
              value={influencerData.skinColor}
            >
              <option value="">Select</option>
              <option value="light">Light</option>
              <option value="tan">Tan</option>
              <option value="dark">Dark</option>
            </select>
          </label>
          <br />
          <button onClick={nextStep}>Next</button>
        </div>
      );
    case 2:
      return (
        <div>
          <h2>Step 2: Appearance</h2>
          <label>
            Eye Color:
            <select
              onChange={(e) => updateData({ eyeColor: e.target.value })}
              value={influencerData.eyeColor}
            >
              <option value="">Select</option>
              <option value="blue">Blue</option>
              <option value="green">Green</option>
              <option value="brown">Brown</option>
            </select>
          </label>
          <br />
          <label>
            Hair Color:
            <select
              onChange={(e) => updateData({ hairColor: e.target.value })}
              value={influencerData.hairColor}
            >
              <option value="">Select</option>
              <option value="blonde">Blonde</option>
              <option value="brown">Brown</option>
              <option value="black">Black</option>
            </select>
          </label>
          <br />
          <button onClick={prevStep}>Previous</button>
          <button onClick={nextStep}>Next</button>
        </div>
      );
    case 3:
      return (
        <FinalStep
          influencerData={influencerData}
          onPrev={prevStep}
          onComplete={() => {
            // Redirect to Dashboard or Chat page
            alert('Influencer created! Redirecting to Dashboard...');
            // e.g., window.location.href = '/dashboard';
          }}
        />
      );
    default:
      return <div>Invalid step</div>;
  }
}

export default Wizard;
