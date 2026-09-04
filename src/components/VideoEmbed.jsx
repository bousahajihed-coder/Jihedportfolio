export default function VideoEmbed({ video }) {
  const src =
    video.type === 'youtube'
      ? `https://www.youtube-nocookie.com/embed/${video.id}`
      : `https://player.vimeo.com/video/${video.id}`

  return (
    <iframe
      src={src}
      title="Case study video"
      className="absolute inset-0 w-full h-full"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
      allowFullScreen
    />
  )
}
