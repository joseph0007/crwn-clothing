import React from "react";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";

import { selectDirectoryItems } from "../../redux/directory/directory.selectors";
import Card from "../card/card.component";
import "./menu.styles.scss";

class Menu extends React.Component {
  render() {
    return (
      <div className="menu">
        {this.props.directoryItems.map(({ id, ...el }, ind) => {
          return <Card key={id} ind={ind} {...el} />;
        })}
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  directoryItems: selectDirectoryItems,
});

export default connect(mapStateToProps)(Menu);
