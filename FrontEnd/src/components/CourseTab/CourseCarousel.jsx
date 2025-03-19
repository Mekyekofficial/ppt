import React, { useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { useNavigate } from 'react-router-dom';
import img1 from '../../assets/courseCarousel1.jpg';
import img2 from '../../assets/courseCarousel2.jpg';
import img3 from '../../assets/courseCarousel3.jpg';

function CourseCarousel() {

  useEffect(() => {
    const carousel = document.querySelector('#carouselExampleDark');
    const bsCarousel = new bootstrap.Carousel(carousel, {
      interval: 3000, // Auto-slide every 3 seconds
      ride: 'carousel'
    });
  }, []);

  return (
    <div id="carouselExampleDark" className="carousel carousel-dark slide rounded-4">
      <div className="carousel-indicators">
        <button 
          type="button" 
          data-bs-target="#carouselExampleDark" 
          data-bs-slide-to="0" 
          className="active" 
          aria-current="true" 
          aria-label="Slide 1"
          style={{ backgroundColor: '#fff' }} // White indicator dash
        />
        <button 
          type="button" 
          data-bs-target="#carouselExampleDark" 
          data-bs-slide-to="1" 
          aria-label="Slide 2"
          style={{ backgroundColor: '#fff' }} // White indicator dash
        />
        <button 
          type="button" 
          data-bs-target="#carouselExampleDark" 
          data-bs-slide-to="2" 
          aria-label="Slide 3"
          style={{ backgroundColor: '#fff' }} // White indicator dash
        />
      </div>

      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="3000">
          <img src={img1} className="d-block w-100 rounded-4" alt="..." />
          <div className="carousel-caption d-none d-md-block text-white">
            <h5 className="fs-3">First slide label</h5>
            <p className="fs-5">Some representative placeholder content for the first slide.</p>
          </div>
        </div>

        <div className="carousel-item" data-bs-interval="3000">
          <img src={img2} className="d-block w-100 rounded-4" alt="..." />
          <div className="carousel-caption d-none d-md-block text-white">
            <h5 className="fs-3">Second slide label</h5>
            <p className="fs-5">Some representative placeholder content for the second slide.</p>
          </div>
        </div>

        <div className="carousel-item">
          <img src={img3} className="d-block w-100 rounded-4" alt="..." />
          <div className="carousel-caption d-none d-md-block text-white">
            <h5 className="fs-3">Third slide label</h5>
            <p className="fs-5">Some representative placeholder content for the third slide.</p>
          </div>
        </div>
      </div>

      <button 
        className="carousel-control-prev" 
        type="button" 
        data-bs-target="#carouselExampleDark" 
        data-bs-slide="prev"
        style={{ color: 'white' }} // White arrows
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" style={{ filter: 'invert(1)' }}></span>
        <span className="visually-hidden">Previous</span>
      </button>

      <button 
        className="carousel-control-next" 
        type="button" 
        data-bs-target="#carouselExampleDark" 
        data-bs-slide="next"
        style={{ color: 'white' }} // White arrows
      >
        <span className="carousel-control-next-icon" aria-hidden="true" style={{ filter: 'invert(1)' }}></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default CourseCarousel;
