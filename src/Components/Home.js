import { useHistory } from "react-router-dom";
import pp from '../Images/pp.jpeg';
import pattern from '../Images/pattern.png';
import w from '../Images/w.jpg';
import g from '../Images/g.jpg';
import crud from '../Images/crud.png';
import { Header } from './Header';
import { Footer } from './Footer';

export function Home() {
  const history = useHistory();

  return (
    <section>
      <Header />

      <div className='main'>
        <div className='intro'>
          <div className=''>
            <img src={pattern} alt="design-pattern" className='pattern' />
            <p className='hey'>Hey there!, I'm-</p>
            <p className='name'>Manikanta Srinivas Yedla.</p>
            <p className='my-intro'><span className='se'>Software Engineer.</span> A self-taught developer with an interest in Computer Science.</p>
            <p className='my-tags'>🚀 Exploring opportunities and side projects.</p>
            <p className='my-tags'>🎓 Currently an Computer Science Student at ICFAI University.</p>
            <div className='social-buttons'>
              <a href='https://github.com/manikanta222010' target="_blank" rel="noopener noreferrer">
                <button><i className="fab fa-github social"></i> Github</button>
              </a>
              <a href='https://www.linkedin.com/in/manikanta-yedla/' target="_blank" rel="noopener noreferrer">
                <button><i className="fab fa-linkedin social"></i> LinkedIn</button>
              </a>
              <a href="mailto:manikanta222010@gmail.com" target="_blank" rel="noopener noreferrer">
                <button><i className="fas fa-envelope social"></i> Email</button>
              </a>
              <a href='https://drive.google.com/file/d/1YLar6ig5sYI8N0ri7bVFukkpg_EZa3yD/view?usp=sharing' target="_blank" rel="noopener noreferrer">
                <button><i className="fas fa-file-alt social"></i> Resume</button>
              </a>

            </div>
          </div>
          <br />
          <br />
          <br />
        </div>

        <div className='about'>
          <div className='about-des'>
            <div>
              <h2 className='about-heading about'>🎇About Me</h2>
              <p>HEY! I’m Manikanta Srinivas Yedla, Final year Computer Science student from ICFAI University, Hyderabad, Telangana <img src="https://image.flaticon.com/icons/png/512/3909/3909444.png" width="13" alt='india' />

                <br />
                <br />
                <br />
                I am a Full stack developer with the right mix of Functional programming and expertise in Data Structures and Algorithms.
                Trained in both front-end and back-end web technologies.
                I have experience in building Websites and Single page Web-apps.  I do programming in various languages and technologies but my go-to programming language is JavaScript.
                <br />I am a responsible team player who is enthusiastic about technology and is constantly eager to learn and innovate as I progress.
                I appreciate building simple but effective solutions to increase application performance, simplicity of maintenance, and user experience with a detail-oriented focus.


                <br />
                <br />
                <br />
                I spend my free time binge-watching Netflix and YouTube, listening to music, playing badminton! 🏸</p>
            </div>

            <div className='profile-pic'>
              <img src={pp} alt="profile-pic" />
            </div>
          </div>
        </div>


        <div className='skill-section'>
          <h2 className='about-heading'>My Skills</h2>
          <p className='skills-discription'>I use JavaScript, React, NodeJS, SQL, MongoDB, Bootstrap, HTML and CSS to build fullstack web applications. I have highlighted my key technical skills that I will bring to your project.</p>
          <ul className='skills'>
            <li className='skill-item'>
              <div className='skill'>
                <div className="skill-content">

                  <div className='skill-list'>
                    <code><img src="https://img.icons8.com/color/48/000000/html-5--v1.png" alt="HTML" /></code>&nbsp;
                    <code><img src="https://img.icons8.com/color/48/000000/css3.png" alt="CSS" /></code>&nbsp;
                    <code><img src="https://img.icons8.com/color/48/000000/javascript--v1.png" alt="JavaScript" /></code>&nbsp;
                    <code><img src="https://img.icons8.com/color/48/000000/bootstrap.png" alt="Bootstrap" /></code>&nbsp;
                    <code><img src="https://img.icons8.com/color/48/000000/material-ui.png" alt="Material UI" /></code>&nbsp;
                    <code><img src="https://img.icons8.com/officel/48/000000/react.png" alt="React" /></code>&nbsp;
                  </div>

                  <h2 className="skill-title">Front End Technologies</h2>
                  <p className="skill-text">I use HTML, CSS, JavaScript and React to build attractive responsive frontends for websites and Single page applications. To see my front end work visit my projects section.</p>
                </div>

              </div>
            </li>

            <li className='skill-item'>
              <div className='skill'>
                <div className='skill'>
                  <div className="skill-content">

                    <div className='skill-list'>
                      <code><img src="https://img.icons8.com/color/48/000000/nodejs.png" alt="NodeJS" /></code>&nbsp;
                      <code><img src="https://jsurt.github.io/jacks-portfolio/images/color-express-icon%20(1).png" width="48" alt="ExpressJS" /></code>&nbsp;
                      <code><img src="https://img.icons8.com/color/48/000000/api-settings.png" alt="REST API" /></code>&nbsp;
                      <code><img src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/000000/external-postman-is-the-only-complete-api-development-environment-logo-color-tal-revivo.png" alt="POSTMAN" /></code>&nbsp;
                      <code><img src="https://img.icons8.com/color/48/000000/npm.png" alt="NPM" /></code>&nbsp;
                      <code><img src="https://img.icons8.com/fluency/48/000000/visual-studio.png" alt="VS Code" /></code>&nbsp;
                    </div>

                    <h2 className="skill-title">Back End Technologies</h2>

                    <p className="skill-text">I use NodeJS for server-side programming and build real-time web applications. Postman is API testing application and VS Code is IDE which I use.</p>
                  </div>

                </div>

              </div>
            </li>

            <li className='skill-item'>
              <div className='skill'>
                <div className='skill'>
                  <div className="skill-content">

                    <div className='skill-list'>
                      <code><img src="https://img.icons8.com/color/48/000000/mongodb.png" alt="MongoDB" /></code>&nbsp;
                      <code><img src="https://img.icons8.com/color/48/000000/mysql-logo.png" alt="MySQL" /></code>&nbsp;
                      <code><img src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/48/000000/external-netlify-a-cloud-computing-company-that-offers-hosting-and-serverless-backend-services-for-static-websites-logo-shadow-tal-revivo.png" alt="Nelify" /></code>&nbsp;
                      <code><img src="https://img.icons8.com/color/48/000000/heroku.png" alt="Heroku" /></code>&nbsp;
                      <code><img src="https://img.icons8.com/color/48/000000/git.png" alt="GIT version control" /></code>&nbsp;
                    </div>
                    <h2 className="skill-title">Databases and Deployments</h2>
                    <p className="skill-text">I choose MongoDB if i require a non-relational Database and MySQL in case of relational Database. Github, Netlify or Heroku are where I deploy.</p>
                  </div>

                </div>

              </div>
            </li>

            <li className='skill-item'>
              <div className='skill'>
                <div className='skill'>
                  <div className="skill-content">

                    <div className='skill-list'>
                      <code><img src="https://img.icons8.com/color/48/000000/c-programming.png" alt="C language" /></code>&nbsp;
                      <code><img src="https://img.icons8.com/color/48/000000/python--v2.png" alt="Python" /></code>&nbsp;
                      <code><img src="https://img.icons8.com/color/48/000000/numpy.png" alt="Numpy" /></code>&nbsp;
                      <code><img src="https://img.icons8.com/color/48/000000/opencv.png" alt="OpenCV" /></code>&nbsp;
                      <code><img src="https://img.icons8.com/color/48/000000/adobe-photoshop--v1.png" alt="Photoshop" /></code>&nbsp;
                    </div>

                    <h2 className="skill-title">Other Technologies</h2>
                    <p className="skill-text">I use python as my competitive programming languge because of libraries which it support like Numpy and Pandas.</p>
                  </div>

                </div>

              </div>
            </li>
          </ul>
          <div>

          </div>
        </div>



        <div className='projects'>
          <h2 className='about-heading'>All Creative Works</h2>
          <p>Here's some of my projects that I have worked on.</p>
          <p className='explore' onClick={() => history.push("/projects")}>Explore more <span>&#x021A0;</span></p>


          <div className='grid-container'>
            <div className='grid-item grid-item-1'>
              <div className="card">
                <div className="card__container">
                  <img src={w} alt="SpaceX-Mime" className='imagex image' />
                  <div className='card__content'>
                    <div className='name-social'>
                      <h1 className="card__header">SpaceX-Mime</h1>
                      <div className='githubx-flex'>
                        <button className='github githubx' title="View code" onClick={() => window.open("https://github.com/manikanta222010/ZenClass-Day25-Task1")}>
                          <i className="fab fa-github fa-github2"></i>
                        </button>
                        <button className='github githubx' title="Open link" onClick={() => window.open("https://admiring-colden-5f242f.netlify.app/index.html")}>
                          <i className="fas fa-external-link-alt"></i>
                        </button>
                      </div>

                    </div>
                    <div className='project-tagsx'>
                      <button className='bootstrap'><i className="fab fa-bootstrap"></i> Bootstrap</button>
                      <button className='javascript'><i className="fab fa-js-square"></i> JavaScript</button>
                    </div>

                    <p className="card__body">
                      SpaceX-Mime is a simple tool built to observe and find out history of previous space missions and upcoming orbital missions. It provides a whole range of data such as missions, launches and rockets. SpaceX-Mine is based on open source SpaceX REST API
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='grid-item grid-item-2'>
              <div className="card">
                <div className="card__container">
                  <img src={g} alt="My Garage" className='imagex image' />
                  <div className='card__content'>
                    <div className='name-social'>
                      <h1 className="card__header">My Garage</h1>
                      <div className='githubx-flex'>
                        <button className='github githubx' title="View code" onClick={() => window.open("https://github.com/manikanta222010/my-motors")}>
                          <i className="fab fa-github fa-github2"></i>
                        </button>
                        <button className='github githubx' title="Open link" onClick={() => window.open("https://blissful-clarke-debc28.netlify.app")}>
                          <i className="fas fa-external-link-alt"></i>
                        </button>
                      </div>

                    </div>
                    <div className='project-tagsx'>
                      <button className='bootstrap'><i className="fab fa-bootstrap"></i> Bootstrap</button>
                      <button className='react'><i className="fa-brands fa-react"></i> React</button>
                      <button className='mock'><i className="fa-solid fa-code"></i> MockAPI</button>
                      <button className='nodejs'><i className="fa-brands fa-node-js"></i> NodeJS</button>
                    </div>

                    <p className="card__body">
                      My Garage is a showcase based appication in which my favourite motor bikes and cars are display which
                      the information of the vechiles are stored in custom made API. Any new data motorbike or car can also be added.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='grid-item grid-item-3'>
              <div className="card">
                <div className="card__container">
                  <img src={crud} alt="Users CRUD Application" className='imagex image' />
                  <div className='card__content'>
                    <div className='name-social'>
                      <h1 className="card__header">CRUD Application</h1>
                      <div className='githubx-flex'>
                        <button className='github githubx' title="View code" onClick={() => window.open("https://github.com/manikanta222010/crud")}>
                          <i className="fab fa-github fa-github2"></i>
                        </button>
                        <button className='github githubx' title="Open link" onClick={() => window.open("https://infallible-colden-c935ba.netlify.app")}>
                          <i className="fas fa-external-link-alt"></i>
                        </button>
                      </div>

                    </div>
                    <div className='project-tagsx'>
                      <button className='bootstrap'><i className="fab fa-bootstrap"></i> Bootstrap</button>
                      <button className='react'><i className="fa-brands fa-react"></i> React</button>
                      <button className='mock'><i className="fa-solid fa-code"></i> MockAPI</button>
                    </div>

                    <p className="card__body">
                      It is straight forward users CRUD application, where a user information like name, phone number, social links and also profile image can be added.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>







        </div>


      </div>


      <Footer />

    </section>
  );
}
