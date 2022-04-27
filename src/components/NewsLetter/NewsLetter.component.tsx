import React, {FunctionComponent} from 'react';
import {
	NewsLetterHeader, NewsLetterInput,
	NewsLetterInputWrapper,
	NewsLetterText,
	NewsLetterTextWrapper,
	NewsLetterWrapper
} from "./NewsLetter.styles";
import {ButtonComponent} from "../Button/Button.component";

interface OwnProps {
}

type Props = OwnProps;

const NewsLetter: FunctionComponent<Props> = (props) => {
	
	return (<NewsLetterWrapper>
		<NewsLetterTextWrapper>
			<NewsLetterHeader>Subscribe Our NewsLetter</NewsLetterHeader>
			<NewsLetterText>Don't miss out our discounts. Subscribe to our email newsletter to get best
				offers, discounts, coupons, gifts and much more.</NewsLetterText>
		</NewsLetterTextWrapper>
		<NewsLetterInputWrapper>
			<NewsLetterInput type='email' placeholder='Enter Your Email'/>
			<ButtonComponent type='primary' title='Subscribe'/>
		</NewsLetterInputWrapper>
	</NewsLetterWrapper>);
};

export default NewsLetter;
