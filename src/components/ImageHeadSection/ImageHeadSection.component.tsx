import React, { FunctionComponent } from 'react';
import {ImageWrapper} from "./ImageHeadSection.styles";

interface OwnProps {
	imgUrl: any;
	imgAlt: string;
}

type Props = OwnProps;

const ImageHeadSection: FunctionComponent<Props> = ({imgUrl,imgAlt}) => {
  
  return (
	  <ImageWrapper>
		  <img src={imgUrl} alt={imgAlt}/>
	  </ImageWrapper>
		
  );
};

export default ImageHeadSection;
