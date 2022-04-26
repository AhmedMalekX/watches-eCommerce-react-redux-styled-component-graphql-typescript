import styled from "styled-components";

export const TestimonialWrapper = styled.section`
  margin-top: 150px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-areas:
    "x x y y"
    "x x y y"
    "x x y y";
`;

export const TestimonialContentWrapper = styled.div`
  grid-area: x;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 65px 50px 50px;
	
	div:first-child {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
	}
`;
export const TestimonialImgWrapper = styled.div`
  grid-area: y;
  width: 100%;
  padding: 60px;

  div {
    box-shadow: 100px -100px 1px 1px #ffb568;
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
  box-shadow: 1px 1px 11px -3px #bfbfbe;
`;

export const TestimonialAuthorWrapper = styled.div`
  display: flex;
  margin-top: 45px;
`;

export const TestimonialDateWrapper = styled.span`
  margin-top: 30px;
  font-weight: 500;
`;
export const TestimonialTextWrapper = styled.p`
  margin-top: 40px;
  font-size: 17px;
  font-weight: 400;
  padding: 0 55px 0 0;
  line-height: 1.4;
  color: #3a3a3a;
	text-align: left;

  span {
    text-transform: capitalize;
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
`

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
  }
`