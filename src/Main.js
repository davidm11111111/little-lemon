import React from "react";
import "./styles/Main.css";
import restaurantImage from "./media/restauranfood.jpg"; // Korrekt importieren
import greekSaladImage from "./media/greeksalad.jpg";
import bruschettaImage from "./media/bruchetta.svg";
import lemonDessertImage from "./media/lemondessert.jpg";

function Main() {
  return (
    <main className="main">
      <div className="container">
        <section className="hero">
          <div className="hero-content">
            <h1 className="hero-title">Little Lemon</h1>
            <h2 className="city-title">Chicago</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
            </p>
            <button className="reserve-button">Reserve a Table</button>
          </div>
          <div className="hero-image">
            <img src={restaurantImage} alt="Hero Image" />
          </div>
        </section>
        <section className="highlights">
          <div className="specials-header">
            <h2 className="section-title">Specials</h2>
            <button className="online-menu-button">Online Menu</button>
          </div>
          <div className="specials-content">
            <div className="card">
              <img
                src={greekSaladImage}
                alt="Greek salad"
                className="card-image"
              />
              <div className="card-content">
                <h3 className="card-title">
                  Greek salad <span className="price">$12.99</span>
                </h3>
                <p>
                  The famous greek salad of crispy lettuce, peppers, olives and
                  our Chicago style feta cheese, garnished with crunchy garlic
                  and rosemary croutons.
                </p>
                <p className="order-link">
                  Order a delivery <span className="delivery-icon">🚚</span>
                </p>
              </div>
            </div>
            <div className="card">
              <img
                src={bruschettaImage}
                alt="Bruschetta"
                className="card-image"
              />
              <div className="card-content">
                <h3 className="card-title">
                  Bruschetta <span className="price">$5.99</span>
                </h3>
                <p>
                  Our Bruschetta is made from grilled bread that has been
                  smeared with garlic and seasoned with salt and olive oil.
                </p>
                <p className="order-link">
                  Order a delivery <span className="delivery-icon">🚚</span>
                </p>
              </div>
            </div>
            <div className="card">
              <img
                src={lemonDessertImage}
                alt="Lemon Dessert"
                className="card-image"
              />
              <div className="card-content">
                <h3 className="card-title">
                  Lemon Dessert <span className="price">$5.00</span>
                </h3>
                <p>
                  This comes straight from grandma’s recipe book, every last
                  ingredient has been sourced and is as authentic as can be
                  imagined.
                </p>
                <p className="order-link">
                  Order a delivery <span className="delivery-icon">🚚</span>
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="testimonials">
          <h2 className="section-title">Testimonials</h2>
          <p>Star ratings, user profile, photo, review</p>
        </section>
        <section className="about">
          <h2 className="section-title">About</h2>
          <p>Name, Description, Photos</p>
        </section>
      </div>
    </main>
  );
}

export default Main;
