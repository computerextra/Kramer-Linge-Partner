import { Image, Modal } from "react-bootstrap";
import { ImageModelProps } from "../types";

export default function ImageModal({
  Path,
  Beschreibung,
  show,
  onHide,
}: ImageModelProps) {
  return (
    <Modal
      size="lg"
      fullscreen
      aria-labelledby="BilderVorschau"
      centered
      show={show}
      onHide={onHide}>
      <Modal.Header closeButton />

      <Modal.Body className="d-flex justify-content-center">
        <Image
          src={Path}
          alt={Beschreibung}
          fluid
          rounded
        />
      </Modal.Body>
      <Modal.Footer className="justify-content-center">
        <p className="text-center">{Beschreibung}</p>
      </Modal.Footer>
    </Modal>
  );
}
