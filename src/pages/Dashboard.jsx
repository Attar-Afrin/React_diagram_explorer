import React, { useState, useEffect } from "react";
import UploadBox from "../components/UploadBox";
import DiagramViewer from "../components/DiagramViewer";
import ComponentList from "../components/ComponentList";
import { fetchCircuitParts } from "../services/api";

function Dashboard() {

  const [diagramImage, setDiagramImage] = useState(null);
  const [uploadedFile, setUploadedFile] = useState("");
  const [partList, setPartList] = useState([]);
  const [selectedPart, setSelectedPart] = useState(null);

  useEffect(() => {
    const data = fetchCircuitParts();
    setPartList(data);
  }, []);

  return (
    <div className="container">

      <h2>Diagram Dashboard</h2>

      <UploadBox
        setDiagramImage={setDiagramImage}
        setUploadedFile={setUploadedFile}
      />

      {uploadedFile && <p>Uploaded File: {uploadedFile}</p>}

      <div className="dashboard">

        <DiagramViewer
          diagramImage={diagramImage}
          selectedPart={selectedPart}
        />

        <ComponentList
          partList={partList}
          setSelectedPart={setSelectedPart}
        />

      </div>

    </div>
  );
}

export default Dashboard;