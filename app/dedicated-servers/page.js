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
            <section className="relative bg-zinc-950 pt-6 pb-12 md:pt-6 md:pb-16">
                <div className="container mx-auto max-w-[100rem] px-4 sm:px-6 lg:px-8">
                    <div className="bg-zinc-900 rounded-2xl p-6 md:p-8 shadow-[0_0_50px_-12px] shadow-[#7964e4]/20">
                        <div className="flex flex-col lg:flex-row items-center justify-between">
                            <div className="text-center lg:text-left w-full lg:w-1/2">
                                <span className="text-[#7964e4] text-xl uppercase tracking-[0.2em] mb-4 block font-semibold">
                                    Enterprise Solutions
                                </span>
                                <h1 className="flex flex-col items-center lg:items-start gap-2">
                                    <span className="text-6xl sm:text-8xl font-black text-white hover:text-[#7964e4] transition-colors duration-300 [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">
                                        Dedicated
                                    </span>
                                    <span className="text-6xl sm:text-8xl font-black text-white hover:text-[#7964e4] transition-colors duration-300 [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">
                                        Servers
                                    </span>
                                </h1>
                                <div className="mt-6 space-y-2">
                                    <div className="space-y-1">
                                        <p className="text-sm sm:text-base text-[#7964e4] font-medium italic">
                                            &ldquo;Experience unparalleled performance and complete hardware control
                                        </p>
                                        <p className="text-sm sm:text-base text-[#7964e4] font-medium italic">
                                            with our enterprise-grade dedicated server infrastructure&rdquo;
                                        </p>
                                    </div>
                                </div>
                                <div className="mt-8 flex items-center justify-center lg:justify-start">
                                    <a 
                                        href="#Plans"
                                        className="bg-[#7964e4] hover:bg-[#6753d3] text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 group"
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