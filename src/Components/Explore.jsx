import React, { useEffect, useState } from "react";
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, Navigate } from "react-router-dom";

const profiles = [
  {
    name: "Hatsune Ao",
    age: 25,
    description:
      "Dance instructor by day, gamer and cosplayer by night. Passionate about dance, gaming...",
    username: "hatsuneaogamer",
    tag: "fit",
    image: "img/output1.jpg", // Replace with actual image
  },
  {
    name: "Lina Ahlam",
    age: 23,
    description:
      "Model 📸 Bookworm 📚 Yoga Enthusiast 🧘 Cosplay Lover 💜 Always playful, forever te...",
    username: "linaalamode23",
    tag: "skinny",
    image: "img/output2.jpg", // Replace with actual image
  },
  {
    name: "Isabella Rojas",
    age: 18,
    description:
      "Isabella Rojas | Fitness & Yoga Enthusiast | Nature Lover | Dreamer | Student 📚...",
    username: "fitbella_203",
    tag: "fit",
    image: "img/output3.jpg", // Replace with actual image
  },
  {
    name: "Bella69",
    age: 26,
    description: "Hey Guys",
    username: "bella69",
    tag: "fit",
    image: "img/output4.jpg", // Replace with actual image
  },
  {
    name: "Hatsune Ao",
    age: 25,
    description:
      "Dance instructor by day, gamer and cosplayer by night. Passionate about dance, gaming...",
    username: "hatsuneaogamer",
    tag: "fit",
    image: "img/output1.jpg", // Replace with actual image
  },
  {
    name: "Lina Ahlam",
    age: 23,
    description:
      "Model 📸 Bookworm 📚 Yoga Enthusiast 🧘 Cosplay Lover 💜 Always playful, forever te...",
    username: "linaalamode23",
    tag: "skinny",
    image: "img/output2.jpg", // Replace with actual image
  },
  {
    name: "Isabella Rojas",
    age: 18,
    description:
      "Isabella Rojas | Fitness & Yoga Enthusiast | Nature Lover | Dreamer | Student 📚...",
    username: "fitbella_203",
    tag: "fit",
    image: "img/output3.jpg", // Replace with actual image
  },
  {
    name: "Bella69",
    age: 26,
    description: "Hey Guys",
    username: "bella69",
    tag: "fit",
    image: "img/output4.jpg", // Replace with actual image
  },
  {
    name: "Hatsune Ao",
    age: 25,
    description:
      "Dance instructor by day, gamer and cosplayer by night. Passionate about dance, gaming...",
    username: "hatsuneaogamer",
    tag: "fit",
    image: "img/output1.jpg", // Replace with actual image
  },
  {
    name: "Lina Ahlam",
    age: 23,
    description:
      "Model 📸 Bookworm 📚 Yoga Enthusiast 🧘 Cosplay Lover 💜 Always playful, forever te...",
    username: "linaalamode23",
    tag: "skinny",
    image: "img/output2.jpg", // Replace with actual image
  },
  {
    name: "Isabella Rojas",
    age: 18,
    description:
      "Isabella Rojas | Fitness & Yoga Enthusiast | Nature Lover | Dreamer | Student 📚...",
    username: "fitbella_203",
    tag: "fit",
    image: "img/output3.jpg", // Replace with actual image
  },
  {
    name: "Bella69",
    age: 26,
    description: "Hey Guys",
    username: "bella69",
    tag: "fit",
    image: "img/output4.jpg", // Replace with actual image
  },
  {
    name: "Hatsune Ao",
    age: 25,
    description:
      "Dance instructor by day, gamer and cosplayer by night. Passionate about dance, gaming...",
    username: "hatsuneaogamer",
    tag: "fit",
    image: "img/output1.jpg", // Replace with actual image
  },
  {
    name: "Lina Ahlam",
    age: 23,
    description:
      "Model 📸 Bookworm 📚 Yoga Enthusiast 🧘 Cosplay Lover 💜 Always playful, forever te...",
    username: "linaalamode23",
    tag: "skinny",
    image: "img/output2.jpg", // Replace with actual image
  },
  {
    name: "Isabella Rojas",
    age: 18,
    description:
      "Isabella Rojas | Fitness & Yoga Enthusiast | Nature Lover | Dreamer | Student 📚...",
    username: "fitbella_203",
    tag: "fit",
    image: "img/output3.jpg", // Replace with actual image
  },
  {
    name: "Bella69",
    age: 26,
    description: "Hey Guys",
    username: "bella69",
    tag: "fit",
    image: "img/output4.jpg", // Replace with actual image
  },
  {
    name: "Hatsune Ao",
    age: 25,
    description:
      "Dance instructor by day, gamer and cosplayer by night. Passionate about dance, gaming...",
    username: "hatsuneaogamer",
    tag: "fit",
    image: "img/output1.jpg", // Replace with actual image
  },
  {
    name: "Lina Ahlam",
    age: 23,
    description:
      "Model 📸 Bookworm 📚 Yoga Enthusiast 🧘 Cosplay Lover 💜 Always playful, forever te...",
    username: "linaalamode23",
    tag: "skinny",
    image: "img/output2.jpg", // Replace with actual image
  },
  {
    name: "Isabella Rojas",
    age: 18,
    description:
      "Isabella Rojas | Fitness & Yoga Enthusiast | Nature Lover | Dreamer | Student 📚...",
    username: "fitbella_203",
    tag: "fit",
    image: "img/output3.jpg", // Replace with actual image
  },
  {
    name: "Bella69",
    age: 26,
    description: "Hey Guys",
    username: "bella69",
    tag: "fit",
    image: "img/output4.jpg", // Replace with actual image
  },
  {
    name: "Hatsune Ao",
    age: 25,
    description:
      "Dance instructor by day, gamer and cosplayer by night. Passionate about dance, gaming...",
    username: "hatsuneaogamer",
    tag: "fit",
    image: "img/output1.jpg", // Replace with actual image
  },
  {
    name: "Lina Ahlam",
    age: 23,
    description:
      "Model 📸 Bookworm 📚 Yoga Enthusiast 🧘 Cosplay Lover 💜 Always playful, forever te...",
    username: "linaalamode23",
    tag: "skinny",
    image: "img/output2.jpg", // Replace with actual image
  },
  {
    name: "Isabella Rojas",
    age: 18,
    description:
      "Isabella Rojas | Fitness & Yoga Enthusiast | Nature Lover | Dreamer | Student 📚...",
    username: "fitbella_203",
    tag: "fit",
    image: "img/output3.jpg", // Replace with actual image
  },
  {
    name: "Bella69",
    age: 26,
    description: "Hey Guys",
    username: "bella69",
    tag: "fit",
    image: "img/output4.jpg", // Replace with actual image
  },
  {
    name: "Hatsune Ao",
    age: 25,
    description:
      "Dance instructor by day, gamer and cosplayer by night. Passionate about dance, gaming...",
    username: "hatsuneaogamer",
    tag: "fit",
    image: "img/output1.jpg", // Replace with actual image
  },
  {
    name: "Lina Ahlam",
    age: 23,
    description:
      "Model 📸 Bookworm 📚 Yoga Enthusiast 🧘 Cosplay Lover 💜 Always playful, forever te...",
    username: "linaalamode23",
    tag: "skinny",
    image: "img/output2.jpg", // Replace with actual image
  },
  {
    name: "Isabella Rojas",
    age: 18,
    description:
      "Isabella Rojas | Fitness & Yoga Enthusiast | Nature Lover | Dreamer | Student 📚...",
    username: "fitbella_203",
    tag: "fit",
    image: "img/output3.jpg", // Replace with actual image
  },
  {
    name: "Bella69",
    age: 26,
    description: "Hey Guys",
    username: "bella69",
    tag: "fit",
    image: "img/output4.jpg", // Replace with actual image
  },
  {
    name: "Hatsune Ao",
    age: 25,
    description:
      "Dance instructor by day, gamer and cosplayer by night. Passionate about dance, gaming...",
    username: "hatsuneaogamer",
    tag: "fit",
    image: "img/output1.jpg", // Replace with actual image
  },
  {
    name: "Lina Ahlam",
    age: 23,
    description:
      "Model 📸 Bookworm 📚 Yoga Enthusiast 🧘 Cosplay Lover 💜 Always playful, forever te...",
    username: "linaalamode23",
    tag: "skinny",
    image: "img/output2.jpg", // Replace with actual image
  },
  {
    name: "Isabella Rojas",
    age: 18,
    description:
      "Isabella Rojas | Fitness & Yoga Enthusiast | Nature Lover | Dreamer | Student 📚...",
    username: "fitbella_203",
    tag: "fit",
    image: "img/output3.jpg", // Replace with actual image
  },
  {
    name: "Bella69",
    age: 26,
    description: "Hey Guys",
    username: "bella69",
    tag: "fit",
    image: "img/output4.jpg", // Replace with actual image
  },
  {
    name: "Hatsune Ao",
    age: 25,
    description:
      "Dance instructor by day, gamer and cosplayer by night. Passionate about dance, gaming...",
    username: "hatsuneaogamer",
    tag: "fit",
    image: "img/output1.jpg", // Replace with actual image
  },
  {
    name: "Lina Ahlam",
    age: 23,
    description:
      "Model 📸 Bookworm 📚 Yoga Enthusiast 🧘 Cosplay Lover 💜 Always playful, forever te...",
    username: "linaalamode23",
    tag: "skinny",
    image: "img/output2.jpg", // Replace with actual image
  },
  {
    name: "Isabella Rojas",
    age: 18,
    description:
      "Isabella Rojas | Fitness & Yoga Enthusiast | Nature Lover | Dreamer | Student 📚...",
    username: "fitbella_203",
    tag: "fit",
    image: "img/output3.jpg", // Replace with actual image
  },
  {
    name: "Bella69",
    age: 26,
    description: "Hey Guys",
    username: "bella69",
    tag: "fit",
    image: "img/output4.jpg", // Replace with actual image
  },
  {
    name: "Hatsune Ao",
    age: 25,
    description:
      "Dance instructor by day, gamer and cosplayer by night. Passionate about dance, gaming...",
    username: "hatsuneaogamer",
    tag: "fit",
    image: "img/output1.jpg", // Replace with actual image
  },
  {
    name: "Lina Ahlam",
    age: 23,
    description:
      "Model 📸 Bookworm 📚 Yoga Enthusiast 🧘 Cosplay Lover 💜 Always playful, forever te...",
    username: "linaalamode23",
    tag: "skinny",
    image: "img/output2.jpg", // Replace with actual image
  },
  {
    name: "Isabella Rojas",
    age: 18,
    description:
      "Isabella Rojas | Fitness & Yoga Enthusiast | Nature Lover | Dreamer | Student 📚...",
    username: "fitbella_203",
    tag: "fit",
    image: "img/output3.jpg", // Replace with actual image
  },
  {
    name: "Bella69",
    age: 26,
    description: "Hey Guys",
    username: "bella69",
    tag: "fit",
    image: "img/output4.jpg", // Replace with actual image
  },
  {
    name: "Hatsune Ao",
    age: 25,
    description:
      "Dance instructor by day, gamer and cosplayer by night. Passionate about dance, gaming...",
    username: "hatsuneaogamer",
    tag: "fit",
    image: "img/output1.jpg", // Replace with actual image
  },
  {
    name: "Lina Ahlam",
    age: 23,
    description:
      "Model 📸 Bookworm 📚 Yoga Enthusiast 🧘 Cosplay Lover 💜 Always playful, forever te...",
    username: "linaalamode23",
    tag: "skinny",
    image: "img/output2.jpg", // Replace with actual image
  },
  {
    name: "Isabella Rojas",
    age: 18,
    description:
      "Isabella Rojas | Fitness & Yoga Enthusiast | Nature Lover | Dreamer | Student 📚...",
    username: "fitbella_203",
    tag: "fit",
    image: "img/output3.jpg", // Replace with actual image
  },
  {
    name: "Bella69",
    age: 26,
    description: "Hey Guys",
    username: "bella69",
    tag: "fit",
    image: "img/output4.jpg", // Replace with actual image
  },
  {
    name: "Hatsune Ao",
    age: 25,
    description:
      "Dance instructor by day, gamer and cosplayer by night. Passionate about dance, gaming...",
    username: "hatsuneaogamer",
    tag: "fit",
    image: "img/output1.jpg", // Replace with actual image
  },
  {
    name: "Lina Ahlam",
    age: 23,
    description:
      "Model 📸 Bookworm 📚 Yoga Enthusiast 🧘 Cosplay Lover 💜 Always playful, forever te...",
    username: "linaalamode23",
    tag: "skinny",
    image: "img/output2.jpg", // Replace with actual image
  },
  {
    name: "Isabella Rojas",
    age: 18,
    description:
      "Isabella Rojas | Fitness & Yoga Enthusiast | Nature Lover | Dreamer | Student 📚...",
    username: "fitbella_203",
    tag: "fit",
    image: "img/output3.jpg", // Replace with actual image
  },
  {
    name: "Bella69",
    age: 26,
    description: "Hey Guys",
    username: "bella69",
    tag: "fit",
    image: "img/output4.jpg", // Replace with actual image
  },
  {
    name: "Hatsune Ao",
    age: 25,
    description:
      "Dance instructor by day, gamer and cosplayer by night. Passionate about dance, gaming...",
    username: "hatsuneaogamer",
    tag: "fit",
    image: "img/output1.jpg", // Replace with actual image
  },
  {
    name: "Lina Ahlam",
    age: 23,
    description:
      "Model 📸 Bookworm 📚 Yoga Enthusiast 🧘 Cosplay Lover 💜 Always playful, forever te...",
    username: "linaalamode23",
    tag: "skinny",
    image: "img/output2.jpg", // Replace with actual image
  },
  {
    name: "Isabella Rojas",
    age: 18,
    description:
      "Isabella Rojas | Fitness & Yoga Enthusiast | Nature Lover | Dreamer | Student 📚...",
    username: "fitbella_203",
    tag: "fit",
    image: "img/output3.jpg", // Replace with actual image
  },
  {
    name: "Bella69",
    age: 26,
    description: "Hey Guys",
    username: "bella69",
    tag: "fit",
    image: "img/output4.jpg", // Replace with actual image
  },
  {
    name: "Hatsune Ao",
    age: 25,
    description:
      "Dance instructor by day, gamer and cosplayer by night. Passionate about dance, gaming...",
    username: "hatsuneaogamer",
    tag: "fit",
    image: "img/output1.jpg", // Replace with actual image
  },
  {
    name: "Lina Ahlam",
    age: 23,
    description:
      "Model 📸 Bookworm 📚 Yoga Enthusiast 🧘 Cosplay Lover 💜 Always playful, forever te...",
    username: "linaalamode23",
    tag: "skinny",
    image: "img/output2.jpg", // Replace with actual image
  },
  {
    name: "Isabella Rojas",
    age: 18,
    description:
      "Isabella Rojas | Fitness & Yoga Enthusiast | Nature Lover | Dreamer | Student 📚...",
    username: "fitbella_203",
    tag: "fit",
    image: "img/output3.jpg", // Replace with actual image
  },
  {
    name: "Bella69",
    age: 26,
    description: "Hey Guys",
    username: "bella69",
    tag: "fit",
    image: "img/output4.jpg", // Replace with actual image
  },
  {
    name: "Hatsune Ao",
    age: 25,
    description:
      "Dance instructor by day, gamer and cosplayer by night. Passionate about dance, gaming...",
    username: "hatsuneaogamer",
    tag: "fit",
    image: "img/output1.jpg", // Replace with actual image
  },
  {
    name: "Lina Ahlam",
    age: 23,
    description:
      "Model 📸 Bookworm 📚 Yoga Enthusiast 🧘 Cosplay Lover 💜 Always playful, forever te...",
    username: "linaalamode23",
    tag: "skinny",
    image: "img/output2.jpg", // Replace with actual image
  },
  {
    name: "Isabella Rojas",
    age: 18,
    description:
      "Isabella Rojas | Fitness & Yoga Enthusiast | Nature Lover | Dreamer | Student 📚...",
    username: "fitbella_203",
    tag: "fit",
    image: "img/output3.jpg", // Replace with actual image
  },
  {
    name: "Bella69",
    age: 26,
    description: "Hey Guys",
    username: "bella69",
    tag: "fit",
    image: "img/output4.jpg", // Replace with actual image
  },

  // Add more profiles as needed
];

const ProfileCard = ({ profile }) => (
  <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
    <div className="position-relative overflow-hidden rounded text-white bg-black hover-zoom">
      <img
        src={profile.image}
        className="w-100 object-fit-cover img-zoom"
        alt={profile.name}
        style={{ height: "450px" }}
      />
      {/* Private Badge */}
      <div className="position-absolute top-0 start-0 text-white fw-bold py-1 px-2 small rounded-bottom-end">
        Private Content
      </div>

      {/* Overlay Text Section */}
      <div className="position-absolute bottom-0 start-0 w-100 p-3">
        <h5 className="mb-1">
          {profile.name} <span className="text-light">{profile.age}</span>
        </h5>
        <p className="small mb-2">{profile.description}</p>
        <div className="d-flex justify-content-between">
          <span className="badge bg-dark">@{profile.username}</span>
          <span className="badge bg-secondary">{profile.tag}</span>
        </div>
      </div>
    </div>
  </div>
);


const Explore = () => {
  const [images, setImages] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const userId = localStorage.getItem("user_id");
        // if (!userId) {
        //   setError("User is not logged in. Please login.");
        //   setLoading(false);
        //   return;
        // }

        const response = await axios.get('https://image-generation-production.up.railway.app/image_data', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          params: { user_id: userId }
        });

        const imagesData = response.data;
        if (Array.isArray(imagesData) && imagesData.length > 0) {
          const imageUrls = imagesData.map((image) => image.image_url);
          setImages(imageUrls);
        } else {
          setError("No images found for this user.");
        }
      // } catch (err) {
      //   setError('Error fetching images. Please try again later.');
      //   console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  // Split images into chunks of 4 per carousel-item
  const chunkedImages = [];
  for (let i = 0; i < images.length; i += 4) {
    chunkedImages.push(images.slice(i, i + 4));
  }

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="container">
      <h1 className="my-4">Trending Today</h1>
      <img
        src="/public/img/output2.jpg"
        className="rounded-5 my-3"
        alt="Cinque Terre"
        style={{ height: "60px", width: "60px" }}
      />

      <h2>
        Newly Joined <span className="status"></span>
      </h2>

      {/* Carousel */}
      <div
      id="influencerCarousel"
      className="carousel slide"
      data-ride="carousel"
      data-interval="3000"
    >
      <div className="carousel-inner">
        {chunkedImages.map((group, idx) => (
          <div key={idx} className={`carousel-item ${idx === 0 ? "active" : ""}`}>
            <div className="row">
              {group.map((imageUrl, index) => (
                <div key={index} className="col-12 col-md-6 col-lg-3">
                  <div className="card h-100">
                    <img src={imageUrl} className="card-img-top" alt={`Image ${index}`} />
                    <div className="card-body">
                      <h5 className="card-title">Card title {index + 1}</h5>
                      <span className="text-sm bg-light me-3">18</span>
                      <span className="text-sm bg-light me-3">skinny</span>
                      <span className="text-sm bg-light">blindly</span>
                      <p className="card-text">
                        This is a longer card with supporting text below as a
                        natural lead-in to additional content.
                      </p>
                      <div>
                        <button className="btn btn-light me-4">Follow</button>
                        <Link to="/chat">
                          <button className="btn btn-dark">Chat</button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      </div>
      <div>
        <h2 className="my-4">All Influencers</h2>
        {/* Profile Cards Section */}
        <div className="container-flud py-4 bg-black p-2">
          <div className="row">
            {profiles.map((profile, index) => (
              <ProfileCard key={index} profile={profile} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
