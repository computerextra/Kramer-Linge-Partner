import { Route, Routes } from "react-router-dom";
import { Urls } from "./Data/Urls";
import { Home, Kompetenzen, Unternehmen } from "./Pages";

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
      <Route path={Urls.Referenzen} element={<>Referenzen</>} />

      {/* Kontakt */}
      <Route path={Urls.Kontakt} element={<>Kontakt</>} />

      {/* Rechtliches */}
      <Route path={Urls.Impressum} element={<>Impressum</>} />
      <Route path={Urls.Datenschutz} element={<>Datenschutz</>} />
    </Routes>
  );
}
