import { useState } from 'react'

function videoTitle(video) {
  return [video.brand, video.title].filter(Boolean).join(' — ') || 'Production video'
}

export default function VideoEmbed({ video }) {
  const [playing, setPlaying] = useState(false)
  const title = videoTitle(video)

  if (video.type === 'youtube' && !playing) {
    return (
      <button
        type="button"
        onClick={() => setPlaying(true)}
        aria-label={`Play ${title}`}
        className="group absolute inset-0 w-full h-full"
      >
        <img
          src={`https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`}
          alt=""
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <span className="absolute inset-0 bg-ink/10 group-hover:bg-ink/25 transition-colors" />
        <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-paper/90 flex items-center justify-center">
          <span className="ml-1 w-0 h-0 border-y-[9px] border-y-transparent border-l-[14px] border-l-ink" />
        </span>
      </button>
    )
  }

  const src =
    video.type === 'youtube'
      ? `https://www.youtube-nocookie.com/embed/${video.id}?autoplay=1`
      : `https://player.vimeo.com/video/${video.id}`

  return (
    <iframe
      src={src}
      title={title}
      loading="lazy"
      className="absolute inset-0 w-full h-full"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
      allowFullScreen
    />
  )
}
