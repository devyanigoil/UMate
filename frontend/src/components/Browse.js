import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Browser.css";
import { Button, Modal } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar as faStarSolid,
  faMessage,
  faEye,
} from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarRegular } from "@fortawesome/free-regular-svg-icons";
import UserList from "./UserList";
import Profile from "./Profile"; // Import the Profile component

const Browse = (props) => {
  const [topRoommates, setTopRoommates] = useState([]);
  const [users, setUsers] = useState();
  const [modalShow, setModalShow] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const markAsFavourite = (email, param) => {
    console.log("entered");
    let roommate;
    if (param === "1") {
      roommate = topRoommates.find((r) => r.email === email);
    } else {
      roommate = users.find((r) => r.name === email);
    }
    if (!roommate) return;

    const payload = {
      user_email: props.userId, // User email from props
      fav_email: roommate.email, // Assuming email field in data
      add_fav: roommate.isFav ? false : "True",
    };

    axios
      .post("http://localhost:5000/user/favourites", payload)
      .then((response) => {
        if (response.status === 200) {
          if (param === "1") {
            setTopRoommates((prevRoommates) =>
              prevRoommates.map((r) =>
                r.email === email ? { ...r, isFav: !r.isFav } : r
              )
            );
          } else {
            setUsers((prevUsers) =>
              prevUsers.map((r) =>
                r.email === email ? { ...r, isFav: !r.isFav } : r
              )
            );
          }
        } else {
          console.error("Failed to update favorite status:", response.data.message);
        }
      })
      .catch((error) => console.error("Error marking as favorite:", error));
  };


  const handleViewProfile = async (email) => {
    try {
      const response = await fetch(`http://127.0.0.1:5000/user-details/${email}`);
      const data = await response.json();
      setSelectedUser(data); // Update userData with the response
      setModalShow(true); // Show the modal

    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };
  
  // const handleViewProfile = (email) => {
  //   axios
  //     .get(`http://127.0.0.1:5000/user/profile/${email}`)
  //     .then((response) => {
  //       setSelectedUser(response.data); // Set selected user data
  //       setModalShow(true); // Show the modal
  //     })
  //     .catch((error) => console.error("Error fetching user profile:", error));
  // };

  useEffect(() => {
    // Fetching top roommates from API
    axios
      .get("http://127.0.0.1:5000/rs/top-match", {
        params: { email: props.userId },
      })
      .then((response) => {
        setTopRoommates(response.data);
      })
      .catch((error) => console.error("Error fetching top roommates:", error));

    // Fetching user data from local JSON
    axios
      .get("/user_profile_data.json")
      .then((response) => setUsers(response.data))
      .catch((error) => console.error("Error loading the user data:", error));
  }, []);

  return (
    <>
      {props.isLoggedIn ? (
        <>
          <section className="speciality" id="speciality">
            <h3 className="heading">
              Top 5 <span>Suggestions</span>
            </h3>

            <div className="box-container">
              {topRoommates.length!=0? topRoommates.map((roommate, index) => (
                <div className="main-box" key={index}>
                  <div className="box">
                    <img
                      className="image"
                      src={roommate.photoUrl}
                      alt={roommate.userName}
                    />
                    <div className="content">
                      <h5>
                        {roommate.name} | {roommate.age}
                      </h5>
                      <p>{roommate.title}</p>
                    </div>
                  </div>
                  <div className="actions-btn-div">
                    <Button
                      className="custom-action-btn"
                      onClick={() => markAsFavourite(roommate.email, "1")}
                    >
                      {roommate.isFav ? (
                        <FontAwesomeIcon
                          icon={faStarSolid}
                          style={{ color: "white" }}
                        />
                      ) : (
                        <FontAwesomeIcon
                          icon={faStarRegular}
                          style={{ color: "white" }}
                        />
                      )}
                    </Button>
                    <Button className="custom-action-btn">
                      <FontAwesomeIcon
                        icon={faMessage}
                        style={{ color: "white" }}
                      />
                    </Button>
                    <Button className="custom-action-btn">
                      <FontAwesomeIcon icon={faEye} style={{ color: "white" }} onClick={() => handleViewProfile(roommate.email)} />
                    </Button>
                  </div>
                </div>
              )):<>No recommended roommates found</>}
            </div>
          </section>

          <section className="speciality">
            {users ? (
              <UserList users={users} markAsFavourite={markAsFavourite} handleViewProfile={handleViewProfile}/>
            ) : (
              <p>Loading users...</p>
            )}
          </section>
        </>
      ) : (
        <></>
      )}

      {/* Modal to show profile */}
      <Modal size="lg" show={modalShow} onHide={() => setModalShow(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedUser ? (
            <Profile userData={selectedUser} mode="view" />
          ) : (
            <p>Loading profile...</p>
          )}
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Browse;
