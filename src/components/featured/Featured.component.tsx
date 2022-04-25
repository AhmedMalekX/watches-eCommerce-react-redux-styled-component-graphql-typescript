import React, { FunctionComponent } from "react";
import HeaderSection from "../header-section/HeaderSection.component";
import { CardsWrapper, HeaderWrapper, FeaturedWrapper } from "./Featured.styles";
import Card from "../card/card.component";
import watch1 from "../../assets/img/featured1.png";
import watch2 from "../../assets/img/featured2.png";
import watch3 from "../../assets/img/featured3.png";

interface OwnProps {}

type Props = OwnProps;

const Featured: FunctionComponent<Props> = (props) => {
  return (
    <FeaturedWrapper>
      <HeaderWrapper>
        <HeaderSection title="Featured" />
      </HeaderWrapper>

      <CardsWrapper>
        <Card type="featured" img={watch1} name="jazzmaster" price={1050} />
        <Card type="featured" img={watch2} name="ingersoll" price={250} />
        <Card type="featured" img={watch3} name="rosegold" price={890} />
      </CardsWrapper>
    </FeaturedWrapper>
  );
};

export default Featured;
