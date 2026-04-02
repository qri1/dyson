import { useState } from "react";
import { calculationTables, calculations, timeline } from "../data/research";

export function CalculationsPage() {
  const [activeCalcId, setActiveCalcId] = useState(calculations[0].id);
  const activeCalc = calculations.find((item) => item.id === activeCalcId) ?? calculations[0];

  return (
    <>
      <section className="section page-hero">
        <div className="panel page-hero__panel">
          <p className="eyebrow">Детальные расчёты</p>
          <h1>Детальные инженерные расчёты проекта</h1>
          <p className="lead">
            Эта страница собирает расчётные блоки в более исследовательском формате: масса зеркала, тепловой предел,
            орбитальная дистанция, текущая эффективность и стартовая архитектура системы.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="calc-tabs">
          {calculations.map((item) => (
            <button
              className={`calc-tab ${item.id === activeCalcId ? "calc-tab--active" : ""}`}
              key={item.id}
              onClick={() => setActiveCalcId(item.id)}
              type="button"
            >
              {item.title}
            </button>
          ))}
        </div>

        <article className="panel calc-focus-card">
          <div className="calc-card__header">
            <h2>{activeCalc.title}</h2>
            <span className="formula-chip">{activeCalc.formula}</span>
          </div>
          <ul className="clean-list">
            {activeCalc.bullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
          <p className="calc-card__result">{activeCalc.result}</p>
        </article>
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">Исследовательские таблицы</p>
          <h2>Таблицы проекта</h2>
        </div>
        <div className="research-tables">
          {calculationTables.map((table) => (
            <article className="panel research-table-card" key={table.id}>
              <h3>{table.title}</h3>
              <p>{table.description}</p>
              <div className="research-table">
                <div className="research-table__head">
                  {table.columns.map((column) => (
                    <span key={column}>{column}</span>
                  ))}
                </div>
                {table.rows.map((row) => (
                  <div className="research-table__row" key={row.join("-")}>
                    {row.map((cell) => (
                      <span key={cell}>{cell}</span>
                    ))}
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">Этапы исследования</p>
          <h2>Логика развития исследования</h2>
        </div>
        <div className="timeline">
          {timeline.map((item) => (
            <article className="timeline-card" key={item.phase}>
              <span className="timeline-card__phase">{item.phase}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <article className="panel summary-panel">
          <p className="eyebrow">Вывод</p>
          <h2>Главный вывод о проекте</h2>
          <p>
            Проект ценен тем, что переводит идею Роя Дайсона из области общего научно-фантастического образа в язык
            инженерного исследования. В нём уже определены материалы отражателя, оценена масса конструкции, рассчитано
            безопасное расстояние до Солнца и описана цепочка передачи энергии от орбитальной системы до Земли.
          </p>
          <p>
            Главный результат работы не только в конкретных цифрах, но и в самой модели: проект показывает, какие
            параметры действительно критичны для реализации такой системы. Сейчас основным ограничением остаются большие
            потери энергии, а значит дальнейшее развитие исследования должно концентрироваться на улучшении каналов передачи,
            оптимизации архитектуры и переходе к более эффективным приёмникам и передатчикам.
          </p>
        </article>
      </section>
    </>
  );
}
