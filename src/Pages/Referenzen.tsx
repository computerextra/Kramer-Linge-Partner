import { Accordion, Col, Container, Row, Table } from "react-bootstrap";
import { KontaktBlock } from "../Components";
import { Projekte, Prüfungen } from "../Data";

export default function Referenzen() {
  return (
    <Container className="mt-5 mb-5">
      <Row>
        <KontaktBlock />

        <Col
          xl={10}
          lg={12}>
          <h1 className="text-uppercase text-secondary">Referenzen</h1>
          <h2 className="text-primary fs-3">Beispiele aus der Praxis</h2>
          <p className="text-secondary">
            Kramer, Linge + Partner bedanken sich bei ihren Kunden für die
            vertrauensvolle Zusammenarbeit.
          </p>
          <Accordion defaultActiveKey="">
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                Referenzliste zu eigenen Projekten (Auswahl)
              </Accordion.Header>
              <Accordion.Body>
                {/* Map over Projekte */}
                <Table
                  striped
                  responsive>
                  <thead>
                    <tr>
                      <th>Objekt</th>
                      <th>Bauherrschaft</th>
                      <th>Auftraggeber</th>
                      <th>Jahr</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Projekte.map((project, idx) => (
                      <tr key={idx}>
                        <td className="pre-line">{project.Objekt}</td>
                        <td className="pre-line">{project.Bauherrschaft}</td>
                        <td className="pre-line">{project.Auftraggeber}</td>
                        <td className="pre-line">{project.Jahr}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item
              eventKey="1"
              onClick={() => window.scrollTo(0, 0)}>
              <Accordion.Header>
                Referenzliste zu Bautechnischen Prüfungen (ausgewählte
                Bauprojekte)
              </Accordion.Header>
              <Accordion.Body>
                {/* Map over Prüfungen */}
                <Table
                  striped
                  responsive>
                  <thead>
                    <tr>
                      <th>Objekt</th>
                      <th>Bauherrschaft</th>
                      <th>Jahr</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Prüfungen.map((Prüfung, idx) => (
                      <tr key={idx}>
                        <td className="pre-line">{Prüfung.Objekt}</td>
                        <td className="pre-line">{Prüfung.Bauherrschaft}</td>
                        <td className="pre-line">{Prüfung.Jahr}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
      </Row>
    </Container>
  );
}
