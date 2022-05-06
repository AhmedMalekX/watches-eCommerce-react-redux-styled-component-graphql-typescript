import styled from "styled-components";

export const ProductsSection = styled.section`
  display: grid;


`;
export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const ProductsWrapper = styled.div`
  display: grid;
  justify-items: center;
	
	@media screen and (min-width: 320px) {
    grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
	}

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(35rem, 1fr));
  }
`;
