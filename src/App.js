import './App.css';
import { Switch, Route } from "react-router-dom";
import { Blogs, BlogInfo } from './Components/BlogsComponent';
import { NotFound } from './Components/NotFound';
import { Experience } from './Components/Experience';
import { Projects } from './Components/Projects';
import { Home } from './Components/Home';


export default function App() {

  return (
    <>
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
        <Route path="/experience">
          <Experience />
        </Route>
        <Route path="/blog/:id">
          <BlogInfo />
        </Route>
        <Route path="**">
          <NotFound />
        </Route>
      </Switch>
    </>
  );
}