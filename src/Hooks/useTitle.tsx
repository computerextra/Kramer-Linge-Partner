import { useEffect } from "react";
import { MAIN_TITLE } from "../Data/Constants";

export default function useTitle(title = "") {
  useEffect(() => {
    if (title.length > 1) document.title = MAIN_TITLE + " - " + title;
    else document.title = MAIN_TITLE;
  }, [title]);
  return;
}
