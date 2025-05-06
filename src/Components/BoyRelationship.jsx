import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const RelationshipSelection = () => {
  const [selectedRelationships, setSelectedRelationships] = useState([]);
  const [selectedFlavors, setSelectedFlavors] = useState([]);

  const relationships = [
    { name: "Best Friend", icon: "💛" },
    { name: "Boss", icon: "🎁" },
    { name: "Colleague", icon: "💼" },
    { name: "Doctor", icon: "🩺" },
    { name: "Friend", icon: "🔒" },
    { name: "Friend with Benefits", icon: "💋" },
    { name: "Boyfriend", icon: "❤️" },
    { name: "Internet Pal", icon: "📱" },
    { name: "Marker", icon: "👑" },
    { name: "Roommate", icon: "🏠" },
    { name: "School mate", icon: "📚" },
    { name: "Step Father", icon: "🧑‍🦳" },
    { name: "Step Brother", icon: "👑" },
    { name: "Stranger", icon: "🕶️" },
    { name: "Teacher", icon: "📖" },
    { name: "Husband", icon: "💍" },
  ];

  const personalityFlavors = [
    { name: "Naughty", icon: "😈" },
    { name: "Hypno-trance", icon: "🌀" },
    { name: "Cheaty", icon: "😏" },
    { name: "Innocent", icon: "😊" },
    { name: "Voyeur", icon: "👀" },
    { name: "Dominant", icon: "💪" },
    { name: "Submissive", icon: "🙇‍♂️" },
    { name: "Experimental", icon: "✏️" },
    { name: "Spicy-smart", icon: "🔥" },
    { name: "Roleplayer", icon: "🎭" },
    { name: "Tease", icon: "😜" },
    { name: "Cuddler", icon: "🤗" },
    { name: "Kinky", icon: "🔗" },
    { name: "Sensual", icon: "💞" },
    { name: "Demi", icon: "🌗" },
    { name: "Pureminded", icon: "🕊️" },
    { name: "Asexual", icon: "❄️" },
    { name: "Filthy", icon: "🔞" },
    { name: "Passionate", icon: "🔥" },
    { name: "Voyager", icon: "📱" },
  ];

  const toggleSelection = (name, stateSetter, currentState, maxSelections = null) => {
    if (currentState.includes(name)) {
      stateSetter(currentState.filter((item) => item !== name));
    } else {
      if (maxSelections === null || currentState.length < maxSelections) {
        stateSetter([...currentState, name]);
      }
    }
  };

  return (
    <div className="container text-center mt-5 text-white" style={{  paddingBottom: "20px" }}>
      <h2>Customize Relationship Role and Desires</h2>
      <p>Choose "Simple" for a simplified experience or "Advanced" for more control.</p>

      {/* Simple & Advanced Buttons */}
      {/* <div className="btn-group mt-3">
        <button className="btn btn-light active">Simple</button>
        <button className="btn btn-secondary">Advanced</button>
      </div> */}

      {/* Relationship Selection */}
      <h4 className="mt-4">Choose Relationship</h4>
      <div className="row">
        {relationships.map((relation) => (
          <div className="col-6 col-md-3 mb-3" key={relation.name}>
            <button
              className={`btn w-100 p-3 text-white border rounded ${
                selectedRelationships.includes(relation.name) ? "border-primary" : "border-secondary"
              }`}
              onClick={() => toggleSelection(relation.name, setSelectedRelationships, selectedRelationships)}
              style={{ backgroundColor: "#222" }}
            >
              <span className="me-2">{relation.icon}</span>
              {relation.name}
            </button>
          </div>
        ))}
      </div>

      {/* Personality Flavor Selection */}
      <h4 className="mt-4">Personality Flavors (Up to 3)</h4>
      <div className="row">
        {personalityFlavors.map((flavor) => (
          <div className="col-6 col-md-3 mb-3" key={flavor.name}>
            <button
              className={`btn w-100 p-3 text-white border rounded ${
                selectedFlavors.includes(flavor.name) ? "border-primary" : "border-secondary"
              }`}
              onClick={() => toggleSelection(flavor.name, setSelectedFlavors, selectedFlavors, 3)}
              style={{ backgroundColor: "#222" }}
            >
              <span className="me-2">{flavor.icon}</span>
              {flavor.name}
            </button>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="d-flex justify-content-between mt-4">
        <Link to="/MaleColor" className="btn btn-outline-light px-5 py-2">← Previous</Link>
        <Link to="/UserDetailForm" className="btn btn-outline-light px-5 py-2">Next →</Link>
      </div>
    </div>
  );
};

export default RelationshipSelection;
