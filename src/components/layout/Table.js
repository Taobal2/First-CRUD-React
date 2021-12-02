import React from "react";
import Card from "../ui/Card";
import classes from "./Table.module.css";
import { FcDeleteDatabase, FcEditImage } from "react-icons/fc";
import { useNavigate } from "react-router-dom";


const Table = ({ allUsersData, onClickEdit, onClickDelete }) => {


  return (
    <Card>
      <table className={classes.table}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Email</th>
            <th>Number</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {allUsersData.map((users) => {
            return (
              <tr key={users.id}>
                <td>
                  {" "}
                  {users.firstName} - {users.lastName}{" "}
                </td>
                <td> {users.age} </td>
                <td> {users.email} </td>
                <td> {users.mobileNumber} </td>
                <td>
                  {" "}
                  <span onClick={() => onClickEdit(users.id)} >
                    <FcEditImage></FcEditImage>
                  </span>{" "}
                  <span onClick={() => onClickDelete(users.id)}>
                    <FcDeleteDatabase></FcDeleteDatabase>
                  </span>{" "}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Card>
  );
};

export default Table;
