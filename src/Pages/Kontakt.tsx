import { useState } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { ImageModal, KontaktBlock } from "../Components";

export default function Kontakt() {
  const [show, setShow] = useState(false);
  const [path, setPath] = useState("");
  const [Beschreibung, setBeschreibung] = useState("");

  const handleShow = (path: string, Beschreibung: string) => {
    setPath(path);
    setBeschreibung(Beschreibung);
    setShow(true);
  };
  return (
    <Container className="mt-5 mb-5">
      <Row>
        <KontaktBlock />
        <Col
          xl={10}
          lg={12}>
          <h1 className="text-uppercase text-secondary">Kontakt</h1>
          <h2 className="fs-3 text-primary">Immer Kompetent beraten</h2>
          <Row className="mt-2">
            <Col md={4}>
              <p className="text-uppercase text-primary">
                Kramer, Linge + Partner
              </p>
              <p className="text-primary">Ingenieure für Bauwesen PartG mbH</p>
              <p>
                Kohlenstraße 47a <br />
                34121 Kassel
              </p>
              <p>
                Telefon: 0561 - 51 05 760 <br />
                Telefax: 0561 - 51 05 762
              </p>
              <p>info [at] kramer-linge.de</p>
            </Col>
            <Col md={8}>
              <Image
                src="/Images/Unternehmen/Team_Thumb.webp"
                alt="Das Team von Kramer, Linge + Partner"
                fluid
                onClick={() =>
                  handleShow(
                    "/Images/Unternehmen/Team_Orig.webp",
                    "Das Team von Kramer, Linge + Partner"
                  )
                }
              />
            </Col>
          </Row>
        </Col>
      </Row>
      <ImageModal
        Path={path}
        Beschreibung={Beschreibung}
        show={show}
        onHide={() => setShow(false)}
      />
    </Container>
  );
}
