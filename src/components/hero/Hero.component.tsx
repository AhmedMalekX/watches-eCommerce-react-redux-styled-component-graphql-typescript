import React from "react";
import {
	ButtonsContainer,
	HeroImgContainer,
	HeroTextContainer, HeroWrapper,
} from "./Hero.styles";
import {ButtonComponent} from "../Button/Button.component";
import HomeImage from '../../assets/img/home.png'


export const Hero: React.FC = () => {
	return (
		<HeroWrapper>
			<HeroTextContainer>
				<h1>New watch <br/>collections b720</h1>
				<p>
					Latest arrival of the new important watches of B720 with modern and
					resistant design.
				</p>
				<span>$1245</span>
				<ButtonsContainer>
					<ButtonComponent title="Discover" type="secondary"/>
					<ButtonComponent title="Add to cart" type="primary"/>
				</ButtonsContainer>
			</HeroTextContainer>
			<HeroImgContainer>
				<img src={HomeImage} alt="Hero"/>
			</HeroImgContainer>
		</HeroWrapper>
	);
};
