import styled from "styled-components";
import React from "react";

interface Props {
	theme: string;
}

export const HeroWrapper = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

export const HeroTextContainer = styled.div<Props>`
  padding: 200px;

  h1 {
    font-size: 60px;
    text-transform: uppercase;
    line-height: 1.3;
    color: ${props => props.theme.primaryTxtColor};
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
	  right: 0;
  }
`;
