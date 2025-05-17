import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function AdminDashboard() {
  const [userData, setUserData] = useState(null);
  const [messageData, setMessageData] = useState({
    total_messages: 0,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [stats, setStats] = useState({
    balance: 0.0,
    paidOut: 0.0,
    messages: 8,
    paidPictures: 0,
  });

  const [character, setCharacter] = useState({
    name: "Vishau Mahajan",
    id: "#02c3",
    uniqueUsers: 1,
    uniqueChats: 2,
    messages: 8,
    picturesUnlocked: 0,
  });

  const userName = localStorage.getItem("user_name");

  // Fetch User Usage Data
  useEffect(() => {
    const fetchUserUsage = async () => {
      try {
        const response = await axios.get(
          "https://image-generation-production.up.railway.app/api/user/usage?user_id=8"
        );
        setUserData(response.data); // Store response data
        setStats({
          balance: response.data.plan.plan_price,
          paidOut: response.data.value_used_usd,
         
          paidPictures: 0, // Replace with actual paid pictures if available from API
        });
        setLoading(false); // Stop loading
      } catch (error) {
        setError("Error fetching user data.");
        setLoading(false);
      }
    };

    fetchUserUsage();
  }, []); // Empty dependency array means it runs only once on mount

  // Fetch Message Count Data
  useEffect(() => {
    const fetchMessageCount = async () => {
      try {
        const response = await axios.get(
          "https://image-generation-production.up.railway.app/message_count?user_id=8",
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`, // Correct placement of headers
            },
          }
        );
        
        const { received_messages, sent_messages } = response.data;

        // Calculate total messages manually by summing received and sent messages
        const totalMessages = parseInt(received_messages) + parseInt(sent_messages);

        // Update state with the total messages
        setMessageData({
          total_messages: totalMessages,
        });
      } catch (error) {
        console.error("Error fetching message count data:", error);
      }
    };

    fetchMessageCount();
  }, []); // Empty dependency array ensures it runs once on mount

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="container min-vh-100 bg-dark text-white p-4">
      <div className="mb-6">
        <h5>User: {userData.user_name}</h5>
      </div>

      {/* Stats cards */}
      <div className="row gx-4 gy-4 mb-5">
        {/* Balance */}
        <div className="col-sm-6 col-lg-3">
          <div className="bg-dark rounded-2 p-4 h-100 border border-secondary">
            <div className="d-flex mb-4">
              <div
                className="w-10 h-10 rounded-circle bg-success bg-opacity-25 d-flex align-items-center justify-content-center"
                style={{ width: "15%", height: "25%" }}
              >
                <svg viewBox="0 0 24 24" fill="none" width="24" height="24">
                  <path
                    d="M12 6v12M6 12h12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <button className="ml-auto btn btn-dark rounded-pill px-4 py-1 text-sm">
                Request payout
              </button>
            </div>
            <div>Balance</div>
            <p>
              <strong>Plan Price:</strong> ${userData.plan.plan_price}
            </p>
          </div>
        </div>

        {/* Paid Out */}
        <div className="col-sm-6 col-lg-3">
          <div className="bg-dark rounded-2 p-4 h-100 border border-secondary">
            <div
              className="w-10 h-10 rounded-circle bg-success bg-opacity-25 d-flex align-items-center justify-content-center mb-4"
              style={{ width: "15%", height: "25%" }}
            >
              <svg viewBox="0 0 24 24" fill="none" width="24" height="24">
                <path
                  d="M12 6v12M6 12h12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div>Paid out</div>
            <p>
              <strong>Tokens Remaining:</strong> {userData.tokens_remaining}<br/>
              <strong>Value Used USd :</strong> {userData.value_used_usd}
            </p>
          </div>
        </div>

        {/* Messages */}
        <div className="col-sm-6 col-lg-3">
          <div className="bg-dark rounded-2 p-4 h-100 border border-secondary">
            <div
              className="w-10 h-10 rounded-circle bg-primary bg-opacity-25 d-flex align-items-center justify-content-center mb-4"
              style={{ width: "15%", height: "25%" }}
            >
              <i className="fa-solid fa-message text-primary"></i>
            </div>
            <div>Messages</div>
            <div>
              <strong>Total:</strong> {messageData.total_messages}
            </div>
          </div>
        </div>

        {/* Paid Pictures */}
        <div className="col-sm-6 col-lg-3">
          <div className="bg-dark rounded-2 p-4 h-100 border border-secondary">
            <div
              className="w-10 h-10 rounded-circle bg-success bg-opacity-25 d-flex align-items-center justify-content-center mb-4"
              style={{ width: "15%", height: "25%" }}
            >
              <i className="fa-solid fa-image text-success"></i>
            </div>
            <div>Paid pictures generated</div>
            <div className="h2 font-weight-bold">{stats.paidPictures}</div>
          </div>
        </div>
      </div>

      {/* Characters section */}
      <div className="mb-6 mt-3">
        <h2 className="h4 font-weight-bold mb-4">Characters</h2>

        <div className="bg-dark rounded-2 p-4 mb-4" style={{ border: "1px solid gray" }}>
          <div className="d-flex justify-content-between align-items-start mb-6">
            <div className="d-flex align-items-center">
              <div className="relative">
                <div className="w-16 h-16 rounded-circle bg-warning overflow-hidden border-2 border-secondary">
                  {/* Character image placeholder */}
                </div>
                <div className="absolute bottom-0 right-0 bg-danger text-xs px-2 py-0.5 rounded-full d-flex align-items-center gap-1">
                  <span>Private</span>
                  <span className="text-muted">{character.id}</span>
                </div>
              </div>
            </div>
            <div className="d-flex gap-2">
              <Link to="/chat">
                <button className="btn btn-dark rounded-pill px-4 py-2 text-sm d-flex align-items-center gap-2">
                  <i className="fa-solid fa-message"></i>
                  <span>Chat</span>
                </button>
              </Link>
              <Link to="/Gallery">
                <button className="btn btn-dark rounded-pill px-4 py-2 text-sm d-flex align-items-center gap-2">
                  <i className="fa-solid fa-image"></i>
                  <span>Generate photos</span>
                </button>
              </Link>
              <button className="btn btn-dark rounded-pill w-10 h-10 d-flex align-items-center justify-content-center">
                <i className="fa-solid fa-grip"></i>
              </button>
            </div>
          </div>

          <h3 className="h5 font-weight-bold mb-4">{character.name}</h3>

          <div className="row g-4 d-flex justify-content-center">
            <div className="col-12 col-md-3 d-flex align-items-center gap-3">
              <div
                className="w-10 h-10 rounded-2 p-2  d-flex align-items-center justify-content-center"
                style={{ backgroundColor: "#110b1e" }}
              >
                <i className="fa-solid fa-users text-info"></i>
              </div>
              <div>
                <div>Unique users</div>
                <div className="font-weight-bold">{character.uniqueUsers}</div>
              </div>
            </div>

            <div className="col-12 col-md-3 d-flex align-items-center gap-3">
              <div
                className="w-10 h-10 rounded-2 p-2 d-flex align-items-center justify-content-center"
                style={{ backgroundColor: "#07101e" }}
              >
                <i className="fa-solid fa-message text-primary"></i>
              </div>
              <div>
                <div>Unique chats</div>
                <div className="font-weight-bold">{character.uniqueChats}</div>
              </div>
            </div>

            <div className="col-12 col-md-3 d-flex align-items-center gap-3">
              <div
                className="w-10 h-10 rounded-2 p-2  d-flex align-items-center justify-content-center"
                style={{ backgroundColor: "#02141c" }}
              >
                <i className="fa-solid fa-message text-info"></i>
              </div>
              <div>
                <div>Messages</div>
                <div>
           {messageData.total_messages}
            </div>
              </div>
            </div>

            <div className="col-12 col-md-3 d-flex align-items-center gap-3">
              <div
                className="w-10 h-10 rounded-2 p-2  d-flex align-items-center justify-content-center"
                style={{ backgroundColor: "#02141c" }}
              >
                <i className="fa-solid fa-image text-success"></i>
              </div>
              <div>
                <div>Pictures unlocked</div>
                <div className="font-weight-bold">{character.picturesUnlocked}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Add character slot */}
        <div className="bg-dark rounded-lg p-4 d-flex justify-content-between align-items-center">
          <div className="d-flex gap-2 align-items-center">
            <div
              className="w-16 h-16 p-2 rounded-circle d-flex align-items-center justify-content-center mr-4"
              style={{ border: "1px solid gray " }}
            >
              <i className="fa-solid fa-plus"></i>
            </div>
            <div>
              <h3 className="h5 mt-2 font-weight-bold">Extra character slot</h3>
              <p>Add an extra slot to your account</p>
            </div>
          </div>
          <button className="ml-auto btn btn-light text-dark rounded-pill px-4 py-2 text-sm font-weight-medium">
            Buy with 15% discount
          </button>
        </div>
      </div>
    </div>
  );
}
