import { Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <Container className="mt-5 mb-5 text-center">
      <h1 className="mt-5 text-primary">404</h1>
      <h2 className="mt-5 mb-5">
        Die gesuchte Seite wurde leider nicht gefunden
      </h2>
      <Button
        className="mt-5 mb-5"
        variant="primary"
        onClick={() => navigate("/")}>
        Zur Startseite
      </Button>
    </Container>
  );
}
