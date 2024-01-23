import { faCircleChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import useScrollToTop from "./Hooks/useScrollToTop";
import { Footer, Hauptmenü, Header } from "./Layout";
import Routen from "./Routen";

function App() {
  useScrollToTop();

  const [hidden, setHidden] = useState(true);

  const hide = () => {
    if (window.scrollY > 50) {
      setHidden(false);
    } else {
      setHidden(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", hide);

    return () => {
      window.removeEventListener("scroll", hide);
    };
  }, []);

  return (
    <>
      {/* Header */}
      <Header />
      {/* Menü */}
      <Hauptmenü bg="primary" variant="dark" />

      {/* Routes */}
      <Routen />
      {/* Back to Top BTN */}
      <Button
        variant="light"
        size="lg"
        className={`back-to-top border ${hidden ? "d-none" : "d-block"}`}
        onClick={() => window.scrollTo(0, 0)}
      >
        <FontAwesomeIcon
          icon={faCircleChevronUp}
          style={{ color: "#3590b4" }}
        />
      </Button>
      {/* Footer */}
      <Footer />
    </>
  );
}

export default App;
