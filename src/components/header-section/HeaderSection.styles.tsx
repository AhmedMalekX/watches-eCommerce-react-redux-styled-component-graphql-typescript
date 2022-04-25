import styled from "styled-components";

export const HeaderWrapper = styled.div`
  margin: 100px 0;
  font-size: 25px;
  font-weight: 500;
  color: #2b2b2b;
  letter-spacing: 1.1px;
	position: relative;
	
	&:before {
    content: '';
    border: 1px solid #FAE1C6;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
	}
`;
