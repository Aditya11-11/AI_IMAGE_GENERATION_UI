import React from "react";
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
          <div className="carousel-item active">
            <div className="row">
              {[1, 2, 3, 4].map((index) => (
                <div key={index} className="col-12 col-md-6 col-lg-3">
                  <div className="card ">
                    <img src="img/output1.jpg" className="card-img-top" />
                    <div className="card-body">
                      <h5 className="card-title">Card title {index}</h5>
                      <span className="text-sm bg-light me-3">18</span>
                      <span className="text-sm bg-light me-3">skinny</span>
                      <span className="text-sm bg-light">blindly</span>
                      <p className="card-text">
                        This is a longer card with supporting text below as a
                        natural lead-in to additional content. This content is a
                        little bit longer.
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
          <div className="carousel-item">
            <div className="row">
              {[5, 6, 7, 8].map((index) => (
                <div key={index} className="col-12 col-md-6 col-lg-3">
                  <div className="card h-100">
                    <img src="" className="card-img-top" />
                    <div className="card-body">
                      <h5 className="card-title">Card title {index}</h5>
                      <span className="text-sm bg-light me-3">18</span>
                      <span className="text-sm bg-light me-3">skinny</span>
                      <span className="text-sm bg-light">blindly</span>
                      <p className="card-text">
                        This is a longer card with supporting text below as a
                        natural lead-in to additional content. This content is a
                        little bit longer.
                      </p>
                      <div>
                        <button className="btn btn-light">Follow</button>
                        <button className="btn btn-dark">Chat</button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
    
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
      
      
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
      
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
