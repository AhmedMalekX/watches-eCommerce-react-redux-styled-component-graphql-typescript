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

  background: ${props => props.active && '#ffffff'};
  box-shadow: ${props => props.active && '1px 0px 4px 1px #c8c8c8'};
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const LinksWrapper = styled.ul`
  display: flex;
  list-style: none;
  margin-left: 35px;
  text-transform: uppercase;
`;

export const LinkWrapper = styled.li<Props>`
  padding: 0 30px;
  color: ${(props) => (props.active ? "#FFB568" : "#2b2b2")};
  cursor: pointer;
  font-weight: 500;
`;

export const NavRightItems = styled.div``;

export const NavLeftItems = styled.div`
  display: flex;
  justify-content: space-between;
  flex: 1;

  i {
    padding: 0 10px;
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  cursor: pointer;
`;
