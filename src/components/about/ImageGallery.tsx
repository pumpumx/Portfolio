import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCube, Pagination , Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';
import { useEffect} from 'react';



const ImageGallery = () => {

  useEffect(()=>{

  },[])
  return (
    <div className="gallery-container w-full h-full flex items-center justify-center py-10">
      <Swiper 
        effect={'cube'}
        grabCursor={true}
        autoplay={{delay:3000,disableOnInteraction:true}
        }
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        
        loop={true}
        pagination={{ clickable: true }}
        modules={[EffectCube, Pagination,Autoplay]}
        className="mySwiper w-[300px] h-[400px] rounded-2xl overflow-hidden"
      >
        <SwiperSlide>
          <img src="/firstProj.png" alt="slide 1" className="w-full h-full object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/secondProj.png" alt="slide 2" className="w-full h-full object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/workBg.jpg" alt="slide 3" className="w-full h-full object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/workBg.jpg" alt="slide 3" className="w-full h-full object-cover" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ImageGallery;
