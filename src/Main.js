import React from "react";
import "./styles/Main.css";

function Main() {
  return (
    <main className="main">
      <section className="hero">
        <div className="hero-content">
          <h2 className="section-title">Hero</h2>
          <p>Name, Description, Image</p>
        </div>
      </section>
      <section className="highlights">
        <h2 className="section-title">Highlights</h2>
        <p>Online Menu, Button Link, This week's specials</p>
      </section>
      <section className="testimonials">
        <h2 className="section-title">Testimonials</h2>
        <p>Star ratings, user profile, photo, review</p>
      </section>
      <section className="about">
        <h2 className="section-title">About</h2>
        <p>Name, Description, Photos</p>
      </section>
    </main>
  );
}

export default Main;
