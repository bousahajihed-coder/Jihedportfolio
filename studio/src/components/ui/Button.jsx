import './Button.css'

// Call to action, three weights:
//   'link'    text with a hairline underline and arrow (default, most places)
//   'outline' hard-edged frame, for the few primary actions
//   'solid'   filled, for form submission
export default function Button({ href, onClick, variant = 'link', type, arrow = true, children, className = '', ...rest }) {
  const classes = `btn btn--${variant} ${className}`.trim()
  const content = (
    <>
      <span className="btn__text">{children}</span>
      {arrow && (
        <span className="btn__arrow" aria-hidden="true">
          →
        </span>
      )}
    </>
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
