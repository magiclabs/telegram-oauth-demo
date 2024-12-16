import { useEffect, useState } from "react";
import { magic } from "../lib/magic";
import { useNavigate, useSearchParams } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const result = searchParams.get('result');

  const logout = async () => {
    try {
      await magic.user.logout();
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="container">
      {!result && <div className="loading">Loading...</div>}

      {result && (
        <div>
          <h1>Data returned:</h1>
          <pre className="user-info">{JSON.stringify(JSON.parse(result), null, 3)}</pre>
        </div>
      )}
      <button className="logout-button" onClick={logout}>
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
