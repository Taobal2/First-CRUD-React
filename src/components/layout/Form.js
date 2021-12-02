import React from "react";
import Card from "../ui/Card";
import { useState } from "react";
import classes from "./Form.module.css";

const Form = ({ onSubmitForm}) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [address, setAddress] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();

    const obj = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      age: age,
      mobileNumber: mobileNumber,
      address: address,
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
          {/* <button>Cancel</button> */}
        </div>
      </form>
    </Card>
  );
};

export default Form;
