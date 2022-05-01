import styled from "styled-components";

interface Props {
	active?: boolean;
}

export const NavbarWrapper = styled.nav<Props>`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  font-size: 20px;
  padding: 25px 70px;
  z-index: 100;
  position: fixed;
  width: 100%;

  background: ${props => props.active && props.theme.bgColor};
  box-shadow: ${props => props.active && props.theme.boxShadowColor};
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
	color: ${props => props.theme.primaryTxtColor}
`;

export const LinksWrapper = styled.ul`
  display: flex;
  list-style: none;
  margin-left: 35px;
  text-transform: uppercase;
`;

export const LinkWrapper = styled.li<Props>`
  padding: 0 30px;
  color: ${(props) => (props.active ? props.theme.thirdTxtColor : props.theme.primaryTxtColor)};
  cursor: pointer;
  font-weight: 500;
`;

export const NavRightItems = styled.div``;

export const NavLeftItems = styled.div<Props>`
  display: flex;
  justify-content: space-between;
  flex: 1;


  i {
    padding: 0 10px;
  }
`;

export const IconWrapper = styled.div<Props>`
  display: flex;
  cursor: pointer;
  color: ${(props) => props.active ? props.theme.primaryTxtColor : props.theme.bgColor}

`;
