import styled from "styled-components";

interface Props {
  type?: string;
}

export const CardsWrapper = styled.div`
  margin-bottom: 100px;
`;
export const CardWrapper = styled.div<Props>`
  width: 400px;
  box-shadow: 0px 0px 30px 2px #e9e9e9;
  position: relative;
  padding: 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  transition: transform 0.5s linear;

  img {
    width: 100%;
  }

  h2 {
    text-transform: uppercase;
    margin: 20px;
    letter-spacing: 1.5px;
    color: #2b2b2b;
    font-weight: 500;
    font-size: 25px;
  }

  span {
    font-size: 22px;
    color: #ffb568;
    letter-spacing: 1.1px;
  }

  span:last-of-type {
    position: absolute;
    top: 54px;
    left: -17px;
    transform: rotate(-90deg);
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

  &:hover {
    box-shadow: 0px 0px 77px 15px #e9e9e9;
    transform: ${(props) =>
      props.type === "Product" ? "scale(1.01)" : "scale(1.03)"};

    button {
      transform: ${(props) =>
        props.type === "Product" ? "" : "translateY(0)"};
      visibility: ${(props) => (props.type === "Product" ? "" : "visible")};
      opacity: ${(props) => (props.type === "Product" ? "" : 1)};
    }
  }
`;
