import { Container } from "react-bootstrap";

export default function KontaktBlock() {
  return (
    <Container fluid>
      <h2 className="text-uppercase">Kontakt</h2>
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
  );
}
