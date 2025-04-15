"use client";
import React, { useRef } from 'react';
import TestimonialCard from './TestimonialCard'; // your existing card component

const TestimonialScroller = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -300 : 300, // adjust scroll distance
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="relative w-full py-8">
      {/* Scroll Buttons */}
      <button
        onClick={() => scroll('left')}
        className="absolute left-4 top-1/2 z-10 -translate-y-1/2 bg-white rounded-full shadow p-2 md:block hidden"
      >
        ◀
      </button>
      <button
        onClick={() => scroll('right')}
        className="absolute right-4 top-1/2 z-10 -translate-y-1/2 bg-white rounded-full shadow p-2 md:block hidden"
      >
        ▶
      </button>

      {/* Scrollable testimonials */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-scroll scroll-smooth px-4 pb-4 md:px-10 scrollbar-hide"
      >
        <TestimonialCard
          name="Jennifer B"
          avatar="/logo.png"
          testimonial="Little Learners Academy has been a second home for my child. The caring staff and engaging programs have made her excited to go to school every day!"
        />
        <TestimonialCard
          name="David K"
          avatar="/logo.png"
          testimonial="Choosing Little Learners Academy for my daughter was the best decision. She has thrived in their nurturing and stimulating environment."
        />
        <TestimonialCard
          name="Emily"
          avatar="/logo.png"
          testimonial="My son's social and academic growth has been remarkable since joining Little Learners Academy. I am grateful for the supportive and dedicated teachers."
        />
        <TestimonialCard
          name="Emily"
          avatar="/logo.png"
          testimonial="My son's social and academic growth has been remarkable since joining Little Learners Academy. I am grateful for the supportive and dedicated teachers."
        />
        <TestimonialCard
          name="Emily"
          avatar="/logo.png"
          testimonial="My son's social and academic growth has been remarkable since joining Little Learners Academy. I am grateful for the supportive and dedicated teachers."
        />
        <TestimonialCard
          name="Emily"
          avatar="/logo.png"
          testimonial="My son's social and academic growth has been remarkable since joining Little Learners Academy. I am grateful for the supportive and dedicated teachers."
        />
      </div>
    </div>
  );
};

export default TestimonialScroller;

