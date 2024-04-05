import { useState } from "react";
import styled from "styled-components";

export default function Authenticate({ token }) {
  const [successMessage, setSuccessMessage] = useState(null);
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [error, setError] = useState(null);
  const styles = {
    nextSteps: {
      fontSize: "18px",
      color: "#4c34eb",
      backgroundColor: "#808080",
      marginTop: "50px",
    },
    button: {
      textAlign: "center",
      margin: "5px auto",
      marginTop: "50px",
      border: "3px solid #4c34eb",
      radius: "5px",
    },
  };
  async function handleClick() {
    try {
      const response = await fetch(
        "https://fsa-jwt-practice.herokuapp.com/authenticate",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const result = await response.json();
      console.log("Authenticate result", result);
      setSuccessMessage(result.message);
      setLoggedInUser(result.data.username);
      console.log("Logged in user", loggedInUser);
    } catch (error) {
      setError(error.message);
    }
  }
  return (
    <>
      <h2 style={styles.nextSteps}>Authenticate</h2>
      {successMessage && <p>{successMessage}</p>}
      {loggedInUser && <p> THE LOGGED IN USER IS: {loggedInUser}</p>}
      {error && <p>{error}</p>}
      <button style={styles.button} onClick={handleClick}>
        Auth me
      </button>
    </>
  );
}
