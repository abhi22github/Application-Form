import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function ViewUser() {
  const [user, setUser] = useState({ name: "", username: "", email: "" });
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:8080/user/${id}`);
    setUser(result.data);
  };

  return (
    <div className="container">
      <div className="card w-50 mx-auto mt-5 shadow">
        <div className="card-header text-center fs-4 fw-bold">User Details</div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item"><b>Name:</b> {user.name}</li>
          <li className="list-group-item"><b>Username:</b> {user.username}</li>
          <li className="list-group-item"><b>Email:</b> {user.email}</li>
        </ul>
        <div className="card-footer text-center">
          <button className="btn btn-primary mt-3" onClick={() => navigate('/')}>
            Back to Home
          </button>
        </div>
      </div>
      <h1>Thank You!!!!</h1>
    </div>
  );
}
