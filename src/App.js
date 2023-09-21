
// import './App.css';
import './css/styles.css';
import './css/stylesforproject.css';
import dp from './img/0.jpg'
import aboutMeStatement from "./functionality";



function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
      
      <div>
        <div className="mainCont">
          <div className="blockPos blockPosFont" >
            {aboutMeStatement()}
          </div>
        </div>
      </div>
        
    //   </header>
    // </div>
  );
}

export default App;
