import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './css/styles.css';
import './css/stylesforproject.css';

import Home from './pages/Home';
import ProjectPage from './pages/ProjectPage'; // Import your project page component

function App() {
  return (
    <BrowserRouter>
      <div className="mainCont">
        <div className="blockPos blockPosFont">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project_page" element={<ProjectPage />} /> {/* Use element prop */}
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;