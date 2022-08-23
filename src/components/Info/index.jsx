import { Image } from "../Image";
import "./style.scss";

export const Info = ({ details = {} }) => {
  // Renderiza os titulos da tabela
  function renderTitles() {
    return (
      <tr>
        {details.stats.map((res, index) => {
          const { name } = res.stat;
          return <th key={index}>{name}</th>;
        })}
      </tr>
    );
  }

  // Renderiza os valores dos titulos
  function renderValues() {
    return (
      <tr>
        {details.stats.map((res, index) => {
          const { base_stat } = res;
          return <th key={index}>{base_stat}</th>;
        })}
      </tr>
    );
  }

  return (
    <>
      <section id="details">
        <div className="details__top">
          <picture className="details__top__img">
            <Image
              parentHeight={'274px'}
              src={details.img}
              width={"100%"}
              height={"100%"}
              alt={`Imagem do pokemon ${details.name}`}
            />
          </picture>
          <aside className="details__top__aside">
            <ul>
              <li>
                Experiência base: <span>{details.base_experience}</span>
              </li>
              <li>
                Altura: <span>{details.height} m</span>
              </li>
              <li>
                Peso: <span>{details.weight} kg</span>
              </li>
            </ul>
          </aside>
        </div>
        <div className="details__bottom">
          <table>
            <thead>{renderTitles()}</thead>
            <tbody>{renderValues()}</tbody>
          </table>
        </div>
      </section>
    </>
  );
};
