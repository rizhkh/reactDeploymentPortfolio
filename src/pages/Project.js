import {Link} from 'react-router-dom';
import '../css/styles.css';
import '../css/stylesforproject.css';
import '../css/hovereffect.css';
import SkillStackClickAbleButtons from "../pages/SkillStack";

export default function Project(){


  return<>
  
  <div class="topnav">
    <div class="topnavlink">

      <div class="linkBox">
        <Link to="/">Home</Link>
      </div>
    </div>

    <div class="topnavdetail">
        <div class="label label-tab">Projects</div>
    </div>

  </div>
  <div style={{

  }}>

    <br />
    <br />
  <table style= {{width:"100%", borderCollapse: 'collapse'}}>

    <tr class='tr-hover-class projectBorderBottom' style={{borderBottom: "1px solid #eee"}}
   onClick={() => { 
    window.open("https://github.com/rizhkh/mswp", "_blank")
  } }
    >          
        <td style={{padding: 10}}>AI powered Minesweeper</td> 
        <td style={{padding: 10}}>                          
          <div class="label label-System" >A.I.</div>
          <div class="label label-System">Python</div>
        </td>
    </tr>

    <tr class='tr-hover-class' style={{borderBottom: "1px solid #eee"}}
       onClick={() => { 
        window.open("https://github.com/rizhkh/Image-Classifier", "_blank")
        } }>            
        <td style={{padding: 10}}>
        Image Classifier
        </td> 
        <td style={{padding: 10}}>                          
        <div class="label label-System" >A.I.</div>
        <div class="label label-System" >ML & Data</div>
        <div class="label label-System">Python (numpy & scikit)</div>
        </td>
    </tr>

    <tr class='tr-hover-class' style={{borderBottom: "1px solid #eee"}}
       onClick={() => { 
        window.open("https://github.com/rizhkh/mazesearch", "_blank")
        } }>            
        <td style={{padding: 10}}>Navigator</td> 
        <td style={{padding: 10}}>                          
        <div class="label label-System">Python</div>
        </td>
    </tr>

    <tr class='tr-hover-class' style={{borderBottom: "1px solid #eee"}}
       onClick={() => { 
        window.open("https://github.com/rizhkh/Map-search-Trajectory-plan", "_blank")
        } }>           
        <td style={{padding: 10}}>Search (Map)</td> 
        <td style={{padding: 10}}>                          
        <div class="label label-System">Java & Java Swing</div>
        </td>
    </tr>

    <tr class='tr-hover-class' style={{borderBottom: "1px solid #eee"}}
       onClick={() => { 
        window.open("https://github.com/rizhkh/Socket-programming-Client", "_blank")
        } }>             
        <td style={{padding: 10}}>Peer2Peer sharing utility</td> 
        <td style={{padding: 10}}>                          
        <div class="label label-System">Java</div>
        <div class="label label-System">Python & PyNaCL</div>
        </td>
    </tr>

    <tr class='tr-hover-class' style={{borderBottom: "1px solid #eee"}}
       onClick={() => { 
        window.open("https://github.com/rizhkh/GameOfChess", "_blank")
        } }>             
        <td style={{padding: 10}}>Chess</td> 
        <td style={{padding: 10}}>                          
        <div class="label label-System" >Chess</div>
        <div class="label label-System">JavaFX</div>
        <div class="label label-System">Android</div>
        <div class="label label-System">Gradle</div>
        </td>
    </tr>

    <tr class='tr-hover-class' style={{borderBottom: "1px solid #eee"}}
       onClick={() => { 
        window.open("https://github.com/rizhkh/MusicSongPlaylist", "_blank") 
        } }>              
        <td style={{padding: 10}}>Music Player</td> 
        <td style={{padding: 10}}>                          
        <div class="label label-System">JavaFX</div>
        <div class="label label-System">JSyn</div>
        </td>
    </tr>

    <tr class='tr-hover-class' style={{borderBottom: "1px solid #eee"}}
       onClick={() => { 
        window.open("https://github.com/rizhkh/System-Utility-Malloc-free", "_blank")
        } }>             
        <td style={{padding: 10}}>System Utilities</td> 
        <td style={{padding: 10}}>                          
        <div class="label label-System">C Language</div>
        </td>
    </tr>

    <tr class='tr-hover-class' style={{borderBottom: "1px solid #eee"}}
       onClick={() => { 
        window.open("https://github.com/rizhkh/PhotoAlbum", "_blank")
        } }>             
        <td style={{padding: 10}}>Photo Viewer (Photo Storage platform included)</td> 
        <td style={{padding: 10}}>                          
        <div class="label label-System">Java</div>
        <div class="label label-System">JavaScript</div>
        </td>
    </tr>

  </table>

  </div>
  </>
}
