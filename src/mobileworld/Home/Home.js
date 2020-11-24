import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <nav class="navbar navbar-light bg-secondary">
        <span class="navbar-brand mb-0 h1">Smartphone</span>
        <ul class="navbar-nav mr-auto">
          <li class="nav-item1 active">
            <Link class="nav-link" to="login">
              Login<span class="sr-only">(current)</span>
            </Link>
          </li>
        </ul>
      </nav>
      <h1 id="home">Welcome</h1>
      <p id="hpara">
        Mobile phones are efficient communication devices and make life easier.
        Whether locating a friend or following up with a new contact, mobile
        phones allow you to connect to people in any part of the world.
      </p>

      <div className="card" style={{ width: "23rem" }}>
        <img src="\images\oppo.jpg" class="card-img-top" alt="..." />
        <div class="card-body">
          <p style={{ color: "red" }} class="card-text">
            <b>Oppo</b> <br />   www.oppo.com
          </p>
        </div>
      </div>
      


      <div className="card" style={{ width: "23rem" }}>
        <img src="\images\iphone1.jpg" class="card-img-top" alt="..." />
        <div class="card-body">
          <p style={{ color: "fuchsia" }} class="card-text">
            <b>Apple</b>
            <br />
            www.Apple.com
          </p>
        </div>
      </div>

      <div className="card" style={{ width: "23rem" }}>
        <img src="\images\samsung.jpg" class="card-img-top" alt="..." />
        <div class="card-body">
          <p style={{ color: "blue" }} class="card-text">
            <b>Samsung</b>
            <br />
            www.samsung.com
          </p>
        </div>
      </div>

      <div className="card" style={{ width: "23rem" }}>
        <img src="\images\nokia1.jpg" class="card-img-top" alt="..." />
        <div class="card-body">
          <p style={{ color: "crimson" }} class="card-text">
            <b>Nokia</b>
            <br />
            www.nokia.com
          </p>
        </div>
      </div>

      <div className="card" style={{ width: "23rem" }}>
        <img src="\images\oneplus.jpg" class="card-img-top" alt="..." />
        <div class="card-body">
          <p style={{ color: "darkblue" }} class="card-text">
            <b>One+</b>
            <br />
            www.oneplus.com
          </p>
        </div>
      </div>

      <div className="card" style={{ width: "23rem" }}>
        <img src="\images\vivo.jpg" class="card-img-top" alt="..." />
        <div class="card-body">
          <p style={{ color: "grey" }} class="card-text">
            <b>Vivo</b>
            <br />
            www.vivo.com{" "}
          </p>
        </div>
      </div>

     
    </div>
  );
}
