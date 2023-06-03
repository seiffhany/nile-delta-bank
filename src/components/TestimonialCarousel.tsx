import React, { useState } from 'react';
import '../css/testimonial-carousel.css'; // Create a CSS file for styling

const testimonials = [
  {
    id: 1,
    name: 'YOUSSEF HANY',
    image: 'res/youssef-hany.svg',
    text: 'Love this! I never have to worry about missing a bill payment or overdrawing my account. Their notifications keep me on track.',
  },
  {
    id: 2,
    name: 'DAVID MARTINEZ',
    image: 'res/david-martinez.jpg',
    text: 'Managing my finances has never been simpler. Thanks, Nile Delta Bank!',
  },
  {
    id: 3,
    name: 'SAMANTHA DAVIS',
    image: 'res/samantha-davis.jpg',
    text: 'I\'ve been a Nile Delta Bank customer for years, and I can confidently say that their customer service is unbeatable. They always go above and beyond.',
  },
  {
    id: 4,
    name: 'ALEXANDER LEE',
    image: 'res/alexander-lee.jpg',
    text: 'Banking made easy. Nile Delta Bank\'s app is a game changer.',
  },
  {
    id: 5,
    name: 'MADISON TAYLOR',
    image: 'res/madison-taylor.jpg',
    text: 'I love the convenience of being able to manage my finances from my phone. Nile Delta Bank\'s mobile app makes banking on the go a breeze!',
  }
];

const TestimonialCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [moveDirection, setMoveDirection] = useState('');

  const nextSlide = () => {
    setMoveDirection('move-next');
    setTimeout(() => {
      setCurrentSlide((currSlide) => (currSlide === testimonials.length - 1 ? 0 : currSlide + 1));
      setMoveDirection('move-next-new');
    }, 300);
  };
  
  const prevSlide = () => {
    setMoveDirection('move-prev');
    setTimeout(() => {
      setCurrentSlide((currSlide) => (currSlide === 0 ? testimonials.length - 1 : currSlide - 1));
      setMoveDirection('move-prev-new');
    }, 300);
  };

  return (
    <div className="testimonial-carousel">
      <div className={`testimonial-card${moveDirection ? ` ${moveDirection}` : ''}`}>
        <div className="testimonial-image-name">
          <img className="testimonial-card-pic" src={testimonials[currentSlide].image} alt={testimonials[currentSlide].name} />
          <h3>{testimonials[currentSlide].name}</h3>
        </div>
        <div className="testimonial-text-rating">
          <img className="rating" src="res/rating4.svg" alt="" />
          <p id="tagline-testimonial" className="fulljustify">{testimonials[currentSlide].text}</p>
        </div>
      </div>
      <div className="arrows">
        <img
          src="res/left.svg"
          alt="Previous"
          className="arrow arrow-left"
          onClick={prevSlide}
        />
        <img
          src="res/right.svg"
          alt="Next"
          className="arrow arrow-right"
          onClick={nextSlide}
        />
      </div>
      <div className="dots">
        {testimonials.map((testimonial, index) => (
          <div
            key={testimonial.id}
            className={`dot ${index === currentSlide ? 'active' : ''}`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialCarousel;