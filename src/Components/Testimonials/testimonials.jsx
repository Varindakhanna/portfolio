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
            <img src={img} alt="Avatar 1" />
            <h5 className="client__name">Ernest achiever</h5>
            <small className="client__review">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa
              labore, itaque est distinctio tempora animi quis vitae mollitia
              repellat laboriosam rerum maxime. At nostrum quas vero sequi iusto
              quisquam ipsam cum vel quos natus?
            </small>

            <img src={img2} alt="Avatar 1" />
            <h5 className="client__name">Ernest achiever</h5>
            <small className="client__review">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa
              labore, itaque est distinctio tempora animi quis vitae mollitia
              repellat laboriosam rerum maxime. At nostrum quas vero sequi iusto
              quisquam ipsam cum vel quos natus?
            </small>
            
          </div>
        </article>
      </div>
    </section>
  );
};

export default Testimonials;
