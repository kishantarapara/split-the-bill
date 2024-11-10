import React, { useContext } from "react";

import Persons from "../Persons/Persons";
import Button from "../Button/Button";
import AddFriendForm from "../AddPersonForm/AddPersonForm";
import { PersonsContext } from "../../App";

import "./personsPanel.css";

export default function PersonsPanel() {
  const { showForm, setShowForm, personsData, setPersonsData } =
    useContext(PersonsContext);

  const onAddFriend = (name, img) => {
    setPersonsData((prev) => {
      prev.push({
        id: "id" + new Date().getTime(),
        name,
        img,
        balance: 0,
        transactions: [],
      });
      return prev;
    });
    setShowForm((prev) => !prev);
  };

  const onAdd = () => {
    setShowForm((prev) => !prev);
  };

  return (
    <div className="persons-panel">
      <Persons personsData={personsData} />
      {showForm && <AddFriendForm onAddFriend={onAddFriend} />}
      <div className="add-button">
        <Button primary onClick={onAdd}>
          {showForm ? "Close" : "Add"}
        </Button>
      </div>
    </div>
  );
}
