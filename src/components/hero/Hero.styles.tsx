import styled from "styled-components";

export const HeroWrapper = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;
export const HeroTextContainer = styled.div`
  padding: 200px;

  h1 {
    font-size: 60px;
    text-transform: uppercase;
    line-height: 1.3;
    color: #2b2b2b;
  }

  p {
    color: rgb(113 113 113);
    font-size: 20px;
    padding: 15px 0;
    font-weight: 500;
  }

  span {
    font-size: 30px;
    color: #ffb568;
    font-weight: 500;
  }
`;
export const ButtonsContainer = styled.div`
  margin-top: 40px;
`;
export const HeroImgContainer = styled.div`
  padding: 0;
  position: relative;

  img {
    position: absolute;
	  height: 100%;
    background-color: #ffb568;
	  z-index: -1;
	  right: 0;
  }
`;
