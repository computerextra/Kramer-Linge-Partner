import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, Image } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { Urls } from "../Data/Urls";

export default function Header() {
  return (
    <Container className="mb-1 mt-1">
      <NavLink to={Urls.Root}>
        <Image
          fluid
          rounded
          src="https://placehold.co/600x400"
          alt="Logo"
          style={{ maxHeight: 150 }}
        />
      </NavLink>
      <p className="d-none d-sm-block bg-secondary float-end text-light pt-1 pb-1 ps-2 pe-2 text-center rounded">
        <FontAwesomeIcon icon={faPhone} />{" "}
        <a href="tel:05615105760" className="text-decoration-none text-light">
          0561 / 510 576 0
        </a>
      </p>
    </Container>
  );
}
