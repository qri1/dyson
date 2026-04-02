import { useEffect, useState } from "react";
import { HomePage } from "./components/HomePage";
import { CalculationsPage } from "./components/CalculationsPage";
import { ResourcesPage } from "./components/ResourcesPage";

function getRouteFromHash() {
  if (window.location.hash === "#/calculations") return "calculations";
  if (window.location.hash === "#/resources") return "resources";
  return "home";
}

export default function App() {
  const [route, setRoute] = useState(getRouteFromHash);
  const [activeModuleId, setActiveModuleId] = useState("reflectors");

  useEffect(() => {
    const handleHashChange = () => setRoute(getRouteFromHash());
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const navigate = (nextRoute) => {
    if (nextRoute === "calculations") window.location.hash = "/calculations";
    else if (nextRoute === "resources") window.location.hash = "/resources";
    else window.location.hash = "/";
    setRoute(nextRoute);
  };

  const openDocuments = () => {
    navigate("home");
    window.setTimeout(() => {
      document.getElementById("documents")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 40);
  };

  return (
    <div className="app-shell">
      <div className="stars stars-a" />
      <div className="stars stars-b" />
      <div className="glow glow-left" />
      <div className="glow glow-right" />

      <header className="topbar">
        <button className="brand" onClick={() => navigate("home")} type="button">
          <span className="brand__mark">DS</span>
          <span className="brand__copy">
            <strong>Исследование Роя Дайсона</strong>
            <small>Интерфейс исследовательского проекта</small>
          </span>
        </button>

        <nav className="topnav">
          <button className={route === "home" ? "topnav__link topnav__link--active" : "topnav__link"} onClick={() => navigate("home")} type="button">
            Главная
          </button>
          <button
            className={route === "calculations" ? "topnav__link topnav__link--active" : "topnav__link"}
            onClick={() => navigate("calculations")}
            type="button"
          >
            Расчёты
          </button>
          <button className={route === "resources" ? "topnav__link topnav__link--active" : "topnav__link"} onClick={() => navigate("resources")} type="button">
            Ресурсы
          </button>
          <button className="topnav__link" onClick={openDocuments} type="button">
            Документы
          </button>
        </nav>
      </header>

      <main className="content">
        {route === "home" ? (
          <HomePage activeModuleId={activeModuleId} onModuleSelect={setActiveModuleId} onNavigate={navigate} />
        ) : route === "calculations" ? (
          <CalculationsPage />
        ) : (
          <ResourcesPage />
        )}
      </main>

      <footer className="footer">
        <div className="footer__logos">
          <a className="footer__logo-link" href="https://www.1511.ru/" rel="noreferrer" target="_blank">
            <img alt="Лицей 1511" src="./assets/lyceum-logo.png" />
          </a>
          <a className="footer__logo-link" href="https://mephi.ru/" rel="noreferrer" target="_blank">
            <img alt="МИФИ" src="./assets/mifi-logo.png" />
          </a>
        </div>
        <div>
          <p className="footer__title">Рой Дайсона</p>
          <p className="footer__copy">
            Космическая солнечная энергетика.
          </p>
        </div>
      </footer>
    </div>
  );
}
