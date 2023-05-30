import useScrollToTop from "./Hooks/useScrollToTop";
import { Footer, Hauptmenü, Header } from "./Layout";
import Routen from "./Routen";

// TODO: Bilder bearbeiten
// TODO: Bilder einbinden

function App() {
  useScrollToTop();
  return (
    <>
      {/* Header */}
      <Header />
      {/* Menü */}
      <Hauptmenü
        bg="primary"
        variant="dark"
      />
      {/* Routes */}
      <Routen />
      {/* Footer */}
      <Footer />
    </>
  );
}

export default App;
