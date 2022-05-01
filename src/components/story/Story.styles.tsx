import styled from "styled-components";

export const StoryWrapper = styled.section`
  margin-top: 50px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-areas:
    ". x x y y"
    ". x x y y";

  align-items: start;
  column-gap: 85px;
  margin-bottom: 100px;
`;

export const StoryContentWrapper = styled.div`
  grid-area: y;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 25px;

  h2 {
    font-size: 56px;
    font-weight: 600;
    margin: 25px 0 35px;
	  color: ${props => props.theme.primaryTxtColor}
  }

  p {
    font-size: 31px;
    color: #bfbfbe;
    line-height: 1.1;
    font-weight: 400;
    margin-bottom: 35px;
  }

  button {
    box-shadow: 0px 0px 5px 0.5px #333;
  }
`;

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  div {
    margin: 100px 0 35px;

    &:before {
      margin: 10px 50px 10px 0;
    }
  }
`;
