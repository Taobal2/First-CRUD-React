import React from "react";
import Card from "../ui/Card";
import { useState } from "react";
import classes from "./Form.module.css";
import {useLocation, useNavigate} from 'react-router-dom';

const Form = ({onSubmitForm, }) => {
  const location = useLocation();
  const navigate = useNavigate()
  const users = location.state;
  const [firstName, setFirstName] = useState(users && users.firstName != null ? users.firstName : "");
  const [lastName, setLastName] = useState(users && users.lastName!= null ? users.lastName: "");
  const [email, setEmail] = useState(users && users.email != null ? users.email : "");
  const [age, setAge] = useState(users && users.age != null ? users.age: "");
  const [mobileNumber, setMobileNumber] = useState(users && users.mobileNumber != null ? users.mobileNumber : "");
  const [address, setAddress] = useState(users && users.address != null ? users.address : "");
  const [id, setId] = useState(users && users.id != null ? users.id : null);

  const submitHandler = (event) => {
    event.preventDefault();

    const obj = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      age: age,
      mobileNumber: mobileNumber,
      address: address,
      id: id
    };

    onSubmitForm(obj);
    setFirstName("");
    setLastName("");
    setEmail("");
    setAge("");
    setMobileNumber("");
    setAddress("");
    console.log(obj);
  };

  const goBack = () => {
    navigate('/')
  }
  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            value={firstName}
            id="firstName"
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
          />

          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            value={lastName}
            id="lastName"
            onChange={(e) => {
              setLastName(e.target.value);
            }}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            value={email}
            id="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <label htmlFor="age">Age</label>
          <input
            type="number"
            value={age}
            id="age"
            onChange={(e) => {
              setAge(e.target.value);
            }}
          />
        </div>

        <div className={classes.control}>
          <label htmlFor="mobileNumber">Mobile Number</label>

          <input
            type="number"
            value={mobileNumber}
            id="mobileNumber"
            onChange={(e) => {
              setMobileNumber(e.target.value);
            }}
          />

          <label htmlFor="address">Address</label>

          <textarea
            type="text"
            rows="5"
            value={address}
            id="address"
            onChange={(e) => {
              setAddress(e.target.value);
            }}
          />
        </div>

        <div className={classes.actions}>
          <button>Save</button>
          <button className={classes.btncancel} onClick={goBack}>Cancel</button>
        </div>
      </form>
    </Card>
  );
};

export default Form;
