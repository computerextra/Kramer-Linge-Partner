import { Route, Routes } from "react-router-dom";
import { Urls } from "./Data/Urls";

export default function Routen() {
  return (
    <Routes>
      {/* Home */}
      <Route path={Urls.Root} element={<>Home</>} />

      {/* Unternehmen */}
      <Route path={Urls.Unternehmen} element={<>Unternehmen</>} />

      {/* Kompetenzen */}
      <Route path={Urls.Kompetenzen.Root} element={<>Kompetenzen</>} />
      <Route
        path={Urls.Kompetenzen.Tragwerksplanung}
        element={<>Tragwerksplanung</>}
      />
      <Route
        path={Urls.Kompetenzen.Ausführungsplanung}
        element={<>Ausführungsplanung</>}
      />
      <Route
        path={Urls.Kompetenzen.Bauüberwachung}
        element={<>Bauüberwachung</>}
      />
      <Route path={Urls.Kompetenzen.Gutachten} element={<>Gutachten</>} />

      {/* Referenzen */}
      <Route path={Urls.Referenzen} element={<>Referenzen</>} />

      {/* Kontakt */}
      <Route path={Urls.Kontakt.Root} element={<>Kontakt</>} />
      <Route
        path={Urls.Kontakt.Ansprechpartner}
        element={<>Ansprechpartner</>}
      />

      {/* Rechtliches */}
      <Route path={Urls.Impressum} element={<>Impressum</>} />
      <Route path={Urls.Datenschutz} element={<>Datenschutz</>} />
    </Routes>
  );
}
