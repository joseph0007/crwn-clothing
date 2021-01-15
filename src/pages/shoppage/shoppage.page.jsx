import React from "react";
import { Route } from "react-router-dom";

import CollectionPreview from "../../components/collection-preview/collection-preview.component";
import Category from "../../components/category/category.component";
import "./shoppage.styles.scss";

const Shop = ({ match, history, location }) => (
  <div className="shop-page">
    <Route exact path={`${match.path}/`} component={CollectionPreview} />
    <Route path={`${match.path}/:categoryId`} component={Category}></Route>
  </div>
);

export default Shop;
