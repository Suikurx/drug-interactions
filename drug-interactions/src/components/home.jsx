import { Link } from 'react-router-dom'
import Navbar from './navbar'

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56 text-center">
          <h1 className="text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
            Take Control of Your Health
          </h1>
          <p className="mt-8 text-lg font-medium text-gray-500 sm:text-xl/8">
            Prevent adverse health affects and symptoms
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              to="/medicines"
              className="rounded-md bg-[#181520] px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-[#282436]"
            >
              Get started
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

