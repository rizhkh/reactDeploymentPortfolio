import '../css/styles.css';
import '../css/stylesforproject.css';
import '../css/hovereffect.css';
import git from '../img/git.png';


export default function SampleProjects() {
  return   <>    
      <div>

        <a href="https://github.com/rizhkh/mswp" class="linkBoxHeading linkProj">
          <div class="project_tab_desc" 
          style={{float:"left", padding: "25px", margin:"7px", width:"350px", padding:18}}>
            <h3 style={{ fontSize: "14px"}}>
              <table><tr>
                <td>
                Minesweeper (A.I. Playing Minesweeper) 
                </td>
                <td>
                <a href="https://github.com/rizhkh/mswp"><img class="icons" src={git} width="20" height="20" /></a>
                </td>
                </tr></table>
              </h3>
            <p>An autonomous A.I. agent designed to play a game of Minesweeper</p>
            <div class="labelProject label-System" style={{ fontSize: '12px', margin: 2}}>Python</div>
            <div class="labelProject label-System" style={{ fontSize: '12px', margin: 2}}>Data</div>

            <div class="labelProject label-System" style={{ fontSize: '12px', margin: 2}}>Data</div>
          </div>
        </a>


        <a href="https://github.com/rizhkh/MusicSongPlaylist" class="linkBoxHeading linkProj">
          <div class="project_tab_desc" 
          style={{float:"left", padding: "25px", margin:"7px", width:"350px", padding:18}}>
            <h3 style={{ fontSize: "14px"}}>
              <table><tr>
                <td>
                Music Player
                </td>
                <td>
                <a href="https://github.com/rizhkh/MusicSongPlaylist"><img class="icons" src={git} width="20" height="20" /></a>
                </td>
                </tr></table>
              </h3>
            <p>Developed a music player with a friendly graphical user interface</p>
            <div class="labelProject label-System" style={{ fontSize: '12px', margin: 2}}>Java</div>
            <div class="labelProject label-System" style={{ fontSize: '12px', margin: 2}}>JavaFX</div>
            <div class="labelProject label-System" style={{ fontSize: '12px', margin: 2}}>JSyn</div>
          </div>
        </a>
        
        
        <div style={{width:"40px", display: 'in-line'}}>  
        
        <a href="/Projects" class="linkBoxHeading linkProj">
          <div >
            <div class="labelProject label-System" style={{ fontSize: '12px', margin: 2}}>See More...</div>
          </div>
        </a>
        </div>


      </div>
</>;
}