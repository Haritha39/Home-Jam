/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from 'react';
// import logo from './logo.svg';
import './App.scss';

function App() {
  return (<div className="container-fluid p-0">
    <div className="banner-block">
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark header">
          <a className="navbar-brand" href="#"><img src="../public/home-jam-logo.png"/></a>
          {/* <button className="btn btn-success ml-auto mr-1">Always Show</button> */}
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse flex-grow-0 ml-auto mr-1" id="navbarSupportedContent">
            <ul className="navbar-nav text-right">
              <li className="nav-item active self-center">
                <i className="fa fa-search" aria-hidden="true"></i>
              </li>
              <li className="nav-item active">
                <a className="nav-link" href="#">Search</a>
              </li>
              <li className="nav-item active">
                <a className="nav-link" href="#">Help</a>
              </li>
              <li className="nav-item active">
                <a className="nav-link" href="#">Account</a>
              </li>
              <li className="nav-item active self-center">
                <i className="fa fa-shopping-bag" aria-hidden="true"></i>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <div className="jumbotron jumbotron-fluid jumbo">
        <div className="inside-jumbo">
          <h3 className="jumbo-heading">Cari Cari</h3>
          <p className="jumbo-para">Live from their sofa to yours. Get closer to your favorite artists, and never miss out.</p>
        </div>
      </div>
      <div>
        <div className="row no-wrap">
          <div className="col-sm-3 col-md-2 each-stat">
            <div className="progress" data-percentage="20">
              <span className="progress-left">
                <span className="progress-bar"></span>
              </span>
              <span className="progress-right">
                <span className="progress-bar"></span>
              </span>
              <div className="progress-value">
                <div>
                  0<br />
                  <span>label</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-3 col-md-2 each-stat">
            <div className="progress" data-percentage="20">
              <span className="progress-left">
                <span className="progress-bar"></span>
              </span>
              <span className="progress-right">
                <span className="progress-bar"></span>
              </span>
              <div className="progress-value">
                <div>
                  0<br />
                  <span>label</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-3 col-md-2 each-stat">
            <div className="progress" data-percentage="20">
              <span className="progress-left">
                <span className="progress-bar"></span>
              </span>
              <span className="progress-right">
                <span className="progress-bar"></span>
              </span>
              <div className="progress-value">
                <div>
                  0<br />
                  <span>label</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-3 col-md-2 each-stat">
            <div className="progress" data-percentage="20">
              <span className="progress-left">
                <span className="progress-bar"></span>
              </span>
              <span className="progress-right">
                <span className="progress-bar"></span>
              </span>
              <div className="progress-value">
                <div>
                  0<br />
                  <span>label</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="home-block">
      <div className="d-flex justify-content-between">
        <h4 className="events-heading">Upcoming Events</h4>
        <p className="view-all">View All</p>
      </div>
      <div>
        <div className="row no-wrap">
          <div className="col-sm-3 col-md-2 each-event">
            <div className="event-img"><img src="../public/img4.png" alt="logo" /></div>
            <div className="event-data">
              <p>Folk</p>
              <h4>Benny Dayal</h4>
            </div>
            <div className="event-info">
              <p>More Info</p>
              <i className="fa fa-search" aria-hidden="true"></i>
            </div>

          </div>
          <div className="col-sm-3 col-md-2 each-event">
            <div className="event-img"><img src="../public/img7.png" alt="logo" /></div>
            <div className="event-data">
              <p>Bollywood</p>
              <h4>Vijay Yesudas</h4>
            </div>
            <div className="event-info">
              <p>More Info</p>
              <i className="fa fa-search" aria-hidden="true"></i>
            </div>
          </div>
          <div className="col-sm-3 col-md-2 each-event">
            <div className="event-img"><img src="../public/img6.png" alt="logo" /></div>
            <div className="event-data">
              <p>Folk</p>
              <h4>Andrea Jeremaih</h4>
            </div>
            <div className="event-info">
              <p>More Info</p>
              <i className="fa fa-search" aria-hidden="true"></i>
            </div>
          </div>
          <div className="col-sm-3 col-md-2 each-event">
            <div className="event-img"><img src="../public/img5.png" alt="logo" /></div>
            <div className="event-data">
              <p>Folk</p>
              <h4>Shilpa Rao</h4>
            </div>
            <div className="event-info">
              <p>More Info</p>
              <i className="fa fa-search" aria-hidden="true"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="home-block">
      <div className="d-flex justify-content-between">
        <h4 className="events-heading">Review Events</h4>
        <p className="view-all">1/12</p>
      </div>
      <div>
        <div className="row no-wrap">
          <div className="col-sm-4 col-md-3 each-event">
            <div className="review-img-info">
              <img src="../public/img1.png" alt="logo" className="review-img" />
              <div><h3>Hellen Jummy</h3>
                <div className="d-flex">
                  <img src="../public/us.png" alt="logo" />
                  <p>PALO ALTO,CA</p>
                </div>
              </div>
            </div>
            <div className="review-data">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae in donec in nisi vitae. Vestibulum pellentesque eget
laoreet adipiscing. </p>
            </div>
          </div>
          <div className="col-sm-4 col-md-3 each-event">
            <div className="review-img-info">
              <img src="../public/img2.png" alt="logo" className="review-img" />
              <div><h3>Isaac Oluwatemilorun</h3>
                <div className="d-flex">
                  <img src="../public/IT.png" alt="logo" />
                  <p>PALO ALTO,CA</p>
                </div>
              </div>
            </div>
            <div className="review-data">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae in donec in nisi vitae. Vestibulum pellentesque eget
laoreet adipiscing. </p>
            </div>
          </div>
          <div className="col-sm-4 col-md-3 each-event">
            <div className="review-img-info">
              <img src="../public/img3.png" alt="logo" className="review-img" />
              <div><h3>Hellen Jummy</h3>
                <div className="d-flex">
                  <img src="../public/us.png" alt="logo" />
                  <p>PALO ALTO,CA</p>
                </div>
              </div>
            </div>
            <div className="review-data">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae in donec in nisi vitae. Vestibulum pellentesque eget
laoreet adipiscing. </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default App;
