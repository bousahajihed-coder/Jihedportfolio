export default function Footer() {
  return (
    <footer className="w-full bg-sky text-ink py-8">
      <div className="max-w-6xl mx-auto px-6 md:px-10 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-ink/50 font-semibold uppercase tracking-wide">
        <span>&copy; {new Date().getFullYear()} Jihed Bousaha</span>
        <span>Creative Producer &middot; Berlin</span>
      </div>
    </footer>
  )
}
