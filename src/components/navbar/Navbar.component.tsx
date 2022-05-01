import React, {useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import {toggle} from "../../rtk/darkmode";

// Styles
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
	// RTX
	const dispatch = useDispatch();
	const darkmodeStatus = useSelector((state: {darkmode: boolean}) => state.darkmode)
	
	
	console.log('darkmodeStatus 1', darkmodeStatus)
	
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
				
				<IconWrapper active={bgNav}>
					<div onClick={() => dispatch(toggle({status: !darkmodeStatus}))}>
						{darkmodeStatus ? <i className="bx bx-sun"></i> : <i className="bx bx-moon"></i>}
					</div>
					<div>
						<i className="bx bx-shopping-bag"></i>
					</div>
				</IconWrapper>
			</NavLeftItems>
		</NavbarWrapper>
	);
};
