export default function AvailabilityBadge({ className = '' }) {
  return (
    <span className={`inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wide ${className}`}>
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
      </span>
      Available for new projects
    </span>
  )
}
