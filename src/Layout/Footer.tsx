import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { Urls } from "../Data/Urls";

export default function Footer() {
  const [date, setDate] = useState("");

  useEffect(() => {
    const today = new Date().getFullYear().toString();
    if (today !== "2023") setDate("2023 - " + today);
    else setDate(today);
  }, []);

  return (
    <div>
      <Container>
        <p className="text-center">
          &copy; {date} - KRAMER, LINGE + PARTNER -{" "}
          <NavLink to={Urls.Root}>STARTSEITE</NavLink> -{" "}
          <NavLink to={Urls.Impressum}>IMPRESSUM</NavLink> -{" "}
          <NavLink to={Urls.Datenschutz}>DATENSCHUTZ</NavLink>
        </p>
      </Container>
    </div>
  );
}
