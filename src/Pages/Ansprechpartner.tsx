import { useState } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { ImageModal, KontaktBlock } from "../Components";
import {
  Ansprechpartner as ApList,
  ImageFallbackOrig,
  ImageFallbackThumb,
} from "../Data";
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
        <Col xl={10} lg={12}>
          <h1 className="text-uppercase text-secondary">Ansprechpartner</h1>
          <h2 className="text-primary">Wir sind gern für Sie da</h2>
          <hr />
          {ApList &&
            ApList.map((ap, idx) => (
              <>
                <Ap key={idx} {...ap} handleShow={handleShow} />
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
  BildOrig,
  handleShow,
}: ApProps) {
  return (
    <Row className="mb-3">
      <Col md={8} className="order-md-1">
        <Image
          src={Bild ? Bild : ImageFallbackThumb}
          style={{ maxHeight: "20rem" }}
          rounded
          alt={Name}
          fluid
          onClick={() =>
            handleShow(
              BildOrig ? BildOrig : Bild ? Bild : ImageFallbackOrig,
              Name
            )
          }
        />
      </Col>
      <Col md={4} className="order-md-0">
        <h3 className="text-primary fs-4">{Name}</h3>
        {Zusatz && <p>{Zusatz}</p>}
        {Zusatz2 && <p>{Zusatz2}</p>}
        <p>
          Telefon: <a href={`tel:${Telefon}`}>{Telefon}</a>
          <br />
          {Mobil && (
            <>
              Mobil: <a href={`tel:${Mobil}`}>{Mobil}</a> <br />
            </>
          )}
          {Fax && (
            <>
              Fax: {Fax} <br />
            </>
          )}
        </p>
        <p>E-Mail: {Mail}</p>
      </Col>
    </Row>
  );
}
