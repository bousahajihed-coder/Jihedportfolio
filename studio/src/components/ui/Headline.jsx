import { useReveal } from '../../hooks/useReveal'
import './Headline.css'

// Uppercase display headline set line by line. Lines marked `bold` use the
// heavy cut. Each line rises out of its own mask when the headline enters
// the viewport (or immediately on load with `immediate`).
export default function Headline({ as: Tag = 'h2', lines, className = '', immediate = false, id }) {
  const [ref, visible] = useReveal()
  const shown = immediate || visible

  return (
    <Tag ref={ref} id={id} className={`headline ${shown ? 'is-in' : ''} ${className}`.trim()}>
      {lines.map((line, i) => (
        <span key={i} className={`headline__line ${line.bold ? 'is-bold' : ''}`}>
          <span style={{ '--i': i }}>{line.text}</span>
        </span>
      ))}
    </Tag>
  )
}
