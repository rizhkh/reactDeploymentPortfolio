import {Link} from 'react-router-dom';
import '../css/styles.css';
import '../css/stylesforproject.css';
import '../css/hovereffect.css';

export default function Project(){


  return<>
  
  <div class="topnav">
    <div class="topnavlink">

      <div class="linkBox">
        <Link to="/">Home</Link>
      </div>
    </div>

    <div class="topnavdetail">
        <div class="label label-tab">Skills & Projects</div>
    </div>

  </div>
  <div style={{

  }}>
    <br />
  <table style= {{width:"100%", borderCollapse: 'collapse'}}>

    <tr class='tr-hover-class' style={{borderBottom: "3px solid #eee"}}
   onClick={() => { window.location.href = "https://github.com/rizhkh/mswp"; } }
    >          
        <td style={{padding: 10}}>AI powered Minesweeper</td> 
    </tr>

    <tr class='tr-hover-class' style={{borderBottom: "3px solid #eee"}}
       onClick={() => { window.location.href = "https://github.com/rizhkh/Image-Classifier"; } }>            
        <td style={{padding: 10}}>
        Image Classifier
          </td> 
    </tr>

    <tr class='tr-hover-class' style={{borderBottom: "3px solid #eee"}}
       onClick={() => { window.location.href = "https://github.com/rizhkh/mazesearch"; } }>            
        <td style={{padding: 10}}>Navigator</td> 
    </tr>

    <tr class='tr-hover-class' style={{borderBottom: "3px solid #eee"}}
       onClick={() => { window.location.href = "https://github.com/rizhkh/Map-search-Trajectory-plan"; } }>           
        <td style={{padding: 10}}>Search (Map)</td> 
    </tr>

    <tr class='tr-hover-class' style={{borderBottom: "3px solid #eee"}}
       onClick={() => { window.location.href = "https://github.com/rizhkh/Socket-programming-Client"; } }>             
        <td style={{padding: 10}}>Peer2Peer sharing utility</td> 
    </tr>

    <tr class='tr-hover-class' style={{borderBottom: "3px solid #eee"}}
       onClick={() => { window.location.href = "https://github.com/rizhkh/GameOfChess"; } }>             
        <td style={{padding: 10}}>Chess</td> 
    </tr>

    <tr class='tr-hover-class' style={{borderBottom: "3px solid #eee"}}
       onClick={() => { window.location.href = "https://github.com/rizhkh/MusicSongPlaylist"; } }>              
        <td style={{padding: 10}}>Music Player</td> 
    </tr>

    <tr class='tr-hover-class' style={{borderBottom: "3px solid #eee"}}
       onClick={() => { window.location.href = "https://github.com/rizhkh/System-Utility-Malloc-free"; } }>             
        <td style={{padding: 10}}>System Utilities</td> 
    </tr>

    <tr class='tr-hover-class' style={{borderBottom: "3px solid #eee"}}
       onClick={() => { window.location.href = "https://github.com/rizhkh/PhotoAlbum"; } }>             
        <td style={{padding: 10}}>Photo Viewer (Photo Storage platform included)</td> 
    </tr>

  </table>

  </div>
  </>
}
