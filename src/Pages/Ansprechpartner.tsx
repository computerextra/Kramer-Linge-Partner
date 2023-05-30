import { useState } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { ImageModal, KontaktBlock } from "../Components";
import { Ansprechpartner as ApList } from "../Data/Ansprechpartner";
import type { Ap } from "../types";

export default function Ansprechpartner() {
  const [show, setShow] = useState(false);
  const [path, setPath] = useState("");
  const [Beschreibung, setBeschreibung] = useState("");

  const handleShow = (path: string, Beschreibung: string) => {
    setPath(path);
    setBeschreibung(Beschreibung);
    setShow(true);
  };
  return (
    <Container className="mt-5 mb-5">
      <Row>
        <KontaktBlock />
        <Col
          xl={10}
          lg={12}>
          <h1 className="text-uppercase text-secondary">Ansprechpartner</h1>
          <h2 className="text-primary">Wir sind gern für Sie da</h2>
          <hr />
          {ApList &&
            ApList.map((ap, idx) => (
              <>
                <Ap
                  key={idx}
                  {...ap}
                  handleShow={handleShow}
                />
                <hr />
              </>
            ))}
        </Col>
      </Row>
      <ImageModal
        Path={path}
        Beschreibung={Beschreibung}
        show={show}
        onHide={() => setShow(false)}
      />
    </Container>
  );
}

type ApProps = {
  handleShow: (path: string, Beschreibung: string) => void;
} & Ap;

function Ap({
  Name,
  Zusatz,
  Zusatz2,
  Telefon,
  Mobil,
  Fax,
  Mail,
  Bild,
  handleShow,
}: ApProps) {
  return (
    <Row className="mb-3">
      <Col xs={4}>
        <h3 className="text-primary fs-4">{Name}</h3>
        {Zusatz && <p>{Zusatz}</p>}
        {Zusatz2 && <p>{Zusatz2}</p>}
        <p>
          {Telefon} <br />
          {Mobil && (
            <>
              {Mobil} <br />
            </>
          )}
          {Fax && (
            <>
              {Fax} <br />
            </>
          )}
        </p>
        <p>E-Mail: {Mail}</p>
      </Col>
      <Col xs={8}>
        <Image
          src={Bild ? Bild : "https://placehold.co/1920x1080"}
          style={{ maxHeight: "20rem" }}
          rounded
          alt={Name}
          fluid
          onClick={() =>
            handleShow(Bild ? Bild : "https://placehold.co/1920x1080", Name)
          }
        />
      </Col>
    </Row>
  );
}
