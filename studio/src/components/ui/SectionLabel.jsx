// Chapter marker used at the top of each section: "01 — Studio".
export default function SectionLabel({ index, children, className = '' }) {
  return (
    <p className={`section-label label ${className}`.trim()}>
      <span className="section-label__index">{String(index).padStart(2, '0')}</span>
      <span>{children}</span>
    </p>
  )
}
