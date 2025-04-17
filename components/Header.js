'use client'

import { useState, useEffect } from 'react'
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/react'
import {
  Bars3Icon,
  ServerIcon,
  CloudArrowUpIcon,
  CpuChipIcon,
  PlayCircleIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'

const hosting = [
  { 
    name: 'VPS Hosting', 
    description: 'Virtual private servers with guaranteed resources', 
    href: '/vps-servers', 
    icon: CpuChipIcon 
  },
  { 
    name: 'Dedicated Servers', 
    description: 'Enterprise-grade bare metal servers with full root access', 
    href: '/dedicated-servers', 
    icon: ServerIcon 
  },
  { 
    name: 'Web Hosting', 
    description: 'Reliable shared hosting for websites and applications', 
    href: '/web-hosting', 
    icon: CloudArrowUpIcon 
  },
  { 
    name: 'Game Hosting', 
    description: 'Low-latency game servers with DDoS protection', 
    href: '/game-hosting', 
    icon: PlayCircleIcon  
  },
]

const company = [
  { name: 'About Us', href: '/about' },
  { name: 'Contact Us', href: '/contact' },
  { name: 'Blog', href: '/blog' },
]

const SCHostLogo = () => (
  <span className="text-xl font-bold text-white hover:text-[#7964e4] transition-colors">
    SCHOST
  </span>
)

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setIsScrolled(scrollPosition > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header 
      className={`
        fixed top-0 w-full z-50 transition-all duration-300
        ${isScrolled 
          ? 'bg-zinc-950/60 border-b border-white/5 backdrop-blur-xl backdrop-saturate-150' 
          : 'bg-transparent border-b border-transparent'}
      `}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8 relative z-10">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 transition-transform hover:scale-105">
            <span className="sr-only">SCHOST</span>
            <SCHostLogo />
          </Link>
        </div>

        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white focus:outline-none"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-white hover:text-[#7964e4] transition-colors focus:outline-none">
              Hosting Solutions
              <ChevronDownIcon className="h-5 w-5 flex-none text-zinc-400" aria-hidden="true" />
            </PopoverButton>
            <PopoverPanel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-zinc-900 shadow-lg ring-1 ring-white/10">
              <div className="p-4">
                {hosting.map((item) => (
                  <div
                    key={item.name}
                    className="group relative flex gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-zinc-800"
                  >
                    <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-zinc-800 group-hover:bg-[#7964e4]">
                      <item.icon className="h-6 w-6 text-white" aria-hidden="true" />
                    </div>
                    <div className="flex-auto">
                      <a href={item.href} className="block font-semibold text-white">
                        {item.name}
                        <span className="absolute inset-0" />
                      </a>
                      <p className="mt-1 text-zinc-400">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </PopoverPanel>
          </Popover>

          {company.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6 text-white hover:text-[#7964e4] transition-colors focus:outline-none"
            >
              {item.name}
            </a>
          ))}
        </PopoverGroup>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a 
            href="/login" 
            className="text-sm font-semibold leading-6 text-white hover:text-[#7964e4] transition-all duration-300 flex items-center gap-1 focus:outline-none"
          >
            Log in <span aria-hidden="true">→</span>
          </a>
        </div>
      </nav>

      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-zinc-950/80 backdrop-blur-xl backdrop-saturate-150 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-zinc-700/50">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5 focus:outline-none">
              <span className="sr-only">SCHost</span>
              <SCHostLogo />
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-white focus:outline-none"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-zinc-700">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-white hover:bg-zinc-800 focus:outline-none focus:ring-0">
                    Hosting Solutions
                    <ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none group-data-[open]:rotate-180" />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {hosting.map((item) => (
                      <DisclosureButton
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-white hover:bg-zinc-800"
                      >
                        {item.name}
                      </DisclosureButton>
                    ))}
                  </DisclosurePanel>
                </Disclosure>

                {company.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-zinc-800"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="py-6">
                <a
                  href="/login"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white hover:bg-zinc-800"
                >
                  Log in
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}