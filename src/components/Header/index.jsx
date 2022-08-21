import "./style.scss";

export const Header = ({ title }) => {
  return (
    <>
      <header className="section__header">
        <h1 className="section__title">{title}</h1>
      </header>
    </>
  );
};
