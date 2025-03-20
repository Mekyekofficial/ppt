import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import img1 from '../../assets/newsCarousel1.jpg';
import img2 from '../../assets/newsCarousel2.jpg';
import img3 from '../../assets/newsCarousel3.jpg';

function NewsCarousel() {
  useEffect(() => {
    const carousel = document.querySelector('#carouselExampleDark');
    const bsCarousel = new bootstrap.Carousel(carousel, {
      interval: 3000, // Auto-slide every 3 seconds
      ride: 'carousel'
    });
  }, []);

  // Styles for the carousel container and images
  const carouselStyle = {
    width: '100%',
    height: '400px'
  };

  const imageStyle = {
    objectFit: 'cover',
    height: '400px'
  };

  return (
    <div id="carouselExampleDark" className="carousel carousel-dark slide rounded-4" style={carouselStyle}>
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
          <img src={img1} className="d-block w-100 rounded-4" alt="..." style={imageStyle} />
          <div className="carousel-caption d-none d-md-block text-white">
            {/* <h5 className="fs-3">First slide label</h5> */}
            <p className="fs-5">Hamas said it fired rockets at Israeli commercial hub Tel Aviv on Thursday (March 20, 2025) in its first military response to the growing civilian death toll from Israel’s resumption of air and ground operations in Gaza.</p>
          </div>
        </div>

        <div className="carousel-item" data-bs-interval="3000">
          <img src={img2} className="d-block w-100 rounded-4" alt="..." style={imageStyle} />
          <div className="carousel-caption d-none d-md-block text-white">
            {/* <h5 className="fs-3">Second slide label</h5> */}
            <p className="fs-5">The administration of President Donald Trump was consulted on Monday (March 17, 2025) by Israel on its deadly strikes in Gaza, a White House spokesperson told Fox News' "Hannity" show.</p>
          </div>
        </div>

        <div className="carousel-item">
          <img src={img3} className="d-block w-100 rounded-4" alt="..." style={imageStyle} />
          <div className="carousel-caption d-none d-md-block text-white">
            {/* <h5 className="fs-3">Third slide label</h5> */}
            <p className="fs-5">The world is full of mysteries but not all of them are grand. Sure, we don’t know what the mind really is or what the inside of a black hole looks like. But there are also many mysteries hiding in the little details.</p>
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

export default NewsCarousel;
