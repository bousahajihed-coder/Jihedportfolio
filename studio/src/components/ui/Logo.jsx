import { site } from '../../config/site'
import './Logo.css'

// Renders the logo image when configured, otherwise a text wordmark.
export default function Logo({ className = '' }) {
  if (site.logo?.src) {
    return (
      <img
        className={`logo logo--image ${className}`.trim()}
        src={site.logo.src}
        alt={site.logo.alt ?? site.name}
        width={site.logo.width}
        height={site.logo.height}
      />
    )
  }
  return <span className={`logo logo--text ${className}`.trim()}>{site.name}</span>
}
