import React from "react";
import Table from "../components/layout/Table";
import { useState, useEffect } from "react";
import Form from "../components/layout/Form";
import { Link, useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  const [loadedUsers, setLoadedUsers] = useState([]);

  useEffect(() => {
    const getAllUsers = async () => {
      await fetchUsers().then((data) => {
        setLoadedUsers(data);
      });
    };

    getAllUsers();
  }, []);

  //Fetch (GETALL) users from API
  const fetchUsers = async () => {
    const res = await fetch("http://localhost:5000/users");
    const data = await res.json();

    return data;
  };

  // Get One user
  const onClickEdit = async (id) => {
    const res = await fetch(`http://localhost:5000/users/${id}`);
    const data = await res.json();
    navigate('/create-page', {state: data});
  };

  // Delete User
  const onClickDelete = async (id) => {
    await fetch(`http://localhost:5000/users/${id}`, {
      method: "DELETE",
    });
    setLoadedUsers(loadedUsers.filter((e) => e.id !== id));
  };

  return (
    <div>
      <Table
        allUsersData={loadedUsers}
        onClickEdit={onClickEdit}
        onClickDelete={onClickDelete}
      ></Table>
    </div>
  );
};

export default HomePage;
