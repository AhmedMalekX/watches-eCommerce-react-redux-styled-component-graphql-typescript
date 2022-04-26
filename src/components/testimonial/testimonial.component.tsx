import React, { FunctionComponent } from "react";
import ImageHeadSection from "../ImageHeadSection/ImageHeadSection.component";
import man from "../../assets/img/testimonial.png";
import user1 from "../../assets/img/testimonial1.jpg";
import user2 from "../../assets/img/testimonial2.jpg";
import user3 from "../../assets/img/testimonial3.jpg";
import {
  QuoteWrapper,
  TestimonialAuthorImgWrapper,
  TestimonialAuthorInfoWrapper,
  TestimonialAuthorWrapper,
  TestimonialContentWrapper,
  TestimonialDateWrapper,
  TestimonialImgWrapper,
  TestimonialTextWrapper,
  TestimonialWrapper,
} from "./testimonial.styles";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import { Carousel } from "react-responsive-carousel";

interface OwnProps {}

type Props = OwnProps;

const Testimonial: FunctionComponent<Props> = (props) => {
  return (
    <TestimonialWrapper>
      <TestimonialImgWrapper>
        <ImageHeadSection imgUrl={man} imgAlt="Man" />
      </TestimonialImgWrapper>
      <TestimonialContentWrapper>
        <Carousel
          autoPlay={true}
          infiniteLoop={true}
          showThumbs={false}
          showIndicators={false}
          showArrows={false}
          showStatus={false}
        >
          <div>
            <QuoteWrapper>
              <i className="bx bxs-quote-left"></i>
            </QuoteWrapper>
            <TestimonialTextWrapper>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </TestimonialTextWrapper>
            <TestimonialDateWrapper>
              Monday, 25 April 2022
            </TestimonialDateWrapper>
            <TestimonialAuthorWrapper>
              <TestimonialAuthorImgWrapper>
                <img src={user3} alt="User" />
              </TestimonialAuthorImgWrapper>
              <TestimonialAuthorInfoWrapper>
                <span>john doe</span>
                <span>software engineer</span>
              </TestimonialAuthorInfoWrapper>
            </TestimonialAuthorWrapper>
          </div>
          <div>
            <QuoteWrapper>
              <i className="bx bxs-quote-left"></i>
            </QuoteWrapper>
            <TestimonialTextWrapper>
              t is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English.
            </TestimonialTextWrapper>
            <TestimonialDateWrapper>
              Tuesday, April 19 2022
            </TestimonialDateWrapper>
            <TestimonialAuthorWrapper>
              <TestimonialAuthorImgWrapper>
                <img src={user1} alt="User" />
              </TestimonialAuthorImgWrapper>
              <TestimonialAuthorInfoWrapper>
                <span>X Coder</span>
                <span>CEO of the company</span>
              </TestimonialAuthorInfoWrapper>
            </TestimonialAuthorWrapper>
          </div>
          <div>
            <QuoteWrapper>
              <i className="bx bxs-quote-left"></i>
            </QuoteWrapper>
            <TestimonialTextWrapper>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn't anything embarrassing
              hidden in the middle of text.
            </TestimonialTextWrapper>
            <TestimonialDateWrapper>
              Saturday, March 26 2022
            </TestimonialDateWrapper>
            <TestimonialAuthorWrapper>
              <TestimonialAuthorImgWrapper>
                <img src={user2} alt="User" />
              </TestimonialAuthorImgWrapper>
              <TestimonialAuthorInfoWrapper>
                <span>john doe</span>
                <span>software engineer</span>
              </TestimonialAuthorInfoWrapper>
            </TestimonialAuthorWrapper>
          </div>
        </Carousel>
      </TestimonialContentWrapper>
    </TestimonialWrapper>
  );
};

export default Testimonial;
