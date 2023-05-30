import { useState } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { ImageModal, KontaktBlock } from "../Components";

export default function Unternehmen() {
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
          <h1 className="text-uppercase text-secondary">Unternehmen</h1>
          <h2 className="text-primary">Ihr Büro, das weiterdenkt</h2>
          <Row>
            <Col md={8}>
              <p>
                Das Ingenieurbüro Kramer, Linge + Partner, Ingenieure für
                Bauwesen PartG mbB besteht seit Oktober 2010 und ist
                spezialisiert auf die Planung, die bautechnische Prüfung und die
                Überwachung von Stahlbauten. Jährlich mehr als 300
                Einzelprüfobjekte, rund 70 eigene statische Berechnungen und
                zahlreiche gutachterliche Stellungnahmen dokumentieren die
                Leistungsfähigkeit.
              </p>
              <p>
                Die beiden Partner Otto Kramer und Torsten Linge verfügen
                zusammen mit den Mitarbeitern Thomas Ernst, Alexander Kunz,
                Ayhan Aykac und Karl Philipp Wiesemann über eine langjährige
                Berufserfahrung. Jeannette Wölfert für das Sekretariat
                komplettiert das Team.
              </p>
              <p>
                Im Dienst sicherer, effizienter und wirtschaftlicher Tragwerks-
                und Ausführungsplanung arbeiten Kramer, Linge + Partner
                punktuell mit spezialisierten Dienstleistern zusammen und
                vermitteln auch deren zusätzliche Leistungen aus einer Hand.
              </p>
            </Col>
            <Col md={4}>
              <Image
                src="https://placehold.co/600x500"
                fluid
                rounded
                alt="https://placehold.co/600x500"
                onClick={() =>
                  handleShow("https://placehold.co/600x500", "Platzhalter Bild")
                }
              />
            </Col>
          </Row>
          <hr />
          <h2 className="text-primary">Mit dem Prüfingenieur im Haus</h2>
          <Row>
            <Col md={8}>
              <p>
                Dipl.-Ing. Otto Kramer ist seit Juni 2009 als Prüfingenieur für
                Baustatik von der obersten Bauaufsichtsbehörde des Landes Hessen
                anerkannt.
              </p>
            </Col>
            <Col md={4}>
              <Image
                src="https://placehold.co/600x500"
                fluid
                rounded
                alt="https://placehold.co/600x500"
                onClick={() =>
                  handleShow("https://placehold.co/600x500", "Platzhalter Bild")
                }
              />
            </Col>
          </Row>
          <hr />
          <h2 className="text-primary">Die beiden Inhaber</h2>
          <Row>
            <Col md={8}>
              <p>
                Dipl.-Ing. Torsten Linge und Dipl.-Ing. Otto Kramer haben
                Bauingenieurwesen mit dem Schwerpunkt "Konstruktiver
                Ingenieurbau" an der Universität Kassel studiert; beide haben
                sich auf den Bereich Stahlbau spezialisiert.
              </p>
            </Col>
            <Col md={4}>
              <Image
                src="https://placehold.co/600x500"
                fluid
                rounded
                alt="https://placehold.co/600x500"
                onClick={() =>
                  handleShow("https://placehold.co/600x500", "Platzhalter Bild")
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
