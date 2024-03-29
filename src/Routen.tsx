import { Route, Routes } from "react-router-dom";
import { Urls } from "./Data/Urls";
import {
  Ansprechpartner,
  Datenschutz,
  Home,
  Impressum,
  Kompetenzen,
  Kontakt,
  NotFound,
  Unternehmen,
} from "./Pages";
import Referenzen from "./Pages/Referenzen";

export default function Routen() {
  return (
    <Routes>
      {/* Home */}
      <Route path={Urls.Root} element={<Home />} />

      {/* Unternehmen */}
      <Route path={Urls.Unternehmen} element={<Unternehmen />} />

      {/* Kompetenzen */}
      <Route path={Urls.Kompetenzen} element={<Kompetenzen />} />

      {/* Referenzen */}
      <Route path={Urls.Referenzen} element={<Referenzen />} />

      {/* Kontakt */}
      <Route path={Urls.Kontakt} element={<Kontakt />} />
      <Route path={Urls.Ansprechpartner} element={<Ansprechpartner />} />

      {/* Rechtliches */}
      <Route path={Urls.Impressum} element={<Impressum />} />
      <Route path={Urls.Datenschutz} element={<Datenschutz />} />

      {/* 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
