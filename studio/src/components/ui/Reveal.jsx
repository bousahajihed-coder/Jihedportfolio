import { useReveal } from '../../hooks/useReveal'

// Wraps content in the page-wide reveal system. `delay` is in ms.
export default function Reveal({ as: Tag = 'div', delay = 0, className = '', style, children, ...rest }) {
  const [ref, visible] = useReveal()
  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? 'is-visible' : ''} ${className}`.replace(/\s+/g, ' ').trim()}
      style={delay ? { '--reveal-delay': `${delay}ms`, ...style } : style}
      {...rest}
    >
      {children}
    </Tag>
  )
}
