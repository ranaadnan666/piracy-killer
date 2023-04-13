import React from "react";
import "./contactform.css";

import img from "../../Contact us/images/map.png";
export default function Contactform() {
  return (
    <div>
      <div class="contact-form-img">
        <img src={img} alt="Map" class="img-cart" />
      </div>

      <div class="contact-form-main">
        <div class="main-header">
          <h2>LEAVE A MASSAGE</h2>
          <h1>
            Give a <span className="span"> Message</span>{" "}
          </h1>
        </div>
        <div class="contact-us-form">
          <form>
            <div class="form-first">
              <div class="form-group">
                <input
                  class="form-control"
                  placeholder="Name"
                  type="text"
                  required=""
                />
              </div>
              <div class="form-group">
                <input class="form-control" placeholder="Phone" type="phone" />
              </div>
            </div>
            <div class="form-first">
              <div class="form-group">
                <input
                  class="form-control "
                  name="email"
                  id="email"
                  placeholder="Email"
                  type="email"
                  required=""
                />
              </div>

              <div class="form-group">
                <input
                  class="form-control "
                  placeholder="Subject"
                  type="text"
                />
              </div>
            </div>
            <div>
              <div>
                <textarea
                  class="form-message "
                  placeholder="Comments"
                  rows="5"
                ></textarea>
              </div>
            </div>

            <div class="text-center">
              <a href="/">
                <button class="btn btn-primary" type="submit">
                  Contact US
                </button>{" "}
              </a>
            </div>
          </form>
        </div>
      </div>

      <div class="contact-end">
        <div class="testimonial-meta">
          <h4> Jason Stattham </h4>
          <small>CEO Microhost</small>
        </div>
        <div class="testimonial-text">
          <p>
            Start working with an company that can do provide every thing at you
            need to generate awareness, drive traffic, connect with
          </p>
        </div>
      </div>
    </div>
  );
}
