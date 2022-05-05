import styled from "styled-components";

export const AppWrapper = styled.section`
  background-color: ${(props) => props.theme.bgColor};
  position: relative;
  overflow: hidden;
`;

export const ContainerWrapper = styled.div`
  @media screen and (min-width: 320px) {
    margin: 0;
  }

  @media screen and (min-width: 1024px) {
    margin: 0 70px;
  }
`;
