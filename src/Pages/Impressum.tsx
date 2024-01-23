import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col, Container, Row } from "react-bootstrap";
import { KontaktBlock } from "../Components";

export default function Impressum() {
  return (
    <Container className="mt-5 mb-5">
      <Row>
        <KontaktBlock />
        <Col xl={10} lg={12}>
          <h1 className="text-uppercase text-secondary">Impressum</h1>
          <p>
            <span className="fw-bold">Kramer, Linge + Partner</span> <br />
            Ingenieure für Bauwesen PartG mbB
          </p>
          <p>
            Kohlenstraße 47a <br />
            34121 Kassel
          </p>
          <p>
            Telefon: 0561 – 51 05 760 <br />
            Telefax: 0561 – 51 05 7629
          </p>
          <p>E-Mail: info [at] kramer-linge.de</p>
          <p>Vertretungsberechtigte Partner: Otto Kramer, Torsten Linge</p>
          <p>
            Registergericht: Frankfurt/Main <br />
            Registernummer: PR 1904 <br />
            Ust-ID: DE 273870825
          </p>
          <p>Inhaltlich Verantwortlicher: Torsten Linge</p>
          <p>
            <span className="fw-bold">Haftungshinweis:</span> Trotz sorgfältiger
            inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte
            externer Links. Für den Inhalt der verlinkten Seiten sind
            ausschließlich deren Betreiber verantwortlich.
          </p>
          <p>
            Webdesign:{" "}
            <a
              href="https://computer-extra.de"
              target="_blank"
              rel="noopener noreferrer"
            >
              Computer Extra GmbH{" "}
              <FontAwesomeIcon
                icon={faArrowUpRightFromSquare}
                style={{ color: "#3590b4" }}
              />
            </a>{" "}
            <br />
            Text:{" "}
            <a
              href="http://www.arrabbiata.de/"
              target="_blank"
              rel="noopener noreferrer"
            >
              arrabbiata{" "}
              <FontAwesomeIcon
                icon={faArrowUpRightFromSquare}
                style={{ color: "#3590b4" }}
              />
            </a>
          </p>
        </Col>
      </Row>
    </Container>
  );
}
