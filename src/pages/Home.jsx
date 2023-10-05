import React, { useState } from "react";
import "./style.css";
import RazorpayForm from "../component/Razorpay";
import Razerpay from "../component/Razorpay";
import { Outlet, Link } from "react-router-dom";
// import Charity from "../images/charity.jpg"
// import Child from "../images/child.jpg"

const Home = () => {

  const [formData, setFormData] = useState({
    email: '',
    message: '',
  });





  return (
    <>
      <div className="nevbar" id="nevbar">
        <div className="logo">
          {/* <a href="/index.html" id="logo">
        <h1>
          <span>Charity</span>/Donation
        </h1>
      </a> */}
        </div>
        <div className="menu" id="menu">
          <ul>
            <li>
              <a id="home" href="index.html">
                Home
              </a>
            </li>
            <li>
              <a href="#explore">Explore</a>
            </li>
            <li>
              <a href="#service">Service</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            <li>
              <a>About me</a>
            </li>
            <li>
              <a>Donate</a>
            </li>
          </ul>
        </div>
        <div className="menuicon">
          <i
            id="menuicon"
            onclick="togglemenu()"
            className="fas fa-chevron-circle-down"
          >
            {" "}
            <span>MENU</span>
          </i>
        </div>
      </div>
      <div className="cover">
        <div className="information">
          <h1>-</h1>
          <h3>Raising Hope</h3>
          <h2>To help brighten </h2>
          <h1>
            {" "}
            <span>FUTURE</span>{" "}
          </h1>
          <h3>
            {" "}
            <span>Flying Charity foundation</span>
          </h3>
          <h1>-</h1>
          <a href="">
            <button><Link to="/donate">EXPLORE</Link></button>
          </a>
          <a>
            <button>
              <Link to="/donate">DONATE</Link>
            </button>
          </a>  
        </div>
      </div>
      <div className="explore" id="explore" />
      <div className="about">
        <div className="imgcontanner">
          <div className="aboutimg" />
        </div>
        <div className="aboutcontent">
          <h5>_</h5>
          <h1>Why Donate?</h1>
          <p>
            Donating is a compassionate act that fosters positive change. It
            empowers charities, aids those in need, and strengthens communities.
            By giving, we contribute to a better world and experience the joy of
            making a difference.
          </p>
          <p>
            Donating fosters empathy, supports vital causes, and creates a
            better world, enriching both giver and receiver.
          </p>
          <a> <Link to="/donate">DONATE</Link></a>
          <>
  <br />
  <br />
  <h5>_</h5>
  {/* ----------------------------------  Service -------------------------------------- */}
  <div className="service" id="service">
    <h5>SERVICES</h5>
    <h1>Our Latest Services</h1>
    <div className="details"></div>
  </div>
</>

          <div className="info">
            <div className="logo">
              <i className="fas fa-book-reader" />
            </div>
            <p id="head"> [What we do]</p>
            <p>
              We help empower underprivileged children with quality education.
            </p>
          </div>
          <div className="info" data-aos="fade-up">
            <div className="logo">
              <i className="fas fa-book-open" />
            </div>
            <p id="head">How we do it</p>
            <p>
              We helps these children continue their education through digital
              initiatives.
            </p>
          </div>
          <div className="info" data-aos="fade-up">
            <div className="logo">
              <i className="fas fa-book" />
            </div>
            <p id="head">Make a difference</p>
            <p>
              ₹ 3,000 can help a child build a life and add wings to their
              dreams
            </p>
          </div>
          <div className="info" data-aos="fade-up">
            <div className="logo">
              <i className="fas fa-chart-line" />
            </div>
            <p id="head">Lives benefitted so far</p>
            <p>
              Over 50k+ children have benefitted so far with thousands more to
              go
            </p>
          </div>
        </div>
      </div>
      {/*-------------------------- contact ------------------- */}
      <div className="contact" id="contact">
        <h1>CONTACT ME</h1>
        <br />
        <div className="contactcontanner">
          <div className="contanner">
            <div className="heading">
              <div className="icon">
                <i className="far fa-map" />
              </div>
              <div className="info">
                <p>Address : </p>
                <p id="contactinfo">Nangal road</p>
              </div>
            </div>
            <div className="heading">
              <div className="icon">
                <i className="fas fa-phone-alt" />
              </div>
              <div className="info">
                <p>Phone : </p>
                <p id="contactinfo">97726-39891</p>
              </div>
            </div>
            <div className="heading">
              <div className="icon">
                <i className="far fa-envelope" />
              </div>
              <div className="info">
                <p>Email : </p>
                <p id="contactinfo">
                  flying.charity.foundation
                  <br />
                  @gmail.com
                </p>
              </div>
            </div>
          </div>
          <div className="messageform">
            <div className="form">
              <form  action="" method="POST">
                <style
                  dangerouslySetInnerHTML={{
                    __html:
                      "\n                            ::placeholder {color: rgba(255, 255, 255, 0.7);}\n                        ",
                  }}
                />
                <input type="text"name="name" placeholder="NAME" required="" />
                <input
                  type="email"
                  name="email"
                  placeholder="EMAIL"
                  required=""
                 
                />
                <input
                  type="text"
                  name="subject"
                  placeholder="SUBJECT"
                  required=""
                  
                />
                <textarea
                  type="message"
                  name="message"
                  id="inputbox"
                  cols={30}
                  rows={5}
                  placeholder="MESSAGE"
                  required=""
                  defaultValue={""}
                  
                />
                <button type="submit">SEND MESSAGE</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* ------------------------------  Counter  ---------------------------------- */}
      <div className="contercontent">
        <div className="counterbox one">
          <div className="information" data-aos="fade-down">
            <div className="number">
              <p style={{ color: "rgba(255, 255, 255, 0.9)" }}>10</p>
            </div>
            <div className="text">
              <p style={{ color: "rgba(255, 255, 255, 0.7)" }}>
                Year <br /> Experienced
              </p>
            </div>
          </div>
        </div>
        <div className="counterbox">
          <div className="information" data-aos="fade-down">
            <div className="number">
              <p>1290</p>
            </div>
            <div className="text">
              <p>
                People <br /> enrolled
              </p>
            </div>
          </div>
        </div>
        <div className="counterbox">
          <div className="information" data-aos="fade-down">
            <div className="number">
              <p>9</p>
            </div>
            <div className="text">
              <p>
                crore <br /> Donation
              </p>
            </div>
          </div>
        </div>
        <div className="counterbox">
          <div className="information" data-aos="fade-down">
            <div className="number">
              <p>1</p>
            </div>
            <div className="text">
              <p>
                States <br /> Across India
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <div class="topspace"></div> */}
      <footer>
        <p>
          © 2021 Made ❤️ By{" "}
          <a>
            <strong>toushik sharma</strong>
          </a>{" "}
          |{" "}
          <a>
            <strong>flying charity foundation</strong>
          </a>
        </p>
      </footer>
      {/* scripts  */}
    </>
  );
};

export default Home;
