import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
 
// https://ibb.co.com/SZKBQXv
// https://ibb.co.com/Lh2GcWGc
const Hero = () => {
  return (
    <Swiper loop={true} autoplay={{ delay: 3000 }}>
      <SwiperSlide>
        <img
          src="https://i.ibb.co/0Spdcqy/marie-martin-l-IW9nj9-Ev-U-unsplash.jpg"
          alt="Cute dog in sweater"
          className="w-full h-[500px] object-cover"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://i.ibb.co/TNHtKBh/shawn-rain-v1rv-Ghjp-C-o-unsplash.jpg"
          alt="Cat with scarf"
          className="w-full h-[500px] object-cover"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://i.ibb.co/0Vdw6Sw6/cal-gao-98-Pc1-NN25a-I-unsplash.jpg"
          alt="Dog with blanket"
          className="w-full h-[500px] object-cover"
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default Hero;