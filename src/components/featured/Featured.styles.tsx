import styled from "styled-components";

export const FeaturedWrapper = styled.section`
  margin-top: 100px;
  margin-bottom: 100px;
`

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;


export const CardsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  place-items: center;
`