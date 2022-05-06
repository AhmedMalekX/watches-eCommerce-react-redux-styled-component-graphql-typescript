import styled from "styled-components";

export const StoryWrapper = styled.section`
  margin-top: 50px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-areas:
    ". x x y y"
    ". x x y y";

  align-items: start;
  column-gap: 8.5rem;

  @media screen and (min-width: 320px) {
    grid-template-areas:
      "x x"
      "y y";
    grid-template-columns: auto;
    padding: 0 1rem 0 1rem;
  }

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(5, 1fr);
    grid-template-areas:
      ". x x y y"
      ". x x y y";
    margin-bottom: 10rem;
  }
`;

export const StoryContentWrapper = styled.div`
  grid-area: y;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  h2 {
    font-weight: 600;
    color: ${(props) => props.theme.primaryTxtColor};
  }

  p {
    color: #bfbfbe;
    line-height: 1.1;
    font-weight: 400;
    margin-bottom: 35px;
  }

  button {
    box-shadow: 0px 0px 5px 0.5px #333;
  }

  @media screen and (min-width: 320px) {
    padding: 0;

    h2 {
      font-size: 3.7rem;
      margin: 0 0 3.5rem;
    }

    p {
      font-size: 2.5rem;
    }
  }

  @media screen and (min-width: 1024px) {
    padding: 0 2.5rem;

    h2 {
      font-size: 5.6rem;
      margin: 2.5rem 0 3.5rem;
    }

    p {
      font-size: 3.1rem;
    }
  }
`;

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  div {
    &:before {
      margin: 10px 50px 10px 0;
    }
  }

  @media screen and (min-width: 768px) {
    div {
      margin: 0 0 3.5rem;
    }
  }

  @media screen and (min-width: 1024px) {
    margin: 100px 0 35px;
  }
`;
