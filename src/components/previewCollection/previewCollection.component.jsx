import "./previewCollection.styles.scss";
import CollectionItem from "../collectionItem/collectionItem.component";

export const PreviewCollection = ({ title, items }) => (
  <div className="collection-preview">
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="preview">
      {items
        .filter((el, ind) => ind < 4)
        .map(({ id, ...otherProps }) => (
          <CollectionItem key={id} {...otherProps}></CollectionItem>
        ))}
    </div>
  </div>
);

export default PreviewCollection;
