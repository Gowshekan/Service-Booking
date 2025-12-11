import React from 'react';
import './../Styles/Home.css';

const Home = () => {
    return (
        <div className="home">
            <section className="hero">
                <h1>Welcome to Service Booking App</h1>
                <p>Find trusted professionals for your home services</p>
                <button>Book a Service</button>
            </section>

            <section className="categories">
                <h2>Our Categories</h2>
                <div className="category-list">
                    <div className="category-card">
                        <h3>Plumbing</h3>
                        <p>Plumbing services for home</p>
                        <button>Book Now</button>
                    </div>
                    <div className="category-card">
                        <h3>Electrical</h3>
                        <p>Electrical services for home</p>
                        <button>Book Now</button>
                    </div>
                    <div className="category-card">
                        <h3>Carpentry</h3>
                        <p>Carpentry services for home</p>
                        <button>Book Now</button>
                    </div>
                    <div className="category-card">
                        <h3>Painting</h3>
                        <p>Painting services for home</p>
                        <button>Book Now</button>
                    </div>
                </div>
            </section>

            <section className="featured">
                <h2>Featured Services</h2>
                <div className="service-list">
                    <div className="service-card">
                        <h3>Tap Repair</h3>
                        <p>Quick plumbing repair</p>
                        <button>Book Now</button>
                    </div>
                    <div className="service-card">
                        <h3>Wall Painting</h3>
                        <p>Professional painting</p>
                        <button>Book Now</button>
                    </div>
                    <div className="service-card">
                        <h3>Fan Installation</h3>
                        <p>Safe electrical service</p>
                        <button>Book Now</button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
