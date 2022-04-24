import styled from "styled-components";

interface Props {
  type: any;
}

export const ButtonWrapper = styled.button<Props>`
  background-color: ${(props) =>
    props.type === "primary" ? `#2B2B2B` : `#BFBFBE`};
  padding: ${(props) => (props.type === "primary" ? `30px` : `20px`)};
  font-size: 17px;
  font-weight: 500;
  text-transform: uppercase;
  border: 0;
  outline: none;
  color: ${(props) => (props.type === "primary" ? `#ffffff` : `#4c4c4c`)};
  cursor: pointer;
  letter-spacing: 0.5px;
  box-shadow: ${(props) => (props.type === "primary" ? `0px 0px 15px 1.5px #333` : ``)};
`;
