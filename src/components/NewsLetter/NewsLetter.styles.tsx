import styled from "styled-components";

export const NewsLetterWrapper = styled.section`
  margin-top: 10rem;
  background-color: #ffb568;
  margin-bottom: 10rem;
  display: grid;

  @media screen and (min-width: 320px) {
    padding: 0;
    grid-template-columns: auto;
  }

  @media screen and (min-width: 768px) {
    padding: 50px;
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const NewsLetterTextWrapper = styled.div`
  @media screen and (min-width: 320px) {
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  @media screen and (min-width: 768px) {
    padding: 7.5rem 0;
  }

  @media screen and (min-width: 768px) {
    align-items: flex-start;
    justify-content: flex-start;
  }
`;
export const NewsLetterHeader = styled.h2`
  font-size: 5.5rem;
  font-weight: 500;

  @media screen and (min-width: 320px) {
    font-size: 2.5rem;
    font-weight: 600;
  }

  @media screen and (min-width: 768px) {
    font-size: 3.5rem;
  }
`;
export const NewsLetterText = styled.p`
  font-size: 1.8rem;
  color: #484848;
  margin-top: 2.5rem;
  letter-spacing: 0.9px;

  @media screen and (min-width: 320px) {
    font-size: 1.4rem;
  }
`;
export const NewsLetterInputWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  button {
    box-shadow: 0px 0px 0px 0px;
  }

  @media screen and (min-width: 320px) {
    flex-direction: column;

    button {
      padding: 1.5rem;
      font-size: 1.5rem;
      margin-bottom: 1rem;
      width: 90%;
    }
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
    button {
      padding: 3.1rem;
      font-size: 1.5rem;
      margin-bottom: 0;
    }
  }
`;
export const NewsLetterInput = styled.input`
  outline: none;

  @media screen and (min-width: 320px) {
    padding: 1.5rem;
    font-size: 1.5rem;
    margin: 1rem;
    width: 90%;
  }

  @media screen and (min-width: 768px) {
    padding: 2.7rem;
    font-size: 1.5rem;
    margin: 0;
  }
`;
