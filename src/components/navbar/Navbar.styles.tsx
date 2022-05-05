import styled from "styled-components";

interface Props {
	active?: boolean;
	isMobile?: boolean;
}

export const NavbarWrapper = styled.nav<Props>`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: 2rem;
  padding: 2.5rem 7rem;
  z-index: 100;
  position: fixed;
  width: 100%;
  height: 74px;

  background: ${(props) => props.active && props.theme.bgColor};
  box-shadow: ${(props) =>
          props.active && `0px 0px 0.1rem 0.1rem ${props.theme.boxShadowColor}`};

  @media screen and (min-width: 320px) {
    padding: 1.5rem 1rem;
  }

  @media screen and (min-width: 1024px) {
    padding: 1.5rem 8rem;
  }
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.primaryTxtColor};
`;

export const LinksWrapper = styled.ul<Props>`
  display: flex;
  list-style: none;
  margin-left: 3.5rem;
  text-transform: uppercase;
  cursor: pointer;


  @media screen and (max-width: 768px) {
      display: ${(props) => (props.isMobile ? "none" : "flex")};
    flex-direction: column;
    position: absolute;
    top: 74px;
    left: -32px;
    width: 100%;
    background-color: ${(props) =>
            props.isMobile ? `red` : `${props.theme.bgColor}`};
  }
`;

export const LinkWrapper = styled.li<Props>`
  padding: 0 3rem;
  color: ${(props) =>
          props.active ? props.theme.thirdTxtColor : props.theme.primaryTxtColor};
  cursor: pointer;
  font-weight: 500;

  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10 and IE 11 */
  user-select: none; /* Standard syntax */

  @media screen and (max-width: 768px) {
    padding: ${(props) => (props.isMobile ? "0 3rem" : "1rem 7rem")};
  }
`;

export const NavRightItems = styled.div``;

export const NavLeftItems = styled.div<Props>`
  display: flex;
  justify-content: space-between;
  flex: 1;

  @media screen and (max-width: 768px) {
    justify-content: end;
  }

  i {
    padding: 0 1rem;
    color: ${(props) => props.theme.primaryTxtColor};
  }
`;

export const IconWrapper = styled.div<Props>`
  display: flex;
  cursor: pointer;
  color: ${(props) =>
          props.active ? props.theme.primaryTxtColor : props.theme.bgColor};
`;

