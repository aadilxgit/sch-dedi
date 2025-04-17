"use client";
import { Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Plans from '../../components/Plans.js';
import dynamic from 'next/dynamic';

const ModelWithMouseTracking = dynamic(() => import('../../components/ModelWithMouseTracking'), {
    ssr: false
});

export default function DedicatedServers() {
    return (
        <div>
            <section className="relative bg-zinc-950 pt-28 pb-12 md:pt-32 md:pb-16">
                <div className="container mx-auto max-w-[100rem] px-4 sm:px-6 lg:px-8">
                    {}
                    <div className="absolute inset-0">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#7964e4]/20 via-zinc-900/10 to-[#7964e4]/20 blur-3xl" />
                        <div className="absolute inset-0 bg-gradient-to-tr from-zinc-900/30 via-[#7964e4]/10 to-zinc-900/30 blur-2xl" />
                    </div>

                    {}
                    <div className="relative overflow-hidden rounded-2xl">
                        <div className="absolute inset-0 bg-gradient-to-r from-[#7964e4]/10 to-transparent opacity-50" />
                        <div className="relative bg-white/[0.03] backdrop-blur-xl p-6 md:p-8 
                            border border-white/[0.05]
                            before:absolute before:inset-0 
                            before:bg-gradient-to-b 
                            before:from-white/[0.08] 
                            before:to-transparent/[0.03] 
                            before:rounded-2xl
                            after:absolute after:inset-0 
                            after:bg-gradient-to-t 
                            after:from-black/[0.03] 
                            after:to-transparent 
                            after:rounded-2xl"
                        >
                            {}
                            <div className="relative z-10">
                                {}
                                <div className="flex flex-col lg:flex-row items-center justify-between">
                                    <div className="text-center lg:text-left w-full lg:w-1/2">
                                        <span className="text-[#7964e4] text-xl uppercase tracking-[0.2em] mb-4 block font-semibold">
                                            Enterprise Solutions
                                        </span>
                                        <h1 className="flex justify-center lg:justify-start text-6xl sm:text-8xl font-black text-white whitespace-nowrap [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">
                                            Dedicated Servers
                                        </h1>
                                        <div className="mt-6 space-y-4">

                                            <div className="text-zinc-300 space-y-2">
                                                <p>
                                                    Unleash the power of bare metal servers with cutting-edge AMD EPYC & Intel Xeon processors, 
                                                    enterprise-grade NVMe storage, and up to 512GB DDR4 ECC memory.
                                                    From high-performance computing to mission-critical applications, our dedicated servers deliver 
                                                    unmatched reliability with 99.95% uptime SLA and advanced DDoS protection.
                                                </p>
                                                <ul className="flex flex-wrap gap-4 mt-4 text-sm">
                                                    <li className="flex items-center gap-2">
                                                        <svg className="w-5 h-5 text-[#7964e4]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                        </svg>
                                                        Latest Gen Processors
                                                    </li>
                                                    <li className="flex items-center gap-2">
                                                        <svg className="w-5 h-5 text-[#7964e4]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                        </svg>
                                                        Enterprise Hardware
                                                    </li>
                                                    <li className="flex items-center gap-2">
                                                        <svg className="w-5 h-5 text-[#7964e4]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                        </svg>
                                                        Friendly Support
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="mt-8 flex items-center justify-center lg:justify-start">
                                            <a 
                                                href="#Plans"
                                                className="bg-gradient-to-r from-[#656fe4] to-[#7964e4] hover:from-[#5660d3] hover:to-[#6753d3] text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 group"
                                            >
                                                Explore Servers
                                                <svg 
                                                    xmlns="http://www.w3.org/2000/svg" 
                                                    className="h-5 w-5 transform transition-transform group-hover:translate-x-1" 
                                                    fill="none" 
                                                    viewBox="0 0 24 24" 
                                                    stroke="currentColor"
                                                >
                                                    <path 
                                                        strokeLinecap="round" 
                                                        strokeLinejoin="round" 
                                                        strokeWidth={2} 
                                                        d="M13 7l5 5m0 0l-5 5m5-5H6" 
                                                    />
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                    <div 
                                        className="hidden lg:block h-[400px] w-[500px]"
                                        style={{ position: 'relative', zIndex: 1 }}
                                    >
                                        <Canvas
                                            camera={{ position: [0, 0, 7], fov: 45 }}
                                            style={{ position: 'relative', zIndex: 2 }}
                                        > 
                                            <Environment preset="sunset" />
                                            <ModelWithMouseTracking />
                                        </Canvas>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Plans />
            <div className="bg-zinc-950 w-full">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div className="bg-zinc-950 border border-[#7964e4]/100 rounded-lg p-4 w-fit mx-auto">
                        <div className="flex items-center gap-3">
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                className="h-4.5 w-4.5 text-[#7964e4]/80 flex-shrink-0" 
                                fill="none" 
                                viewBox="0 0 24 24" 
                                stroke="currentColor"
                            >
                                <path 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round" 
                                    strokeWidth={1.5} 
                                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
                                />
                            </svg>
                            <p className="text-white/70 text-sm md:text-base italic font-light tracking-wide">
                                Dedicated server provisioning and activation typically requires 2-4 business days, subject to hardware availability.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}