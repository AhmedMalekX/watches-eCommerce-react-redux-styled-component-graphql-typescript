import styled from "styled-components";

export const TestimonialWrapper = styled.section`
  margin-top: 10rem;
  display: grid;

  @media screen and (min-width: 320px) {
    grid-template-areas:
      "y y"
      "y y"
      "x x"
      "x x";
    grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
  }

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
    grid-template-areas:
      "x x y y"
      "x x y y"
      "x x y y";
  }
`;

export const TestimonialContentWrapper = styled.div`
  grid-area: x;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  div:first-child {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
	

  @media screen and (min-width: 320px) {
    padding: 3rem 1.5rem 0 1.5rem;
  }

  @media screen and (min-width: 768px) {
    padding: 6.5rem 5rem 5rem;
  }

  @media screen and (min-width: 1025px) {
    margin-top: 10rem;
  }
`;
export const TestimonialImgWrapper = styled.div`
  grid-area: y;

  div {
    box-shadow: 100px -100px 1px 1px #ffb568;
  }

  @media screen and (min-width: 320px) {
    width: auto;
    padding: 2rem;

    div {
      box-shadow: 0 0 25px -18px #ffb568;
    }
  }

  @media screen and (min-width: 768px) {
    width: 100%;
    padding: 6rem;

    div {
      box-shadow: 50px -50px 1px 1px #ffb568;
    }
  }
`;

export const QuoteWrapper = styled.span`
  width: 50px;
  height: 40px;
  text-align: center;
  padding: 8px;
  font-size: 25px;
  margin-top: 5px;
  margin-left: 5px;
  color: #ffb568;
  box-shadow: ${(props) => props.theme.quoteBoxShadow};

  @media screen and (min-width: 320px) {
    margin-left: -1rem;
  }
`;

export const TestimonialAuthorWrapper = styled.div`
  display: flex;
  margin-top: 45px;
  color: ${(props) => props.theme.primaryTxtColor};
`;

export const TestimonialDateWrapper = styled.span`
  margin-top: 30px;
  font-weight: 500;
  color: ${(props) => props.theme.primaryTxtColor};

  @media screen and (min-width: 320px) {
    font-size: 1.4rem;
  }

  @media screen and (min-width: 1025px) {
    font-size: 1.9rem;
  }
`;
export const TestimonialTextWrapper = styled.p`
  margin-top: 40px;
  font-size: 17px;
  font-weight: 400;
  padding: 0 55px 0 0;
  line-height: 1.4;
  color: ${(props) => props.theme.secondaryTxtColor};
  text-align: left;

  span {
    text-transform: capitalize;
  }

  @media screen and (min-width: 320px) {
    padding: 0;
  }


  @media screen and (min-width: 1025px) {
    font-size: 2.3rem;
  }
`;

export const TestimonialAuthorImgWrapper = styled.div`
  width: 75px;
  height: 75px;
  border-radius: 100%;
  overflow: hidden;

  img {
    width: 100%;
  }
`;

export const TestimonialAuthorInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 20px;
  margin-top: 10px;
  text-transform: capitalize;

  span:not(:last-of-type) {
    padding-bottom: 10px;
    font-weight: bold;
    color: ${(props) => props.theme.primaryTxtColor};
  }

  span:last-of-type {
    color: ${(props) => props.theme.secondaryTxtColor};
  }

  @media screen and (min-width: 320px) {
    span:not(:last-of-type) {
      font-size: 2rem;
    }

    span:last-of-type {
      font-size: 1.5rem;
    }
  }
`;
