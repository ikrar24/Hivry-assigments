import React from 'react';
import company1 from "../assets/company1.png";
import company2 from "../assets/company2.png";
import company3 from "../assets/company3.png";
import company4 from "../assets/company4.png";
import company5 from "../assets/company5.png";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';

function TrusttedBy() {
  const companies = [company1, company2, company3, company4, company5];

  return (
    <section className='flex items-center justify-center flex-col mt-5'>
      <div className='w-[90%]'>
        <p className="text-center text-yellow-400 mb-5">Trusted By</p>

        <Swiper
          modules={[Autoplay]}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          speed={9000}
          loop={true}
          slidesPerView={3}
          spaceBetween={10}
          grabCursor={true}
          className="mySwiper"
        >
          {companies.concat(companies).map((company, index) => (
            <SwiperSlide key={index}>
              <img src={company} alt={`trusted-company-${index}`} className="w-[130px]" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default TrusttedBy;
