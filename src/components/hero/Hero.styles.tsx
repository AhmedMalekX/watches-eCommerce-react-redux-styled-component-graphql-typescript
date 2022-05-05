import styled from "styled-components";
import React from "react";

interface Props {
	theme: string;
}

export const HeroWrapper = styled.div`
  height: 100vh;
  display: grid;
  grid-template-areas: "x x y y";

  @media screen and (min-width: 320px) {
    grid-template-areas:
      "y y"
      "x x";
    grid-template-rows: 50%;
  }
	
	@media screen and (max-width: 768px) {
    grid-template-rows: 65%;
	}

  @media screen and (min-width: 768px) {
    grid-template-areas: "x x y y";
    grid-template-rows: auto;
    grid-template-columns: repeat(4,1fr);
  }
`;

export const HeroTextContainer = styled.div<Props>`
  grid-area: x;

  h1 {
    text-transform: uppercase;
    line-height: 1.3;
    color: ${(props) => props.theme.primaryTxtColor};
  }

  p {
    color: rgb(113 113 113);
    padding: 1.5rem 0;
    font-weight: 500;
  }

  span {
    font-size: 3rem;
    color: #ffb568;
    font-weight: 500;
  }

  @media screen and (min-width: 320px) {
    padding: 0rem 1rem 1rem 1rem;

    h1 {
      font-size: 3.5rem;
      margin-top: 2.5rem;
    }

    p {
      font-size: 1.9rem;
    }

    span {
      font-size: 2rem;
    }
  }

  @media screen and (min-width: 768px) {
    padding: 28rem 1rem 1rem 2rem;
	  
	  h1 {
      font-size: 6rem;
	  }
	  
	  p {
      font-size: 2rem;
	  }
  }
`;
export const ButtonsContainer = styled.div`
  margin-top: 4rem;

  @media screen and (min-width: 320px) {
    margin-top: 0;

  }
`;
export const HeroImgContainer = styled.div`
  padding: 0;
  position: relative;
  grid-area: y;

  img {
    position: absolute;
    height: 100%;
    background-color: #ffb568;
    right: 0;
  }
	
	@media screen and (min-width: 320px) {
		img {
      width: 100%;
      object-fit: contain;
		}
	}
	
	@media screen and (min-width: 768px) {
    width: 100%;
    object-fit: contain;
		
		img {
      width: 100%;
      object-fit: contain;
		}
	}
`;
