import { Container } from "react-bootstrap";
import { Hauptmenü, Header } from "./Layout";
import Routen from "./Routen";

function App() {
  return (
    <>
      {/* Header */}
      <Header />
      {/* Menü */}
      <Hauptmenü />
      <Container>
        {/* Routes */}
        <Routen />
      </Container>
      {/* Footer */}
    </>
  );
}

export default App;
