import { useState } from "react";
import { Accordion, Col, Container, Image, Row } from "react-bootstrap";
import { ImageModal, KontaktBlock } from "../Components";

const IMG = "/Images/Kompetenzen/";
const THUMB = "_Thumb.webp";
const ORIG = "_Orig.webp";

export default function Kompetenzen() {
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
          <h1 className="text-uppercase text-secondary">Kompetenzen</h1>
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                Aktiv für Büros, Bauherren, Behörden und ausführende Unternehmen
              </Accordion.Header>
              <Accordion.Body>
                <Row>
                  <Col md={4} className="order-md-1">
                    <Image
                      src={IMG + "Helm" + THUMB}
                      fluid
                      rounded
                      alt="Ein Helm, ein Zollstock und ein paar Schuhe auf einer Holzplanke"
                      onClick={() => handleShow(IMG + "Helm" + ORIG, "")}
                    />
                  </Col>
                  <Col md={8} className="order-md-0">
                    <p>
                      Kramer, Linge + Partner ist Ihr zuverlässiges Team für
                      Planungen, bautechnische Prüfung, Überwachung und
                      Expertise im Stahlbau. Wir beraten und betreuen
                      Architektur- und Ingenieurbüros ebenso wie Bauherren,
                      Behörden und ausführende Unternehmen.
                    </p>
                    <h3 className="fs-4 text-primary">
                      Gewissenhaft planen, wirtschaftlich denken
                    </h3>
                    <p>
                      Wir verfügen über Fachkompetenz und praktische Erfahrung,
                      arbeiten gewissenhaft und denken wirtschaftlich.
                    </p>
                  </Col>
                </Row>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Tragwerksplanung</Accordion.Header>
              <Accordion.Body>
                <h2 className="text-primary">Ganz sicher Wirtschaftlich</h2>
                <Row className="mb-3">
                  <Col md={4} className="order-md-1">
                    <Image
                      src={IMG + "Detailnachweis_1" + THUMB}
                      alt="Ein Geländer in einer Halle"
                      fluid
                      rounded
                      onClick={() =>
                        handleShow(IMG + "Detailnachweis_1" + ORIG, "")
                      }
                    />
                  </Col>
                  <Col md={8} className="order-md-0">
                    <p>
                      Die Tragwerksplanung ist ein unverzichtbarer Bestandteil
                      der Gebäudeplanung.
                    </p>
                    <p>
                      Kramer, Linge + Partner entwickeln die statische
                      Tragkonstruktion im Rahmen der Entwurfs- und
                      Genehmigungsplanung. Auf Basis der architektonischen
                      Vorgaben berücksichtigen wir neben den
                      sicherheitsrelevanten und baurechtlichen Aspekten auch die
                      Wirtschaftlichkeit einer Konstruktion.
                    </p>
                  </Col>
                </Row>
                <Row>
                  <Col md={4} className="order-md-1">
                    <Image
                      src={IMG + "Detailnachweis_2" + THUMB}
                      fluid
                      rounded
                      alt="Eine Aussichtsplattform an einem Hang."
                      onClick={() =>
                        handleShow(IMG + "Detailnachweis_2" + ORIG, "")
                      }
                    />
                  </Col>
                  <Col md={8} className="order-md-0">
                    <p>Die Tragwerksplanung umfasst das Leistungsspektrum:</p>
                    <ul>
                      <li>Architektonisch anspruchsvoller Stahlbau</li>
                      <li>
                        Industriebau (Hallentragwerke, Bühnenkonstruktionen)
                      </li>
                      <li>Stahl-/Glasbau</li>
                      <li>Dach- und Fassadentragwerke</li>
                      <li>Stahlverbundbau</li>
                      <li>Brückenbau</li>
                      <li>Hochbaukonstruktionen</li>
                    </ul>
                  </Col>
                </Row>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>Ausführungsplanung</Accordion.Header>
              <Accordion.Body>
                <h2 className="text-primary">Realisierung nach Plan</h2>
                <Row className="mb-3">
                  <Col lg={6} md={4} className="order-md-1">
                    <Image
                      src={IMG + "Ausfuehrungsplanung" + THUMB}
                      fluid
                      rounded
                      alt="Eine Bauzeichnung einer Brücke."
                      onClick={() =>
                        handleShow(IMG + "Ausfuehrungsplanung" + ORIG, "")
                      }
                    />
                  </Col>
                  <Col lg={6} md={8} className="order-md-0">
                    <p>
                      Auf Grundlage der Ausführungsplanung kann das Bauvorhaben
                      realisiert werden. Sie schreibt die Entwurfsplanung und
                      die Genehmigungsplanung fort.
                    </p>
                    <p>
                      Die Planung geschieht im Dialog mit den beteiligten
                      Fachleuten, etwa Ingenieuren und Herstellern oder auch
                      ausführenden Unternehmen. Der qualifizierte Austausch ist
                      praxisgerecht und erschließt Optimierungspotenzial bis ins
                      Detail.
                    </p>
                  </Col>
                </Row>
                <p>
                  Kramer, Linge + Partner fertigen für Sie alle wesentlichen
                  Herstellungsunterlagen – von Zeichnungen über Stücklisten bis
                  zu NC-Daten.
                </p>
                <p>
                  Zusätzlich bietet Kramer, Linge + Partner Ihnen das folgende
                  interessante Leistungsspektrum an:
                </p>
                <p>
                  Kramer, Linge + Partner erstellt für Sie die
                  Standsicherheitsnachweise mit den zugehörigen Detailnachweisen
                  zu den Bauteilverbindungen. Zahlreiche Stahlbauunternehmen
                  erstellen darauf aufbauend die Fertigungszeichnungen für die
                  Stahlbauteile im eigenen Haus, haben aber keinen Partner, der
                  die Bewehrungspläne für die Massivbauteile oder die Gründung
                  anfertigt. Diese Leistung der Schal- und Bewehrungsplanung
                  einschließlich der zugehörigen Stahl-, Matten- und Biegelisten
                  kann Kramer, Linge + Partner für Sie übernehmen.
                </p>
                <p>
                  Diese Kombination (Standsicherheitsnachweise und
                  Bewehrungspläne) hat sich in zahlreichen Projekten für
                  unterschiedliche Stahlbauunternehmen erfolgreich bewährt.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>Bautechnische Prüfungen</Accordion.Header>
              <Accordion.Body>
                <h2 className="text-primary">
                  Sicher, Wirtschaftlich und Wertbeständig
                </h2>
                <Row className="mb-3">
                  <Col md={4} className="order-md-1">
                    <Image
                      src={IMG + "Bautechnische_Pruefung_1" + THUMB}
                      fluid
                      rounded
                      alt="Ein Gerüst mit einem Bauzaun"
                      onClick={() =>
                        handleShow(IMG + "Bautechnische_Pruefung_1" + ORIG, "")
                      }
                    />
                  </Col>
                  <Col md={8} className="order-md-0">
                    <p>
                      Kramer, Linge + Partner leisten die bautechnische Prüfung
                      in statisch-konstruktiver Hinsicht. Sie umfasst die
                      Prüfung der bautechnischen Nachweise, die Prüfung der
                      Ausführungsplanung und die Bauüberwachung.
                    </p>
                    <p>
                      Als Prüfingenieur für Baustatik ist Otto Kramer in das
                      bauaufsichtliche Genehmigungsverfahren eingebunden und
                      wird hoheitlich für Behörden wie Bauherren tätig.
                    </p>
                    <p>
                      Die gewissenhafte Prüfung von Statik, Konstruktion und
                      Ausführung beugt technischen wie baulichen Fehlern vor.
                      Sie gewährleistet die gewünschte Qualität, Standsicherheit
                      sowie Wertbeständigkeit des Objekts und vermeidet
                      unvorhergesehenen Folgekosten.
                    </p>
                  </Col>
                </Row>
                <Row>
                  <Col xs={6}>
                    <Image
                      src={IMG + "Bautechnische_Pruefung_2" + THUMB}
                      fluid
                      rounded
                      alt="Eine Asche Bahn. Im Vordergrund ein Geländer."
                      onClick={() =>
                        handleShow(IMG + "Bautechnische_Pruefung_2" + ORIG, "")
                      }
                    />
                  </Col>
                  <Col xs={6}>
                    <Image
                      src={IMG + "Bautechnische_Pruefung_3" + THUMB}
                      fluid
                      rounded
                      alt=""
                      onClick={() =>
                        handleShow(IMG + "Bautechnische_Pruefung_3" + ORIG, "")
                      }
                    />
                  </Col>
                </Row>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
              <Accordion.Header>Bauüberwachung</Accordion.Header>
              <Accordion.Body>
                <h2 className="text-primary">
                  Ausführung und Standsicherheit im Blick
                </h2>
                <p>
                  Im weitreichenden Gebiet der Bauüberwachung sind Kramer, Linge
                  + Partner spezialisiert auf die Bauüberwachung in
                  statisch-konstruktiver Hinsicht.
                </p>
                <p>
                  Auf Basis eigener Planungsgrundlagen oder im Rahmen der
                  bautechnischen Prüfung kontrollieren wir das fertiggestellte
                  Tragwerk auf alle maßgeblichen Aspekte der Standsicherheit.
                  Wir achten dabei akribisch auf die fachgerechte Ausführung und
                  berücksichtigen die Besonderheiten des jeweiligen Objekts.
                </p>
                <Row>
                  <Col xs={6}>
                    <Image
                      src={IMG + "Bauueberwachung_1" + THUMB}
                      fluid
                      rounded
                      alt="Ein Winkelmesser an einer Schweißnaht"
                      onClick={() =>
                        handleShow(IMG + "Bauueberwachung_1" + ORIG, "")
                      }
                    />
                  </Col>
                  <Col xs={6}>
                    <Image
                      src={IMG + "Bauueberwachung_2" + THUMB}
                      fluid
                      rounded
                      alt="Eine Schraubverbindung mit nicht korrekt angezogener Schraube."
                      onClick={() =>
                        handleShow(IMG + "Bauueberwachung_2" + ORIG, "")
                      }
                    />
                  </Col>
                </Row>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="5">
              <Accordion.Header>Gutachten</Accordion.Header>
              <Accordion.Body>
                <h2 className="text-primary">Darauf ist zu achten</h2>
                <Row>
                  <Col md={4} className="order-1">
                    <Image
                      src={IMG + "Gutachten_1" + THUMB}
                      fluid
                      rounded
                      alt="Gelbe Plattformen."
                      onClick={() => handleShow(IMG + "Gutachten_1" + ORIG, "")}
                    />
                  </Col>
                  <Col md={8} className="order-0">
                    <p>
                      Im Falle eines Schadens an Stahlbauten sind die Bauherren
                      mit einem qualifizierten Schadensgutachten gut beraten.
                      Dann sind sie im Bilde über die Ursache und die Folgen des
                      Schadens, über geeignete Maßnahmen zur Behebung und über
                      die Restnutzungsdauer.
                    </p>

                    <ul>
                      <li>Hauptursachen für Schäden im Stahlbau sind:</li>
                      <li>Ausführungsfehler</li>
                      <li>statisch unzureichend dimensionierte Bauteile,</li>
                      <li>
                        ungeschickte Anschlussgeometrie und Bauteilverbindung,
                      </li>
                      <li>unzureichender Korrosionsschutz</li>
                      <li>sowie Materialermüdung und -schäden.</li>
                    </ul>

                    <p>
                      Unsere Kenntnisse auf den Gebieten Statik, Konstruktion,
                      Schweißtechnik, Material und Korrosionsschutz befähigen
                      uns, fachlich fundierte Beurteilungen und
                      Schadensgutachten zu erstellen.
                    </p>
                  </Col>
                </Row>
                <Row>
                  <Col xs={6}>
                    <Image
                      src={IMG + "Gutachten_2" + THUMB}
                      fluid
                      rounded
                      alt="Ein großer Schornstein mit einem Kran, der vor dem Schornstein steht."
                      onClick={() => handleShow(IMG + "Gutachten_2" + ORIG, "")}
                    />
                  </Col>
                  <Col xs={6}>
                    <Image
                      src={IMG + "Gutachten_3" + THUMB}
                      fluid
                      rounded
                      alt="Zertifikate"
                      onClick={() => handleShow(IMG + "Gutachten_3" + ORIG, "")}
                    />
                  </Col>
                </Row>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
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
