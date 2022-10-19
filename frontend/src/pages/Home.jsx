import React, { useEffect, useState } from "react";
// import WorkoutDetails from "../components/WorkoutDetails";
import { useWorkoutsContext } from "../hooks/useContactFormContext";
import { useAuthContext } from "../hooks/useAuthContex";
const Home = () => {
  const { user } = useAuthContext();
  console.log(user);
  //   useEffect(() => {
  //     const fetchWorkouts = async () => {
  //       const response = await fetch("/api/workouts", {
  //         headers: { Authorization: `Bearer ${user.token}` },
  //       });
  //       const json = await response.json();

  //       if (response.ok) {
  //         dispatch({ type: "SET_WORKOUTS", payload: json });
  //       }
  //     };
  //     if (user) {
  //       fetchWorkouts();
  //     }
  //   }, [user]);
  return (
    <div className="home">
      <div className="hero-section">
        <img
          className="masthead-avatar land"
          src="https://images.pexels.com/photos/13694183/pexels-photo-13694183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="..."
        />
      </div>
      <div className="cards">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="card my-5 rounded-1">
                <img
                  src="https://images.pexels.com/photos/13694183/pexels-photo-13694183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  className="card-img-top rounded"
                  alt=""
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="card my-5 rounded-1">
                <img
                  src="https://images.pexels.com/photos/13694183/pexels-photo-13694183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  className="card-img-top rounded"
                  alt=""
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="card my-5 rounded-1">
                <img
                  src="https://images.pexels.com/photos/13694183/pexels-photo-13694183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  className="card-img-top rounded"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
