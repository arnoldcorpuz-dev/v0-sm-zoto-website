export function About() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=500&h=400&fit=crop"
              alt="SM-ZOTO Community"
              className="rounded-lg w-full h-96 object-cover"
            />
          </div>
          
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 text-balance">
              About Us – Welcome to SM-ZOTO
            </h2>
            
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                <span className="font-semibold text-primary">SMZOTO Incorporated</span> is a federation of 646 urban poor local organizations in twenty eight (28) relocation sites in Metro Manila and nearby areas.
              </p>
              
              <p>
                These relocation sites are Dasmarinas, Silang, Bulihan, General Trias, Tanza and GMA, Cavite; Bagong Silang, Tala, Dagat-Dagatan, Camarin, Caloocan City; Dagat-Dagatan Malabon City, Dagat-Dagatan Navotas City, Tondo, Manila; Sapang Palay, Muzon, Towerville, Citrus, Minuyan 5 Gaya-gaya, Grace ville of San Jose Del Monte, Bulacan, Pandacaqui in Pampanga.
              </p>
              
              <p>
                The Organization was founded in 1970 at the Tondo Foreshore Land when residents were to be demolished in favour of an IMF/World Bank Funded project – an international port. At the time, this area was the biggest colony of the slum dwellers of informal settlers in Asia.
              </p>
            </div>
            
            <button className="mt-8 text-secondary font-semibold hover:underline">
              Learn More →
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
