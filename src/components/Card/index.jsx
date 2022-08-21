import "./style.scss";

export const Card = ({ url, name, img }) => {
  return (
    <>
      <div className="card">
        <img src={img} alt={`Imagem do pokemon ${name}`} />
        <div className="card__information">
          <span className="card__information__id">nº id</span>
          <span className="card__information__name">{name}</span>
          <ul className="card__information__abilities">
            <li>fire</li>
            <li>water</li>
          </ul>
        </div>
      </div>
    </>
  );
};
