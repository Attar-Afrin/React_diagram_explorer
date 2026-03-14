# React Diagram Dashboard
A simple React dashboard where users can upload a circuit diagram image and view a list of circuit components.
This project demonstrates basic React concepts such as component structure, state management, and simple UI interaction.

## Features
* Upload circuit diagram images (PNG/JPG)
* Preview the uploaded image
* Display uploaded file name
* Zoom In / Zoom Out / Reset image view
* Sidebar showing circuit components
* Highlight selected component from the list
* Responsive layout for desktop and tablet screens

## Project Structure
diagram-dashboard
│
├── index.html
├── package.json
├── src
│   ├── components
│   │   ├── UploadBox.jsx
│   │   ├── DiagramViewer.jsx
│   │   ├── ComponentList.jsx
│   ├── pages
│   │   └── Dashboard.jsx
│   ├── services
│   │   └── api.js
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx

## Tech Stack
* React
* Vite
* JavaScript
* CSS

## Mock Data
The project uses mock API data to simulate detected circuit components.
Example:
Resistor
Capacitor
Diode
Transistor

Getting Started
1. Clone the repository
git clone (https://github.com/Attar-Afrin/React_diagram_explorer)
2. Navigate to project folder
cd react-diagram-dashboard
3. Install dependencies
npm install
4. Run the project
npm run dev

Open the browser and visit:

(http://localhost:5173/)

How It Works

1. User uploads a circuit diagram image.
2. The image is displayed in the diagram viewer.
3. Users can zoom in, zoom out, or reset the image view.
4. A list of circuit components is displayed in the sidebar.
5. Clicking a component highlights it in the interface.

## Future Improvements

* Detect components directly from uploaded diagrams
* Add drag and drop image upload
* Improve diagram highlighting for selected components

## Author

Developed as a React practice project to demonstrate dashboard UI and component-based architecture.

