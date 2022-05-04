import styled from "styled-components";

export const ProductPreviewWrapper = styled.div`
  width: 100%;
  height: 120px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-bottom: 25px;
`;
export const ProductPreviewImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 0px 15px -3px ${(props) => props.theme.boxShadowColor};

  img {
    width: 120px;
    height: 120px;
    object-fit: contain;
  }
`;
export const ProductWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;

`;
export const ProductPreviewInfoWrapper = styled.div`
  h4 {
    font-size: 19px;
    margin-bottom: 15px;
    color: ${(props) => props.theme.primaryTxtColor};
  }

  span {
    font-size: 16px;
    color: ${(props) => props.theme.thirdTxtColor};
  }
`;
export const ProductPreviewCountWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${(props) => props.theme.primaryTxtColor};
	
	span {
    -webkit-user-select: none; /* Safari */
    -ms-user-select: none; /* IE 10 and IE 11 */
    user-select: none; /* Standard syntax */
	}

  i {
    cursor: pointer;
    padding: 5px;
    box-shadow: 0px 0px 15px 0px ${(props) => props.theme.boxShadowColor};
  }
`;
export const ProductPreviewDeleteWrapper = styled.div`
	cursor: pointer;

  font-size: 20px;
	height: 100%;
  color: ${(props) => props.theme.thirdTxtColor};
  display: flex;
  align-items: end;
}
`;
