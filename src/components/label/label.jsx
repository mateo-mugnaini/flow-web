import style from "./label.module.css";

export const Label = ({ text, description, color }) => {
  return (
    <div
      style={{ border: `2px solid ${color ? color : `green`}` }}
      className={style.contenedorGeneral}
    >
      <p>{text}</p>
      {description && <p>{description}</p>}
    </div>
  );
};
