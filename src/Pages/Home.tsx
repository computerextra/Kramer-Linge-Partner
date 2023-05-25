import { Card, Col, Container, Image, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { Urls } from "../Data/Urls";

export default function Home() {
  return (
    <Container className="mt-5">
      <Row>
        <Col md={6}>
          <Image
            fluid
            rounded
            src="https://placehold.co/1920x1080"
            alt=""
            className="mb-4"
          />
          <Card className="mb-4">
            <Card.Title className="text-primary fs-3">
              Das Unternehmen
            </Card.Title>
            <Row>
              <Col md={4}>
                <Image fluid src="https://placehold.co/600x500" alt="" />
              </Col>
              <Col md={8}>
                <Card.Body>
                  <Card.Text>
                    Kramer, Linge + Partner sind Ihre zuverlässigen Ingenieure
                    für Bauwesen, die Ihre Ideen planerisch umsetzen.
                  </Card.Text>
                  <Card.Text>
                    <NavLink to={Urls.Unternehmen}>Zum Unternehmen</NavLink>
                  </Card.Text>
                </Card.Body>
              </Col>
            </Row>
          </Card>
          <Card className="mb-4">
            <Card.Title className="text-primary fs-3">
              Die Referenzen
            </Card.Title>
            <Row>
              <Col md={4}>
                <Image fluid src="https://placehold.co/600x500" alt="" />
              </Col>
              <Col md={8}>
                <Card.Body>
                  <Card.Text>
                    Zahlreiche zufriedene Kunden und erfolgreiche Projekte
                    bestätigen die Qualität und dokumentieren die Bandbreite
                    unserer Arbeit.
                  </Card.Text>
                  <Card.Text>
                    <NavLink to={Urls.Referenzen}>Zu den Referenzen</NavLink>
                  </Card.Text>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Col>
        <Col md={6}>
          <Image
            fluid
            rounded
            src="https://placehold.co/1920x1080"
            alt=""
            className="mb-4"
          />
          <Card className="mb-4">
            <Card.Title className="text-primary fs-3">
              Das Kompetenzen
            </Card.Title>
            <Row>
              <Col md={4}>
                <Image fluid src="https://placehold.co/600x500" alt="" />
              </Col>
              <Col md={8}>
                <Card.Body>
                  <Card.Text>
                    Wir sind Ihr Partner für Tragwerksplanung und
                    Ausführungsplanung, für bautechnische Prüfung und
                    Bauüberwachung sowie für Gutachten.
                  </Card.Text>
                  <Card.Text>
                    <NavLink to={Urls.Kompetenzen.Root}>
                      Zu den Kompetenzen
                    </NavLink>
                  </Card.Text>
                </Card.Body>
              </Col>
            </Row>
          </Card>
          <Card className="mb-4">
            <Card.Title className="text-primary fs-3">Der Kontakt</Card.Title>
            <Row>
              <Col md={4}>
                <Image fluid src="https://placehold.co/600x500" alt="" />
              </Col>
              <Col md={8}>
                <Card.Body>
                  <Card.Text>
                    Wir beraten Sie individuell zu allen Fragen des Stahlbaus
                    und freuen uns auf Ihren Besuch, Ihren Anruf, Ihr Fax oder
                    Ihre E-Mail.
                  </Card.Text>
                  <Card.Text>
                    <NavLink to={Urls.Kontakt.Root}>Zum Unternehmen</NavLink>
                  </Card.Text>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
