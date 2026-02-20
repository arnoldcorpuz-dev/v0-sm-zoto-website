export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="border-b border-gray-700 pb-12 mb-8">
          <div className="text-center mb-8">
            <h3 className="text-lg font-bold tracking-wider">
              UNITY • RESILIENCE • COMMUNITY EMPOWERMENT
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Column 1 */}
            <div>
              <p className="text-sm text-gray-400 leading-relaxed">
                The Organization was founded in 1970 at the Tondo Foreshore Land when residents were to be demolished in favour of an IMF/World Bank Funded project – an international port. At the time, this area was the biggest colony of the slum dwellers of informal settlers in Asia.
              </p>
            </div>
            
            {/* Column 2 */}
            <div>
              <p className="text-sm text-gray-400 mb-4">
                456 Community Lane,<br />
                Suite 100, New York, NY 10008Blk.
              </p>
              <p className="text-sm text-gray-400">
                3L Lot 91-83 Phase II<br />
                Area II Maye-Maya St. Dagat-Dagatan, Navotas, M.M.<br />
                Philippines
              </p>
              
              <div className="mt-6">
                <p className="text-sm mb-2">sm-zoto@yahoo.com</p>
                <p className="text-sm">(+632) 285-0254</p>
              </div>
            </div>
            
            {/* Column 3 */}
            <div className="space-y-4">
              <div>
                <p className="text-sm font-semibold mb-3">Terms of Use</p>
                <p className="text-sm text-gray-400">Privacy Policy</p>
              </div>
              <div>
                <p className="text-sm font-semibold mb-3">Non-Discrimination Policy</p>
              </div>
              <div>
                <p className="text-sm font-semibold mb-3">Partner with us</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <p className="text-5xl md:text-6xl font-bold text-white">
            community empower.
          </p>
        </div>
      </div>
    </footer>
  )
}
