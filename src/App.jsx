import "./App.css";
import Authenticate from "./components/Authenticate";
import SignUpForm from "./components/SignUpForm";
import { useState } from "react";

//-----the meat of the code
function App() {
  const [token, setToken] = useState(null);
  return (
    <>
      <SignUpForm token={token} setToken={setToken} />
      <Authenticate token={token} setToken={setToken} />
    </>
  );
}

export default App;
