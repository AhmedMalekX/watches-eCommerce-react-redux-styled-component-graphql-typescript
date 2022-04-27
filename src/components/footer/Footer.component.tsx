import React, {FunctionComponent} from "react";
import {CopyrightWrapper, FooterWrapper, InfoWrapper} from "./Footer.styles";

interface OwnProps {
}

type Props = OwnProps;

const Footer: FunctionComponent<Props> = (props) => {
	return (
		<FooterWrapper>
			<InfoWrapper>
				<div>
					<h3>Our information</h3>
					<ul>
						<li>1234 - Egypt</li>
						<li>La Libertad 43210</li>
						<li>123-456-789</li>
					</ul>
				</div>
				<div>
					<h3>About Us</h3>
					<ul>
						<li>
							<a href="#">Support Center</a>
						</li>
						<li>
							<a href="#">Customer Services</a>
						</li>
						<li>
							<a href="#">About Us</a>
						</li>
						<li>
							<a href="#">Copy Right</a>
						</li>
					</ul>
				</div>
				<div>
					<h3>Product</h3>
					<ul>
						<li>Road bikes</li>
						<li>Mountain bikes</li>
						<li>Electric</li>
						<li>Accessories</li>
					</ul>
				</div>
				<div>
					<h3>Social</h3>
					<ul>
						<li>
							<i className="bx bxl-facebook"></i>
						</li>
						<li>
							<i className="bx bxl-twitter"></i>
						</li>
						<li>
							<i className="bx bxl-instagram"></i>
						</li>
					</ul>
				</div>
			</InfoWrapper>
			<CopyrightWrapper>@ Xcoder, All right reserved</CopyrightWrapper>
		</FooterWrapper>
	);
};

export default Footer;
