import { Header } from './Header';


export function NotFound() {

  return (
    <section>
      <Header />
      <div id="main">
        <div className="wrapper">
          <div className="element">
            404
          </div>

        </div>
        <div className="action">
          <div className="text">
            <p>Unfortunately this page is not available at the moment</p>
          </div>
        </div>
      </div>
    </section>
  );
}
