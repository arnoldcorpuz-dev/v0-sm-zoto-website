export function Navigation() {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-primary rounded flex items-center justify-center">
            <span className="text-white font-bold text-lg">S</span>
          </div>
          <span className="font-bold text-primary text-lg hidden sm:inline">SM-ZOTO</span>
        </div>
        
        <div className="flex items-center gap-8">
          <div className="hidden md:flex gap-8">
            <a href="#" className="text-primary hover:font-semibold transition">Home</a>
            <a href="#" className="text-primary hover:font-semibold transition">Programs and Services</a>
            <a href="#" className="text-primary hover:font-semibold transition">About Us</a>
            <a href="#" className="text-primary hover:font-semibold transition">Gallery</a>
            <a href="#" className="text-primary hover:font-semibold transition">Contact Us</a>
          </div>
          
          <button className="bg-primary text-white px-6 py-2 rounded-full font-semibold hover:bg-opacity-90 transition">
            DONATE NOW
          </button>
        </div>
      </div>
    </nav>
  )
}
