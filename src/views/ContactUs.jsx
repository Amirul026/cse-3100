import React from 'react';
import "./ContactUs.css";

export default function ContactUs() {
  return (
    <section className="text-center mt-4">
      <h2>Contact Us</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi odit excepturi quod. Molestiae quo quae molestias qui quidem ex nulla ea repudiandae voluptatem, accusamus inventore vitae
        impedit, maxime repellat soluta.
      </p>
      <form className="w-75 mx-auto mt-3">
        <div className="mb-3">
          <input type="text" className="form-control" placeholder="Name" required aria-label="Your Name" />
        </div>
        <div className="mb-3">
          <input type="email" className="form-control" placeholder="Email" required aria-label="Your Email" />
        </div>
        <div className="mb-3">
          <input type="tel" className="form-control" placeholder="Phone" required aria-label="Your Phone Number" />
        </div>
        <div className="mb-3">
          <textarea className="form-control" placeholder="Your Message" rows="4" required aria-label="Your Message"></textarea>
        </div>
        <div className="button-container">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </section>
  );
}
