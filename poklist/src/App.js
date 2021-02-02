import { Container } from "./styles/appStyle";
import FooterBar from "./components/FooterBar";
import HeaderBar from "./components/HeaderBar";
import Routes from "./routes";
import { GlobalStyle } from "./styles/global";

function App() {
  return (
    <Container>
      <GlobalStyle/>
      <HeaderBar/>
      <Routes />
      <FooterBar/>
    </Container>
  );
}

export default App;
