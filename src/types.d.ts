export interface SideNavProps {
  flex: boolean;
}

export interface Ap {
  Name: string;
  Zusatz: string;
  Zusatz2: string;
  Telefon: string;
  Mobil?: string;
  Fax?: string;
  Mail: string;
  Bild?: string;
  handleShow: (path: string, Beschreibung: string) => void;
}

export interface ImageModelProps {
  Path: string;
  Beschreibung: string;
  show: boolean;
  onHide: () => void;
}
