import React from "react";
import Button from "../Button/Button";
import "./personTile.css";

export default function PersonTile({ name, img, balance, onSelect }) {
  let message = "";
  if (balance < 0) {
    message = `You owe ${name} ${Math.abs(balance)}₹`;
  } else if (balance === 0) {
    message = `You and ${name} are even`;
  } else {
    message = `${name} owes you ${balance}₹`;
  }
  return (
    <div className="person-tile">
      <div className="circular-image">
        <img src={img} alt={name} width={20} />
      </div>
      <div className="name-msg-block">
        <span>
          <b>{name}</b>
        </span>
        <span>{message}</span>
      </div>
      <div>
        <Button primary onClick={() => onSelect(name)}>
          Select
        </Button>
      </div>
    </div>
  );
}
