import { globalResourceLoad, phasedResourceLoad, resourceAssumptions } from "../data/research";

export function ResourcesPage() {
  return (
    <>
      <section className="section page-hero">
        <div className="panel page-hero__panel">
          <p className="eyebrow">Ресурсы мира</p>
          <h1>Сколько мировых ресурсов потребует постепенная реализация</h1>
          <p className="lead">
            Ниже приведена оценка нагрузки на мировое производство материалов для проекта при поэтапном развёртывании.
            Расчёты собраны на основе уже зафиксированной массы компонентов отражателей и принятых ориентиров по
            текущему выпуску материалов в мире.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="resource-assumptions">
          {resourceAssumptions.map((item) => (
            <article className="stat-card" key={item.label}>
              <span className="stat-card__value">{item.value}</span>
              <span className="stat-card__label">{item.label}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">Полная конфигурация</p>
          <h2>Нагрузка на мировое производство материалов</h2>
        </div>
        <article className="panel resource-table-panel">
          <div className="resource-table resource-table--global">
            <div className="resource-table__head">
              <span>Ресурс</span>
              <span>Нужно для проекта</span>
              <span>Мировой выпуск в год</span>
              <span>Эквивалент мирового выпуска</span>
              <span>При графике 15 лет</span>
            </div>
            {globalResourceLoad.map((row) => (
              <div className="resource-table__row" key={row.resource}>
                <span>{row.resource}</span>
                <span>{row.total}</span>
                <span>{row.worldAnnual}</span>
                <span>{row.worldYears}</span>
                <span>{row.annualFor15Years}</span>
              </div>
            ))}
          </div>
        </article>
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">Этапы внедрения</p>
          <h2>Потребление ресурсов по мере роста проекта</h2>
        </div>
        <article className="panel resource-table-panel">
          <div className="resource-table resource-table--phased">
            <div className="resource-table__head">
              <span>Этап</span>
              <span>Доля проекта</span>
              <span>Площадь зеркал</span>
              <span>SiC-материалы</span>
              <span>Доля годового мирового выпуска SiC</span>
            </div>
            {phasedResourceLoad.map((row) => (
              <div className="resource-table__row" key={row.stage}>
                <span>{row.stage}</span>
                <span>{row.share}</span>
                <span>{row.mirrorArea}</span>
                <span>{row.sicMass}</span>
                <span>{row.sicAnnualShare}</span>
              </div>
            ))}
          </div>
        </article>
      </section>

      <section className="section">
        <article className="panel summary-panel">
          <p className="eyebrow">Вывод по ресурсам</p>
          <h2>Что означает эта оценка</h2>
          <p>
            Критическим ограничением остаются SiC-материалы: даже при графике на 15 лет проект требует объёмов,
            сопоставимых с текущим мировым выпуском. Поэтому реалистичная траектория внедрения должна опираться на
            поэтапное наращивание производств и старт с малых конфигураций.
          </p>
        </article>
      </section>
    </>
  );
}
