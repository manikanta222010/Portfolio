import dog from '../Images/dog.png';
import w from '../Images/w.jpg';
import g from '../Images/g.jpg';
import charts from '../Images/charts.png';
import anime from '../Images/anime.png';
import crud from '../Images/crud.png';
import cc from '../Images/cc.png';
import so from '../Images/so.png';
import wop from '../Images/wop.png';
import sl from '../Images/sl.png';
import ichat from '../Images/ichat.png';
import socketio from '../Images/socketio.png';
import { Header } from './Header';
import { Footer } from './Footer';

export function Projects() {
  // const history = useHistory()
  return (
    <section>
      <Header />

      <div className='project-main'>
        <div className='project-intro'>
          <div className='project-icon'>
            <img src="https://img.icons8.com/external-flat-wichaiwi/120/000000/external-coding-uxui-design-flat-wichaiwi.png" alt="Project-icon" />
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
              <img src={wop} alt="SpaceX-Mime" className='image' />
            </div>
            <div className='project-info'>
              <p className='project-title'>World of PCs</p>
              <p className='project-description'>This WoP ecommerce website allows users to buy all the required PC components over the internet rather than at a physical store and also provide payment gateway like PayPal to make transactions.</p>
              <div className='project-tags'>
                <button className='react'><i className="fa-brands fa-react"></i> React</button>
                <button className='nodejs'><i className="fa-brands fa-node-js"></i> NodeJS</button>
                <button className='css'><i className="fa-brands fa-css3-alt"></i> CSS</button>
                <button className='mongo'><i className="fa-solid fa-database"></i> MongoDB</button>

              </div>
              <div className='project-tags t1'>
                <button className='github' title="View code" onClick={() => window.open("https://github.com/manikanta222010/ZenClass-Day25-Task1")}>
                  <i className="fab fa-github fa-github2"></i>
                </button>
              </div>
              <div className='project-tags t2'>
                <button className='github' title="Open link" onClick={() => window.open("https://worldofpcs.herokuapp.com/")}>
                  <i className="fas fa-external-link-alt"></i>
                </button>
              </div>
            </div>
          </div>





          <div className='project-display'>
            <div className='project-image image-box'>
              <img src={ichat} alt="SpaceX-Mime" className='image' />
            </div>
            <div className='project-info'>
              <p className='project-title'>iChat</p>
              <p className='project-description'>This chat application makes it easy to communicate with people anywhere in the world by sending and receiving messages in real time. Users can enjoy the same engaging and lively interactions through unique messaging capabilities as they would in person using a chat app.</p>
              <div className='project-tags'>
                <button className='react'><i className="fa-brands fa-react"></i> React</button>
                <button className='nodejs'><i className="fa-brands fa-node-js"></i> NodeJS</button>
                <button className='socket'><img src={socketio} alt="SpaceX-Mime" className='' width={"18px"}/> Socket.io</button>
                <button className='mongo'><i className="fa-solid fa-database"></i> MongoDB</button>

              </div>
              <div className='project-tags t1'>
                <button className='github' title="View code" onClick={() => window.open("https://github.com/manikanta222010/ZenClass-Day25-Task1")}>
                  <i className="fab fa-github fa-github2"></i>
                </button>
              </div>
              <div className='project-tags t2'>
                <button className='github' title="Open link" onClick={() => window.open("https://ichat-new.herokuapp.com")}>
                  <i className="fas fa-external-link-alt"></i>
                </button>
              </div>
            </div>
          </div>


          <div className='project-display'>
            <div className='project-image image-box'>
              <img src={sl} alt="SpaceX-Mime" className='image' />
            </div>
            <div className='project-info'>
              <p className='project-title'>Study List</p>
              <p className='project-description'>Study list maker helps people to save the required blogs, videos URLs. As individual user can login and look into their saved information.</p>
              <div className='project-tags'>
                <button className='react'><i className="fa-brands fa-react"></i> React</button>
                <button className='nodejs'><i className="fa-brands fa-node-js"></i> NodeJS</button>
                <button className='css'><i class="fa-brands fa-uikit"></i> Material UI</button>
                <button className='mongo'><i className="fa-solid fa-database"></i> MongoDB</button>

              </div>
              <div className='project-tags t1'>
                <button className='github' title="View code" onClick={() => window.open("https://github.com/manikanta222010/ZenClass-Day25-Task1")}>
                  <i className="fab fa-github fa-github2"></i>
                </button>
              </div>
              <div className='project-tags t2'>
                <button className='github' title="Open link" onClick={() => window.open("https://studylist-maker.netlify.app")}>
                  <i className="fas fa-external-link-alt"></i>
                </button>
              </div>
            </div>
          </div>




          <div className='project-display'>
            <div className='project-image image-box'>
              <img src={w} alt="SpaceX-Mime" className='image' />
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

          {/* testing */}
          <div className='project-display zzzz'>
            <div className="ribbon ribbon-top-right"><span>in progress</span></div>
            <div className='project-image image-box'>
              <img src={so} alt="Stack Overflow clone" className='image' />
            </div>
            <div className='project-info'>
              <p className='project-title'>Stack Overflow</p>
              <p className='project-description'>Clone of the most popular question and answer website for professional and enthusiast programmers. Built with MERN Stack</p>
              <div className='project-tags'>
                <button className='css'><i className="fa-brands fa-css3-alt"></i> CSS</button>
                <button className='nodejs'><i className="fa-brands fa-node-js"></i> NodeJS</button>
                <button className='react'><i className="fa-brands fa-react"></i> React</button>
                <button className='mongo'><i className="fa-solid fa-database"></i> MongoDB</button>

              </div>
              <div className='project-tags t1'>
                <button className='github' title="View code" onClick={() => window.open("https://github.com/manikanta222010/stack-overflow-clone-backend")}>
                  <i className="fab fa-github fa-github2"></i>
                </button>
              </div>
              <div className='project-tags t2'>
                <button className='github' title="Open link" onClick={() => window.open("https://stack-over-flow-clone.netlify.app/")}>
                  <i className="fas fa-external-link-alt"></i>
                </button>
              </div>
            </div>
          </div>
          {/* testing */}

          <div className='project-display'>
            <div className='project-image image-box'>
              <img src={dog} alt="Dog World" className='image' />
            </div>
            <div className='project-info'>
              <p className='project-title'>Dog World</p>
              <p className='project-description'>Dog world is a simple appication that gives random photos of the selected dog breed and also a dog's fact. Dog World is based on open source Dog REST API</p>
              <div className='project-tags'>
                <button className='css'><i className="fa-brands fa-css3-alt"></i> CSS</button>
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


          <div className='project-display'>
            <div className='project-image image-box'>
              <img src={g} alt="My Garage" className='image' />
            </div>
            <div className='project-info'>
              <p className='project-title'>My Garage</p>
              <p className='project-description'>My Garage is a showcase based appication in which my favourite motor bikes and cars are display which
                the information of the vechiles are stored in custom made API. Any new data motorbike or car can also be added.</p>
              <div className='project-tags'>
                <button className='bootstrap'><i className="fab fa-bootstrap"></i> Bootstrap</button>
                <button className='react'><i className="fa-brands fa-react"></i> React</button>
                <button className='mock'><i className="fa-solid fa-code"></i> MockAPI</button>
                <button className='nodejs'><i className="fa-brands fa-node-js"></i> NodeJS</button>

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

          <div className='project-display'>
            <div className='project-image image-box'>
              <img src={cc} alt="Currency Converter" className='image' />
            </div>
            <div className='project-info'>
              <p className='project-title'>Currency Converter</p>
              <p className='project-description'>It is simply a calculator-like app developed using JavaScript. In this application,
                Exchange rates are based on Currency converter API where there is regular update about currency of every country by which it displays present currency market value and conversion rate.</p>
              <div className='project-tags'>
                <button className='css'><i className="fa-brands fa-css3-alt"></i> CSS</button>
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

          <div className='project-display'>
            <div className='project-image image-box'>
              <img src={charts} alt="React Charts" className='image' />
            </div>
            <div className='project-info'>
              <p className='project-title'>React Charts</p>
              <p className='project-description'>It is a simple static design, made to better understand how Chart.js works</p>
              <div className='project-tags'>
                <button className='react'><i className="fa-brands fa-react"></i> React</button>
                <button className='mock'><i className="fa-solid fa-code"></i> Chart.js</button>

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

          <div className='project-display'>
            <div className='project-image image-box'>
              <img src={crud} alt="CRUD Application" className='image' />
            </div>
            <div className='project-info'>
              <p className='project-title'>CRUD Application</p>
              <p className='project-description'>It is straight forward users CRUD application, where a user information like name, phone number, social links and also profile image can be added.</p>
              <div className='project-tags'>
                <button className='bootstrap'><i className="fab fa-bootstrap"></i> Bootstrap</button>
                <button className='react'><i className="fa-brands fa-react"></i> React</button>
                <button className='mock'><i className="fa-solid fa-code"></i> MockAPI</button>

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

          <div className='project-display'>
            <div className='project-image image-box'>
              <img src={anime} alt="The Anime World" className='image' />
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
  );
}
