import style from "./nodelibrary.module.css";

const nodeTypes = ["Event", "Action", "Condition", "Result"];
const fallbackTranslations = { title: "Node Library", types: "4 types", description: "Building blocks for your workflow", event: "Event", action: "Action", condition: "Condition", result: "Result" };

export const NodeLibrary = ({ translations }) => {
  const currentTranslations = translations ?? fallbackTranslations;
  const translatedNodeTypes = [currentTranslations.event, currentTranslations.action, currentTranslations.condition, currentTranslations.result];

  return (
    <aside className={style.contenedorGeneral} aria-label={currentTranslations.title}>
      <div className={style.encabezado}><p className={style.titulo}>{currentTranslations.title}</p><span className={style.etiqueta}>{currentTranslations.types}</span></div>
      <p className={style.descripcion}>{currentTranslations.description}</p>
      <div className={style.lista}>{nodeTypes.map((nodeType, index) => <div className={style.elemento} key={nodeType}><span className={style.punto} />{translatedNodeTypes[index]}</div>)}</div>
    </aside>
  );
};
