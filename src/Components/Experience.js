import { Header } from './Header';
import { Footer } from './Footer';

export function Experience() {

  return (
    <div>
      <Header />
      <br />
      <br />
      <br />
      <br />
      <div className='project-intro'>
        <div className='project-icon'>
          <img src="https://img.icons8.com/ios-filled/120/26e07f/internship.png" alt="experience-icon" />
        </div>
        <div className='project-heading'>
          <p className='edu'>EDUCATION<br /> AND WORK</p>
        </div>
      </div>
      <div className="timeline">
        <div className="timeline__component">
          <div className="timeline__date timeline__date--right">2018</div>
        </div>
        <div className="timeline__middle">
          <div className="timeline__point"></div>
        </div>
        <div className="timeline__component timeline__component--bg">
          <h2 className="timeline__title">Bachelor of Technology</h2>
          <p className="timeline__paragraph">
            ICFAI University
          </p>
          <p><i className="fa-solid fa-calendar-days"></i>&nbsp; 2018 - Present</p>
        </div>

        <div className="timeline__component timeline__component--bg">
          <h2 className="timeline__title">Student Intern</h2>
          <p className="timeline__paragraph">
            Analogica - Company
          </p>
          <p><i className="fa-solid fa-calendar-days"></i>&nbsp; July 2020 - Aug 2020</p>
          <p></p>
        </div>

        <div className="timeline__middle">
          <div className="timeline__point"></div>
        </div>
        <div className="timeline__component">
          <div className="timeline__date">2020</div>
        </div>

        <div className="timeline__component">
          {/* <div className="timeline__date timeline__date--right"></div> */}
        </div>
        <div className="timeline__middle">
          <div className="timeline__point"></div>
        </div>

        <div className="timeline__component timeline__component--bg">
          <h2 className="timeline__title">Project Intern</h2>
          <p className="timeline__paragraph">
            AHEX Technologies - Company
          </p>
          <p><i className="fa-solid fa-calendar-days"></i>&nbsp; Aug 2020 - Dec 2020</p>
        </div>

        <div className="timeline__component timeline__component--bottom timeline__component--bg">
          <h2 className="timeline__title">Software Developer Intern</h2>
          <p className="timeline__paragraph">
            Brane Enterpises Pvt Ltd - Company
          </p>
          <p><i className="fa-solid fa-calendar-days"></i>&nbsp; Jan 2022 - Present</p>
        </div>


        <div className="timeline__middle">
          <div className="timeline__point"></div>
          <div className="timeline__point timeline__point--bottom"></div>
        </div>
        <div className="timeline__component timeline__component--bottom">
          <div className="timeline__date">2022</div>
        </div>
      </div>


      <Footer />
    </div>
  );
}
