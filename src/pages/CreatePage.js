import { useState } from "react";
import Form from "../components/layout/Form";
import { useNavigate } from "react-router-dom";

const CreatePage = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);

  //Add (POST) User
  const addUser = async (user) => {
    if (user.id == null) {
      const res = await fetch("http://localhost:5000/users", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(user),
      });

      const data = await res.json();
      setUsers([...users, data]);
    } else {
      const res = await fetch(`http://localhost:5000/users/${user.id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(user),
      });

      const data = await res.json();
      setUsers([...users, data]);
    }

    navigate("/");
  };

  return (
    <div>
      <Form onSubmitForm={addUser}></Form>
    </div>
  );
};

export default CreatePage;
