import './css/styles.css';
import './css/stylesforproject.css';
import './css/hovereffect.css';
import dp from './img/0.jpg'


const aboutInfoShort =  function() {
  return <><table style= {{width:"100%"}}>
  <tr>
  <td>
    <tr>                  
    <h1 style={{ fontFamily: "Open Sans,sans-serif", paddingBottom: "6px", 
    margin: "5px 0 20px", borderBottom: "3px solid #eee", width: '100%'}}>
    Hi, I'm Rizwan 👋 
    </h1>
    </tr>
  <tr>
  <a style={{ color: "black", fontSize: "14px", display: 'inline', padding: "0.3em 0.6em 0.2em", textAlign: "center", borderRadius: "0.65em", backgroundColor: "#eee", fontFamily: "Cuprumm, sans-serif", textDecoration: "none"}} 
  href="https://www.rutgers.edu/">git</a>
  <a style={{color: "black", fontSize: "14px", margin: 15, display: 'inline', padding: "0.3em 0.6em 0.2em", textAlign: "center", borderRadius: "0.65em", backgroundColor: "#eee", fontFamily: "Cuprumm, sans-serif",textDecoration: "none"}} 
  href="https://www.rutgers.edu/">linkedin</a>

  </tr>
  </td>
  </tr>
</table></>;
}

export default aboutInfoShort;