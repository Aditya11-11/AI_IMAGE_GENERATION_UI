import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, Suspense } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import "./App.css";

// Layout Components
import Header from "./LayOut/Header";
import Sidebar from "./LayOut/Sidebar";
import Loader from "./LayOut/Loader";

// Page Components
import Membership from "./Components/Mambership";
import EarlyAccess from "./Components/EarlyAccess";
import GetAccess from "./Components/GetAccess";
import Gallery from "./Components/Gallery";
import LoginPage from "./Components/Login";
import SignupPage from "./Components/Singup";
import BlogSection from "./Components/Blog";
import Explore from "./Components/Explore";
import ProfileFuji from "./Components/Profile";
import ContentPage from "./Components/Contact";
import CharacterCreation from "./Components/Createphoto";
import Createimg from "./Components/Createimg";
import MaleCreate from "./Components/Male";
import EyeHairSelection from "./Components/Malecolor";
import RelationshipSelection from "./Components/BoyRelationship";
import UserDetailsForm from "./Components/UserDetail";
import FemaleEyeHair from "./Components/FemaleColor";
import FemaleRelationship from "./Components/FelameRelation.jsx";
import FemaleDetails from "./Components/FemaleDetail.jsx";
import Wizard from "./Components/wizard.jsx";
import Dashboard from "./Components/FinalStep.jsx";
import About from "./Components/Blog.jsx";
import Home from "./Components/GetAccess.jsx"; // Added clearly missing Home component
import CreateImageFinal from './Components/CreateImageFinal.jsx';

import AdminDashboard from './Components/AdminDashboard.jsx';

import Chat from './Components/Chat.jsx';
import ForgotPassword from './Components/ForgotPassword.jsx';
import GoogleCallback from './Components/GoogleCallback.jsx';

function AppContent() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  const isAuthPage = ["/login", "/signup"].includes(location.pathname);


  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

  return (
    <div className="App">                 
      {!isAuthPage && <Header toggleSidebar={toggleSidebar} />}
      <div className={`app-container ${isAuthPage ? "auth-page" : ""}`}>
        {!isAuthPage && <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />}
        <div className="main-content">
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="/" element={<EarlyAccess/>} />
              {/* <Route path="/earlyaccess" element={<EarlyAccess/>} /> */}
              <Route path='/dashboard' element={<AdminDashboard/>}/>
              
              <Route path="/getaccess" element={<GetAccess />} />
              <Route path="/Gallery" element={<Gallery />} />
              <Route path="/createimg" element={<Createimg />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignupPage />} />
              <Route path="/blog" element={<BlogSection />} />
              <Route path="/explore" element={<Explore />} />
              <Route path="/membership" element={<Membership />} />
              <Route path="/profile/:id" element={<ProfileFuji />} />
              <Route path="/contact" element={<ContentPage />} />
              <Route path="/createphoto" element={<CharacterCreation />} />
              <Route path="/malecreate" element={<MaleCreate />} />
              <Route path="/malecolor" element={<EyeHairSelection />} />
              <Route path="/malerelationship" element={<RelationshipSelection />} />
              <Route path="/userdetailform" element={<UserDetailsForm />} />
              <Route path="/femaleeyehair" element={<FemaleEyeHair />} />
              <Route path="/femalerelation" element={<FemaleRelationship />} />
              <Route path="/femaledetailsform" element={<FemaleDetails />} />
              <Route path="/wizard" element={<Wizard />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/about" element={<About />} />
              <Route path="/home" element={<Home />} />
              <Route path="/createimage" element={<CreateImageFinal />}/>
              <Route path='/chat' element={<Chat/>}/>
              <Route path="/forgotpasswor" element={<ForgotPassword/>} />
              <Route path="/google-auth-callback" element={<GoogleCallback />} />
            </Routes>
          </Suspense>
        </div>
      </div>
     
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
