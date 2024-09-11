import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EcommercePage from './pages/EcommercePage';

// Main App Component
function App() {
  return (
    <Router>
      <div className="App">
        {/* Routes Configuration */}
        <Routes>
          <Route path="/" element={<EcommercePage />} />
          {/* You can add more routes here */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
