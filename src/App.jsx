import { useEffect, useState } from "react";
import { HomePage } from "./components/HomePage";
import { CalculationsPage } from "./components/CalculationsPage";

function getRouteFromHash() {
  return window.location.hash === "#/calculations" ? "calculations" : "home";
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
    window.location.hash = nextRoute === "calculations" ? "/calculations" : "/";
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
          <button className="topnav__link" onClick={openDocuments} type="button">
            Документы
          </button>
        </nav>
      </header>

      <main className="content">
        {route === "home" ? (
          <HomePage activeModuleId={activeModuleId} onModuleSelect={setActiveModuleId} onNavigate={navigate} />
        ) : (
          <CalculationsPage />
        )}
      </main>

      <footer className="footer">
        <div className="footer__logos">
          <a className="footer__logo-link" href="https://www.1511.ru/" rel="noreferrer" target="_blank">
            <img alt="Лицей 1511" src="/assets/lyceum-logo.png" />
          </a>
          <a className="footer__logo-link" href="https://mephi.ru/" rel="noreferrer" target="_blank">
            <img alt="МИФИ" src="/assets/mifi-logo.png" />
          </a>
        </div>
        <div>
          <p className="footer__title">Архив исследования Роя Дайсона</p>
          <p className="footer__copy">
            React/Vite версия сайта с отдельной страницей расчётов и интерактивной схемой системы.
          </p>
        </div>
      </footer>
    </div>
  );
}
