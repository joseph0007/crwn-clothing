import { withRouter, Link } from "react-router-dom";

import "./previewCollection.styles.scss";
import CollectionItem from "../collectionItem/collectionItem.component";

export const PreviewCollection = ({ title, items, match }) => (
  <div className="collection-preview">
    <Link className="title" to={`${match.url}/${title.toLowerCase()}`}>
      {title.toUpperCase()}
    </Link>
    <div className="preview">
      {items
        .filter((el, ind) => ind < 4)
        .map((item) => (
          <CollectionItem key={item.id} item={item}></CollectionItem>
        ))}
    </div>
  </div>
);

export default withRouter(PreviewCollection);
