import { Container, Col } from "react-bootstrap";

export default function KontaktBlock() {
  return (
    <Col xl={2} className="d-none d-xl-block">
      <Container fluid className="text-secondary">
        <h2>Kontakt</h2>
        <p>Nehmen Sie unverbindlich Kontakt mit uns auf.</p>
        <p>
          <small>
            Mail: <br />
            info(at)kramer-linge.de
          </small>
        </p>
        <p>
          <small>
            Tel: <br />
            <a href="tel:05615105760">0561 / 510 576 0</a>{" "}
          </small>
        </p>
      </Container>
    </Col>
  );
}
