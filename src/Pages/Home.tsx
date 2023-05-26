import {
  faCompassDrafting,
  faEnvelopeOpenText,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, Col, Container, Image, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { Urls } from "../Data/Urls";

const height = "14rem";

export default function Home() {
  return (
    <Container className="mt-5 mb-5">
      <Row>
        <Col md={6} xs={12}>
          <Image
            fluid
            rounded
            src="/Images/Inhaber.webp"
            alt="Hr. Kramer und Hr. Linge nebeneinander"
            className="mb-4"
          />
          <Card className="mb-4" style={{ minHeight: height }}>
            <Card.Title className="text-primary fs-3">
              <NavLink
                to={Urls.Unternehmen}
                className="text-decoration-none text-primary"
              >
                Das Unternehmen
              </NavLink>
            </Card.Title>
            <Row>
              <Col
                md={4}
                className="d-flex align-items-center justify-content-center"
              >
                <NavLink to={Urls.Unternehmen}>
                  <Image fluid src="/Images/Logo.webp" alt="Büro" />
                </NavLink>
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
          <Card className="mb-4" style={{ minHeight: height }}>
            <Card.Title className="text-primary fs-3">
              <NavLink
                to={Urls.Referenzen}
                className="text-decoration-none text-primary"
              >
                Die Referenzen
              </NavLink>
            </Card.Title>
            <Row>
              <Col
                md={4}
                className="d-flex align-items-center justify-content-center"
              >
                <NavLink to={Urls.Referenzen}>
                  <Image
                    fluid
                    src="/Images/file-regular.webp"
                    alt="Büro"
                    style={{ maxHeight: 200 }}
                  />
                </NavLink>
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
        <Col md={6} xs={12}>
          <Image
            fluid
            rounded
            src="/Images/Buero.webp"
            alt=""
            className="mb-4 d-none d-md-block"
          />
          <Card className="mb-4" style={{ minHeight: height }}>
            <Card.Title className="text-primary fs-3">
              <NavLink
                to={Urls.Kompetenzen}
                className="text-decoration-none text-primary"
              >
                Die Kompetenzen
              </NavLink>
            </Card.Title>
            <Row>
              <Col
                md={4}
                className="d-flex align-items-center justify-content-center"
              >
                <NavLink to={Urls.Kompetenzen}>
                  <FontAwesomeIcon
                    icon={faCompassDrafting}
                    style={{
                      color: "#858585",
                      width: "100%",
                      height: "100%",
                      maxHeight: 200,
                      maxWidth: 200,
                    }}
                    className="img-fluid"
                  />
                </NavLink>
              </Col>
              <Col md={8}>
                <Card.Body>
                  <Card.Text>
                    Wir sind Ihr Partner für Tragwerksplanung und
                    Ausführungsplanung, für bautechnische Prüfung und
                    Bauüberwachung sowie für Gutachten.
                  </Card.Text>
                  <Card.Text>
                    <NavLink to={Urls.Kompetenzen}>Zu den Kompetenzen</NavLink>
                  </Card.Text>
                </Card.Body>
              </Col>
            </Row>
          </Card>
          <Card className="mb-4" style={{ minHeight: height }}>
            <Card.Title className="text-primary fs-3">
              <NavLink
                to={Urls.Kontakt}
                className="text-primary text-decoration-none"
              >
                Der Kontakt
              </NavLink>
            </Card.Title>
            <Row>
              <Col
                md={4}
                className="d-flex align-items-center justify-content-center"
              >
                <NavLink to={Urls.Kontakt}>
                  <FontAwesomeIcon
                    icon={faEnvelopeOpenText}
                    style={{
                      color: "#858585",
                      width: "100%",
                      height: "100%",
                      maxHeight: 200,
                      maxWidth: 200,
                    }}
                    className="img-fluid"
                  />
                </NavLink>
              </Col>
              <Col md={8}>
                <Card.Body>
                  <Card.Text>
                    Wir beraten Sie individuell zu allen Fragen des Stahlbaus
                    und freuen uns auf Ihren Besuch, Ihren Anruf, Ihr Fax oder
                    Ihre E-Mail.
                  </Card.Text>
                  <Card.Text>
                    <NavLink to={Urls.Kontakt}>Zum Unternehmen</NavLink>
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
