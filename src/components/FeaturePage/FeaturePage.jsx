import { Link } from 'react-router-dom';
import './FeaturePage.css';

const FeaturePage = ({
  title,
  subtitle,
  overview,
  icon,
  keyHighlights = [],
  workflows = [],
  stats = [],
  tables = [],
  cta = {
    text: 'Back to Home',
    link: '/',
  },
}) => {
  return (
    <div className="feature-page">
      <header className="feature-header">
        <div className="feature-icon">{icon}</div>
        <div>
          <p className="feature-subtitle">{subtitle}</p>
          <h1>{title}</h1>
          <p className="feature-overview">{overview}</p>
        </div>
      </header>

      <section className="feature-section">
        <h2>Key Highlights</h2>
        <div className="feature-grid">
          {keyHighlights.map((item) => (
            <div key={item.title} className="feature-card">
              <div className="feature-card-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {workflows.length > 0 && (
        <section className="feature-section">
          <h2>Core Workflows</h2>
          <ol className="workflow-list">
            {workflows.map((item, idx) => (
              <li key={idx}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </li>
            ))}
          </ol>
        </section>
      )}

      {stats.length > 0 && (
        <section className="feature-section stats">
          {stats.map((stat) => (
            <div key={stat.label} className="stat-card">
              <span className="stat-value">{stat.value}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </section>
      )}

      {tables.length > 0 && tables.map((table) => (
        <section key={table.title} className="feature-section feature-table-section">
          <div className="feature-section-heading">
            <h2>{table.title}</h2>
            {table.subtitle && <p className="feature-table-subtitle">{table.subtitle}</p>}
          </div>
          <div className="feature-table">
            <div className="feature-table-head">
              {table.columns.map((col) => (
                <span key={col}>{col}</span>
              ))}
            </div>
            {table.rows.map((row, idx) => (
              <div key={`${table.title}-${idx}`} className="feature-table-row">
                {row.map((cell, cellIdx) => (
                  <span key={cellIdx}>{cell}</span>
                ))}
              </div>
            ))}
          </div>
        </section>
      ))}

      <div className="feature-cta">
        <Link to={cta.link}>{cta.text}</Link>
      </div>
    </div>
  );
};

export default FeaturePage;



