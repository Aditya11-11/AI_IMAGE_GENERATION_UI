import { useState } from "react";

export default function AdminDashboard() {
  const [username, setUsername] = useState("azq6w44swt");
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

  return (
    <div className="container min-vh-100 bg-dark text-white p-4">
      {/* Header with tokens */}
      {/* <div className="d-flex justify-content-between align-items-center mb-6">
        <div></div>
        <div className="d-flex align-items-center gap-2">
          <div className="d-flex align-items-center gap-1">
            <svg
              className="w-25 h-25"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13 10L21 3M21 3H15M21 3V9M11 14L3 21M3 21H9M3 21V15"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="font-weight-semibold">196</span>
          </div>
          <button className="btn btn-light text-dark rounded-pill px-4 py-1 text-sm font-weight-medium">
            Get more tokens
          </button>
          <div className="w-8 h-8 rounded-circle bg-secondary d-flex align-items-center justify-content-center">
            V
          </div>
        </div>
      </div> */}

      {/* Welcome section */}
      <div className="mb-6">
        <h1 className="h3 font-weight-bold">Welcome back, {username}</h1>
      </div>

      {/* Stats cards */}
      <div className="row row-cols-1 row-cols-md-4 g-4 mb-10">
  <div
    className="bg-dark rounded-2 p-4"
    style={{ border: "1px solid gray" }}
  >
    <div className="d-flex mb-4">
      <div className="w-10 h-10 rounded-circle bg-success/30 d-flex align-items-center justify-content-center">
        <div className="w-6 h-6 text-success">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 6v12M6 12h12"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
      <button className="ml-auto btn btn-dark rounded-pill px-4 py-1 text-sm">
        Request payout
      </button>
    </div>
    <div className="">Balance</div>
    <div className="h2 font-weight-bold">${stats.balance.toFixed(2)}</div>
  </div>

  <div
    className="bg-dark rounded-2 p-4"
    style={{ border: "1px solid gray" }}
  >
    <div className="w-10 h-10 rounded-circle bg-success/30 d-flex align-items-center justify-content-center mb-4">
      <div className="w-6 h-6 text-success">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 6v12M6 12h12"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
    <div className="">Paid out</div>
    <div className="h2 font-weight-bold">${stats.paidOut.toFixed(2)}</div>
  </div>

  <div
    className="bg-dark rounded-2 p-4"
    style={{ border: "1px solid gray" }}
  >
    <div className="w-10 h-10 rounded-circle bg-primary/30 d-flex align-items-center justify-content-center mb-4">
      <i className="fa-solid fa-message text-primary"></i>
    </div>
    <div className="">Messages</div>
    <div className="h2 font-weight-bold">{stats.messages}</div>
  </div>

  <div
    className="bg-dark rounded-2 p-4"
    style={{ border: "1px solid gray" }}
  >
    <div className="w-10 h-10 rounded-circle bg-success/30 d-flex align-items-center justify-content-center mb-4">
      <i className="fa-solid fa-image text-success"></i>
    </div>
    <div className="">Paid pictures generated</div>
    <div className="h2 font-weight-bold">{stats.paidPictures}</div>
  </div>
</div>

      {/* Characters section */}
      <div className="mb-6">
        <h2 className="h4 font-weight-bold mb-4">Characters</h2>

        <div
          className="bg-dark rounded-2 p-4 mb-4"
          style={{ border: "1px solid gray" }}
        >
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
              <button className="btn btn-dark rounded-pill px-4 py-2 text-sm d-flex align-items-center gap-2">
                <i class="fa-solid fa-message"></i>
                <span>Chat</span>
              </button>
              <button className="btn btn-dark rounded-pill px-4 py-2 text-sm d-flex align-items-center gap-2">
                <i class="fa-solid fa-image"></i>
                <span>Generate photos</span>
              </button>
              <button className="btn btn-dark rounded-pill px-4 py-2 text-sm d-flex align-items-center gap-2">
                <i class="fa-solid fa-pen"></i>
                <span>Edit character</span>
              </button>
              <button className="btn btn-dark rounded-pill w-10 h-10 d-flex align-items-center justify-content-center">
                <i class="fa-solid fa-grip"></i>
              </button>
            </div>
          </div>

          <h3 className="h5 font-weight-bold mb-4">{character.name}</h3>

          <div className="row g-4 d-flex justify-content-center">
            <div className="col-12 col-md-3 d-flex align-items-center gap-3">
              <div className="w-10 h-10 rounded-circle bg-purple-900/30 d-flex align-items-center justify-content-center">
                <i className="fa-solid fa-users text-info"></i>
              </div>
              <div>
                <div>Unique users</div>
                <div className="font-weight-bold">{character.uniqueUsers}</div>
              </div>
            </div>

            <div className="col-12 col-md-3 d-flex align-items-center gap-3">
              <div className="w-10 h-10 rounded-circle bg-primary/30 d-flex align-items-center justify-content-center">
                <i className="fa-solid fa-message text-primary"></i>
              </div>
              <div>
                <div>Unique chats</div>
                <div className="font-weight-bold">{character.uniqueChats}</div>
              </div>
            </div>

            <div className="col-12 col-md-3 d-flex align-items-center gap-3">
              <div className="w-10 h-10 rounded-circle bg-primary/30 d-flex align-items-center justify-content-center">
                <i className="fa-solid fa-message text-info"></i>
              </div>
              <div>
                <div>Messages</div>
                <div className="font-weight-bold">{character.messages}</div>
              </div>
            </div>

            <div className="col-12 col-md-3 d-flex align-items-center gap-3">
              <div className="w-10 h-10 rounded-circle bg-success/30 d-flex align-items-center justify-content-center">
                <i className="fa-solid fa-image text-success"></i>
              </div>
              <div>
                <div>Pictures unlocked</div>
                <div className="font-weight-bold">
                  {character.picturesUnlocked}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Add character slot */}
        <div className="bg-dark rounded-lg p-4 d-flex justify-content-between align-items-center">
          <div className="d-flex gap-2 align-items-center ">
            <div
              className="w-16 h-16 p-2 rounded-circle  d-flex align-items-center justify-content-center mr-4"
              style={{ border: "1px solid gray " }}
            >
              <i class="fa-solid fa-plus"></i>
            </div>
            <div className="">
              <h3 className="h5 mt-2font-weight-bold">Extra character slot</h3>
              <p className="">Add an extra slot to your account</p>
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
