import '../css/styles.css';
import '../css/stylesforproject.css';
import '../css/hovereffect.css';

export default function HeaderNameInfo(){
  return <>
  <table style= {{width:"100%"}}>
    <tr>
      <td>
        <tr>                  
          <h1 style={{ fontFamily: "Open Sans,sans-serif", paddingBottom: "1px", 
          margin: "5px 0 1px", borderBottom: "3px solid #eee", width: '100%'}}>

          <b>
          R<text style={{ fontSize:20}}>IZWAN </text>
          K<text style={{ fontSize:20}}>HAN</text>
            </b>    

          <text style={{ fontFamily: "Open Sans,sans-serif", paddingBottom: "6px", 
          margin: "5px 0 20px", width: '100%', fontWeight: "500", fontSize:14}}>
            <b>
              <text style={{fontSize:11}}>@</text>
              <text style={{fontSize:15}}> Full-Stack Engineer</text>
            </b>
          </text>
          </h1>
        </tr>
      </td>
    </tr>
  </table>
  </>;
}
