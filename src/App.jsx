import style from "./App.module.css";
import { HomePage } from "./pages/home/home";

export function App() {
  return (
    <main className={style.contenedorGeneral}>
      <HomePage />
    </main>
  );
}
