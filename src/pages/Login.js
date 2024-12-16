import { useNavigate } from "react-router-dom";
import { magic } from "../lib/magic";
import { FaTelegram } from "react-icons/fa";
import { useState } from "react";

const Login = () => {
  const navigate = useNavigate();
  const [loading, setIsLoading] = useState(false);
  const handleSocialLogin = async () => {
    setIsLoading(true)
    try {
      const result = await magic.oauth2.loginWithPopup({
        provider: 'telegram'
      })
      navigate(`/dashboard?result=${JSON.stringify(result)}`)
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="container">
      <h1>Magic + Telegram</h1>
      <button onClick={handleSocialLogin}>
        <FaTelegram size={"2.5rem"} />
        {loading ? "Loading..." : "Log in with Telegram"}
      </button>
    </div>
  );
};

export default Login;
