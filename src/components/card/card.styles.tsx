import styled from "styled-components";

interface Props {
  type?: string;
}

export const CardsWrapper = styled.div`
  margin-bottom: 100px;
`;
export const CardWrapper = styled.div<Props>`
  width: 400px;
  box-shadow: 0px 0px 30px 2px ${props => props.theme.boxShadowColor};
  position: relative;
  padding: 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  transition: all 0.5s linear;

  img {
    width: 100%;
  }

  h2 {
    text-transform: uppercase;
    margin: 20px;
    letter-spacing: 1.5px;
    color: ${props => props.theme.primaryTxtColor};
    font-weight: 500;
    font-size: 25px;
  }

  span {
    font-size: 22px;
    color: #ffb568;
    letter-spacing: 1.1px;
  }
  
  span:first-of-type {
    padding: 12px;
  }
  
  span:last-of-type {
    position: absolute;
    top: ${props => props.type === 'new' ? '30px' : '54px'};
    left: ${props => props.type === 'featured' ? '-17px' : ''};
    right: ${props => props.type === 'new' ? '17px' : ''};
    transform: ${props => props.type === 'featured' ? 'rotate(-90deg)' : ''};
    background-color: #ffb568;
    color: #ffffff;
    padding: 8px 12px;
    font-size: 16px;
    text-transform: uppercase;
    font-weight: 500;
    display: ${(props) => props.type === "Product" && "none"};
  }

  button {
    box-shadow: 0px 0px 2px 0.5px #333;
    padding: ${props => props.type === 'Product' ? '10px 12px' : '30px 40px'};
    transition: transform 0.5s linear;
    transform: ${(props) =>
      props.type === "Product" ? "" : "translateY(2rem)"};
    visibility: ${(props) => (props.type === "Product" ? "" : "hidden")};
    opacity: ${(props) => (props.type === "Product" ? 1 : 0)};

    //  Product button custom style
	  position: ${props => props.type === 'Product' && 'absolute'};
	  bottom: ${props => props.type === 'Product' && 0};
	  right: ${props => props.type === 'Product' && 0};
	  
  }
  //
  &:hover {
    box-shadow: ${props => props.theme.cardShadow};
    background-color: ${props => props.type === 'new' && '#FFB568'};
    transform: ${(props) =>
      props.type === "Product" ? "scale(1.01)" : "scale(1.03)"};
    
    span:not(:last-of-type) {
      color: ${props => props.type === 'new' && '#2B2B2B'};
    }
    
    span:last-of-type {
      background-color: ${props => props.type === 'new' && '#2B2B2B'};
    }

    button {
      transform: ${(props) =>
        props.type === "Product" ? "" : "translateY(0)"};
      visibility: ${(props) => (props.type === "Product" ? "" : "visible")};
      opacity: ${(props) => (props.type === "Product" ? "" : 1)};
    }
  }
`;
