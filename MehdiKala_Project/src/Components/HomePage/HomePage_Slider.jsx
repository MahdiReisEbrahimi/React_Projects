import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import a1 from "../../assets/images/a1.jpg";
import a2 from "../../assets/images/a2.jpg";
import a3 from "../../assets/images/a3.jpg";

export default function HomePage_Header() {
  return (
    <Swiper
      modules={[Autoplay]}
      spaceBetween={30}
      slidesPerView={1}
      loop={true}
      autoplay={{ delay: 1000 }}
      className="h-30 mb-4"
    >
      <SwiperSlide>
        <img src={a1} alt="Slide 1" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={a2} alt="Slide 2" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={a3} alt="Slide 3" />
      </SwiperSlide>
    </Swiper>
  );
}
