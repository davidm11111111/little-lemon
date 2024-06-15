import React from "react";
import "./styles/Main.css";
import restaurantImage from "./media/restauranfood.jpg"; // Korrekt importieren

function Main() {
  return (
    <main className="main">
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Little Lemon</h1>
          <h2 className="city-title">Chicago</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.{" "}
          </p>
          <button className="reserve-button">Reserve a Table</button>
        </div>
        <div className="hero-image">
          <img src={restaurantImage} alt="Hero Image" />
        </div>
      </section>
      <section className="highlights">
        <h2 className="section-title">Specials</h2>
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
