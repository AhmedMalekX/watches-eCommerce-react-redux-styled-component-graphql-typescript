import styled from "styled-components";

export const ImageWrapper = styled.div`
  grid-area: x;

  img {
    width: 100%;
    height: 100%;
  }

  @media screen and (min-width: 320px) {
    box-shadow: 0 0 25px -18px #ffb568;
    padding-right: 0.5rem;
  }

  @media screen and (min-width: 768px) {
    box-shadow: -50px 50px 1px 1px #ffb568;
    width: auto;
    height: auto;
  }

  @media screen and (min-width: 1024px) {
    width: 100%;
    height: auto;
    box-shadow: -100px 100px 1px 1px #ffb568;
	  margin-top: 8rem;
  }
`;
