import React from 'react';
import "./Home.css";
import Product from './Product';

function Home() {
    return (
        <div className = "home">
            <div className = "home_container">
                <img className = "home_image" src = "https://primevideoaanbod.nl/wp-content/uploads/2019/08/Carnival-Row-Amazon-Prime-Video.jpg" alt = ""></img>
                
                <div className = "home_row">
                    <Product id = "1" title = "The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses" price = {29.99} image = "https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg" rating = {5}/>
                    <Product id = "2" title = "2021 Apple 12.9-inch iPad Pro (Wi‑Fi, 256GB) - Space Gray, M1 chip for next-level performance - Go further with all-day battery life" price = {539.99} image = "https://m.media-amazon.com/images/I/81ijo86sDcS._AC_SL1500_.jpg" rating = {4}/>
                </div>

                <div className = "home_row">
                    <Product id = "3" title = "Ergonomic Mesh Chair Mid-Back Computer Desk Chair for Work, Home, Conference" price = {59.99} image = "https://m.media-amazon.com/images/I/816ErQxrg2L._AC_SL1500_.jpg" rating = {3}/>
                    <Product id = "4" title = "Echo Dot (5th Gen, 2021 release) - Smart speaker with Alexa - Charcoal" price = {124.99} image = "https://m.media-amazon.com/images/I/71b9icxgIgL._AC_SL1000_.jpg" rating = {5}/>
                    <Product id = "5" title = "Garmin 010 Instinct GPS, Features Glonass and Galileo, Heart Rate Monitoring and 3-Axis Compass" price = {183.59} image = "https://m.media-amazon.com/images/I/6181t0057sL._AC_SL1500_.jpg" rating = {4}/>
                </div>

                <div className = "home_row">
                    <Product id = "6" title = "SAMSUNG 55-inch Class Curved UHD TU-8300 Series - 4K UHD HDR Smart TV With Alexa Built-in (UN55TU8300FXZA, 2022 Model) Samsung smart control and user manual. Complete your viewing experience with the Q Series sound bar for deep, immersive surround sound" price = {1099.99} image = "https://m.media-amazon.com/images/I/9138UedBC+L._AC_SL1500_.jpg" rating = {4}/>
                </div>

            </div>
        </div>
    );
}

export default Home
