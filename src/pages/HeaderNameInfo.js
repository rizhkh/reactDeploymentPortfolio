import '../css/styles.css';
import '../css/stylesforproject.css';
import '../css/hovereffect.css';

export default function HeaderNameInfo(){
  return <>
  <table style= {{width:"100%"}}>
    <tr>
      <td>
        <tr>                  
          <h1 style={{ fontFamily: "Roboto Slab, serif", paddingBottom: "1px", 
          margin: "5px 0 1px", borderBottom: "3px solid #eee", width: '100%'}}>
            <a className="namehover" href="#" style={{ fontSize:45}}>R</a>
            <a className="namehover" href="#"><text style={{ fontSize:30}}>I</text></a>
            <a className="namehover" href="#"><text style={{ fontSize:30}}>Z</text></a>
            <a className="namehover" href="#"><text style={{ fontSize:30}}>W</text></a>
            <a className="namehover" href="#"><text style={{ fontSize:30}}>A</text></a>
            <a className="namehover" href="#"><text style={{ fontSize:30}}>N</text></a>
            <text> </text>
            <a className="namehover" href="#" style={{ fontSize:45}}>K</a>
            <a className="namehover" href="#"><text style={{ fontSize:30}}>H</text></a>
            <a className="namehover" href="#"><text style={{ fontSize:30}}>A</text></a>
            <a className="namehover" href="#"><text style={{ fontSize:30}}>N</text></a>


          <text style={{ fontFamily: "Open Sans,sans-serif", paddingBottom: "6px", 
          margin: "5px 0 20px", width: '100%', fontWeight: "500", fontSize:14}}>
            <b>
              <text style={{fontSize:11}}> @ </text>
              <text style={{fontSize:15, color: '#565957'}}> Full-Stack Engineer</text>
            </b>
          </text>
          </h1>
        </tr>
      </td>
    </tr>
  </table>
  </>;
}
