import React, { useState } from "react";
import Button from "../Button/Button";
import "./addBillForm.css";

const AddBillForm = ({ friendName, onSplitBill, onCancel }) => {
  const [billValue, setBillValue] = useState("");
  const [friendExpense, setFriendExpense] = useState("");
  const [payer, setPayer] = useState("You");
  const [note, setNote] = useState("");
  const [errors, setErrors] = useState({});

  const yourExpense = billValue > 0 ? billValue - friendExpense : 0;

  const validateFields = () => {
    const newErrors = {};
    if (!billValue || billValue <= 0) {
      newErrors.billValue = "Bill value must be greater than 0";
    }
    if (!friendExpense || friendExpense < 0) {
      newErrors.friendExpense = "Friend's expense must be a positive number";
    }
    if (friendExpense > billValue) {
      newErrors.friendExpense = "Friend's expense cannot exceed the bill value";
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateFields();
    if (Object.keys(validationErrors).length === 0) {
      onSplitBill({
        billValue: parseFloat(billValue),
        myExpense: parseFloat(yourExpense),
        friendExpense: parseFloat(friendExpense),
        paidByMe: payer === "You",
        note,
      });
      setBillValue("");
      setFriendExpense("");
      setPayer("You");
      setNote("");
      setErrors({});
    } else {
      setErrors(validationErrors);
    }
  };

  const onCancelClick = (e) => {
    e.preventDefault();
    onCancel();
  };

  return (
    <div className="add-bill-form">
      <h3>SPLIT A BILL WITH {friendName.toUpperCase()}</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="billValue">💰 Bill value</label>
          <input
            type="number"
            id="billValue"
            value={billValue}
            onChange={(e) => setBillValue(parseFloat(e.target.value))}
            placeholder="Enter total bill amount"
          />
          {errors.billValue && (
            <div className="error-message">{errors.billValue}</div>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="friendExpense">🧑‍🤝‍🧑 {friendName}'s expense</label>
          <input
            type="number"
            id="friendExpense"
            value={friendExpense}
            onChange={(e) => setFriendExpense(parseFloat(e.target.value))}
            placeholder={`Enter ${friendName}'s share`}
          />
          {errors.friendExpense && (
            <div className="error-message">{errors.friendExpense}</div>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="yourExpense">🧍 Your expense</label>
          <input
            type="number"
            id="yourExpense"
            value={yourExpense}
            disabled
            placeholder="Calculated automatically"
          />
        </div>
        <div className="form-group">
          <label htmlFor="payer">🙂 Who is paying the bill?</label>
          <select
            id="payer"
            value={payer}
            onChange={(e) => setPayer(e.target.value)}
            style={{ width: "182px" }}
          >
            <option value="You">You</option>
            <option value={friendName}>{friendName}</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="billNote">📝 Note for this bill</label>
          <input
            type="text"
            id="billNote"
            value={note}
            onChange={(e) => setNote(e.target.value)}
            placeholder="Note for this bill"
          />
          {errors.note && <div className="error-message">{errors.note}</div>}
        </div>
        <div className="add-bill-button">
          <Button secondary onClick={onCancelClick}>
            Cancel
          </Button>
          <Button primary type="submit">
            Add
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AddBillForm;
