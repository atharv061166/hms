import { Link } from 'react-router-dom';
import './PanelPage.css';

const PanelPageTemplate = ({
  title,
  subtitle,
  description,
  badge,
  badgeIcon,
  stats = [],
  highlights = [],
  sections = [],
  activity = [],
  backLink = '/dashboard'
}) => {
  return (
    <div className="panel-page">
      <header className="panel-header">
        <div>
          <div className="panel-eyebrow">
            {badgeIcon && <span className="panel-badge-icon">{badgeIcon}</span>}
            <span className="panel-badge">{badge}</span>
          </div>
          <h1>{title}</h1>
          <p>{subtitle}</p>
        </div>
        <p className="panel-description">{description}</p>
      </header>

      {stats.length > 0 && (
        <section className="panel-section">
          <div className="panel-grid stats">
            {stats.map((item) => (
              <div key={item.label} className="panel-stat">
                <span className="panel-stat-label">{item.label}</span>
                <strong>{item.value}</strong>
                <span className="panel-stat-trend">{item.trend}</span>
              </div>
            ))}
          </div>
        </section>
      )}

      {highlights.length > 0 && (
        <section className="panel-section">
          <h2>Key Highlights</h2>
          <div className="panel-grid highlights">
            {highlights.map((item) => (
              <div key={item.title} className="panel-card">
                <div className="panel-card-icon">{item.icon}</div>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  {item.meta && <span className="panel-card-meta">{item.meta}</span>}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {sections.map((section) => (
        <section className="panel-section" key={section.title}>
          <div className="panel-section-heading">
            <h2>{section.title}</h2>
            {section.cta && <span className="panel-section-cta">{section.cta}</span>}
          </div>
          <div className="panel-table">
            <div className="panel-table-head">
              {section.columns.map((col) => (
                <span key={col}>{col}</span>
              ))}
            </div>
            {section.rows.map((row, idx) => (
              <div className="panel-table-row" key={`${section.title}-${idx}`}>
                {row.map((cell, cellIdx) => (
                  <span key={cellIdx}>{cell}</span>
                ))}
              </div>
            ))}
          </div>
        </section>
      ))}

      {activity.length > 0 && (
        <section className="panel-section">
          <h2>Recent Activity</h2>
          <div className="panel-activity">
            {activity.map((item, idx) => (
              <div key={idx} className="panel-activity-item">
                <span className="panel-activity-time">{item.time}</span>
                <div>
                  <p>{item.message}</p>
                  <span>{item.meta}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      <div className="panel-footer">
        <Link to={backLink}>← Back to Dashboard</Link>
      </div>
    </div>
  );
};

export default PanelPageTemplate;






