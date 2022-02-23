import { useHistory } from "react-router-dom";

export function Header() {
  const leftB = "{";
  const rightB = "}";
  const history = useHistory();
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
        <li><a href="/experience">Experience</a></li>
      </ul>
    </header>
  );
}
