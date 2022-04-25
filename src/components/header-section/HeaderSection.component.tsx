import React, {FunctionComponent} from "react";
import {HeaderWrapper} from "./HeaderSection.styles";

interface OwnProps {
	title: string
}

type Props = OwnProps;

const HeaderSection: FunctionComponent<Props> = ({title}) => {
  return <HeaderWrapper>{title}</HeaderWrapper>;
};

export default HeaderSection;
