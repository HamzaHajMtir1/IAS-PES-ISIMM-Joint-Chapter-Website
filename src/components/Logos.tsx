'use client'

export default function Logos() {
    return (
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
            <a 
              href="https://ias.ieee.org/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="col-span-2 lg:col-span-1"
            >
              <img
                alt="IEEE Industry Applications Society"
                src="/About/ias.webp"
                width={316}
                height={96}
                className="max-h-24 w-full object-contain transition-transform duration-500 hover:scale-125"
              />
            </a>
            <a 
              href="https://www.ieee-pes.org/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="col-span-2 lg:col-span-1"
            >
              <img
                alt="IEEE Power & Energy Society"
                src="/About/pes.webp"
                width={316}
                height={96}
                className="max-h-24 w-full object-contain transition-transform duration-500 hover:scale-125"
              />
            </a>
            <a 
              href="https://ieee.tn/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="col-span-2 lg:col-span-1"
            >
              <img
                alt="IEEE Tunisia Section"
                src="/About/IEEESection.png"
                width={316}
                height={96}
                className="max-h-24 w-full object-contain transition-transform duration-500 hover:scale-125"
              />
            </a>
            <a 
              href="http://www.isimm.rnu.tn/public/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="col-span-2 sm:col-start-2 lg:col-span-1"
            >
              <img
                alt="IEEE ISIMM Student Branch"
                src="/About/IEEEisimm.webp"
                width={300}
                height={96}
                className="max-h-24 w-full object-contain transition-transform duration-500 hover:scale-125"
              />
            </a>
            <a 
              href="https://www.ieee.org/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="col-span-2 sm:col-start-2 lg:col-span-1"
            >
              <img
                alt="IEEE"
                src="/About/IEEElogo.webp"
                width={300}
                height={96}
                className="max-h-24 w-full object-contain transition-transform duration-500 hover:scale-125"
              />
            </a>
          </div>
        </div>
      </div>
    );
  }