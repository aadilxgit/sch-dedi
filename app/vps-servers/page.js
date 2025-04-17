"use client";
import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import dynamic from 'next/dynamic';
import FAQSectionVPS from "@/components/FAQSectionVPS";
import FeaturesVPS from "@/components/FeaturesVPS";
import PricingSection from "@/components/PricingSection";

const CPUWithMouseTracking = dynamic(() => import('@/components/CPUWithMouseTracking'), {
    ssr: false
});

export default function VPSServers() {  
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
                    <div className="relative overflow-hidden rounded-2xl shadow-[0_0_50px_-12px] shadow-[#7964e4]/20">
                        <div className="absolute inset-0 bg-gradient-to-r from-[#7964e4]/10 to-transparent opacity-50" />
                        <div className="relative bg-white/[0.03] backdrop-blur-xl p-6 md:p-8 
                            border border-white/[0.05]
                            before:absolute before:inset-0 
                            before:bg-gradient-to-b 
                            before:from-[#7964e4]/[0.08] 
                            before:to-transparent/[0.03] 
                            before:rounded-2xl
                            after:absolute after:inset-0 
                            after:bg-gradient-to-t 
                            after:from-[#7964e4]/[0.03] 
                            after:to-transparent 
                            after:rounded-2xl"
                        >
                            <div className="relative z-10">
                                <div className="flex flex-col lg:flex-row items-center justify-between">
                                    <div className="text-center lg:text-left w-full lg:w-1/2">
                                        <span className="text-[#656fe4] text-xl uppercase tracking-[0.2em] mb-4 block font-semibold">
                                            Cloud Solutions
                                        </span>
                                        <h1 className="flex justify-center lg:justify-start text-6xl sm:text-8xl font-black text-white whitespace-nowrap [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">
                                            Virtual Servers
                                        </h1>
                                        <div className="mt-6 space-y-4">
                                            <div className="text-zinc-300 space-y-2">
                                                <p>
                                                    Experience high-performance cloud computing with AMD EPYC & Ryzen powered VPS, 
                                                    featuring NVMe storage and instant provisioning in under 60 seconds.
                                                    Perfect for developers, businesses, and applications requiring dedicated 
                                                    resources with the flexibility of cloud infrastructure.
                                                </p>
                                                <ul className="flex flex-wrap gap-4 mt-4 text-sm">
                                                    <li className="flex items-center gap-2">
                                                        <svg className="w-5 h-5 text-[#656fe4]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                        </svg>
                                                        Instant Deployment
                                                    </li>
                                                    <li className="flex items-center gap-2">
                                                        <svg className="w-5 h-5 text-[#656fe4]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                        </svg>
                                                        AMD EPYC CPUs
                                                    </li>
                                                    <li className="flex items-center gap-2">
                                                        <svg className="w-5 h-5 text-[#656fe4]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                        </svg>
                                                        NVMe Storage
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="mt-8 flex items-center justify-center lg:justify-start">
                                            <a 
                                                href="#Plans"
                                                className="bg-gradient-to-r from-[#656fe4] to-[#7964e4] hover:from-[#5660d3] hover:to-[#6753d3] text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 group"
                                            >
                                                Deploy VPS
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
                                            <ambientLight intensity={0.5} />
                                            <directionalLight position={[10, 10, 5]} intensity={1} />
                                            <CPUWithMouseTracking />
                                        </Canvas>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="bg-zinc-950">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-16">
                    <div className="text-center ">
                    <h2 className="ls font-semibold text-[#7964e4] text-xl uppercase tracking-[0.2em] mb-4">
                    PLANS
                        </h2>
                        <p className="mt-2 text-4xl sm:text-5xl font-black text-white [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">
                            Select VPS Size
                        </p>
                        <p className="mt-4 text-lg text-zinc-300 max-w-2xl mx-auto">
                            Choose from our range of VPS configurations designed to meet your performance needs
                        </p>
                    </div>
                    <PricingSection />
                </div>
            </div>
            <FeaturesVPS />
            <FAQSectionVPS />
        </div>
    );
}