import { createContext, useState, useEffect } from "react";

import "./App.css";
import AddBillForm from "./components/AddBillForm/AddBillForm";
import PersonsPanel from "./components/PersonsPanel/PersonsPanel";
import data from "./modals/friends.json";
import Button from "./components/Button/Button";
import NavBar from "./components/NavBar/NavBar";

export const PersonsContext = createContext(null);

function App() {
  const [selectedPerson, setSelectedPerson] = useState(null);
  const [personsData, setPersonsData] = useState(data);
  const [showForm, setShowForm] = useState(false);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const contextObj = {
    selectedPerson,
    setSelectedPerson,
    personsData,
    setPersonsData,
    showForm,
    setShowForm,
  };

  const addBill = ({ billValue, myExpense, friendExpense, paidByMe, note }) => {
    const balance = paidByMe ? friendExpense : -myExpense;
    setPersonsData((prev) => {
      let index = prev.findIndex((item) => item.name === selectedPerson);
      prev[index].transactions.push({
        totalAmount: billValue,
        balance: balance,
        date: new Date().toISOString(),
        note,
      });
      prev[index].balance += balance;

      return [...prev];
    });
    setSelectedPerson(null);
  };

  return (
    <div>
      <PersonsContext.Provider value={contextObj}>
        <NavBar theme={theme} toggleTheme={toggleTheme} />
        <div className="main-app">
          <PersonsPanel />
          {selectedPerson !== null && (
            <AddBillForm
              friendName={selectedPerson}
              onSplitBill={addBill}
              onCancel={() => setSelectedPerson(null)}
            />
          )}
        </div>
      </PersonsContext.Provider>
    </div>
  );
}

export default App;
