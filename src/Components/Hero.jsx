import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const Hero = () => {
  return (
    <Swiper 
      loop={true} 
      autoplay={{ delay: 3000 }}
      className="h-[60vh] md:h-[70vh]"
    >
      <SwiperSlide>
        <img
          src="https://i.ibb.co/0Spdcqy/marie-martin-l-IW9nj9-Ev-U-unsplash.jpg"
          alt="Cute dog in sweater"
          className="w-full h-full object-cover"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://i.ibb.co/TNHtKBh/shawn-rain-v1rv-Ghjp-C-o-unsplash.jpg"
          alt="Cat with scarf"
          className="w-full h-full object-cover"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://i.ibb.co/0Vdw6Sw6/cal-gao-98-Pc1-NN25a-I-unsplash.jpg"
          alt="Dog with blanket"
          className="w-full h-full object-cover"
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default Hero;