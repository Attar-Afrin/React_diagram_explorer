import React, { useState } from "react";

function DiagramViewer({ diagramImage, selectedPart }) {

  const [zoomLevel, setZoomLevel] = useState(1);

  const handleZoomIn = () => {
    setZoomLevel(zoomLevel + 0.2);
  };

  const handleZoomOut = () => {
    if (zoomLevel > 0.4) {
      setZoomLevel(zoomLevel - 0.2);
    }
  };

  const resetView = () => {
    setZoomLevel(1);
  };

  return (
    <div className="viewer">

      <div className="controls">
        <button onClick={handleZoomIn}>Zoom In</button>
        <button onClick={handleZoomOut}>Zoom Out</button>
        <button onClick={resetView}>Reset</button>
      </div>

      {diagramImage ? (
        <div className="imageWrapper">

          <img
            src={diagramImage}
            alt="circuit diagram"
            className="diagramImage"
            style={{ transform: `scale(${zoomLevel})` }}
          />

          {selectedPart && (
            <div className="highlightBox">
              Selected: {selectedPart}
            </div>
          )}

        </div>
      ) : (
        <p>No diagram uploaded yet</p>
      )}

    </div>
  );
}

export default DiagramViewer;