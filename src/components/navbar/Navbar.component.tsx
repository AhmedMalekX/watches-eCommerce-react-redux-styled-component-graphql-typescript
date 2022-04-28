import React, {useState} from "react";
import {
	NavbarWrapper,
	LogoWrapper,
	LinksWrapper,
	LinkWrapper,
	NavLeftItems,
	NavRightItems,
	IconWrapper,
} from "./Navbar.styles";


export const Navbar: React.FC = () => {
	// set navbar bg when scroll
	const [bgNav, setBgNav] = useState(false);
	
	const changeNavbarBg = () => {
		if (window.pageYOffset >= 74) {
			setBgNav(true);
		} else {
			setBgNav(false);
		}
	};
	
	window.addEventListener("scroll", changeNavbarBg);
	
	// // toggle theme
	// const toggleTheme = () => {
	// 	theme === "light" ? setTheme("dark") : setTheme("light");
	// };
	
	return (
		<NavbarWrapper active={bgNav}>
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
					{/*<div onClick={toggleTheme}>*/}
					{/*	{theme === "light" ? (*/}
					{/*		<i className="bx bx-moon"></i>*/}
					{/*	) : (*/}
					{/*		<i className="bx bx-sun"></i>*/}
					{/*	)}*/}
					{/*</div>*/}
					<i className="bx bx-moon"></i>
					<div>
						<i className="bx bx-shopping-bag"></i>
					</div>
				</IconWrapper>
			</NavLeftItems>
		</NavbarWrapper>
	);
};
