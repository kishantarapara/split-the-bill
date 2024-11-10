import React, { useState } from "react";
import "./addPersonForm.css";
import Button from "../Button/Button";

const AddPersonForm = ({ onAddFriend }) => {
  const [friendName, setFriendName] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (friendName && imageUrl) {
      onAddFriend(friendName, imageUrl);
      setFriendName("");
      setImageUrl("");
    }
  };

  return (
    <div className="add-friend-form">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="friendName">👫 Friend name</label>
          <input
            type="text"
            id="friendName"
            value={friendName}
            onChange={(e) => setFriendName(e.target.value)}
            placeholder="Enter friend's name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="imageUrl">🌇 Image URL</label>
          <input
            type="text"
            id="imageUrl"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            placeholder="Enter image URL"
          />
        </div>
        <div className="add-person-button">
          <Button primary type="submit">
            Add
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AddPersonForm;
