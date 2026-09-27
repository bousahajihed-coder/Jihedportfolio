import './ServiceMark.css'

// Placeholder mark for a service: a simple geometric glyph plus the name
// set in spaced capitals. Replace with real sub-brand logos later.
export default function ServiceMark({ service, size = 'md', color }) {
  return (
    <span className={`service-mark service-mark--${size}`} style={{ '--mark': color ?? service.accent }}>
      <span className={`service-mark__glyph service-mark__glyph--${service.mark}`} aria-hidden="true" />
      <span className="service-mark__name">{service.name}</span>
    </span>
  )
}
