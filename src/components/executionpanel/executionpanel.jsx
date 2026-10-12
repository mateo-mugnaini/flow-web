import style from "./executionpanel.module.css";

const fallbackTranslations = { title: "Execution", description: "Simulation and debugging tools will appear here.", status: "Idle" };

export const ExecutionPanel = ({ translations }) => {
  const currentTranslations = translations ?? fallbackTranslations;

  return <section className={style.contenedorGeneral} aria-label={currentTranslations.title}><div><p className={style.titulo}>{currentTranslations.title}</p><p className={style.descripcion}>{currentTranslations.description}</p></div><span className={style.estado}>{currentTranslations.status}</span></section>;
};
