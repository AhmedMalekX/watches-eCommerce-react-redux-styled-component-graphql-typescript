import React, {FunctionComponent} from "react";
import {
	ProductPreviewCountWrapper, ProductPreviewDeleteWrapper,
	ProductPreviewImageWrapper,
	ProductPreviewInfoWrapper,
	ProductPreviewWrapper,ProductWrapper
} from "./ProductPreview.styles";

interface OwnProps {
	imgSrc: string;
	name: string;
	price: number;
	count: number;
}

type Props = OwnProps;

const ProductPreview: FunctionComponent<Props> = ({imgSrc, name, price, count}) => {
	return <ProductPreviewWrapper>
		<ProductPreviewImageWrapper>
			<img src={imgSrc} alt={name}/>
		</ProductPreviewImageWrapper>
		
		<ProductWrapper>
		
		<ProductPreviewInfoWrapper>
			<h4>{name}</h4>
			<span>${price}</span>
		</ProductPreviewInfoWrapper>
		<ProductPreviewCountWrapper>
			<i className='bx bx-minus'></i>
			<span>{count}</span>
			<i className='bx bx-plus'></i>
		</ProductPreviewCountWrapper>
		</ProductWrapper>
		
		
		<ProductPreviewDeleteWrapper>
      <i className='bx bx-trash-alt'></i>
		</ProductPreviewDeleteWrapper>
	</ProductPreviewWrapper>;
};

export default ProductPreview;
