import Image from 'next/image'

const programs = [
  {
    id: 1,
    title: 'Community Capacity',
    date: 'Date: 06/12/2024',
    description: 'Practical workshops designed to give individuals the leadership skills needed to steer local transformation.',
  },
  {
    id: 2,
    title: 'Leadership Agency',
    date: 'Date: 08/20/2024',
    description: 'Fostering individual mentorship programs that connect emerging voices with seasoned social innovators.',
  },
  {
    id: 3,
    title: 'Sustainable Growth',
    date: 'Date: 07/15/2024',
    description: 'Investing in environmental and economic infrastructures to ensure long-term resilience and independence.',
  },
  {
    id: 4,
    title: 'Collective Initiative',
    date: 'Date: 08/01/2024',
    description: 'Empowering local groups through advocacy tools and platforms dedicated to amplifying community-led change.',
  },
]

export function Programs() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-16 text-center text-balance">
          Our Programs & Initiatives
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {programs.map((program) => (
            <div key={program.id} className="border-2 border-gray-300 rounded-lg overflow-hidden hover:shadow-lg transition">
              <div className="bg-gradient-to-b from-blue-200 to-blue-100 h-48 relative">
                <svg className="w-full h-full" viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice">
                  {/* Mountain illustration */}
                  <defs>
                    <linearGradient id={`grad${program.id}`} x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" style={{ stopColor: '#B0E0E6', stopOpacity: 1 }} />
                      <stop offset="100%" style={{ stopColor: '#E0F4F7', stopOpacity: 1 }} />
                    </linearGradient>
                  </defs>
                  <rect width="400" height="300" fill={`url(#grad${program.id})`} />
                  <circle cx="320" cy="80" r="25" fill="white" opacity="0.6" />
                  <polygon points="100,150 200,50 300,150" fill="#F5F5DC" opacity="0.9" />
                  <polygon points="250,150 320,80 380,150" fill="#D3D3D3" opacity="0.7" />
                  <polygon points="0,150 80,100 160,150" fill="#E8E8E8" opacity="0.8" />
                </svg>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-primary mb-1">{program.title}</h3>
                <p className="text-secondary text-sm mb-3">{program.date}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{program.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="border-2 border-secondary text-secondary px-8 py-3 rounded-full font-semibold hover:bg-secondary hover:text-white transition">
            View All Programs
          </button>
        </div>
      </div>
    </section>
  )
}
