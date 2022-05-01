import styled from "styled-components";

export const HeaderWrapper = styled.div`
  margin: 100px 0;
  font-size: 25px;
  font-weight: 500;
  color: ${props => props.theme.primaryTxtColor};
  letter-spacing: 1.1px;
	position: relative;
	
	&:before {
    content: '';
    border: 1px solid ${props => props.theme.thirdTxtColor};
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
	}
`;
