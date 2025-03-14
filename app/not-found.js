import Link from 'next/link';

export default function NotFound() {
    return (
      <main className="grid min-h-screen place-items-center bg-zinc-800 px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="text-7xl sm:text-8xl md:text-8xl lg:text-7xl xl:text-8xl font-black text-[#7964e4] [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">
            404
          </p>
          <h1 className="mt-4 text-5xl sm:text-6xl md:text-6xl lg:text-5xl xl:text-6xl font-black text-white [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">
            Page not found
          </h1>
          <p className="mt-6 text-lg md:text-xl text-zinc-300">
            Sorry, we couldn&apos;t find the page you&apos;re looking for.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/"
              className="flex items-center gap-2 text-white rounded-md bg-[#7964e4] px-4 py-2 font-bold 
              hover:bg-[#6753d3] hover:translate-y-[2px] hover:shadow-md hover:scale-[0.98]
              active:translate-y-[3px] active:shadow-sm
              transition-all ease-in-out duration-300"
            >
              Go back home
            </Link>
            <Link href="/contact" className="text-sm font-semibold text-white hover:text-[#7964e4] transition-colors">
              Contact support <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </main>
    )
}