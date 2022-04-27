import styled from "styled-components";

export const NewsLetterWrapper = styled.section`
  margin-top: 150px;
  background-color: #ffb568;
  padding: 50px;
  margin-bottom: 100px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

export const NewsLetterTextWrapper = styled.div`
  padding: 75px;
`;
export const NewsLetterHeader = styled.h2`
  font-size: 55px;
  font-weight: 500;
`;
export const NewsLetterText = styled.p`
  font-size: 18px;
  color: #484848;
  margin-top: 25px;
  letter-spacing: 0.9px;
`;
export const NewsLetterInputWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
	
	button {
		box-shadow: 0px 0px 0px 0px;
	}
`;
export const NewsLetterInput = styled.input`
  padding: 27px;
  font-size: 20px;
	outline: none;
`;
