import "./card.styles.scss";

const Card = ({ title, key, imageUrl, size }) => {
  let newSize = size ? size : "";
  return (
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

export default Card;
