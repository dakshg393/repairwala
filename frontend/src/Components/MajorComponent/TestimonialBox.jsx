import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const testimonials = [
  {
    name: 'Leo',
    role: 'Lead Designer',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    rating: 4,
    title: 'It was a very good experience',
    message: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus...`,
  },
  {
    name: 'Leo',
    role: 'Lead Designer',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    rating: 4,
    title: 'It was a very good experience',
    message: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus...`,
  },
  {
    name: 'Leo',
    role: 'Lead Designer',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    rating: 4,
    title: 'It was a very good experience',
    message: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus...`,
  },
  {
    name: 'Leo',
    role: 'Lead Designer',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    rating: 4,
    title: 'It was a very good experience',
    message: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus...`,
  },
  {
    name: 'Leo',
    role: 'Lead Designer',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    rating: 4,
    title: 'It was a very good experience',
    message: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus...`,
  },
  // You can duplicate and change this object for more slides
];

const TestimonialCard = ({ testimonial }) => {
  const stars = Array.from({ length: 5 }).map((_, i) => (
    <span key={i} className={i < testimonial.rating ? 'text-orange-400' : 'text-gray-300'}>
      ★
    </span>
  ));

  return (
    <div className="bg-white shadow-md rounded-xl p-6 text-center max-w-md mx-auto">
      <img
        src={testimonial.image}
        alt={testimonial.name}
        className="w-16 h-16 rounded-full mx-auto mb-2"
      />
      <h3 className="text-lg font-bold">{testimonial.name}</h3>
      <p className="text-sm text-gray-500 mb-1">{testimonial.role}</p>
      <div className="text-sm mb-2">{stars}</div>
      <h4 className="text-md font-semibold mb-2">{testimonial.title}</h4>
      <p className="text-sm text-gray-600">{testimonial.message}</p>
    </div>
  );
};

const TestimonialBox = () => {
  return (
    <div className="py-10 bg-gray-50">
     <Swiper
        slidesPerView={1}
        spaceBetween={20}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        modules={[Navigation, Pagination]}
        className="px-6"
      >
        {testimonials.map((t, idx) => (
          <SwiperSlide key={idx}>
            <TestimonialCard testimonial={t} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TestimonialBox;
