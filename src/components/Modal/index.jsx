import "./style.scss";

export const Modal = ({ id = "id-modal", title, children, closeFunc }) => {
  // Fecha modal quando clicar fora
  function closeBackset(e) {
    if (e.target.id === id) closeFunc();
  }

  return (
    <div id={id} className="modal-backset" onClick={(e) => closeBackset(e)}>
      <div className="modal">
        <header className="modal__header">
          <h2 className="modal__header__title">{title || "Modal title"}</h2>
          <span className="modal__header__closeBtn" onClick={() => closeFunc()}>
            &times;
          </span>
        </header>
        {children}
      </div>
    </div>
  );
};
