// components/Plans.js
import React from 'react';
import PlanItem from './PlanItem.js';
import Image from 'next/image'

const plansData = [
  {
    model: "Intel Xeon E3-1270 v6",
    specs: "3.9GHz+ — Quick Sync",
    ram: "32GB DDR4",
    storage: "(4) 250GB SSD",
    bandwidth: "10TB @ 1Gbps",
    ip: "1 IPv4 + /64 IPv6",
    price: "$65/mo",
    details: {
      cpu: "Intel Xeon E3-1270 v6 (or similar)",
      clockSpeed: "3.9 GHz+",
      cores: "4 Cores / 8 Threads",
      ram: "32GB DDR4 ECC",
      storage: "4 x 250GB SSD (or configurable with HDDs)",
      bandwidth: "10TB @ 1Gbps",
      ip: "1 IPv4 + /64 IPv6",
      os: "CentOS, Ubuntu, Debian, Windows Server (Optional)",
      location: "USA, Europe (Multiple Locations)",
      quickSync: "Enabled",
      support: "24/7 Basic Support",
      setupTime: "Usually within 24-48 hours",
    },
  },
  {
    model: "Intel Xeon E5-1650 v4",
    specs: "4.0GHz+ Turbo",
    ram: "64GB DDR4",
    storage: "(4) 500GB SSD",
    bandwidth: "20TB @ 1Gbps",
    ip: "1 IPv4 + /64 IPv6",
    price: "$95/mo",
    details: {
      cpu: "Intel Xeon E5-1650 v4 (or similar)",
      clockSpeed: "4.0 GHz+ Turbo",
      cores: "6 Cores / 12 Threads",
      ram: "64GB DDR4 ECC",
      storage: "4 x 500GB SSD (RAID options available)",
      bandwidth: "20TB @ 1Gbps",
      ip: "1 IPv4 + /64 IPv6",
      os: "CentOS, Ubuntu, Debian, Windows Server (Optional)",
      location: "USA, Europe (Multiple Locations)",
      quickSync: "Disabled",
      support: "24/7 Basic Support",
      setupTime: "Usually within 24-48 hours",
    },
  },
  {
    model: "2X Intel Xeon E5-2670 v3",
    specs: "3.1GHz Turbo",
    ram: "128GB DDR4",
    storage: "(8) 1TB SSD",
    bandwidth: "30TB @ 1Gbps",
    ip: "1 IPv4 + /64 IPv6",
    price: "$145/mo",
    details: {
      cpu: "Dual Intel Xeon E5-2670 v3 (or similar)",
      clockSpeed: "2.3 GHz Base, 3.1 GHz Turbo",
      cores: "24 Cores / 48 Threads (Total)",
      ram: "128GB DDR4 ECC",
      storage: "8 x 1TB SSD (RAID options available)",
      bandwidth: "30TB @ 1Gbps",
      ip: "1 IPv4 + /64 IPv6",
      os: "CentOS, Ubuntu, Debian, Windows Server (Optional)",
      location: "USA, Europe (Multiple Locations)",
      quickSync: "Disabled",
      support: "24/7 Basic Support",
      setupTime: "Usually within 24-48 hours",
    },
  },
  {
    model: "AMD Ryzen 9 5950X",
    specs: "4.9GHz Boost",
    ram: "128GB DDR4",
    storage: "(2) 2TB NVMe SSD",
    bandwidth: "50TB @ 1Gbps",
    ip: "1 IPv4 + /64 IPv6",
    price: "$195/mo",
    details: {
      cpu: "AMD Ryzen 9 5950X",
      clockSpeed: "3.4 GHz Base, 4.9 GHz Boost",
      cores: "16 Cores / 32 Threads",
      ram: "128GB DDR4",
      storage: "2 x 2TB NVMe SSD (High-speed storage)",
      bandwidth: "50TB @ 1Gbps",
      ip: "1 IPv4 + /64 IPv6",
      os: "CentOS, Ubuntu, Debian, Windows Server (Optional)",
      location: "USA, Europe (Multiple Locations)",
      quickSync: "N/A",
      support: "24/7 Basic Support",
      setupTime: "Usually within 24-48 hours",
    },
  },
  {
    model: "2X Intel Xeon Gold 6248R",
    specs: "4.0GHz Turbo",
    ram: "256GB DDR4",
    storage: "(12) 960GB SSD",
    bandwidth: "100TB @ 1Gbps",
    ip: "1 IPv4 + /64 IPv6",
    price: "$345/mo",
    details: {
      cpu: "Dual Intel Xeon Gold 6248R (or similar)",
      clockSpeed: "3.0 GHz Base, 4.0 GHz Turbo",
      cores: "48 Cores / 96 Threads (Total)",
      ram: "256GB DDR4 ECC",
      storage: "12 x 960GB SSD (Enterprise-grade)",
      bandwidth: "100TB @ 1Gbps",
      ip: "1 IPv4 + /64 IPv6",
      os: "CentOS, Ubuntu, Debian, Windows Server (Optional)",
      location: "USA, Europe (Multiple Locations)",
      quickSync: "N/A",
      support: "24/7 Premium Support",
      setupTime: "Usually within 24-48 hours",
    },
  },
  {
    model: "AMD EPYC 7742",
    specs: "3.4GHz Boost",
    ram: "512GB DDR4",
    storage: "(16) 1.92TB NVMe SSD",
    bandwidth: "Unmetered @ 1Gbps",
    ip: "1 IPv4 + /64 IPv6",
    price: "$595/mo",
    details: {
      cpu: "AMD EPYC 7742",
      clockSpeed: "2.25 GHz Base, 3.4 GHz Boost",
      cores: "64 Cores / 128 Threads",
      ram: "512GB DDR4 ECC",
      storage: "16 x 1.92TB NVMe SSD (Ultra-fast)",
      bandwidth: "Unmetered @ 1Gbps",
      ip: "1 IPv4 + /64 IPv6",
      os: "CentOS, Ubuntu, Debian, Windows Server (Optional)",
      location: "USA, Europe (Multiple Locations)",
      quickSync: "N/A",
      support: "24/7 Priority Support",
      setupTime: "Usually within 24-48 hours",
    },
  },
    // Add more plan objects here as needed
];

function Plans() {
    return (
        <div className="bg-zinc-800 text-white">
            <div className="p-5 py-24 sm:py-32 container mx-auto flex flex-col max-w-[100rem]" id="Plans"> {/* Changed from default container to max-w-[100rem] */}
                <div className="mx-auto max-w-2xl lg:text-center">
                    <h2 className="ls font-semibold text-[#7964e4] text-xl uppercase">Pricing</h2>
                    <p className="mt-2 ls sm:text-6xl text-5xl font-black text-white [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">
                        High Performance Bare Metal
                    </p>
                    <p className="mt-6 text-lg/8 text-zinc-300">
                        Choose from our range of dedicated servers powered by latest generation processors and enterprise-grade hardware.
                    </p>
                    
                    
                </div>
                <div className="hidden 2xl:grid grid-cols-7 gap-2 p-5 mt-4"> {/* Reduced gap from 4 to 2 */}
                    <span className="opacity-90 ls font-bold text-left ml-15 min-w-[280px]">MODEL</span>
                    <span className="opacity-90 ls font-bold text-center">RAM</span>
                    <span className="opacity-90 ls font-bold text-center">STORAGE</span>
                    <span className="opacity-90 ls font-bold text-center">BANDWIDTH</span>
                    <span className="opacity-90 ls font-bold text-center">IP</span>
                    <span className="opacity-90 ls font-bold text-center">PRICE</span>
                    <span className="opacity-90 ls font-bold text-center"></span>
                </div>
                <div className="flex flex-col gap-0">  {/* Changed gap-4 to gap-0 */}
                    {plansData.map((plan, index) => (
                        <PlanItem key={index} plan={plan} />
                    ))}
                </div>
                 <div className="2xl:hidden hidden lg:flex flex-row justify-between items-center gap-4 hover:bg-zinc-700 transition-all duration-300 p-5 border-b border-zinc-700">
                        <div className="flex flex-col gap-2">
                            <div className="flex flex-col items-start min-w-[280px]">
                                <span className="ls font-bold text-center whitespace-nowrap">Intel Xeon E3</span>
                                <span className="ls opacity-70">3.9GHz+ — Quick Sync</span>
                            </div>
                            <div className="flex flex-row gap-8 items-center">
                                <div className="flex items-center justify-center">
                                    <span className="ls font-medium text-center">32GB+ DDR4</span>
                                </div>
                                <div className="flex items-center justify-center">
                                    <span className="ls font-medium text-center">(4) SSDs/HDDs</span>
                                </div>
                                <div className="flex items-center justify-center">
                                    <span className="ls font-medium text-center">10TB @ 1Gbps</span>
                                </div>
                                <div className="flex items-center justify-center">
                                    <span className="ls font-medium text-center">1 IPv4 + /64 IPv6</span>
                                </div>
                                <div className="flex items-center justify-center">
                                    <span className="ls font-medium text-center text-lg">$65/mo</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-center pr-2">
                            <div className="flex gap-2">
                                <button className="details-button flex items-center gap-2 text-white rounded-none border-zinc-500 border-r-4 border-t-4 bg-zinc-600 px-4 py-2 font-bold hover:bg-zinc-500 hover:text-white hover:translate-x-1 transition-all duration-300 whitespace-nowrap max-w-[140px]" data-plan="xeon-e3">
                                    <span>Details</span>
                                </button>
                                <a target="_blank" href="/about/dedicated/xeon-e3">
                                    <button className="flex items-center gap-2 text-white rounded-none border-[#7964e4] border-r-4 border-t-4 bg-[#7964e4] px-4 py-2 font-bold hover:bg-[#7964e4]/90 hover:text-white hover:translate-x-1 transition-all duration-300 whitespace-nowrap max-w-[140px]">
                                        <span>Buy Now</span>
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M4.23017 13.7094C3.93159 13.9965 3.92228 14.4713 4.20938 14.7698C4.49647 15.0684 4.97125 15.0777 5.26983 14.7906L9.76983 10.5406C9.91689 10.3992 10 10.204 10 10C10 9.79599 9.91689 9.60078 9.76983 9.45938L5.26983 5.20938C4.97125 4.92228 4.49647 4.93159 4.20938 5.23017C3.92228 5.52875 3.93159 6.00353 4.23017 6.29063L8.16792 10L4.23017 13.7094Z" fill="white"/>
                                            <path d="M10.2302 13.7094C9.93159 13.9965 9.92228 14.4713 10.2094 14.7698C10.4965 15.0684 10.9713 15.0777 11.2698 14.7906L15.7698 10.5406C15.9169 10.3992 16 10.204 16 10C16 9.79599 15.9169 9.60078 15.7698 9.45938L11.2698 5.20938C10.9713 4.92228 10.4965 4.93159 10.2094 5.23017C9.92228 5.52875 9.93159 6.00353 10.2302 6.29063L14.1679 10L10.2302 13.7094Z" fill="white"/>
                                        </svg>
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    );
}

export default Plans;