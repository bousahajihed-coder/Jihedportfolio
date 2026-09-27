import './PillButton.css'

// Rounded call-to-action. variant: 'outline' (white border, glassy fill)
// or 'lime' (solid accent).
export default function PillButton({ href, onClick, variant = 'outline', type, children, className = '', ...rest }) {
  const classes = `pill pill--${variant} ${className}`.trim()
  const content = (
    <span className="pill__label">
      <span>{children}</span>
      <span aria-hidden="true">{children}</span>
    </span>
  )
  if (href) {
    return (
      <a className={classes} href={href} onClick={onClick} {...rest}>
        {content}
      </a>
    )
  }
  return (
    <button className={classes} type={type ?? 'button'} onClick={onClick} {...rest}>
      {content}
    </button>
  )
}
