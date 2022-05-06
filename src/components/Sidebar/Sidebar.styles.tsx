import styled from 'styled-components';

interface Props {
	active: boolean;
}

export const SidebarWrapper = styled.div<Props>`
  background-color: ${props => props.theme.bgColor};
  position: fixed;
  z-index: 100;
  height: 100vh;
  right: 0;
  top: 0;
  animation: all 0.3s ease-in;
  transform: ${props => props.active ? 'translateX(0%)' : 'translateX(100%)'};
	
	@media screen and (min-width: 320px) {
    width: 100%;
	}

  @media screen and (min-width: 768px) {
    width: 50%;
  }

  @media screen and (min-width: 1024px) {
    width: 25%;
  }
`


export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

`

export const SidebarActionWrapper = styled.div`
  align-self: flex-end;
  padding: 1.6rem 2.5rem 0px;

  i {
    font-weight: bold;
    font-size: 40px;
    color: ${props => props.theme.primaryTxtColor}
  }
`
export const SidebarHeaderWrapper = styled.h3`
  font-size: 30px;
  color: ${props => props.theme.primaryTxtColor};
  font-weight: bold;
  margin-bottom: 45px;
`

export const SidebarProductsWrapper = styled.div`
  width: 100%;
  height: 75vh;
  overflow: auto;

  /* Hide scrollbar for Chrome, Safari and Opera */
  ::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
`

export const SummaryWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 2.5rem;
	color: ${props => props.theme.primaryTxtColor};
  font-size: 18px;
  font-weight: bold;
`
