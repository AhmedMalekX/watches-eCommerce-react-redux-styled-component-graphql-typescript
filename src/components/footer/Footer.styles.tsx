import styled from "styled-components";

export const FooterWrapper = styled.section`
  margin-top: 100px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
`;

export const InfoWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  div {
    h3 {
      font-size: 25px;
      margin-bottom: 15px;
      color: ${props => props.theme.primaryTxtColor};
    }

    ul {
      list-style: none;

      li {
        padding-bottom: 10px;
        color: #5c5c5c;

        &:hover {
          color: ${props => props.theme.secondaryTxtColor};
        }

        a {
          text-decoration: none;
          color: #5c5c5c;

          &:hover {
            color: ${props => props.theme.secondaryTxtColor};
          }
        }
      }
    }
  }

  div:last-of-type {
    ul {
      display: flex;

      li {
        font-size: 20px;
        cursor: pointer;
      }

      li:not(:last-of-type) {
        margin-right: 20px;
      }
    }
  }
`;
export const CopyrightWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 80px 0 40px;
  font-size: 18px;
  color: #5c5c5c;
`;
