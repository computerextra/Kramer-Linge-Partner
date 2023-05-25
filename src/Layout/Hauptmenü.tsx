import { useState } from "react";
import { Container, Nav, NavItem, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { Urls } from "../Data/Urls";

interface MenüProps {
  bg: string;
  variant: string;
}

export default function Hauptmenü({ bg, variant }: MenüProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <Container>
      <Navbar
        expand="lg"
        className="rounded"
        expanded={expanded}
        bg={bg}
        variant={variant}
      >
        <Container fluid>
          <NavLink
            to={Urls.Root}
            className="navbar-brand"
            onClick={() => setExpanded(false)}
          >
            ICON
          </NavLink>
          <Navbar.Toggle
            aria-controls="navbarNavDropdown"
            onClick={() => setExpanded(expanded ? false : true)}
          />
          <Navbar.Collapse id="navbarNavDropdown">
            <Nav className="me-auto">
              <NavItem>
                <NavLink
                  to={Urls.Unternehmen}
                  className="nav-link"
                  onClick={() => setExpanded(false)}
                >
                  Unternehmen
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  to={Urls.Kompetenzen.Root}
                  className="nav-link"
                  onClick={() => setExpanded(false)}
                >
                  Kompetenzen
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  to={Urls.Referenzen}
                  className="nav-link"
                  onClick={() => setExpanded(false)}
                >
                  Referenzen
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  to={Urls.Kontakt.Root}
                  className="nav-link"
                  onClick={() => setExpanded(false)}
                >
                  Kontakt
                </NavLink>
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
}
