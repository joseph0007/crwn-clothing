import { withRouter } from "react-router-dom";

// import "./previewCollection.styles.scss";
import CollectionItem from "../collectionItem/collectionItem.component";
import {
  PreviewCollectionStyled,
  CollectionItemListStyled,
  LinkStyled,
} from "./previewCollection.styles";

export const PreviewCollection = ({ title, items, match }) => (
  <PreviewCollectionStyled>
    <LinkStyled to={`${match.url}/${title.toLowerCase()}`}>
      {title.toUpperCase()}
    </LinkStyled>
    <CollectionItemListStyled>
      {items
        .filter((el, ind) => ind < 4)
        .map((item) => (
          <CollectionItem key={item.id} item={item}></CollectionItem>
        ))}
    </CollectionItemListStyled>
  </PreviewCollectionStyled>
);

export default withRouter(PreviewCollection);
