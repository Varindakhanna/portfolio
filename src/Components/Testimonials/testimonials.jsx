import React from "react";
import "./testimonials.css";
import img from "../../assets/avatar1.jpg";
import img2 from "../../assets/avatar2.jpg";

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <div className="container testimonials__container">
        <article className="testimonial">
          <div className="client__avatar">
            {/* <img src={img} alt="Avatar 1" /> */}
            <h5 className="client__name">To be added</h5>
            <small className="client__review">
           
            </small>

            {/* <img src={img2} alt="Avatar 1" /> */}
            
            
          </div>
        </article>
      </div>
    </section>
  );
};

export default Testimonials;
