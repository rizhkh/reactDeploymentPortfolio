import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';

import './css/styles.css';
import './css/stylesforproject.css';

import Project from "./pages/Project";
import Home from "./pages/Home";



function App() {
  return (
    <BrowserRouter>
        <div className="mainCont">
          <div className="blockPos blockPosFont" >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Projects" element={<Project />} />
            </Routes>
          </div>
        </div>


    
      {/* <div>
        <div className="mainCont">
          <div className="blockPos blockPosFont" >
            {AboutMeStatement()}
          </div>
        </div>
      </div> */}
      </BrowserRouter>
  );
}

export default App;
