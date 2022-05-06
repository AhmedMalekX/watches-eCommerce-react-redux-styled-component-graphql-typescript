import styled from "styled-components";

export const FeaturedWrapper = styled.section`
  margin-top: 100px;
  margin-bottom: 100px;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CardsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  place-items: center;

  @media screen and (min-width: 320px) {
    grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
    grid-gap: 4rem;
  }
  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(35rem, 1fr));
  }
`;
