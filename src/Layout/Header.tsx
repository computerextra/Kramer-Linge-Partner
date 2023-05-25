import { Container, Image } from "react-bootstrap";

export default function Header() {
  return (
    <Container className="mb-1 mt-1">
      <Image
        fluid
        rounded
        src="https://placehold.co/600x400"
        alt="Logo"
        style={{ maxHeight: 150 }}
      />
    </Container>
  );
}
