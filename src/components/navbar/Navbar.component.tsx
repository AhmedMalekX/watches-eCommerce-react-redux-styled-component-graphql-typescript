import React from "react";
import {
	NavbarWrapper,
	LogoWrapper,
	LinksWrapper,
	LinkWrapper,
	NavLeftItems,
	NavRightItems,
	IconWrapper
} from "./Navbar.styles";

export const Navbar: React.FC = () => {
 
	return (
		<NavbarWrapper>
			<NavRightItems>
				<LogoWrapper>
					<i className="bx bxs-watch"></i>
					ROLEX
				</LogoWrapper>
			</NavRightItems>
			
			<NavLeftItems>
				<LinksWrapper>
					<LinkWrapper active={true}>home</LinkWrapper>
					<LinkWrapper active={false}>features</LinkWrapper>
					<LinkWrapper active={false}>product</LinkWrapper>
					<LinkWrapper active={false}>new</LinkWrapper>
				</LinksWrapper>
				
				<IconWrapper>
					<i className="bx bx-moon"></i>
					<i className="bx bx-shopping-bag"></i>
				</IconWrapper>
			</NavLeftItems>
		</NavbarWrapper>
	);
};
