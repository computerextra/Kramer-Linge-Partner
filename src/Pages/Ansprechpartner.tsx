import { Col, Container, Image, Row } from "react-bootstrap";
import { KontaktBlock } from "../Components";
import type { Ap } from "../types";
import { Ansprechpartner as ApList } from "../Data/Ansprechpartner";

export default function Ansprechpartner() {
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
                <Ap key={idx} {...ap} />
                <hr />
              </>
            ))}
        </Col>
      </Row>
    </Container>
  );
}

function Ap({ Name, Zusatz, Zusatz2, Telefon, Mobil, Fax, Mail, Bild }: Ap) {
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
        />
      </Col>
    </Row>
  );
}
