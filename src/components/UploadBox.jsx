import React from "react";

function UploadBox({ setDiagramImage, setUploadedFile }) {

  // handle user selecting a file
  const handleFileChange = (event) => {

    const selectedFile = event.target.files[0];

    if (selectedFile) {
      const imageURL = URL.createObjectURL(selectedFile);

      setDiagramImage(imageURL);
      setUploadedFile(selectedFile.name);
    }
  };

  return (
    <div className="uploadBox">

      <h3>Upload Diagram</h3>

      <input
        type="file"
        accept="image/png, image/jpeg"
        onChange={handleFileChange}
      />

    </div>
  );
}

export default UploadBox;