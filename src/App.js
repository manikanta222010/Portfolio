import './App.css';
import { Switch, Route,  useHistory, useParams } from "react-router-dom";
import pp from './pp.jpeg';
import pattern from './pattern.png';
import dog from './dog.png';
import w from './w.jpg';
import g from './g.jpg';
import blog1 from './blog.jpg';
import blog2 from './2.jpg';
import blog3 from './3.jpg';
import blog4 from './4.jpg';
import blog5 from './5.jpg';
import charts from './charts.png';
import anime from './anime.png';
import crud from './crud.png';
import cc from './cc.png';
import { Blog1, Blog2, Blog3, Blog4, Blog5 } from './blogs/Blog1'

export default function App() {

  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/projects">
        <Projects />
      </Route>
      <Route path="/blogs">
        <Blogs />
      </Route>
      <Route path="/blog/:id">
        <BlogInfo />
      </Route>
      <Route path="**">
        <NotFound />
      </Route>

    </Switch>
  );
}

function Header() {
  const leftB = "{"
  const rightB = "}"
  const history = useHistory()
  return (
    <header className='header'>
      <a href="/" className="logo" onClick={() => history.push("/")}>
        <span className='brace'>{leftB}</span>MY<span className='brace'>{rightB}</span>
      </a>
      <input className="menu-btn" type="checkbox" id="menu-btn" />
      <label className="menu-icon" htmlFor="menu-btn"><span className="navicon"></span></label>
      <ul className="menu">
        <li><a href="/">Home</a></li>
        <li><a href="/projects">Projects</a></li>
        <li><a href="/blogs">Blogs</a></li>
      </ul>
    </header>
  )
}

function Footer() {
  const leftB = "{"
  const rightB = "}"
  return (
    <footer>
      <div>
        <p className='full-logo'><span className='green braces'>{leftB}</span>Manikanta Srinivas Yedla<span className='green braces'>{rightB}</span></p>
        <p>I create stuff with <span className='red'>❤️</span> in <i><strong>NodeJS</strong></i> and <i><strong>React</strong></i></p>
      </div>
      <br />

      <div>
        <p>Designed and Developed by Manikanta Srinvas Yedla.</p>
        <p className='copyrights'>Copyright &copy; 2022. All Rights Reserved.</p>
      </div>
    </footer>
  )
}

function Home() {

  return (
    <section>
      <Header />
      {/* <div class="scrollbar" id="style-3">
        <div class="force-overflow"></div>
      </div> */}
      <div className='main'>
        <div className='intro'>
          <div className=''>
            <img src={pattern} alt="" className='pattern' />
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
              <p>HEY! I’m Manikanta Srinivas Yedla, Final year Computer Science student from ICFAI University, Hyderabad, Telangana <img src="https://image.flaticon.com/icons/png/512/3909/3909444.png" width="13" alt='india'/>.

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
                I spend my free time binge-watching Netflix and YouTube, listening to music, playing badminton! 🏸.</p>
            </div>

            <div className='profile-pic'>
              <img src={pp} alt="" />
            </div>
          </div>
        </div>


        <div className='projects'>
          <h2 className='about-heading'>All Creative Works</h2>
          <p>Here's some of my projects that I have worked on.</p>
          <p className='explore'>Explore more <span>&#x021A0;</span></p>

          <div class="wrapperx">
            <div class="One">
              <div class="card">
                <div class="card__container">
                  <img src={w} alt="" className='imagex' />
                  <div className='card__content'>
                    <div className='name-social'>
                      <h1 class="card__header">SpaceX-Mime</h1>
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

                    <p class="card__body">
                      SpaceX-Mime is a simple tool built to observe and find out history of previous space missions and upcoming orbital missions. It provides a whole range of data such as missions, launches and rockets. SpaceX-Mine is based on open source SpaceX REST API
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="Two">
              <div class="card">
                <div class="card__container">
                  <img src={g} alt="" className='imagex' />
                  <div className='card__content'>
                    <div className='name-social'>
                      <h1 class="card__header">My Garage</h1>
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
                      <button className='react'><i class="fa-brands fa-react"></i> React</button>
                      <button className='mock'><i class="fa-solid fa-code"></i> MockAPI</button>
                    </div>

                    <p class="card__body">
                      My Garage is a showcase based appication in which my favourite motor bikes and cars are display which
                      the information of the vechiles are stored in custom made API. Any new data motorbike or car can also be added.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* <div class="Three">Three</div> */}
          </div>

        </div>


      </div>


      <Footer />

    </section>
  )
}

function Projects() {
  // const history = useHistory()

  return (
    <section>
      <Header />

      <div className='project-main'>
        <div className='project-intro'>
          <div className='project-icon'>
            {/* <img src={projectIcon} alt="" /> */}
            <i class="fa-solid fa-laptop-code"></i>
          </div>
          <div className='project-heading'>
            <p>PROJECTS</p>
            <p className='zx'>Things I build when I am learning <br />something new or just for fun.</p>
          </div>
        </div>
        <br />
        <br />
        <div className='project-list'>
          <div className='project-display'>
            <div className='project-image image-box'>
              <img src={w} alt="" className='image' />
            </div>
            <div className='project-info'>
              <p className='project-title'>SpaceX-Mime</p>
              <p className='project-description'>SpaceX-Mime is a simple tool built to observe and find out history of previous space missions and upcoming orbital missions. It provides a whole range of data such as missions, launches and rockets.
                SpaceX-Mine is based on open source SpaceX REST API</p>
              <div className='project-tags'>
                <button className='bootstrap'><i className="fab fa-bootstrap"></i> Bootstrap</button>
                <button className='javascript'><i className="fab fa-js-square"></i> JavaScript</button>

              </div>
              <div className='project-tags t1'>
                <button className='github' title="View code" onClick={() => window.open("https://github.com/manikanta222010/ZenClass-Day25-Task1")}>
                  <i className="fab fa-github fa-github2"></i>
                </button>
              </div>
              <div className='project-tags t2'>
                <button className='github' title="Open link" onClick={() => window.open("https://admiring-colden-5f242f.netlify.app/index.html")}>
                  <i className="fas fa-external-link-alt"></i>
                </button>
              </div>
            </div>
          </div>

          <div className='project-display' >
            <div className='project-image image-box'>
              <img src={dog} alt="" className='image' />
            </div>
            <div className='project-info'>
              <p className='project-title'>Dog World</p>
              <p className='project-description'>Dog world is a simple appication that gives random photos of the selected dog breed and also a dog's fact. Dog World is based on open source Dog REST API</p>
              <div className='project-tags'>
                <button className='css'><i class="fa-brands fa-css3-alt"></i> CSS</button>
                <button className='javascript'><i className="fab fa-js-square"></i> JavaScript</button>

              </div>
              <div className='project-tags t1'>
                <button className='github' title="View code" onClick={() => window.open("https://github.com/manikanta222010/ZenClass-Day25-Task2")}>
                  <i className="fab fa-github fa-github2"></i>
                </button>
              </div>
              <div className='project-tags t2'>
                <button className='github' title="Open link" onClick={() => window.open("https://compassionate-boyd-31477a.netlify.app")}>
                  <i className="fas fa-external-link-alt"></i>
                </button>
              </div>
            </div>
          </div>

          <div className='project-display upcoming' data-label="In Progress">
            <div className='project-image image-box'>
              <img src={dog} alt="" className='image' />
            </div>
            <div className='project-info'>
              <p className='project-title'>Dog World</p>
              <p className='project-description'>Dog world is a simple appication that gives random photos of the selected dog breed and also a dog's fact. Dog World is based on open source Dog REST API</p>
              <div className='project-tags'>
                <button className='css'><i class="fa-brands fa-css3-alt"></i> CSS</button>
                <button className='javascript'><i className="fab fa-js-square"></i> JavaScript</button>

              </div>
              <div className='project-tags t1'>
                <button className='github' title="View code" onClick={() => window.open("https://github.com/manikanta222010/ZenClass-Day25-Task2")}>
                  <i className="fab fa-github fa-github2"></i>
                </button>
              </div>
              <div className='project-tags t2'>
                <button className='github' title="Open link" onClick={() => window.open("https://compassionate-boyd-31477a.netlify.app")}>
                  <i className="fas fa-external-link-alt"></i>
                </button>
              </div>
            </div>
          </div>

          <div className='project-display' >
            <div className='project-image image-box'>
              <img src={g} alt="" className='image' />
            </div>
            <div className='project-info'>
              <p className='project-title'>My Garage</p>
              <p className='project-description'>My Garage is a showcase based appication in which my favourite motor bikes and cars are display which
                the information of the vechiles are stored in custom made API. Any new data motorbike or car can also be added.</p>
              <div className='project-tags'>
                <button className='bootstrap'><i className="fab fa-bootstrap"></i> Bootstrap</button>
                <button className='react'><i class="fa-brands fa-react"></i> React</button>
                <button className='mock'><i class="fa-solid fa-code"></i> MockAPI</button>

              </div>
              <div className='project-tags t1'>
                <button className='github' title="View code" onClick={() => window.open("https://github.com/manikanta222010/my-motors")}>
                  <i className="fab fa-github fa-github2"></i>
                </button>
              </div>
              <div className='project-tags t2'>
                <button className='github' title="Open link" onClick={() => window.open("https://blissful-clarke-debc28.netlify.app")}>
                  <i className="fas fa-external-link-alt"></i>
                </button>
              </div>
            </div>
          </div>

          <div className='project-display' >
            <div className='project-image image-box'>
              <img src={cc} alt="" className='image' />
            </div>
            <div className='project-info'>
              <p className='project-title'>Currency Converter</p>
              <p className='project-description'>It is simply a calculator-like app developed using JavaScript. In this application,
                Exchange rates are based on Currency converter API where there is regular update about currency of every country by which it displays present currency market value and conversion rate.</p>
              <div className='project-tags'>
                <button className='css'><i class="fa-brands fa-css3-alt"></i> CSS</button>
                <button className='javascript'><i className="fab fa-js-square"></i> JavaScript</button>

              </div>
              <div className='project-tags t1'>
                <button className='github' title="View code" onClick={() => window.open("https://github.com/manikanta222010/ZenClass-Day25-Task3")}>
                  <i className="fab fa-github fa-github2"></i>
                </button>
              </div>
              <div className='project-tags t2'>
                <button className='github' title="Open link" onClick={() => window.open("https://tender-euler-9a686d.netlify.app/")}>
                  <i className="fas fa-external-link-alt"></i>
                </button>
              </div>
            </div>
          </div>

          <div className='project-display' >
            <div className='project-image image-box'>
              <img src={charts} alt="" className='image' />
            </div>
            <div className='project-info'>
              <p className='project-title'>React Charts</p>
              <p className='project-description'>It is a simple static design, made to better understand how Chart.js works</p>
              <div className='project-tags'>
                <button className='react'><i class="fa-brands fa-react"></i> React</button>
                <button className='mock'><i class="fa-solid fa-code"></i> Chart.js</button>

              </div>
              <div className='project-tags t1'>
                <button className='github' title="View code" onClick={() => window.open("https://github.com/manikanta222010/Day-28-value-sharing-components")}>
                  <i className="fab fa-github fa-github2"></i>
                </button>
              </div>
              <div className='project-tags t2'>
                <button className='github' title="Open link" onClick={() => window.open("https://serene-easley-49fe9c.netlify.app")}>
                  <i className="fas fa-external-link-alt"></i>
                </button>
              </div>
            </div>
          </div>

          <div className='project-display' >
            <div className='project-image image-box'>
              <img src={crud} alt="" className='image' />
            </div>
            <div className='project-info'>
              <p className='project-title'>CRUD Application</p>
              <p className='project-description'>It is straight forward users CRUD application, where a user information like name, phone number, social links and also profile image can be added.</p>
              <div className='project-tags'>
                <button className='bootstrap'><i className="fab fa-bootstrap"></i> Bootstrap</button>
                <button className='react'><i class="fa-brands fa-react"></i> React</button>
                <button className='mock'><i class="fa-solid fa-code"></i> MockAPI</button>

              </div>
              <div className='project-tags t1'>
                <button className='github' title="View code" onClick={() => window.open("https://github.com/manikanta222010/crud")}>
                  <i className="fab fa-github fa-github2"></i>
                </button>
              </div>
              <div className='project-tags t2'>
                <button className='github' title="Open link" onClick={() => window.open("https://infallible-colden-c935ba.netlify.app")}>
                  <i className="fas fa-external-link-alt"></i>
                </button>
              </div>
            </div>
          </div>

          <div className='project-display' >
            <div className='project-image image-box'>
              <img src={anime} alt="" className='image' />
            </div>
            <div className='project-info'>
              <p className='project-title'>The Anime World</p>
              <p className='project-description'>Simple static design, made to better understand how Chart.js works</p>
              <div className='project-tags'>
                <button className='bootstrap'><i className="fab fa-bootstrap"></i> Bootstrap</button>
                <button className='javascript'><i className="fab fa-js-square"></i> JavaScript</button>

              </div>
              <div className='project-tags t1'>
                <button className='github' title="View code" onClick={() => window.open("https://github.com/manikanta222010/AnimeWorld")}>
                  <i className="fab fa-github fa-github2"></i>
                </button>
              </div>
              <div className='project-tags t2'>
                <button className='github' title="Open link" onClick={() => window.open("https://serene-easley-49fe9c.netlify.app")}>
                  <i className="fas fa-external-link-alt"></i>
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>

      <Footer />
    </section>
  )
}

function Blogs() {
  const history = useHistory()

  return (
    <section>
      <Header />



      <div className="blog-main">
        <ul className="blogs">
          <li className="blog-item">
            <div className="blog">
              <div className="blog-image"><img className='blog-image' src={blog1} alt="" /></div>
              <div className="blog-content">
                <h2 className="blog-title">React Lifecycle Methods</h2>
                <p className="blog-text">React lifecycle methods as the series of events that happen from the creation of a React component to its deletion.</p>
                <button className="btn blog-btn" onClick={() => history.push("/blog/1")}>Read More</button>
              </div>
            </div>
          </li>

          <li className="blog-item">
            <div className="blog">
              <div className="blog-image"><img className='blog-image' src={blog2} alt="" /></div>
              <div className="blog-content">
                <h2 className="blog-title">Promises in JavaScript</h2>
                <p className="blog-text">React lifecycle methods as the series of events that happen from the creation of a React component to its deletion.</p>
                <button className="btn blog-btn" onClick={() => history.push("/blog/2")}>Read More</button>
              </div>
            </div>
          </li>

          <li className="blog-item">
            <div className="blog">
              <div className="blog-image"><img className='blog-image' src={blog3} alt="" /></div>
              <div className="blog-content">
                <h2 className="blog-title">JavaScript Callbacks</h2>
                <p className="blog-text">React lifecycle methods as the series of events that happen from the creation of a React component to its deletion.</p>
                <button className="btn blog-btn" onClick={() => history.push("/blog/3")}>Read More</button>
              </div>
            </div>
          </li>

          <li className="blog-item">
            <div className="blog">
              <div className="blog-image"><img className='blog-image' src={blog4} alt="" /></div>
              <div className="blog-content">
                <h2 className="blog-title">Async/Await in JavaScript</h2>
                <p className="blog-text">React lifecycle methods as the series of events that happen from the creation of a React component to its deletion.</p>
                <button className="btn blog-btn" onClick={() => history.push("/blog/4")}>Read More</button>
              </div>
            </div>
          </li>

          <li className="blog-item">
            <div className="blog">
              <div className="blog-image"><img className='blog-image' src={blog5} alt="" /></div>
              <div className="blog-content">
                <h2 className="blog-title">Functional Components vs Class Components in React</h2>
                <p className="blog-text">React lifecycle methods as the series of events that happen from the creation of a React component to its deletion.</p>
                <button className="btn blog-btn" onClick={() => history.push("/blog/5")}>Read More</button>
              </div>
            </div>
          </li>


        </ul>
      </div>


      <Footer />
    </section >
  )
}


function BlogInfo() {
  const { id } = useParams();

  switch (id) {
    case "1":
      return <Blog1 />
    case "2":
      return <Blog2 />
    case "3":
      return <Blog3 />
    case "4":
      return <Blog4 />
    case "5":
      return <Blog5 />
    default:
      return <NotFound />
  }
}


function NotFound() {

  return (
    <section>
      <Header />
      <div id="main">
        <div class="wrapper">
          <div class="element">
            404
          </div>

        </div>
        <div class="action">
          <div class="text">
            <p>Unfortunately this page is not available at the moment</p>
          </div>
        </div>
      </div>
    </section>
  )
}