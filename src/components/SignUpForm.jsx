import { useState } from "react";

export default function SignUpForm({ token, setToken }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const styles = {
    label: {
      fontSize: ".8rem",
      color: "#c3d6d1",
      margin: "20px",
      padding: "10px",
      textAlign: "center",
    },
    button: {
      textAlign: "center",
      margin: "5px auto",
      marginTop: "50px",
      border: "2px solid #228B22",
      radius: "5px",
    },
  };

  // Add a function to handle form submission
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://fsa-jwt-practice.herokuapp.com/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, password }),
        }
      );
      const result = await response.json();
      console.log("Sign up result", result);
      setToken(result.token);
    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <>
      <div style={{ background: "#808080", minWidth: "500px", radius: "30%" }}>
        <h2>Sign up</h2>
        <h6>
          Username must be at least 3 characters and fewer than 220 characters
        </h6>
        {error && <p>{error}</p>}
        <form onSubmit={handleSubmit}>
          <label style={styles.label}>
            Username:{" "}
            <input
              value={username}
              minLength={3}
              maxLength={220}
              style={{ minWidth: "200px", radius: "30%", textAlign: "left" }}
              onChange={(e) => setUsername(e.target.value)}
            />
            <br></br>
          </label>
          <br></br>
          <label style={styles.label}>
            Password:{" "}
            <input
              type="password"
              minLength={8}
              maxLength={220}
              style={{ minWidth: "200px", radius: "30%", textAlign: "left" }}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <br></br>
          <button style={styles.button}>Submit</button>
        </form>
      </div>
    </>
  );
}
