import { useEffect, useState } from "react";
import { ExecutionPanel } from "../../components/executionpanel/executionpanel";
import { NodeCanvas } from "../../components/nodecanvas/nodecanvas";
import { NodeInspector } from "../../components/nodeinspector/nodeinspector";
import { NodeLibrary } from "../../components/nodelibrary/nodelibrary";
import { Topbar } from "../../components/topbar/topbar";
import style from "./home.module.css";

const defaultLanguage = "en";

export const HomePage = () => {
  const [language, setLanguage] = useState(defaultLanguage);
  const [translations, setTranslations] = useState(null);

  useEffect(() => {
    fetch("/lenguaje/language.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Unable to load translations");
        }

        return response.json();
      })
      .then((languageData) => setTranslations(languageData))
      .catch(() => setTranslations(null));
  }, []);

  const currentTranslations = translations?.[language];

  return (
    <section className={style.contenedorGeneral}>
      <Topbar
        language={language}
        onLanguageChange={setLanguage}
        translations={currentTranslations?.topbar}
      />
      <div className={style.areaTrabajo}>
        <NodeLibrary translations={currentTranslations?.nodeLibrary} />
        <NodeCanvas translations={currentTranslations?.nodeCanvas} />
        <NodeInspector translations={currentTranslations?.nodeInspector} />
      </div>
      <ExecutionPanel translations={currentTranslations?.executionPanel} />
    </section>
  );
};
