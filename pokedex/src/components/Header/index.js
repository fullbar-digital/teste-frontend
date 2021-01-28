import { useHistory } from "react-router-dom";
import "./style.scss";

const Header = () => {
  const history = useHistory()
  return (
    <header className="header">
      <img style={{cursor: "pointer"}} onClick={() => history.push("./")} className="logo" src="./assets/img/logo.svg" alt="Logo"/>
    </header>
  )
}

export default Header;