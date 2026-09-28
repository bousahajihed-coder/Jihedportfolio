import { useEffect, useRef } from 'react'
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion'
import './Media.css'

// Single entry point for every image or video on the site.
//
//   video: { src, type, poster } or { sources: [{ src, type }], poster }
//          → muted, looping, plays only while visible
//   image: { src, srcSet, alt, width, height }   (or a slot from content/images.js)
//   neither → a graded placeholder frame. For a slot without `src`, the
//   slot's `scene` sets the look and its shot brief becomes the caption.
//
// `ratio` sets the aspect ratio ('16 / 9', '21 / 9' …) — pass null to size
// it from CSS instead. `fill` makes the media cover its positioned parent.
export default function Media({
  video,
  image,
  alt = '',
  ratio = '16 / 9',
  fill = false,
  scene = 'studio',
  caption,
  sizes = '100vw',
  priority = false,
  className = '',
}) {
  const classes = ['media', fill && 'media--fill', className].filter(Boolean).join(' ')
  const style = fill || !ratio ? undefined : { aspectRatio: ratio }
  const hasVideo = Boolean(video?.src || video?.sources?.length)
  const placeholderScene = image?.scene ?? scene
  const placeholderCaption = image?.brief ?? caption

  return (
    <div className={classes} style={style}>
      {hasVideo ? (
        <AmbientVideo video={video} poster={video.poster ?? image?.src} />
      ) : image?.src ? (
        <img
          src={image.src}
          srcSet={image.srcSet}
          sizes={image.srcSet ? sizes : undefined}
          alt={image.alt ?? alt}
          width={image.width}
          height={image.height}
          loading={priority ? 'eager' : 'lazy'}
          fetchPriority={priority ? 'high' : undefined}
          decoding="async"
        />
      ) : (
        <Placeholder scene={placeholderScene} caption={placeholderCaption} alt={image?.alt ?? alt} />
      )}
    </div>
  )
}

function AmbientVideo({ video, poster }) {
  const ref = useRef(null)
  const reduced = usePrefersReducedMotion()

  // Play only while on screen; never autoplay for reduced-motion users.
  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (reduced) {
      el.pause()
      return
    }
    const io = new IntersectionObserver(
      ([entry]) => (entry.isIntersecting ? el.play().catch(() => {}) : el.pause()),
      { threshold: 0.1 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [reduced])

  const sources = video.sources ?? [{ src: video.src, type: video.type }]

  return (
    <video ref={ref} muted loop playsInline preload="metadata" poster={poster} aria-hidden="true">
      {sources.map((s) => (
        <source key={s.src} src={s.src} type={s.type} />
      ))}
    </video>
  )
}

function Placeholder({ scene, caption, alt }) {
  return (
    <div
      className="media-placeholder"
      data-scene={scene}
      role={alt ? 'img' : undefined}
      aria-label={alt || undefined}
      aria-hidden={alt ? undefined : 'true'}
    >
      <span className="media-placeholder__light" />
      <span className="media-placeholder__grain" />
      {caption && (
        <span className="media-placeholder__caption">
          <span className="media-placeholder__tag">Still</span>
          {caption}
        </span>
      )}
    </div>
  )
}
