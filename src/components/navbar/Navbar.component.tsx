import React from "react";
import {
	NavbarWrapper,
	LogoWrapper,
	LinksWrapper,
	LinkWrapper,
	NavLeftItems,
} from "./Navbar.styles";

export const Navbar = () => {
	return (
		<NavbarWrapper>
			<LogoWrapper>
				<i className="bx bxs-watch"></i>
				ROLEX
			</LogoWrapper>
			
			<LinksWrapper>
				<LinkWrapper>home</LinkWrapper>
				<LinkWrapper>features</LinkWrapper>
				<LinkWrapper>product</LinkWrapper>
				<LinkWrapper>new</LinkWrapper>
			</LinksWrapper>
			
			<NavLeftItems>
				<i className="bx bx-moon"></i>
				<i className="bx bx-shopping-bag"></i>
			</NavLeftItems>
		</NavbarWrapper>
	);
};
