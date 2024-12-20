import { Link } from 'react-router-dom';
import '../css/styles.css';
import '../css/stylesforproject.css';
import '../css/hovereffect.css';

export default function ProjectPage() {
  const projects = [
    {
      name: "AI powered Minesweeper",
      link: "https://github.com/rizhkh/mswp",
      labels: ["A.I.", "Python"],
      description: "Fully functional Minesweeper game paired with an independently developed AI capable of playing it autonomously",
      icon: "https://cdn.iconscout.com/icon/premium/png-512-thumb/minesweeper-1616681-1377688.png?f=webp&w=256"
    },
    {
      name: "Image Classifier",
      link: "https://github.com/rizhkh/Image-Classifier",
      labels: ["A.I.", "ML & Data", "Python (numpy & scikit)"],
      description: "A general image classifier using basic ML algorithm",
      icon: "https://img.icons8.com/?size=100&id=Hq6iYi45MXDH&format=png&color=000000"
    },
    {
      name: "Navigator",
      link: "https://github.com/rizhkh/mazesearch",
      labels: ["Python"],
      description: "A randomly generated 2D world with obstacles and a navigator that can find its way through the world. Navigator is an AI agent fully capable of finding its way through the world",
      icon: "https://img.icons8.com/?size=100&id=KgWXEuIORpk7&format=png&color=000000"
    },
    {
      name: "Peer-to-Peer sharing utility",
      link: "https://github.com/rizhkh/Socket-programming-Client",
      labels: ["Java", "Python & PyNaCL"],
      description: "Secure TCP app for encrypted file transfers with public-private key encryption",
      icon: "https://img.icons8.com/?size=100&id=dyOz65O7jURH&format=png&color=000000"
    },
    {
      name: "Chess",
      link: "https://github.com/rizhkh/GameOfChess",
      labels: ["Chess", "JavaFX", "Android", "Gradle"],
      description: "Designed a fully functional game of Chess with AI and multiplayer support",
      icon: "https://img.icons8.com/?size=100&id=64610&format=png&color=000000"
    },
    {
      name: "Music Player",
      link: "https://github.com/rizhkh/MusicSongPlaylist",
      labels: ["JavaFX", "JSyn"],
      description: "Worked on creating a music player and a playlist manager",
      icon: "https://img.icons8.com/?size=100&id=EHtxO8ZmA602&format=png&color=000000"
    },
    {
      name: "System Utilities",
      link: "https://github.com/rizhkh/System-Utility-Malloc-free",
      labels: ["C Language"],
      description: "Worked on creating a system utility that mimics malloc and free - This was to understand memory management and low-level programming",
      icon: "https://img.icons8.com/?size=100&id=11151&format=png&color=000000"
    },
    {
      name: "Photo Viewer (Photo Storage platform included)",
      link: "https://github.com/rizhkh/PhotoAlbum",
      labels: ["Java", "JavaScript"],
      description: "Worked on creating a photo viewer and a photo storage platform",
      icon: "https://img.icons8.com/?size=100&id=13071&format=png&color=000000"
    }
  ];

  return (
    <>
      <div className="topnav">
        <div className="topnavlink">
          <div className="linkBox">
            <Link to="/">Home</Link>
          </div>
        </div>
        <div className="topnavdetail">
          <div className="label label-tab">Projects</div>
        </div>
      </div>
      <div style={{ padding: '20px' }}>
        <div className="projects-container">
          {projects.map((project, index) => (
            <div className="project-box" key={index} onClick={() => window.open(project.link, "_blank")}>
              <div className="project-title">
                {project.icon && (
                  <img src={project.icon} alt={`${project.name} icon`} style={{ width: '40px', height: '40px', marginRight: '10px', verticalAlign: 'middle' }} />
                )}
                {project.name}
              </div>
              <div className="project-description" style={{fontSize: '12px'}}>{project.description}</div>
              <div className="project-labels">
                {project.labels.map((label, idx) => (
                  <div className="label label-System" key={idx}>{label}</div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}