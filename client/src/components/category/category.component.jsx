import { connect, useSelector } from "react-redux";

import CollectionItem from "../collectionItem/collectionItem.component";
import { selectCategory } from "../../redux/shop/shop.selectors";
import "./category.styles.scss";
import { useParams } from "react-router";

const Category = ({ match }) => {
  const { categoryId } = useParams();
  const selectedCategory = useSelector((state) =>
    selectCategory(categoryId)(state)
  );
  return (
    <div className="collection-page">
      {console.log(match, selectedCategory)}
      <h2 className="title">{selectedCategory.title}</h2>
      <div className="items">
        {selectedCategory.items.map((item) => (
          <CollectionItem key={item.id} item={item}></CollectionItem>
        ))}
      </div>
    </div>
  );
};

// const mapStateToProps = (state, ownProps) => ({
//   selectedCategory: selectCategory(ownProps.match.params.categoryId)(state),
// });

export default Category;
// connect(mapStateToProps)(Category);
