import React from "react";

import Card from "../card/card.component";
import "./menu.styles.scss";

class Menu extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: "hats",
          imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
          id: 1,
        },
        {
          title: "jackets",
          imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
          id: 2,
        },
        {
          title: "sneakers",
          imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
          id: 3,
        },
        {
          title: "womens",
          imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
          size: "card--large",
          id: 4,
        },
        {
          title: "mens",
          imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
          size: "card--large",
          id: 5,
        },
      ],
    };
  }

  render() {
    return (
      <div className="menu">
        {this.state.sections.map(({ title, imageUrl, size, id }) => {
          return (
            <Card size={size} title={title} imageUrl={imageUrl} key={id} />
          );
        })}
      </div>
    );
  }
}

export default Menu;
