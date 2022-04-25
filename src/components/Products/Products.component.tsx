import React, {FunctionComponent} from "react";
import HeaderSection from "../header-section/HeaderSection.component";
import watch1 from "../../assets/img/product1.png";
import watch2 from "../../assets/img/product2.png";
import watch3 from "../../assets/img/product3.png";
import watch4 from "../../assets/img/product4.png";
import watch5 from "../../assets/img/product5.png";

import {
	HeaderWrapper,
	ProductsWrapper,
	ProductsSection,
} from "./Products.styles";
import Card from "../card/card.component";

interface OwnProps {
}

type Props = OwnProps;

const Products: FunctionComponent<Props> = (props) => {
	return (
		<ProductsSection>
			<HeaderWrapper>
				<HeaderSection title="Products"/>
			</HeaderWrapper>
			
			<ProductsWrapper>
				
				<Card img={watch1} name="spirit rose" price={1500} type="Product"
				      btnText={<i className='bx bxs-shopping-bag'></i>}/>
				<Card img={watch2} name="khaki pilot" price={1350} type="Product"
				      btnText={<i className='bx bxs-shopping-bag'></i>}/>
				<Card img={watch3} name="jubilee black" price={870} type="Product"
				      btnText={<i className='bx bxs-shopping-bag'></i>}/>
				<Card img={watch4} name="fosil me3" price={650} type="Product"
				      btnText={<i className='bx bxs-shopping-bag'></i>}/>
				<Card img={watch4} name="duchen" price={950} type="Product" btnText={<i className='bx bxs-shopping-bag'></i>}/>
			</ProductsWrapper>
		</ProductsSection>
	);
};

export default Products;
