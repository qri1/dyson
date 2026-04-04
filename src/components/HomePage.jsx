import { documentLinks, missionStats, missionTasks, projectHighlights, risks, sourceLinks, systemModules } from "../data/research";
import { OrbitalDiagram } from "./OrbitalDiagram";

export function HomePage({ activeModuleId, onModuleSelect, onNavigate }) {
  const activeModule = systemModules.find((module) => module.id === activeModuleId) ?? systemModules[0];

  return (
    <>
      <section className="hero panel-grid">
        <div className="hero-copy">
          <p className="eyebrow">МИФИ / Лицей 1511 / Исследовательский интерфейс проекта</p>
          <h1 className="hero-main-title">
            <span className="hero-title-line">Исследования</span>
            <span className="hero-title-line">Роя</span>
            <span className="hero-title-line">Дайсона</span>
          </h1>
          <p className="lead">
            Сайт собирает проект в единую исследовательскую среду: здесь можно увидеть архитектуру системы,
            ключевые расчёты, масштаб стартовой конфигурации, ограничения материалов и подборку профильных исследований.
          </p>
          <div className="button-row">
            <button className="button button-primary" onClick={() => onNavigate("calculations")} type="button">
              Открыть расчёты
            </button>
            <a className="button button-secondary" href="#documents">
              Перейти к материалам
            </a>
          </div>
        </div>

        <div className="hero-visual panel">
          <div className="panel-header">
            <span>Схема передачи энергии</span>
            <small>Нажимай на узлы схемы</small>
          </div>
          <OrbitalDiagram activeId={activeModuleId} onSelect={onModuleSelect} />
          <div className="active-module">
            <h3>{activeModule.title}</h3>
            <p>{activeModule.short}</p>
            <div className="metric-pills">
              {activeModule.metrics.map((metric) => (
                <span key={metric}>{metric}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section panel-grid">
        <div className="panel">
          <p className="eyebrow">Кратко о проекте</p>
          <h2>О чём этот проект</h2>
          <p>
            Проект исследует возможность переноса крупномасштабной солнечной энергетики в космос и рассматривает
            Рой Дайсона как цепочку взаимосвязанных технических узлов, а не как абстрактную мегаструктуру.
          </p>
          <ul className="clean-list">
            {missionTasks.map((task) => (
              <li key={task}>{task}</li>
            ))}
          </ul>
        </div>

        <div className="panel panel-emphasis">
          <p className="eyebrow">Почему это важно</p>
          <h2>Почему исследование важно</h2>
          <p>
            Рост мирового энергопотребления делает поиск новых масштабируемых источников энергии критически важным.
            Вынесение солнечной энергетики в космос открывает другой класс решений, но требует точного инженерного расчёта.
          </p>
          <img className="chart-image" src="./assets/energy-chart.png" alt="Рост мирового энергопотребления" />
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">Главная идея</p>
          <h2>Что уже показывает исследование</h2>
        </div>
        <div className="highlights-grid">
          {projectHighlights.map((item) => (
            <article className="panel highlight-card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">Состав системы</p>
          <h2>Компоненты системы</h2>
        </div>
        <div className="module-grid">
          {systemModules.map((module) => (
            <article
              className={`module-card ${activeModuleId === module.id ? "module-card--active" : ""}`}
              key={module.id}
            >
              <button className="module-card__button" onClick={() => onModuleSelect(module.id)} type="button">
                <span className="module-card__title">{module.title}</span>
                <span className="module-card__text">{module.short}</span>
              </button>
              <div className="metric-pills">
                {module.metrics.map((metric) => (
                  <span key={metric}>{metric}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
        <article className="panel detail-panel">
          <h3>{activeModule.title}</h3>
          {activeModule.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </article>
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">Главные ограничения</p>
          <h2>Ключевые проблемы проекта</h2>
        </div>
        <div className="risk-grid">
          {risks.map((risk) => (
            <article className="risk-card" key={risk}>
              <span className="risk-card__badge">Проблема</span>
              <p>{risk}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">Ключевые параметры</p>
          <h2>Ключевые параметры стартовой схемы</h2>
        </div>
        <div className="stat-grid">
          {missionStats.map((stat) => (
            <article className="stat-card" key={stat.label}>
              <span className="stat-card__value">{stat.value}</span>
              <span className="stat-card__label">{stat.label}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="documents">
        <div className="section-heading">
          <p className="eyebrow">Материалы проекта</p>
          <h2>Документы и внешние материалы</h2>
        </div>
        <div className="docs-grid">
          {documentLinks.map((item) => (
            <article className="doc-card" key={item.title}>
              <span className="doc-card__type">{item.type}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>

              {item.table ? (
                <div className="doc-table">
                  {item.table.map((row, index) => (
                    <div className={`doc-table__row ${index === 0 ? "doc-table__row--head" : ""}`} key={row.join("-")}>
                      <span>{row[0]}</span>
                      <span>{row[1]}</span>
                    </div>
                  ))}
                </div>
              ) : null}

              {item.links ? (
                <div className="doc-links">
                  {item.links.map((link) => (
                    <a className="doc-links__item" href={link.href} key={link.href} rel="noreferrer" target="_blank">
                      {link.label}
                    </a>
                  ))}
                </div>
              ) : null}
            </article>
          ))}
        </div>
        <article className="panel">
          <h3>Основные источники</h3>
          <div className="source-grid">
            {sourceLinks.map((link) => (
              <a className="source-link" href={link} key={link} rel="noreferrer" target="_blank">
                {link.replace(/^https?:\/\//, "")}
              </a>
            ))}
          </div>
        </article>
      </section>
    </>
  );
}
