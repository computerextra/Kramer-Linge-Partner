import { Accordion, Col, Container, Row } from "react-bootstrap";
import { KontaktBlock } from "../Components";

// TODO: PopUps für alle Bilder in Originalgröße!

export default function Referenzen() {
  return (
    <Container className="mt-5 mb-5">
      <Row>
        <KontaktBlock />

        <Col xl={10} lg={12}>
          <h1 className="text-uppercase text-secondary">Referenzen</h1>
          <h2 className="text-secondary fs-3">Beispiele aus der Praxis</h2>
          <p className="text-secondary">
            Kramer, Linge + Partner bedanken sich bei ihren Kunden für die
            vertrauensvolle Zusammenarbeit.
          </p>
          <Accordion defaultActiveKey="">
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                Referenzliste zu eigenen Projekten (Auswahl)
              </Accordion.Header>
              <Accordion.Body></Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                Referenzliste zu Bautechnischen Prüfungen (ausgewählte
                Bauprojekte)
              </Accordion.Header>
              <Accordion.Body></Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
      </Row>
    </Container>
  );
}
