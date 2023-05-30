import { Col, Container, Row } from "react-bootstrap";
import { KontaktBlock } from "../Components";

export default function Impressum() {
  return (
    <Container className="mt-5 mb-5">
      <Row>
        <KontaktBlock />
        <Col xl={10} lg={12}>
          <h1 className="text-uppercase text-secondary">Impressum</h1>
        </Col>
      </Row>
    </Container>
  );
}
