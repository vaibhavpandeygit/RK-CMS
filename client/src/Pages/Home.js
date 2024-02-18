import React from 'react'
import Layout from '../components/Layout'
import './CSSPage/Home.css'

import background from './HomeImg/background.jpg'
import desk from "./HomeImg/desk.png";
import bootstrap2 from './HomeImg/bootstrap2.png'
import team1 from "./HomeImg/team1.png";
import team2 from "./HomeImg/team2.png";
import team3 from "./HomeImg/team3.png";


const Home = () => {
  return (
    <Layout>
      <div
        id="slides"
        className="carousel slide"
        data-ride="carousel"
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="image" src={background} />
            <div className="carousel-caption">
              <h1 className="display-2">RK Asociates</h1>
              <h3>Welcome to RK Asociaes, please do something</h3>
              <button type="button" className="btn btn-primary btn-lg">
                Login
              </button>
            </div>
          </div>
        </div>
      </div>


      <div
        className="container-fluid"
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
      >
        <div className="row welcome text-center">
          <div className="col-12">
            <h1 className="display-4">We Provide Services</h1>
          </div>
          
          
        </div>
      </div>

      <div
        className="container-fluid padding"
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
      >
        <div className="row text-center ">
          <div className="col-xs-12 col-sm-6 col-md-4">
            <i className="fas fa-code"></i>
            <h3>Service Name</h3>
            <p>We are best in this service, contact us hehe..</p>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-4">
            <i className="fas fa-bold"></i>
            <h3>Service Name</h3>
            <p>We are best in this service, contact us hehe..</p>
          </div>
          <div className="col-xs-12 col-md-4">
            <i className="fab fa-css3"></i>
            <h3>Service Name</h3>
            <p>We are best in this service, contact us hehe..</p>
          </div>
          <div className="col-xs-12 col-md-4">
            <i className="fab fa-css3"></i>
            <h3>Service Name</h3>
            <p>We are best in this service, contact us hehe..</p>
          </div>
          <div className="col-xs-12 col-md-4">
            <i className="fab fa-css3"></i>
            <h3>Service Name</h3>
            <p>We are best in this service, contact us hehe..</p>
          </div>
          <div className="col-xs-12 col-md-4">
            <i className="fab fa-css3"></i>
            <h3>Service Name</h3>
            <p>We are best in this service, contact us hehe..</p>
          </div>
        </div>
        <hr className="my-4" />
      </div>

      <div
        className="container-fluid padding"
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
      >
        <div className="row padding">
          <div className="col-md-12 col-lg-6">
            <h2>If you build it...</h2>
            <p>
              The columns will automatically stack on each other when the screen
              is less than 576px wide.
            </p>
            <p>
              Resize the browserwindow to see the effect. Responsive web design
              has become more important as the amount of mobile traffic now
              accounts for more than half of total internet traffic.
            </p>
            <p>
              It can also display the web page differently depending on the
              screen size or viewing device.
            </p>
            <br />
            <a href="#" className="btn btn-primary">
              Learn More
            </a>
          </div>
          <div className="col-lg-6">
            <img src={desk} className="img-fluid" />
          </div>
        </div>
      </div>

      <hr className="my-4" />

      <div className="container-fluid padding">
        <div className="row welcome text-center">
          <div className="col-12">
            <h1 className="display-4">Meet the Team </h1>
          </div>
        </div>
      </div>

      <div
        className="container-fluid padding"
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
      >
        <div className="row padding">
          <div className="col-md-4">
            <div className="card">
              <img className="card-img-top" src={team1} />
              <div className="card-body">
                <h4 className="card-title">John Doe</h4>
                <p className="card-text">
                  John is an Interent entrepreneur with almost 20 years of
                  experience.
                </p>
                <a href="#" className="btn btn-outline-secondary">
                  See Profile
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img className="card-img-top" src={team2} />
              <div className="card-body">
                <h4 className="card-title">Mary Jo</h4>
                <p className="card-text">
                  Mary is a designer with a almost 10 years of digital design
                  experience.
                </p>
                <a href="#" className="btn btn-outline-secondary">
                  See Profile
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img className="card-img-top" src={team3} />
              <div className="card-body">
                <h4 className="card-title">Phil Ho</h4>
                <p className="card-text">
                  Phil is an developer with over 5 years of web development
                  experience.
                </p>
                <a href="#" className="btn btn-outline-secondary">
                  See Profile
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="container-fluid padding"
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
      >
        <div className="row padding">
          <div className="col-md-12 col-lg-6">
            <h2>Our Philosophy</h2>
            <p>
              We know that greatness in a disruptive era requires bold ambition,
              curious talent and a culture that believes we're smarter together.
            </p>
            <p>
              We approach every challenge hostically, with best-in-class
              expertise in data, creativity, media, technology, search, social
              and more. We call this Alchemy. It has the power to build our
              clients' brands and transform their business. And white it may
              seem like magic, we've got it down to a science.
            </p>
          </div>
          <div className="col-lg-6">
            <img src={bootstrap2} className="img-fluid" />
          </div>
        </div>
        <hr className="my-4" />
      </div>
    </Layout>
  );
}

export default Home
