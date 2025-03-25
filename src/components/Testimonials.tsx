'use client';
export default function Testimonials() {
    return (
      <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,var(--color-indigo-100),white)] opacity-20" />
        <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white ring-1 shadow-xl shadow-indigo-600/10 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <img
            alt="IAS/PES ISIMM Logos"
            src="/IASPESISIMMlogo.webp"
            className="mx-auto h-18 w-auto mb-10"
          />
          <figure className="mt-10">
            <blockquote className="text-center text-xl/8 font-semibold text-gray-900 sm:text-2xl/9">
              <p>
                “At IAS, we believe in bridging the gap between theory and real-world application. 
                Our commitment lies in driving innovation, promoting sustainable energy solutions, 
                and ensuring the safety and efficiency of industrial systems. Together, 
                we are shaping the future of industry through advanced electrical engineering practices and leadership.”
              </p>
            </blockquote>
          </figure>
        </div>
      </section>
    )
  }
  