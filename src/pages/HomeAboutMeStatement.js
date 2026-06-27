import { Link } from 'react-router-dom';
import '../css/styles.css';
import '../css/stylesforproject.css';
import '../css/hovereffect.css';

export default function HomeAboutMeStatement(){
  return<>

      <p style={{ fontFamily: 'arial', fontSize: '17px', lineHeight: '1.5', color: '#333', textAlign: 'justify' }}>
        Hi, I'm Rizwan 👋 and I am a Software Engineer. I like bringing ideas to life using code.

        <hr style={{ border: 'none', color: 'transparent', backgroundColor: 'transparent' }} />

        My work spans full-stack development, machine learning, and data systems. From building intelligent agents to designing production-grade infrastructure and platforms.

        <hr style={{ border: 'none', color: 'transparent', backgroundColor: 'transparent' }} />

        Over the years I've had the chance to work at some amazing places and had the opportunity to work on some really cool projects.
        Please check out my
        <span className="cool-effect" style={{ fontStyle: "italic" }}> &nbsp;
          <Link to="/project_page" className="cool-effect" style={{ fontStyle: "italic" }}>
            Projects
          </Link> &nbsp;
        </span>
        page for some of the cool stuff I've built over the years.

        <hr style={{ border: 'none', color: 'transparent', backgroundColor: 'transparent' }} />

        I'm based in the greater New York City area and like to run, play soccer and read in my free time. Please feel free to reach out if you're looking to connect.
      </p>
    <br />
    <br />

  </>
}
