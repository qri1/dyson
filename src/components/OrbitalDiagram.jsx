import { systemModules } from "../data/research";

export function OrbitalDiagram({ activeId, onSelect }) {
  const labels = {
    reflectors: { x: 34, y: 24 },
    primary: { x: 35, y: 56 },
    relays: { x: 64, y: 35 },
    secondary: { x: 76, y: 62 },
  };

  return (
    <div className="system-scheme">
      <div className="system-scheme__sun" />
      <div className="system-scheme__earth" />
      <div className="system-scheme__earth-glow" />

      <div className="system-scheme__beam system-scheme__beam--one" />
      <div className="system-scheme__beam system-scheme__beam--two" />
      <div className="system-scheme__beam system-scheme__beam--three" />
      <div className="system-scheme__beam system-scheme__beam--four" />

      <div className="system-scheme__caption system-scheme__caption--sun">Солнце</div>
      <div className="system-scheme__caption system-scheme__caption--earth">Земля</div>
      <div className="system-scheme__flow system-scheme__flow--two">концентрация</div>
      <div className="system-scheme__flow system-scheme__flow--three">ретрансляция</div>
      <div className="system-scheme__flow system-scheme__flow--four">приём на Земле</div>

      {systemModules.map((module) => (
        <button
          key={module.id}
          className={`scheme-node ${activeId === module.id ? "scheme-node--active" : ""}`}
          style={{ left: `${labels[module.id].x}%`, top: `${labels[module.id].y}%` }}
          onClick={() => onSelect(module.id)}
          type="button"
        >
          <span>{module.title}</span>
        </button>
      ))}
    </div>
  );
}
