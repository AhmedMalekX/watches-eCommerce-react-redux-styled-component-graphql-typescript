import React from "react";
import {ButtonWrapper} from "./Button.styles";

interface ComponentProps {
	title: string;
	type: string;
}

export const ButtonComponent: React.FC<ComponentProps> = ({title, type, }) => {
	return <ButtonWrapper type={type}>{title}</ButtonWrapper>;
};
