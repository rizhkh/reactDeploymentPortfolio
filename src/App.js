import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';

import './css/styles.css';
import './css/stylesforproject.css';

import Project from "./pages/Project";
import Home from "./pages/Home";



function App() {
  const url = "reactDeploymentPortfolio"
  return (
    <BrowserRouter>
        <div className="mainCont">
          <div className="blockPos blockPosFont" >
            <Routes>
              <Route path= "reactDeploymentPortfolio/" element={<Home />} />
              <Route path="reactDeploymentPortfolio/Projects" element={<Project />} />
            </Routes>
          </div>
        </div>

      </BrowserRouter>
  );
}

export default App;
