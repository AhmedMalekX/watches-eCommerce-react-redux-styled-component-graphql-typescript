import React, {useEffect, useState} from "react";
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

interface Props {
	showSidebar: boolean;
	setShowSidebar: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Navbar: React.FC<Props> = ({showSidebar, setShowSidebar}) => {
	// RTX
	const dispatch = useDispatch();
	const darkmodeStatus = useSelector(
		(state: { darkmode: boolean }) => state.darkmode
	);
	
	console.log("darkmodeStatus 1", darkmodeStatus);
	
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
	
	// Collapse navbar items
	const [collapse, setCollapse] = useState(true);
	
	const togglecollapse = () => {
		setCollapse(!collapse);
	};
	
	
	useEffect(() => {
		window.addEventListener("resize", () => {
			if (window.innerWidth <= 768) {
				setCollapse(true);
			} else {
				setCollapse(false);
			}
		});
	}, []);
	

	
	
	return (
		<NavbarWrapper active={bgNav}>
			<NavRightItems>
				<LogoWrapper>
					<i className="bx bxs-watch"></i>
					ROLEX
				</LogoWrapper>
			</NavRightItems>
			
			<NavLeftItems>
				{window.innerWidth <= 768 ? (
					<i className="bx bx-menu" onClick={() => togglecollapse()}></i>
				) : (
					""
				)}
					<LinksWrapper isMobile={collapse}>
						<LinkWrapper active={true} isMobile={collapse}>
							home
						</LinkWrapper>
						<LinkWrapper active={false} isMobile={collapse}>
							features
						</LinkWrapper>
						<LinkWrapper active={false} isMobile={collapse}>
							product
						</LinkWrapper>
						<LinkWrapper active={false} isMobile={collapse}>
							new
						</LinkWrapper>
					</LinksWrapper>
				
				<IconWrapper active={bgNav}>
					<div onClick={() => dispatch(toggle({status: !darkmodeStatus}))}>
						{darkmodeStatus ? (
							<i className="bx bx-sun"></i>
						) : (
							<i className="bx bx-moon"></i>
						)}
					</div>
					<div onClick={() => setShowSidebar(!showSidebar)}>
						<i className="bx bx-shopping-bag"></i>
					</div>
				</IconWrapper>
			</NavLeftItems>
		</NavbarWrapper>
	);
};
