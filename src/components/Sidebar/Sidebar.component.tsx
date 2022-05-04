import React, {FunctionComponent, useState} from "react";
import {
	ContentWrapper,
	SidebarActionWrapper,
	SidebarHeaderWrapper,
	SidebarProductsWrapper,
	SidebarWrapper,
	SummaryWrapper,
} from "./Sidebar.styles";
import ProductPreview from "../ProductPreview/ProductPreview.component";
import img1 from "../../assets/img/product1.png";

interface OwnProps {
	showSidebar: boolean;
	setShowSidebar: React.Dispatch<React.SetStateAction<boolean>>;
}

type Props = OwnProps;

const Sidebar: FunctionComponent<Props> = ({showSidebar, setShowSidebar}) => {
	return (
		<SidebarWrapper active={showSidebar}>
			<ContentWrapper>
				<SidebarActionWrapper onClick={() => setShowSidebar(!showSidebar)}>
					<i className="bx bx-x"></i>
				</SidebarActionWrapper>
				<SidebarHeaderWrapper>My Cart</SidebarHeaderWrapper>
				<SidebarProductsWrapper>
					<ProductPreview
						imgSrc={img1}
						price={1050}
						name="Jazzmaster"
						count={1}
					/>
					<ProductPreview
						imgSrc={img1}
						price={1050}
						name="Jazzmaster"
						count={1}
					/>
					<ProductPreview
						imgSrc={img1}
						price={1050}
						name="Jazzmaster"
						count={1}
					/>
					<ProductPreview
						imgSrc={img1}
						price={1050}
						name="Jazzmaster"
						count={1}
					/>
					<ProductPreview
						imgSrc={img1}
						price={1050}
						name="Jazzmaster"
						count={1}
					/>
					<ProductPreview
						imgSrc={img1}
						price={1050}
						name="Jazzmaster"
						count={1}
					/>
					<ProductPreview
						imgSrc={img1}
						price={1050}
						name="Jazzmaster"
						count={1}
					/>
				</SidebarProductsWrapper>
				
				<SummaryWrapper>
					<span>3 items</span>
					<span>15555$</span>
				</SummaryWrapper>
			</ContentWrapper>
		</SidebarWrapper>
	);
};

export default Sidebar;
