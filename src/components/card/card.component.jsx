import { withRouter, Link } from "react-router-dom";
import "./card.styles.scss";

const Card = ({ title, key, imageUrl, size, linkUrl, history, match }) => {
  let newSize = size ? size : "";
  return (
    // <Link to={`${match.url}${linkUrl}`} />
    <div className={`card ${newSize}`} key={key}>
      <div
        className="card__background"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      ></div>
      <div className="card__content-box">
        <h1 className="card__title">{title}</h1>
        <span className="card__subtitle">shop now!</span>
      </div>
    </div>
  );
};

// withRouter actually enables us to use the Router props without actually needing to drill the props down from the parent element
// to the child element which is not considered to be a good practice!!
export default withRouter(Card);
