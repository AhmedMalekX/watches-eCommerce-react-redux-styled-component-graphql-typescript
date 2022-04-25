import React, {FunctionComponent} from "react";
import {CardsWrapper, CardWrapper} from "./card.styles";
import {ButtonComponent} from "../Button/Button.component";

interface OwnProps {
	type: string;
	img: any;
	name: string;
	price: number;
}

type Props = OwnProps;

const Card: FunctionComponent<Props> = ({type, img, name, price}) => {
	return (
		<CardsWrapper>
			<CardWrapper>
				<img src={img} alt={name}/>
				<h2>{name}</h2>
				<span>${price}</span>
				<span>Sale</span>
				<ButtonComponent title="add to cart" type="primary"/>
			</CardWrapper>
		</CardsWrapper>
	);
};

export default Card;
