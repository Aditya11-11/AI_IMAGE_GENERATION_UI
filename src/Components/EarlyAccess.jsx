import React, { useState } from 'react';
import pic from '../assets/newimg-removebg-preview.png'
import 'bootstrap/dist/css/bootstrap.min.css';
 import './img.css'; // Create this file for custom CSS
import { Link } from 'react-router-dom';

const profiles = [
    {
        id: 1,
        name: "Hatsune Ao",
        age: 25,
        description: "Dance instructor by day, gamer and cosplayer by night. Passionate about dance, gaming...",
        username: "hatsuneaogamer",
        tag: "fit",
        image: "img/output1.jpg",
    },
    {
        id: 2,
        name: "Lina Ahlam",
        age: 23,
        description: "Model 📸 Bookworm 📚 Yoga Enthusiast 🧘 Cosplay Lover 💜 Always playful, forever te...",
        username: "linaalamode23",
        tag: "skinny",
        image: "img/output11.jpg",
    },
    {
        id: 3,
        name: "Isabella Rojas",
        age: 18,
        description: "Isabella Rojas | Fitness & Yoga Enthusiast | Nature Lover | Dreamer | Student 📚...",
        username: "fitbella_203",
        tag: "fit",
        image: "img/output12.jpg",
    },
    {
        id: 4,
        name: "Bella69",
        age: 26,
        description: "Hey Guys",
        username: "bella69",
        tag: "fit",
        image: "img/output10.jpg",
    },
    {
        id: 5,
        name: "Hatsune Ao",
        age: 25,
        description: "Dance instructor by day, gamer and cosplayer by night. Passionate about dance, gaming...",
        username: "hatsuneaogamer",
        tag: "fit",
        image: "img/output9.jpg",
    },
    {
        id: 6,
        name: "Lina Ahlam",
        age: 23,
        description: "Model 📸 Bookworm 📚 Yoga Enthusiast 🧘 Cosplay Lover 💜 Always playful, forever te...",
        username: "linaalamode23",
        tag: "skinny",
        image: "img/output8.jpg",
    },
    {
        id: 7,
        name: "Isabella Rojas",
        age: 18,
        description: "Isabella Rojas | Fitness & Yoga Enthusiast | Nature Lover | Dreamer | Student 📚...",
        username: "fitbella_203",
        tag: "fit",
        image: "img/output7.jpg",
    },
    {
        id: 8,
        name: "Bella69",
        age: 26,
        description: "Hey Guys",
        username: "bella69",
        tag: "fit",
        image: "img/output6.jpg",
    },
    {
        id: 9,
        name: "Hatsune Ao",
        age: 25,
        description: "Dance instructor by day, gamer and cosplayer by night. Passionate about dance, gaming...",
        username: "hatsuneaogamer",
        tag: "fit",
        image: "img/output5.jpg",
    },
    {
        id: 10,
        name: "Lina Ahlam",
        age: 23,
        description: "Model 📸 Bookworm 📚 Yoga Enthusiast 🧘 Cosplay Lover 💜 Always playful, forever te...",
        username: "linaalamode23",
        tag: "skinny",
        image: "img/output4.jpg",
    },
    {
        id: 11,
        name: "Isabella Rojas",
        age: 18,
        description: "Isabella Rojas | Fitness & Yoga Enthusiast | Nature Lover | Dreamer | Student 📚...",
        username: "fitbella_203",
        tag: "fit",
        image: "img/output3.jpg",
    },
    {
        id: 12,
        name: "Bella69",
        age: 26,
        description: "Hey Guys",
        username: "bella69",
        tag: "fit",
        image: "img/output2.jpg",
    },
];

const ProfileCard = ({ profile }) => (
    <div className="col-6 col-md-4 col-lg-3 mb-4">
        <Link to={`/profile/${profile.id}`} className="text-decoration-none">
            <div className="position-relative overflow-hidden rounded text-white bg-black hover-zoom">
                <img 
                    src={profile.image} 
                    className="w-100 object-fit-cover img-zoom" 
                    alt={profile.name} 
                    style={{ height: '450px' }}
                />
                {/* Private Badge */}
                <div className="position-absolute top-0 start-0 text-white fw-bold py-1 px-2 small rounded-bottom-end">
                    Private Content
                </div>

                {/* Overlay Text Section */}
                <div className="position-absolute bottom-0 start-0 w-100 p-1 ">
                    <h5 className="mb-1">{profile.name} <span className="text-light">{profile.age}</span></h5>
                    <p className="small mb-2">{profile.description}</p>
                    <div className="d-flex justify-content-between">
                        <span className="badge bg-dark">@{profile.username}</span>
                        <span className="badge bg-secondary">{profile.tag}</span>
                    </div>
                </div>
            </div>
        </Link>
    </div>
);


const faqs = [
    { question: "What are payout fees?", answer: "Payout fees vary depending on your chosen payout method and location." },
    { question: "How do I earn money with my AI influencers?", answer: "You earn money through subscriptions and tips from your fans." },
    { question: "How long until I start making money?", answer: "You can start earning as soon as your AI influencer is live and gains followers." },
    { question: "How do payouts work?", answer: "Payouts are processed on a regular schedule and you can track them in your dashboard." },
    { question: "What tools do you provide to help me grow?", answer: "We provide analytics, marketing tools, and tips to help you grow your AI influencer." },
    { question: "Can I customize my AI influencer’s appearance and personality?", answer: "Yes! You can fully customize both appearance and personality through the editor." },
    { question: "Is there a limit to how many followers my AI influencer can have?", answer: "There’s no limit! You can grow your audience as large as you want." },
    { question: "How do fans interact and tip my AI influencer?", answer: "Fans can chat with your AI, subscribe to exclusive content, and send tips directly." },
    { question: "Can I change my influencer’s pricing or tip settings?", answer: "Absolutely! You have full control over your AI influencer’s pricing." },
    { question: "What if I cancel my subscription?", answer: "If you cancel, your AI influencer will go offline, but you can reactivate anytime." },
];


const HeroSection = () => {

    const [followers, setFollowers] = useState(1000);
    const [subscriptionPrice, setSubscriptionPrice] = useState(9.99);
    const [conversionRate, setConversionRate] = useState(2);
    const [tipsPerSubscriber, setTipsPerSubscriber] = useState(5);

    const monthlySubscribers = Math.round((followers * conversionRate) / 100);
    const subscriptionRevenue = (monthlySubscribers * subscriptionPrice).toFixed(2);
    const tipsRevenue = (monthlySubscribers * tipsPerSubscriber).toFixed(2);
    const totalEarnings = (parseFloat(subscriptionRevenue) + parseFloat(tipsRevenue)).toFixed(2);

    // Helper function to calculate background style for sliders
    const getSliderBackground = (value, min, max) => {
        const percentage = ((value - min) / (max - min)) * 100;
        return {
            background: `linear-gradient(to right, #8e44ad ${percentage}%, #444 ${percentage}%)`
        };
    };
    return (
        <>
                 <section className="hero-section text-white py-1" style={{ backgroundColor: '#23043b' }}>
                <div className="container">
                    <div className="row align-items-center">
                        {/* Left - AI Influencer Images */}
                        <div className="col-12 col-md-6 d-flex justify-content-center justify-content-md-start mb-4 mb-md-0">
                            <div className="d-flex">
                                <img
                                    src={pic}
                                    alt="Model 1"
                                    className="img-fluid rounded me-2"
                                    style={{ height: "290px", width: "420px" }}
                                />
                            </div>
                        </div>

                        {/* Right - Text & CTA */}
                        <div className="col-12 col-md-6 text-center text-md-start">
                            <span className="badge bg-light text-dark mb-3">⭐ #1 AI Influencer generator</span>
                            <h1 className="display-5 fw-bold">
                                Create your own <span className="text-primary">AI Influencer</span>
                            </h1>
                            <p className="lead">
                                Launch your custom AI influencers and watch them engage audiences that drive real revenue.
                                It’s easy, fast, and fully customizable!
                            </p>
                            <a href="#create" className="btn btn-light btn-lg fw-bold shadow-sm">
                                🚀 Create your Influencer
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Profile Cards Section */}
            <div className="container-fluid py-4 bg-black">
                <div className="row g-1">
                    {profiles.map((profile) => (
                        <ProfileCard key={profile.id} profile={profile} />
                    ))}
                </div>
            </div>
            <div className="text-center py-5" style={{ backgroundColor: '#000', color: 'white' }}>
            <p className="text-uppercase " style={{ fontSize: '12px', letterSpacing: '1px' }}>Overview</p>
            <h2 className="fw-bold" id='How'>How It Works</h2>
            <p className="mb-4">Everything you'll need to create a unique AI influencer</p>
            <button className="btn btn-dark bg-white text-black fw-bold" style={{  borderColor: '#6a1b9a' }}>
            ⭐ Create your character
            </button>
        </div>
        {/* video-start */}
        <div className="container-fluid bg-black text-light py-5">
    <div className="container">
        <div className="row align-items-center">
            {/* Left Side - Video */}
            <div className="col-lg-6 col-md-6 col-12 mb-4 mb-md-0">
                <div style={{ width: "100%", aspectRatio: "16/10" }}>
                    <video className="w-100 h-100 rounded shadow" 
                        autoPlay loop muted playsInline style={{ objectFit: "cover" }}>
                        <source src="https://1716637182.rsc.cdn77.org/web/video/features/heart.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
            {/* Right Side - Text */}
            <div className="col-lg-6 col-md-6 col-12">
                <span className="badge bg-purple text-white fs-6 px-3 py-2 mb-2">Step 1</span>
                <h2 className="fw-bold mb-3">Design Your Character</h2>
                <p className="mb-4">
                    Choose from a wide range of physical attributes and personality traits to create a unique
                    digital persona, complete with a bio that sets the stage for meaningful interactions.
                </p>
                <button className="btn btn-dark bg-white text-black fw-bold" style={{ borderColor: '#6a1b9a' }}>
                    Start Creating Now
                </button>
            </div>
        </div>
    </div>
        </div>
      {/* Add margin to separate sections */}
     <div className="my-3"></div>

<div className="container-fluid bg-black text-light py-5">
    <div className="container">
        <div className="row align-items-center">
            {/* Left Side - Text */}
            <div className="col-lg-6 col-md-6 col-12">
                <span className="badge bg-purple text-white fs-6 px-3 py-2 mb-2">Step 2</span>
                <h2 className="fw-bold mb-3">Design Your Character</h2>
                <p className="mb-4">
                    Choose from a wide range of physical attributes and personality traits to create a unique
                    digital persona, complete with a bio that sets the stage for meaningful interactions.
                </p>
                <button className="btn btn-dark bg-white text-black fw-bold" style={{ borderColor: '#6a1b9a', marginBottom:"20px" }}>
                    Start Creating Now
                </button>
            </div>

            {/* Right Side - Video */}
            <div className="col-lg-6 col-md-6 col-12 mb-4 mb-md-0">
                <div style={{ width: "100%", aspectRatio: "16/10" }}>
                    <video className="w-100 h-100 rounded shadow" 
                        autoPlay loop muted playsInline style={{ objectFit: "cover" }}>
                        <source src="https://1716637182.rsc.cdn77.org/web/video/features/bubbles.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
        </div>
    </div>
</div>
<div className="my-3"></div>

<div className="container-fluid bg-black text-light py-5">
    <div className="container">
        <div className="row align-items-center">
            {/* Left Side - Video */}
            <div className="col-lg-6 col-md-6 col-12 mb-4 mb-md-0">
                <div style={{ width: "100%", aspectRatio: "16/10" }}>
                    <video className="w-100 h-100 rounded shadow" 
                        autoPlay loop muted playsInline style={{ objectFit: "cover" }}>
                        <source src="https://1716637182.rsc.cdn77.org/web/video/features/interests.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>

            {/* Right Side -Text*/}
            <div className="col-lg-6 col-md-6 col-12">
                <span className="badge bg-purple text-white fs-6 px-3 py-2 mb-2">Step 3</span>
                <h2 className="fw-bold mb-3">Design Your Character</h2>
                <p className="mb-4">
                    Choose from a wide range of physical attributes and personality traits to create a unique
                    digital persona, complete with a bio that sets the stage for meaningful interactions.
                </p>
                <button className="btn btn-dark bg-white text-black fw-bold"
                    style={{ borderColor: '#6a1b9a' }}>
                    Start Creating Now
                </button>
            </div>
        </div>
    </div>
</div>

{/* Spacing between sections */}
<div className="my-3"></div>

<div className="container-fluid text-light bg-black py-5">
    <div className="container">
        <div className="row align-items-center">
            {/* Left Side - Text */}
            <div className="col-lg-6 col-md-6 col-12">
                <span className="badge bg-purple text-white fs-6 px-3 py-2 mb-2">Step 4</span>
                <h2 className="fw-bold mb-3">Design Your Character</h2>
                <p className="mb-4">
                    Choose from a wide range of physical attributes and personality traits to create a unique
                    digital persona, complete with a bio that sets the stage for meaningful interactions.
                </p>
                <button className="btn btn-dark bg-white text-black fw-bold"
                    style={{ borderColor: '#6a1b9a', marginBottom: "20px" }}>
                    Start Creating Now
                </button>
            </div>

            {/* Right Side - Video */}
            <div className="col-lg-6 col-md-6 col-12 mb-4 mb-md-0">
                <div style={{ width: "100%", aspectRatio: "16/10" }}>   
                    <video className="w-100 h-100 rounded shadow" 
                        autoPlay loop muted playsInline style={{ objectFit: "cover" }}>
                        <source src="https://1716637182.rsc.cdn77.org/web/video/features/ladder.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
        </div>
    </div>
</div>


        <div className="container-fluid  text-light bg-black py-3">
            <div className="container">
                <h3 className="mb-3 text-center">Ready to Start Your AI Influencer Journey?</h3>
                <div className="text-center">
                <button className="btn btn-dark bg-white  text-black fw-bold mb-4 " style={{  borderColor: '#6a1b9a' }}>Create Your AI Influencer Now</button>
                </div>
                <h2 className="fw-bold text-center">Calculate Your Potential Earnings</h2>
                <p className="text-white text-center">See how much you could earn through subscriptions and tips with your AI influencer</p>
  <div className="container">
     <div className="row">
     <div className="col-lg-6 col-md-6 col-12 mb-4 ">
        <div className=" bg-gradient-dark text-light border-light p-3 rounded-3" style={{ background: 'linear-gradient(145deg, #1e1e2f, #2a2a40)', border:"1px solid white" }}>
            <h6 className="mb-3">Adjust Your Metrics</h6>

            {/* Total Followers */}
            <label className="form-label" style={{color:"#9CA3AF", fontSize:"14px"}}>Total Followers</label>
            <input type="range" className="form-range " min="100" max="100000" step="100" value={followers} onChange={e => setFollowers(e.target.value)} />
            <div className="text-end text-white">{followers.toLocaleString()}</div>

            {/* Subscription Price */}
            <label className="form-label " style={{color:"#9CA3AF" , fontSize:"14px"}}>Subscription Price ($/month)</label>
            <input type="range" className="form-range " min="1" max="50" step="0.5" value={subscriptionPrice} onChange={e => setSubscriptionPrice(e.target.value)} />
            <div className="text-end  text-white">${subscriptionPrice}</div>

            {/* Conversion Rate */}
            <label className="form-label " style={{color:"#9CA3AF" , fontSize:"14px"}}>Subscriber Conversion Rate (%)</label>
            <input type="range" className="form-range " min="0.1" max="10" step="0.1" value={conversionRate} onChange={e => setConversionRate(e.target.value)} />
            <div className="text-end  text-white">{conversionRate}%</div>

            {/* Average Tips */}
            <label className="form-label" style={{color:"#9CA3AF" , fontSize:"14px"}}>Average Tips per Subscriber ($/month)</label>
            <input type="range" className="form-range" min="0" max="100" step="1" value={tipsPerSubscriber} onChange={e => setTipsPerSubscriber(e.target.value)} />
            <div className="text-end  text-white">${tipsPerSubscriber}</div>
        </div>
    </div>
    {/* Right - Estimated Monthly Earnings */}
    <div className="col-lg-6 col-md-6 col-12 mb-4 ">
        <div className=" bg-gradient-dark text-light border-light p-3 rounded-3" style={{ background: 'linear-gradient(145deg, #1e1e2f, #2a2a40)', border:"1px solid white"}}>
            <h6 className="mb-3">Estimated Monthly Earnings</h6>

            <h1 className=" text-center fw-bold" style={{color:"#4ADE80"}}>${totalEarnings}</h1>

            <div className="card  text-light text-center border-light p-2 mb-2" style={{background:'linear-gradient(145deg, #1e1e2f, #2a2a40)', marginLeft:"auto", marginRight:"auto"}} >
                <h6 className="mb-0 text-center" style={{color:"#9CA3AF" , fontSize:"14px"}}>Monthly Subscribers</h6>
                <div className="fs-5 text-center text-white">{monthlySubscribers}</div>
            </div>

            <div className="d-flex justify-content-between">
                <div className="card text-light border-light p-2 flex-grow-1 me-2" style={{background:'linear-gradient(145deg, #1e1e2f, #2a2a40)'}}>
                    <h6 className="mb-0 text-center" style={{color:"#9CA3AF" , fontSize:"14px"}}>Subscription Revenue</h6>
                    <div className="fs-5 text-center">${subscriptionRevenue}</div>
                </div>
                <div className="card  text-light border-light p-2 flex-grow-1 ms-2" style={{ background:'linear-gradient(145deg, #1e1e2f, #2a2a40)'}}>
                    <h6 className="mb-0 text-center"  style={{color:"#9CA3AF" , fontSize:"14px"}}>Tips Revenue</h6>
                    <div className="fs-5 text-center">${tipsRevenue}</div>
                </div>
            </div>

            <small className="text-white mt-5 d-block" >
                * Earnings are estimates based on average user data and may vary based on content quality, engagement, and market conditions. Platform fees will be deducted from the total earnings.
            </small>
        </div>  
    </div>
      </div>
      </div>
                {/* Bottom Button */} 
                <button className="btn btn-dark bg-white text-black fw-bold mt-4" style={{borderColor: '#6a1b9a'}}>Create Your First Influencer Now</button>
            </div>
        </div>
          
       <div className="container-fluid  text-light bg-black py-5">
            <div className="container">
                <div className="row">
                    {/* Left Section - Title & Description */}
                    <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
                        <h2 className="fw-bold">FAQ</h2>
                        <p className="text-white">
                            With our advanced AI platform, anyone can create, customize, and monetize their own AI influencers.
                            Got questions? We’ve got answers.
                        </p>
                    </div>

                    {/* Right Section - Accordion */}
                    <div className="col-lg-8 col-md-12">
                        <div className="accordion accordion-flush" id="faqAccordion">
                            {faqs.map((faq, index) => (
                                <div className="accordion-item" key={index} >
                                    <h2 className="accordion-header" id={`heading-${index}`}>
                                        <button className="accordion-button collapsed bg-black text-light"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target={`#collapse-${index}`}
                                            aria-expanded="false"
                                            aria-controls={`collapse-${index}`}>  
                                            {faq.question}
                                        </button>
                                    </h2>
                                    <div
                                     style={{color:"blue"}}
                                        id={`collapse-${index}`}
                                        className="accordion-collapse collapse"
                                        aria-labelledby={`heading-${index}`}
                                        data-bs-parent="#faqAccordion">
                                        <div className="accordion-body bg-black text-light">
                                            {faq.answer}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </div>
        <div className="container-flud text-white py-5 bg-black" >
            <div className="container text-center text-md-start bg-black">
                <div className="row align-items-center">
                    <div className="col-md-8 mb-3 mb-md-0">
                        <h2 className="fw-bold">
                            ✨ Join the future of AI influencers and start earning.
                        </h2>
                        <p className="mb-0">
                            Launch your custom AI influencers on MakeInfluencer.AI to engage audiences and boost revenue with personalized interactions.
                        </p>
                    </div>
                    <div className="col-md-4 text-md-end">
                        <a href="#" className="btn btn-dark btn-lg " style={{  borderColor: '#6a1b9a' }}>
                            🚀 Create Your First Influencer Now
                        </a>
                    </div>
                </div>
            </div>
        </div>
              
        <footer className=" text-white py-5 bg-black">
            <div className="container">
                <div className="row gy-4">
                    {/* Left Section - Logo, Signup Text, Email Input */}
                    <div className="col-12 col-md-6">
                        <h5 className="fw-bold">MAKE INFLUENCER.<span >AI</span></h5>
                        <h6 className="mt-3 fw-bold">Get Started Today</h6>
                        <p>
                            Join us now to explore exclusive updates, personalized recommendations, and exciting opportunities. Your journey begins here—no spam, just value!
                        </p>
                        <div className="d-flex">
                            <input
                                type="email"
                                className="form-control me-2"
                                placeholder="Your email address"
                            />
                            <button className="btn btn-dark bg-white text-black fw-bold w-50 " style={{  borderColor: '#6a1b9a' }}>Sign up</button>
                        </div>
                    </div>

                    {/* Right Section - Links */}
                    <div className="col-6 col-md-3">
                        <h6 className="fw-bold">Company</h6>
                        <ul className="list-unstyled">
                            <li><a href="#" className="text-white text-decoration-none">Privacy Policy</a></li>
                            <li><a href="#" className="text-white text-decoration-none">Terms of Service</a></li>
                        </ul>
                    </div>

                    <div className="col-6 col-md-3">
                        <h6 className="fw-bold">Help</h6>
                        <ul className="list-unstyled">
                            <li><a href="#" className="text-white text-decoration-none">Contact Us</a></li>
                            <li><a href="#" className="text-white text-decoration-none">Blog</a></li>
                        </ul>
                    </div>
                </div>

                {/* Social & Copyright */}
                <div className="mt-4 text-center">
                    <div className="mb-2">
                        <a href="#" className="text-white me-3"><i className="bi bi-twitter"></i></a>
                        <a href="#" className="text-white me-3"><i className="bi bi-youtube"></i></a>
                        <a href="#" className="text-white me-3"><i className="bi bi-instagram"></i></a>
                        <a href="#" className="text-white"><i className="bi bi-tiktok"></i></a>
                    </div>
                    <p className="mb-0">© 2025 MakeInfluencer. All rights reserved.</p>
                    <p>#1003 Floral Park, FLORAL PARK, NY 11001</p>
                </div>
            </div>
        </footer>     
        </>
    );
};

export default HeroSection;