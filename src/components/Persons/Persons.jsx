import React, { useContext } from "react";
import PersonTile from "../PersonaTile/PersonTile";
import { PersonsContext } from "../../App";

import "./persons.css";

export default function Persons({ personsData }) {
  const { setSelectedPerson } = useContext(PersonsContext);

  const onSelect = (name) => {
    setSelectedPerson(name);
  };

  return (
    <div className="persons">
      {personsData.map((item, index) => (
        <PersonTile
          key={item.id}
          img={item.img}
          name={item.name}
          balance={item.balance}
          onSelect={onSelect}
        />
      ))}
    </div>
  );
}
