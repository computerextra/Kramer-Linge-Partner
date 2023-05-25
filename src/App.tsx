import { Footer, Hauptmenü, Header } from "./Layout";
import Routen from "./Routen";

function App() {
  return (
    <>
      {/* Header */}
      <Header />
      {/* Menü */}
      <Hauptmenü bg="primary" variant="dark" />
      {/* Routes */}
      <Routen />
      {/* Footer */}
      <Footer />
    </>
  );
}

export default App;
