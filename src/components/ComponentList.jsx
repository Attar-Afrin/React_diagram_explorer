import React, { useState } from "react";

function ComponentList({ partList, setSelectedPart }) {

  const [activePart, setActivePart] = useState(null);

  const handleClick = (part) => {
    setActivePart(part.id);
    setSelectedPart(part.name);
  };

  return (
    <div className="componentList">

      <h3>Circuit Components</h3>

      {partList.map((part) => (

        <div
          key={part.id}
          className={activePart === part.id ? "component selected" : "component"}
          onClick={() => handleClick(part)}
        >
          {part.name}
        </div>

      ))}

    </div>
  );
}

export default ComponentList;