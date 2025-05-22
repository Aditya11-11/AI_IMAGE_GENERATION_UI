import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ProfileCard = ({ profile }) => (
  <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
    <div className="position-relative overflow-hidden rounded text-white bg-black hover-zoom">
      <img
        src={profile.image}
        className="w-100 object-fit-cover img-zoom"
        alt={profile.name}
        style={{ height: "450px" }}
      />
      <div className="position-absolute top-0 start-0 text-white fw-bold py-1 px-2 small rounded-bottom-end">
        Private Content
      </div>
      <div className="position-absolute bottom-0 start-0 w-100 p-3">
        <h5 className="mb-1">
          {profile.name} <span className="text-light">{profile.age}</span>
        </h5>
        <p className="small mb-2">{profile.description}</p>
        <div className="d-flex justify-content-between">
          <span className="badge bg-dark">@{profile.username}</span>
          <span className="badge bg-secondary">{profile.tag}</span>
        </div>

         <div>
            <Link to="/chat">
              <button className="btn btn-dark btn-sm">Chat</button>
            </Link>
          </div>
      </div>
    </div>
  </div>
);

const Explore = () => {
  const [profiles, setProfiles] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfiles = async () => {
        try {
    const userId = localStorage.getItem("user_id");
    const response = await axios.get('https://image-generation-production.up.railway.app/image_data', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      params: { user_id: userId },
    });

        const rawProfiles = response.data;

  console.log("Fetched profiles:", rawProfiles); // Debug log


        if (!Array.isArray(rawProfiles)) {
    throw new Error("API response is not an array");
  }

  const extractAgeFromPrompt = (prompt) => {
    const match = prompt.match(/(\d+)\s+years\s+old/i);
    return match ? parseInt(match[1]) : 18;
  };

       const extractDescriptionFromPrompt = (prompt) => {
    const lines = prompt.trim().split('\n');
    const clean = lines.find(line => line.trim() && !line.includes("Your name is"));
    return clean ? clean.trim().slice(0, 100) + "..." : "No description.";
  };

  const formattedProfiles = rawProfiles.map((item, index) => {
    if (!item.image_url) {
      console.warn("Missing image_url for item", item);
    }

    return {
      name: item.image_name || `User ${index + 1}`,
      age: extractAgeFromPrompt(item.prompt || ""),
      description: extractDescriptionFromPrompt(item.prompt || ""),
      username: `${(item.image_name || "user").toLowerCase()}${extractAgeFromPrompt(item.prompt || "")}`,
      tag: "general",
      image: item.image_url,
    };
  });


        setProfiles(formattedProfiles);
      } catch (err) {
        setError("Login required");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProfiles();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <Link to="/login" className="text-white text-decoration-none " > <h3 className="text-center mt-5"> {error}</h3></Link>

  return (
    <div className="container">
      <h1 className="my-4">Trending Today</h1>
      <h2>Newly Joined <span className="status"></span></h2>

      <div className="container-fluid py-4 bg-black p-2">
        <div className="row">
          {profiles.map((profile, index) => (
            <ProfileCard key={index} profile={profile} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Explore;
// export default Explore;