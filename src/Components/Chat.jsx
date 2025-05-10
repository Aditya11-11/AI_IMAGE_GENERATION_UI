// // export default Gallery;
// import React, { useState, useEffect } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import axios from "axios";

// const Chat = () => {
//   const [messages, setMessages] = useState([]);

//   const [inputMessage, setInputMessage] = useState("");
//   const [selectedUser, setSelectedUser] = useState(null); // Track selected user
//   const [users, setUsers] = useState([]); // State to hold dynamic users data
//   const [chatHistory, setChatHistory] = useState([]); // State to store chat history

//   const user_id = localStorage.getItem("user_id"); // Retrieve user_id from localStorage
//   console.log("User ID from localStorage:", user_id);

//   // Function to fetch user data dynamically based on user_id
//   const fetchUserData = async () => {
//     if (!user_id) {
//       console.error("No user_id found in localStorage");
//       return;
//     }

//     try {
//       const response = await axios.get(
//         "https://image-generation-production.up.railway.app/image_data",
//         {
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem("token")}`, // Ensure token is passed in the headers
//           },
//           params: {
//             user_id: user_id, // Send user_id as a query parameter
//           },
//         }
//       );

//       // Check if the response contains images and is an array
//       const imagesData = response.data;
//       console.log(imagesData);

//       // If valid data, update users state
//       if (imagesData && Array.isArray(imagesData)) {
//         const updatedUsers = imagesData.map((item) => ({
//           name: item.image_name,
//           message: item.message,
//           image_id: item.id,
//           image_url: item.image_url,
//           user_id: item.user_id,
//         }));

//         setUsers(updatedUsers); // Set dynamic users data
//       }
//     } catch (error) {
//       console.error("Error fetching user data:", error);
//     }
//   };

//   // Fetch user data when the component mounts (useEffect)
//   useEffect(() => {
//     fetchUserData(); // Fetch user data using the user_id from localStorage
//   }, [user_id]); // Empty dependency array ensures it runs once on mount

//   // When a user is clicked, update the selectedUser state
//   const handleUserClick = (users) => {
//     setSelectedUser(users); // Set the selected user
//     setMessages([]); // Start chat with selected user
//   };

//   const handleSendMessage = async () => {
//     if (inputMessage.trim() && selectedUser) {
//       const newMessage = { sender: user_id, text: inputMessage };
//       setMessages([...messages, newMessage]);
//       setInputMessage("");

//       // Prepare the payload with dynamic image_id, user_id, and human_msg
//       const payload = {
//         image_id: selectedUser.image_id,
//         user_id: selectedUser.user_id, // Send user_id with image_id
//         human_msg: inputMessage,
//       };

//       console.log("Sending message to API...");
//       console.log("Payload:", payload);

//       // Add validation for payload before sending it
//       if (!payload.image_id || isNaN(payload.image_id)) {
//         console.error("Invalid image_id");
//         return;
//       }

//       if (!payload.user_id || isNaN(payload.user_id)) {
//         console.error("Invalid user_id");
//         return;
//       }

//       if (!payload.human_msg || typeof payload.human_msg !== "string") {
//         console.error("Invalid message");
//         return;
//       }

//       const token = localStorage.getItem("token"); // Retrieve the token from localStorage
//       console.log("Token:", token); // Log the token to check if it's available
//       if (!token) {
//         console.error("Token is missing. Please log in.");
//         alert("Please log in to continue.");
//         return; // Exit early if token is missing
//       }

//       // Send the message and image_id to the AI chat API
//       try {
//         const response = await axios.post(
//           "https://image-generation-production.up.railway.app/chat",
//           payload,

//           {
//             headers: {
//               Authorization: `Bearer ${token}`,
//             },
//           }
//         );

//         // Log the response from the API to verify it
//         console.log("API Response:", response.data);

//         // If API returns data, add AI response to messages
//         if (response.data && response.data.response)
//           if (payload.image_id == selectedUser.image_id) {
//             const aiResponse = response.data.response;
//             setMessages((prevMessages) => [
//               ...prevMessages,
//               { sender: "AI", text: aiResponse },
//             ]);
//           } else {
//             console.error("Image ID mismatch. No response added.");
//           }
//         else {
//           console.error("No valid response from API:", response.data);
//         }
//       } catch (error) {
//         // Handle error and log details for debugging
//         console.error(
//           "Error sending message to the API:",
//           error.response ? error.response.data : error.message
//         );

//         // In case of an error, show the response message from the API
//         if (error.response) {
//           console.error("API Error Response:", error.response.data);
//           if (error.response.data.msg) {
//             alert(`Error from API: ${error.response.data.msg}`);
//           }
//         }
//       }
//     } else {
//       console.error("Invalid message or user not selected");
//     }
//   };


//  const fetchChatHistory = async () => {
//     try {
//       if (!selectedUser|| !selectedUser.image_id) {
//         console.error('user_id or image_id is missing');
//         return;
//       }

//       const response = await axios.get('https://image-generation-production.up.railway.app/chat_history', {
//         headers: {
//           Authorization: `Bearer ${localStorage.getItem("token")}`, // Ensure token is passed in the headers
//         },
//         params: {
//           user_id: user_id, // Send user_id as a query parameter
//           image_id: selectedUser.image_id, // Send image_id as a query parameter
//         },
//       });

//       // Check if the response contains chat history
//       const chatData = response.data;
//       console.log(chatData);

//       // If valid data, set the chat history
//       if (chatData && Array.isArray(chatData)) {
//         setChatHistory(chatData);
//       }
//     } catch (error) {
//       console.error('Error fetching chat history:', error);
//     }
//   };

//   // Fetch chat history when selectedUser changes (useEffect)
//   useEffect(() => {
//     if (chatHistory) {
//       fetchChatHistory(); // Fetch chat history using the selected user's image_id and user_id
//     }
//   }, [selectedUser]); // Depend on selectedUser




//   return (
//     <div
//       className="container-fluid bg-dark text-white vh-100 overflow-hidden"
//       style={{ fontSize: "1rem" }}
//     >
//       <div className="row h-100">
//         {/* Sidebar */}
//         <div className="col-md-3 border-end border-secondary bg-secondary bg-opacity-10">
//           <input
//             className="form-control bg-dark text-white my-3"
//             type="text"
//             placeholder="Search"
//             style={{ fontSize: "1rem" }}
//           />
//           <div
//             className="list-group overflow-auto"
//             style={{ maxHeight: "80vh" }}
//           >
//             {users.map((user, index) => (
//               <button
//                 key={index}
//                 className="list-group-item list-group-item-action bg-dark text-white border-secondary"
//                 style={{ fontSize: "1rem" }}
//                 onClick={() => handleUserClick(user)} // Set selected user when clicked
//               >
//                 <div className="d-flex align-items-center">
//                   <img
//                     className="rounded-circle me-2"
//                     src={`${user.image_url}`}
//                     alt="avatar"
//                     width="40"
//                     height="40"
//                   />
//                   <div className="text-start">
//                     <div className="fw-bold">{user.name}</div>
//                     <small className="text-muted">{user.message}</small>
//                   </div>
//                 </div>
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Main Chat */}
//         <div className="col-md-9 d-flex flex-column">
//           <div
//             className="d-flex justify-content-between align-items-center py-3 border-bottom border-secondary"
//             style={{ fontSize: "1rem" }}
//           >
//             <div className="d-flex align-items-center">
//               {selectedUser && (
//                 <>
//                   <img
//                     className="rounded-circle me-2"
//                     src={`${selectedUser.image_url}`}
//                     alt="avatar"
//                     width="40"
//                     height="40"
//                   />
//                   <h5 className="mb-0">{selectedUser.name}</h5>
//                 </>
//               )}
//             </div>
//             <button className="btn btn-primary "> Delete</button>
//           </div>

//           {/* <div
//             className="flex-grow-1 overflow-auto py-3"
//             style={{ maxHeight: "70vh" }}
//           >
//             {messages.map((msg, index) => (
//               <div
//                 key={index}
//                 className={`d-flex mb-3 ${
//                   msg.sender === user_id
//                     ? "justify-content-end"
//                     : "justify-content-start"
//                 }`}
//               >
//                 <img
//                   className="rounded-circle me-2"
//                   // Check if the message sender is 'You' (the user) or 'AI'
//                   src={
//                     msg.sender === user_id
//                       ? "https://i.pravatar.cc/150?img=5" // Sender's image
//                       : selectedUser?.image_url ||
//                         "https://i.pravatar.cc/150?img=1" // Receiver's image (AI or selectedUser)
//                   }
//                   alt="avatar"
//                   width="40"
//                   height="40"
//                 />
//                 <div
//                   className={`bg-secondary bg-opacity-25 rounded px-3 py-2 ${
//                     msg.sender === user_id ? "text-right" : "text-left"
//                   }`}
//                   style={{ fontSize: "1rem" }}
//                 >
//                   <p className="mb-1">{msg.text}</p>
//                 </div>
//               </div>
//             ))}
//           </div> */}
//   <div
//             className="flex-grow-1 overflow-auto py-3"
//             style={{ maxHeight: "70vh" }}
//           >
//             {/* Map over the chat history */}
//             {chatHistory> 0 ? (
//               chatHistory.map((msg, index) => (
//                 <div
//                   key={index}
//                   className={`d-flex mb-3 ${
//                     msg.sender === user_id ? "justify-content-end" : "justify-content-start"
//                   }`}
//                 >
//                   <img
//                     className="rounded-circle me-2"
//                     src={
//                       msg.sender === user_id
//                         ? "https://i.pravatar.cc/150?img=5"
//                         : selectedUser?.image_url || "https://i.pravatar.cc/150?img=1"
//                     }
//                     alt="avatar"
//                     width="40"
//                     height="40"
//                   />
//                   <div
//                     className={`bg-secondary bg-opacity-25 rounded px-3 py-2 ${
//                       msg.sender === user_id ? "text-right" : "text-left"
//                     }`}
//                     style={{ fontSize: "1rem" }}
//                   >
//                     <p className="mb-1">{msg.message}</p>
//                   </div>
//                 </div>
//               ))
//             ) : (
//               <p>No chat history available.</p>
//             )}
//           </div>

//           <div className="py-3 border-top border-secondary">
//             <div className="input-group">
//               <input
//                 className="form-control bg-dark text-white"
//                 placeholder="Write a message..."
//                 value={inputMessage}
//                 onChange={(e) => setInputMessage(e.target.value)}
//                 onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
//                 style={{ fontSize: "1rem" }}
//               />
//               <button className="btn btn-primary" onClick={handleSendMessage}>
//                 ↑
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Chat;


import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");
  const [selectedUser, setSelectedUser] = useState(null); // Track selected user
  const [users, setUsers] = useState([]); // State to hold dynamic users data
  const [chatHistory, setChatHistory] = useState([]); // State to store chat history

  const user_id = localStorage.getItem("user_id"); // Retrieve user_id from localStorage
  console.log("User ID from localStorage:", user_id);

  // Function to fetch user data dynamically based on user_id
  const fetchUserData = async () => {
    if (!user_id) {
      console.error("No user_id found in localStorage");
      return;
    }

    try {
      const response = await axios.get(
        "https://image-generation-production.up.railway.app/image_data",
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`, // Ensure token is passed in the headers
          },
          params: {
            user_id: user_id, // Send user_id as a query parameter
          },
        }
      );

      const imagesData = response.data;
      if (imagesData && Array.isArray(imagesData)) {
        const updatedUsers = imagesData.map((item) => ({
          name: item.image_name,
          message: item.message,
          image_id: item.id,
          image_url: item.image_url,
          user_id: item.user_id,
        }));

        setUsers(updatedUsers); // Set dynamic users data
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  // Fetch user data when the component mounts (useEffect)
  useEffect(() => {
    fetchUserData(); // Fetch user data using the user_id from localStorage
  }, [user_id]);

  // When a user is clicked, update the selectedUser state
  const handleUserClick = (user) => {
    setSelectedUser(user); // Set the selected user
    setMessages([]); // Start chat with selected user
    fetchChatHistory(user); // Fetch chat history for selected user
  };

  const fetchChatHistory = async (user) => {
    if (!user || !user.image_id) {
      console.error("user_id or image_id is missing");
      return;
    }

    try {
      const response = await axios.get(
        "https://image-generation-production.up.railway.app/chat_history",
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`, // Ensure token is passed in the headers
          },
          params: {
            user_id: user_id,
            image_id: user.image_id,
          },
        }
      );

      const chatData = response.data;
      // console.log("Chat Data:", chatData);

      if (chatData && Array.isArray(chatData)) {
        setChatHistory(chatData); // Set the chat history
      }
      console.log("Chat Data:", chatHistory);


    } catch (error) {
      console.error("Error fetching chat history:", error);
    }
  };

  const handleSendMessage = async () => {
    if (inputMessage.trim() && selectedUser) {
      const newMessage = { sender: user_id, text: inputMessage };
      setMessages([...messages, newMessage]);
      setInputMessage("");

      const payload = {
        image_id: selectedUser.image_id,
        user_id: selectedUser.user_id, // Send user_id with image_id
        human_msg: inputMessage,
      };

      try {
        const response = await axios.post(
          "https://image-generation-production.up.railway.app/chat",
          payload,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );

        if (response.data && response.data.response) {
          const aiResponse = response.data.response;
          setMessages((prevMessages) => [
            ...prevMessages,
            { sender: "AI", text: aiResponse },
          ]);
        } else {
          console.error("No valid response from API:", response.data);
        }
      } catch (error) {
        console.error("Error sending message to the API:", error);
      }
    } else {
      console.error("Invalid message or user not selected");
    }
  };

  return (
    <div className="container-fluid bg-dark text-white vh-100 overflow-hidden" style={{ fontSize: "1rem" }}>
      <div className="row h-100">
        {/* Sidebar */}
        <div className="col-md-3 border-end border-secondary bg-secondary bg-opacity-10">
          <input className="form-control bg-dark text-white my-3" type="text" placeholder="Search" style={{ fontSize: "1rem" }} />
          <div className="list-group overflow-auto" style={{ maxHeight: "80vh" }}>
            {users.map((user, index) => (
              <button
                key={index}
                className="list-group-item list-group-item-action bg-dark text-white border-secondary"
                style={{ fontSize: "1rem" }}
                onClick={() => handleUserClick(user)} // Set selected user when clicked
              >
                <div className="d-flex align-items-center">
                  <img className="rounded-circle me-2" src={user.image_url || "https://i.pravatar.cc/150?img=5"} alt="avatar" width="40" height="40" />
                  <div className="text-start">
                    <div className="fw-bold">{user.name}</div>
                    <small className="text-muted">{user.message}</small>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Main Chat */}
        <div className="col-md-9 d-flex flex-column">
          <div className="d-flex justify-content-between align-items-center py-3 border-bottom border-secondary" style={{ fontSize: "1rem" }}>
            <div className="d-flex align-items-center">
              {selectedUser && (
                <>
                  <img className="rounded-circle me-2" src={selectedUser.image_url || "https://i.pravatar.cc/150?img=1"} alt="avatar" width="40" height="40" />
                  <h5 className="mb-0">{selectedUser.name}</h5>
                </>
              )}
            </div>
            <button className="btn btn-primary"> Delete</button>
          </div>

          <div className="flex-grow-1 overflow-auto py-3" style={{ maxHeight: "70vh" }}>
            {/* Display Chat History */}
            {chatHistory ? (
              chatHistory.map((msg, index) => (
                <div key={index} className={`d-flex mb-3 ${msg.sender === user_id ? "justify-content-end" : "justify-content-start"}`}>
                  <img
                    className="rounded-circle me-2"
                    src={msg.sender === user_id ? "https://i.pravatar.cc/150?img=5" : selectedUser?.image_url || "https://i.pravatar.cc/150?img=1"}
                    alt="avatar"
                    width="40"
                    height="40"
                  />
                  <div className={`bg-secondary bg-opacity-25 rounded px-3 py-2 ${msg.sender === user_id ? "text-right" : "text-left"}`} style={{ fontSize: "1rem" }}>
                    <p className="mb-1">{msg.message}</p>
                  </div>
                </div>
              ))
            ) : (
              <p>No chat history available.</p>
            )}
          </div>

          <div className="py-3 border-top border-secondary">
            <div className="input-group">
              <input
                className="form-control bg-dark text-white"
                placeholder="Write a message..."
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                style={{ fontSize: "1rem" }}
              />
              <button className="btn btn-primary" onClick={handleSendMessage}>
                ↑
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
