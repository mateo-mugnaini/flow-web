import style from "./nodecanvas.module.css";

const fallbackTranslations = { title: "Start designing your flow", description: "Choose a node from the library to begin building your workflow." };

export const NodeCanvas = ({ translations }) => {
  const currentTranslations = translations ?? fallbackTranslations;

  return <section className={style.contenedorGeneral} aria-label="Workflow canvas"><div className={style.mensaje}><div className={style.icono}>+</div><h1>{currentTranslations.title}</h1><p>{currentTranslations.description}</p></div></section>;
};
