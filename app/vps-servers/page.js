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
            <section className="relative bg-zinc-950 pt-6 pb-12 md:pt-6 md:pb-16">
                <div className="container mx-auto max-w-[100rem] px-4 sm:px-6 lg:px-8">
                    <div className="bg-zinc-900 rounded-2xl p-6 md:p-8 shadow-[0_0_50px_-12px] shadow-[#7964e4]/20">
                        <div className="flex flex-col lg:flex-row items-center justify-between">
                            <div className="text-center lg:text-left w-full lg:w-1/2">
                                <span className="text-[#7964e4] text-xl uppercase tracking-[0.2em] mb-4 block font-semibold">
                                    Cloud Solutions
                                </span>
                                <h1 className="flex flex-col items-center lg:items-start gap-2">
                                    <span className="text-6xl sm:text-8xl font-black text-white hover:text-[#7964e4] transition-colors duration-300 [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">
                                        Virtual
                                    </span>
                                    <span className="text-6xl sm:text-8xl font-black text-white hover:text-[#7964e4] transition-colors duration-300 [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">
                                        Servers
                                    </span>
                                </h1>
                                <div className="mt-6 space-y-2">
                                    <div className="space-y-1">
                                        <p className="text-sm sm:text-base text-[#a799ef] font-medium italic">
                                            &ldquo;Experience lightning-fast performance and ultimate flexibility
                                        </p>
                                        <p className="text-sm sm:text-base text-[#a799ef] font-medium italic">
                                            with our VPS solutions&rdquo;
                                        </p>
                                    </div>
                                </div>
                                <div className="mt-8 flex items-center justify-center lg:justify-start">
                                    <a 
                                        href="#Plans"
                                        className="bg-[#7964e4] hover:bg-[#6753d3] text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 group"
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