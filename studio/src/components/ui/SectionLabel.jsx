import './SectionLabel.css'

// Small chapter marker, e.g. "(03) — Selected work".
export default function SectionLabel({ index, children, className = '' }) {
  return (
    <p className={`section-label label ${className}`.trim()}>
      {index != null && <span className="section-label__index">({String(index).padStart(2, '0')})</span>}
      <span className="section-label__rule" aria-hidden="true" />
      <span>{children}</span>
    </p>
  )
}
