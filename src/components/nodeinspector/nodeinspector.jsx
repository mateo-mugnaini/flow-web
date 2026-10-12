import style from "./nodeinspector.module.css";

const fallbackTranslations = { title: "Inspector", empty: "Select a node to inspect its properties." };

export const NodeInspector = ({ translations }) => {
  const currentTranslations = translations ?? fallbackTranslations;

  return <aside className={style.contenedorGeneral} aria-label={currentTranslations.title}><p className={style.titulo}>{currentTranslations.title}</p><div className={style.vacio}><p>{currentTranslations.empty}</p></div></aside>;
};
