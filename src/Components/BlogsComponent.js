import { useHistory, useParams } from "react-router-dom";
import blog1 from '../Images/1.jpg';
import blog2 from '../Images/2.jpg';
import blog3 from '../Images/3.jpg';
import blog4 from '../Images/4.jpg';
import blog5 from '../Images/5.jpg';
import { Blog1, Blog2, Blog3, Blog4, Blog5 } from './Blogs';
import { Header } from './Header';
import { Footer } from './Footer';
import { NotFound } from "./NotFound";

export function Blogs() {
  const history = useHistory();

  return (
    <section>
      <Header />

      <div className="blog-main">
        <div className='project-intro'>
          <div className='project-icon'>
            <img src="https://img.icons8.com/external-itim2101-lineal-itim2101/120/26e07f/external-blog-copywriting-itim2101-lineal-itim2101-1.png" className='blog-icon' alt="blogs-icon" />
          </div>
          <div className='project-heading'>
            <p>BLOGS</p>
            <p className='zx'>This is where I share my writings on<br />programming and my experiences.</p>
          </div>
        </div>
        <br />
        <br />
        <ul className="blogs">
          <li className="blog-item">
            <div className="blog">
              <div className="blog-image"><img className='blog-image' src={blog1} alt="React Lifecycle Methods" /></div>
              <div className="blog-content">
                <h2 className="blog-title">React Lifecycle Methods</h2>
                <p className="blog-text">React lifecycle methods as the series of events that happen from the creation of a React component to its deletion.</p>
                <button className="btn blog-btn" onClick={() => history.push("/blog/1")}>Read More</button>
              </div>
            </div>
          </li>

          <li className="blog-item">
            <div className="blog">
              <div className="blog-image"><img className='blog-image' src={blog2} alt="Promises in JavaScript" /></div>
              <div className="blog-content">
                <h2 className="blog-title">Promises in JavaScript</h2>
                <p className="blog-text">A Promise is a JavaScript object that connects the code that produces and the code that consumes it.</p>
                <button className="btn blog-btn" onClick={() => history.push("/blog/2")}>Read More</button>
              </div>
            </div>
          </li>

          <li className="blog-item">
            <div className="blog">
              <div className="blog-image"><img className='blog-image' src={blog3} alt="JavaScript Callbacks" /></div>
              <div className="blog-content">
                <h2 className="blog-title">JavaScript Callbacks</h2>
                <p className="blog-text">A callback is a function that is sent to another function as an argument. A function can use this technique to invoke another function.</p>
                <button className="btn blog-btn" onClick={() => history.push("/blog/3")}>Read More</button>
              </div>
            </div>
          </li>

          <li className="blog-item">
            <div className="blog">
              <div className="blog-image"><img className='blog-image' src={blog4} alt="Async/Await in JavaScript" /></div>
              <div className="blog-content">
                <h2 className="blog-title">Async/Await in JavaScript</h2>
                <p className="blog-text">Promises are easier to write using async and await. The async keyword causes a function to return a Promise. The await keyword causes a function to wait for a Promise.</p>
                <button className="btn blog-btn" onClick={() => history.push("/blog/4")}>Read More</button>
              </div>
            </div>
          </li>

          <li className="blog-item">
            <div className="blog">
              <div className="blog-image"><img className='blog-image' src={blog5} alt="Functional Components vs Class Components in React" /></div>
              <div className="blog-content">
                <h2 className="blog-title">Functional Components vs Class Components in React</h2>
                <p className="blog-text">The differences between class and functional components, as well as how to choose between them, will be discussed in this article.</p>
                <button className="btn blog-btn" onClick={() => history.push("/blog/5")}>Read More</button>
              </div>
            </div>
          </li>
        </ul>

      </div>




      <Footer />
    </section>
  );
}
function SelectedBlog(id) {
  switch (id) {
    case "1":
      return <Blog1 />;
    case "2":
      return <Blog2 />;
    case "3":
      return <Blog3 />;
    case "4":
      return <Blog4 />;
    case "5":
      return <Blog5 />;
    default:
      return <NotFound />;
  }
}
export function BlogInfo() {
  const { id } = useParams();

  return (
    <>
      <Header />
      {SelectedBlog(id)}
      <Footer />
    </>
  );
}
