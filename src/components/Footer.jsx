export default function Footer() {
  return (
    <footer className="w-full bg-black border-t border-white/10 py-8">
      <div className="max-w-6xl mx-auto px-6 md:px-10 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-paper/40">
        <span>&copy; {new Date().getFullYear()} Jihed Bousaha</span>
        <span>Producer &middot; Berlin</span>
      </div>
    </footer>
  )
}
