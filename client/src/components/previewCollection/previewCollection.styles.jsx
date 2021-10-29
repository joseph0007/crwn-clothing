import styled from "styled-components";
import { Link } from "react-router-dom";

export const PreviewCollectionStyled = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

export const LinkStyled = styled(Link)`
  font-size: 28px;
  margin-bottom: 25px;
`;

export const CollectionItemListStyled = styled.div`
  display: flex;
  justify-content: space-between;
`;
