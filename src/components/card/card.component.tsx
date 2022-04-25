import React, {FunctionComponent} from "react";
import {CardsWrapper, CardWrapper} from "./card.styles";
import {ButtonComponent} from "../Button/Button.component";

interface OwnProps {
	type: string;
	img: any;
	name: string;
	price: number;
	btnText?: any
}

type Props = OwnProps;

const Card: FunctionComponent<Props> = ({type, img, name, price, btnText='Add to cart'}) => {
	return (
		<CardsWrapper>
			<CardWrapper type={type}>
				<img src={img} alt={name}/>
				<h2>{name}</h2>
				<span>${price}</span>
				<span>Sale</span>
				<ButtonComponent title={btnText} type="primary"/>
			</CardWrapper>
		</CardsWrapper>
	);
};

export default Card;
