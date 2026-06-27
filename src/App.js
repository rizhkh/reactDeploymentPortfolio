import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './css/styles.css';
import './css/stylesforproject.css';

import Home from './pages/Home';
import ProjectPage from './pages/ProjectPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project_page" element={<ProjectPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
