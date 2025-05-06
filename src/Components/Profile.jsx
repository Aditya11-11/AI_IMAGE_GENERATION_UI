import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const ProfileFuji = () => {
    const { id } = useParams(); // Get the profile ID from the URL
    const [activeTab, setActiveTab] = useState("images");

    const showTab = (tab) => {
        setActiveTab(tab);
    };

    // Fetch profile data based on ID (replace this with an API call if needed)
    const profiles = [
        {
            id: 1,
            name: "Hatsune Ao",
            age: 25,
            description: "Dance instructor by day, gamer and cosplayer by night. Passionate about dance, gaming...",
            username: "hatsuneaogamer",
            tag: "fit",
            image: "/img/output1.jpg", // Use absolute path if images are in the public folder
            images: [
                "/img/output1.jpg",
                "/img/output2.jpg",
                "/img/output3.jpg",
                "/img/output4.jpg",
                "/img/output5.jpg",
                "/img/output6.jpg",
                "/img/output7.jpg",
                "/img/output8.jpg",
            ],
            videos: [
                "https://www.w3schools.com/html/mov_bbb.mp4",
                "https://www.w3schools.com/html/mov_bbb.mp4",
            ],
        },
        {
            id: 2,
            name: "Lina Ahlam",
            age: 23,
            description: "Model 📸 Bookworm 📚 Yoga Enthusiast 🧘 Cosplay Lover 💜 Always playful, forever te...",
            username: "linaalamode23",
            tag: "skinny",
            image: "/img/output11.jpg", // Use absolute path if images are in the public folder
            images: [
                "/img/output11.jpg",
                "/img/output12.jpg",
                "/img/output13.jpg",
                "/img/output1.jpg",
                "/img/output2.jpg",
                "/img/output3.jpg",
                "/img/output4.jpg",
                "/img/output5.jpg",
            ],
            videos: [
                "https://www.w3schools.com/html/mov_bbb.mp4",
                "https://www.w3schools.com/html/mov_bbb.mp4",
            ],
        },
        {
            id: 3,
            name: "Isabella Rojas",
            age: 18,
            description: "Isabella Rojas | Fitness & Yoga Enthusiast | Nature Lover | Dreamer | Student 📚...",
            username: "fitbella_203",
            tag: "fit",
            image: "/img/output12.jpg",
            images:[
                 "/img/output11.jpg",
                "/img/output12.jpg",
                "/img/output13.jpg",
                "/img/output1.jpg",
                "/img/output2.jpg",
                "/img/output3.jpg",
                "/img/output4.jpg",
                "/img/output5.jpg",

            ],
            videos: [
                "https://www.w3schools.com/html/mov_bbb.mp4",
                "https://www.w3schools.com/html/mov_bbb.mp4",
            ],
        },


        {
            id: 4,
            name: "Bella69",
            age: 26,
            description: "Hey Guys",
            username: "bella69",
            tag: "fit",
            image: "/img/output10.jpg",
            images:[
                "/img/output11.jpg",
               "/img/output12.jpg",
               "/img/output13.jpg",
               "/img/output1.jpg",
               "/img/output2.jpg",
               "/img/output3.jpg",
               "/img/output4.jpg",
               "/img/output5.jpg",

           ],
           videos: [
               "https://www.w3schools.com/html/mov_bbb.mp4",
               "https://www.w3schools.com/html/mov_bbb.mp4",
           ],
        },
        {
            id: 5,
            name: "Hatsune Ao",
            age: 25,
            description: "Dance instructor by day, gamer and cosplayer by night. Passionate about dance, gaming...",
            username: "hatsuneaogamer",
            tag: "fit",
            image: "/img/output9.jpg",
            images:[
                "/img/output11.jpg",
               "/img/output12.jpg",
               "/img/output13.jpg",
               "/img/output1.jpg",
               "/img/output2.jpg",
               "/img/output3.jpg",
               "/img/output4.jpg",
               "/img/output5.jpg",

           ],
           videos: [
               "https://www.w3schools.com/html/mov_bbb.mp4",
               "https://www.w3schools.com/html/mov_bbb.mp4",
           ],
        },
        {
            id: 6,
            name: "Lina Ahlam",
            age: 23,
            description: "Model 📸 Bookworm 📚 Yoga Enthusiast 🧘 Cosplay Lover 💜 Always playful, forever te...",
            username: "linaalamode23",
            tag: "skinny",
            image: "/img/output8.jpg",
            images:[
                "/img/output11.jpg",
               "/img/output12.jpg",
               "/img/output13.jpg",
               "/img/output1.jpg",
               "/img/output2.jpg",
               "/img/output3.jpg",
               "/img/output4.jpg",
               "/img/output5.jpg",

           ],
           videos: [
               "https://www.w3schools.com/html/mov_bbb.mp4",
               "https://www.w3schools.com/html/mov_bbb.mp4",
           ],
        },
        {
            id: 7,
            name: "Isabella Rojas",
            age: 18,
            description: "Isabella Rojas | Fitness & Yoga Enthusiast | Nature Lover | Dreamer | Student 📚...",
            username: "fitbella_203",
            tag: "fit",
            image: "/img/output7.jpg",
            images:[
                "/img/output11.jpg",
               "/img/output12.jpg",
               "/img/output13.jpg",
               "/img/output1.jpg",
               "/img/output2.jpg",
               "/img/output3.jpg",
               "/img/output4.jpg",
               "/img/output5.jpg",

           ],
           videos: [
               "https://www.w3schools.com/html/mov_bbb.mp4",
               "https://www.w3schools.com/html/mov_bbb.mp4",
           ],
        },
        {
            id: 8,
            name: "Bella69",
            age: 26,
            description: "Hey Guys",
            username: "bella69",
            tag: "fit",
            image: "/img/output6.jpg",
            images:[
                "/img/output11.jpg",
               "/img/output12.jpg",
               "/img/output13.jpg",
               "/img/output1.jpg",
               "/img/output2.jpg",
               "/img/output3.jpg",
               "/img/output4.jpg",
               "/img/output5.jpg",

           ],
           videos: [
               "https://www.w3schools.com/html/mov_bbb.mp4",
               "https://www.w3schools.com/html/mov_bbb.mp4",
           ],
        },
        {
            id: 9,
            name: "Hatsune Ao",
            age: 25,
            description: "Dance instructor by day, gamer and cosplayer by night. Passionate about dance, gaming...",
            username: "hatsuneaogamer",
            tag: "fit",
            image: "/img/output5.jpg",
            images:[
                "/img/output11.jpg",
               "/img/output12.jpg",
               "/img/output13.jpg",
               "/img/output1.jpg",
               "/img/output2.jpg",
               "/img/output3.jpg",
               "/img/output4.jpg",
               "/img/output5.jpg",

           ],
           videos: [
               "https://www.w3schools.com/html/mov_bbb.mp4",
               "https://www.w3schools.com/html/mov_bbb.mp4",
           ],
        },
        {
            id: 10,
            name: "Lina Ahlam",
            age: 23,
            description: "Model 📸 Bookworm 📚 Yoga Enthusiast 🧘 Cosplay Lover 💜 Always playful, forever te...",
            username: "linaalamode23",
            tag: "skinny",
            image: "/img/output4.jpg",
            images:[
                "/img/output11.jpg",
               "/img/output12.jpg",
               "/img/output13.jpg",
               "/img/output1.jpg",
               "/img/output2.jpg",
               "/img/output3.jpg",
               "/img/output4.jpg",
               "/img/output5.jpg",

           ],
           videos: [
               "https://www.w3schools.com/html/mov_bbb.mp4",
               "https://www.w3schools.com/html/mov_bbb.mp4",
           ],
        },
        {
            id: 11,
            name: "Isabella Rojas",
            age: 18,
            description: "Isabella Rojas | Fitness & Yoga Enthusiast | Nature Lover | Dreamer | Student 📚...",
            username: "fitbella_203",
            tag: "fit",
            image: "/img/output3.jpg",
            images:[
                "/img/output11.jpg",
               "/img/output12.jpg",
               "/img/output13.jpg",
               "/img/output1.jpg",
               "/img/output2.jpg",
               "/img/output3.jpg",
               "/img/output4.jpg",
               "/img/output5.jpg",

           ],
           videos: [
               "https://www.w3schools.com/html/mov_bbb.mp4",
               "https://www.w3schools.com/html/mov_bbb.mp4",
           ],
        },
        {
            id: 12,
            name: "Bella69",
            age: 26,
            description: "Hey Guys",
            username: "bella69",
            tag: "fit",
            image: "/img/output2.jpg",
            images:[
                "/img/output11.jpg",
               "/img/output12.jpg",
               "/img/output13.jpg",
               "/img/output1.jpg",
               "/img/output2.jpg",
               "/img/output3.jpg",
               "/img/output4.jpg",
               "/img/output5.jpg",

           ],
           videos: [
               "https://www.w3schools.com/html/mov_bbb.mp4",
               "https://www.w3schools.com/html/mov_bbb.mp4",
           ],
        },
        // Add more profiles with their respective images and videos
    ];

    // Find the profile based on the ID
    const profile = profiles.find((p) => p.id === parseInt(id));

    if (!profile) {
        return <div className="container mt-4 text-white">Profile not found.</div>;
    }

    return (
        <div className="container mt-4">
            {/* Profile Header */}
            <div className="d-flex align-items-center gap-3 mb-4">
                <img
                    src={profile.image}
                    alt="Profile Picture"
                    className="rounded-circle"
                    style={{ width: "80px", height: "80px" }}
                />
                <div>
                    <h3 className="m-0">
                        <strong>{profile.name}</strong>
                    </h3>
                    <p className="m-0 text-white">{profile.description}</p>
                    <span className="badge bg-secondary">{profile.tag}</span>
                </div>
                <div className="ms-auto d-flex align-items-center gap-3">
                    <div className="text-center">
                        <span className="text-white">Views</span>
                        <br />
                        <strong>34</strong>
                    </div>
                    <button className="btn btn-dark">Chat 💬</button>
                </div>
            </div>

            {/* Tabs */}
            <div className="d-flex justify-content-center gap-3 mt-3">
                <button
                    className={`btn ${
                        activeTab === "images" ? "btn-dark" : "btn-outline-dark"
                    }`}
                    onClick={() => showTab("images")}
                >
                    Images
                </button>
                <button
                    className={`btn ${
                        activeTab === "videos" ? "btn-dark" : "btn-outline-dark"
                    }`}
                    onClick={() => showTab("videos")}
                >
                    Videos
                </button>
            </div>

            {/* Content Sections */}
            <div
                id="images"
                className={`mt-4 ${activeTab === "images" ? "d-block" : "d-none"}`}
            >
                <div className="row g-3">
                    {profile.images.map((image, index) => (
                        <div key={index} className="col-6 col-md-4 col-lg-3">
                            <img
                                src={image}
                                alt={`Image ${index + 1}`}
                                className="img-fluid rounded"
                                onError={(e) => {
                                    console.error(`Failed to load image: ${image}`);
                                    e.target.src = "/img/placeholder.jpg"; // Fallback image
                                }}
                            />
                        </div>
                    ))}
                </div>
            </div>

            <div
                id="videos"
                className={`mt-4 ${activeTab === "videos" ? "d-block" : "d-none"}`}
            >
                <div className="row g-3">
                    {profile.videos.map((video, index) => (
                        <div key={index} className="col-12 col-md-6">
                            <video
                                className="w-100 rounded shadow"
                                controls
                                muted
                                playsInline
                            >
                                <source src={video} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProfileFuji;