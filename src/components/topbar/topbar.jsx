import style from "./topbar.module.css";

const fallbackTranslations = {
  productName: "FLOW",
  productDescription: "Visual Application Architect",
  workspace: "Untitled workspace",
  actionsComingSoon: "Workspace actions coming soon",
};

export const Topbar = ({ language, onLanguageChange, translations }) => {
  const currentTranslations = translations ?? fallbackTranslations;

  return (
  <header className={style.contenedorGeneral}>
    <div><p className={style.marca}>{currentTranslations.productName}</p><p className={style.subtitulo}>{currentTranslations.productDescription}</p></div>
    <div className={style.espacioTrabajo}><span className={style.indicador} />{currentTranslations.workspace}</div>
    <div className={style.controles}>
      <span className={style.acciones}>{currentTranslations.actionsComingSoon}</span>
      <button className={style.selectorIdioma} type="button" onClick={() => onLanguageChange(language === "en" ? "es" : "en")} aria-label="Change language">
        {language.toUpperCase()}
      </button>
    </div>
  </header>
  );
};
