import React, {FunctionComponent} from "react";
import {
	HeaderWrapper,
	StoryContentWrapper,
	StoryWrapper,
} from "./Story.styles";
import watch from "../../assets/img/story.png";
import HeaderSection from "../header-section/HeaderSection.component";
import {ButtonComponent} from "../Button/Button.component";
import ImageHeadSection from "../ImageHeadSection/ImageHeadSection.component";

const Story: FunctionComponent = () => {
	return (
		<StoryWrapper>
			<ImageHeadSection imgUrl={watch} imgAlt='Watch' />
			<StoryContentWrapper>
				<HeaderWrapper>
					<HeaderSection title="Our Story"/>
				</HeaderWrapper>
				<h2>Inspirational Watch of this year</h2>
				<p>The latest and modern watch of the year. Is available in various design in this store discover them now.</p>
				<ButtonComponent type='primary' title='Discover' />
			</StoryContentWrapper>
		</StoryWrapper>
	);
};

export default Story;
