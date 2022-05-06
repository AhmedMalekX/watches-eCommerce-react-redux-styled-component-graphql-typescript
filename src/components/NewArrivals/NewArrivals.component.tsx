import React, { FunctionComponent } from "react";
import { NewArrivalsWrapper } from "./NewArrivals.styles";
import HeaderSection from "../header-section/HeaderSection.component";
import { HeaderWrapper } from "../Products/Products.styles";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Card from "../card/card.component";

import new1 from "../../assets/img/new1.png";
import new2 from "../../assets/img/new2.png";
import new3 from "../../assets/img/new3.png";
import new4 from "../../assets/img/new4.png";

interface OwnProps {}

type Props = OwnProps;

const NewArrivals: FunctionComponent<Props> = () => {
  return (
    <NewArrivalsWrapper>
      <HeaderWrapper>
        <HeaderSection title="New Arrivals" />
      </HeaderWrapper>

      <Swiper
        style={{ padding: "1rem" }}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
	        768: {
		        slidesPerView: 2,
		        spaceBetween: 40
	        },
          1200:{
            slidesPerView: 3,
            spaceBetween: window.innerWidth <= 1200 ? 100 : 10
          }
        }}
        grid={{ fill: "column", rows: 1 }}
      >
        <SwiperSlide>
          <Card img={new1} name="Longines rose" type="new" price={980} />
        </SwiperSlide>
        <SwiperSlide>
          <Card img={new2} name="Jazzmaster" type="new" price={1150} />
        </SwiperSlide>
        <SwiperSlide>
          <Card img={new3} name="dreyfuss gold" type="new" price={750} />
        </SwiperSlide>
        <SwiperSlide>
          <Card img={new4} name="portuguese rose" type="new" price={1590} />
        </SwiperSlide>
        <SwiperSlide>
          <Card img={new1} name="Longines rose" type="new" price={980} />
        </SwiperSlide>
      </Swiper>
    </NewArrivalsWrapper>
  );
};

export default NewArrivals;
