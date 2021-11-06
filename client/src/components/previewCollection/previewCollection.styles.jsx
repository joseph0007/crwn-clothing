import styled from "styled-components";
import { Link } from "react-router-dom";

export const PreviewCollectionStyled = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 3rem;
`;

export const LinkStyled = styled(Link)`
  font-size: 2.8rem;
  margin-bottom: 2.5rem;

  @media only screen and (max-width: 37.5em) {
    text-align: center;
  } ;
`;

export const CollectionItemListStyled = styled.div`
  display: flex;
  justify-content: space-between;

  flex-wrap: wrap;
  align-content: space-between;

  @media only screen and (max-width: 37.5em) {
    justify-content: space-evenly;
  } ;
`;
