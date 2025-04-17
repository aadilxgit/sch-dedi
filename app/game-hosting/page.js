"use client";
import { useState } from 'react';
import { games } from '@/components/GameData';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Model as ChestModel } from '@/components/mc-chest3D';
import { Model as SwordModel } from '@/components/rust-sword3D';

export default function GameHosting() {
    const [selectedGame, setSelectedGame] = useState(null);

    return (
        <div className="bg-zinc-950 min-h-screen overflow-x-hidden">
            <section className="relative pt-28 pb-12 md:pt-32 md:pb-16">
                <div className="container mx-auto max-w-[100rem] px-4 sm:px-6 lg:px-8">
                    {/* Background gradients and transitions */}
                    <div className="absolute inset-0">
                        {/* Limited height gradient section */}
                        <div className="absolute inset-0 h-[800px] overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-[#7964e4]/20 via-zinc-900/10 to-[#7964e4]/20 blur-3xl" />
                            <div className="absolute inset-0 bg-gradient-to-tr from-zinc-900/30 via-[#7964e4]/10 to-zinc-900/30 blur-2xl" />
                            
                            {/* Gradient transition to solid background */}
                            <div className="absolute inset-0 top-[500px] h-[300px] bg-gradient-to-b from-transparent via-zinc-950/90 to-zinc-950" />
                        </div>
                        
                        {/* Solid background for the rest of the content */}
                        <div className="absolute inset-0 top-[800px] bg-zinc-950" />
                    </div>

                    {/* Header */}
                    <div className="relative text-center mb-12">
                        <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">
                            Game Server Hosting
                        </h1>
                        <p className="text-xl text-zinc-300">
                            Deploy your game server in seconds with our high-performance infrastructure
                        </p>
                    </div>

                    {/* New Instructions Section */}
                    <div className="relative text-center mb-6 flex flex-col items-center ">
                        {/* Instructions Text with Gradient */}
                        <div className="flex flex-col items-center">
                            
                        </div>
                        
                        {/* Multiple Animated Chevrons */}
                        <div className="flex flex-col items-center ">
                            <div className="animate-bounce-slow opacity-90">
                                <svg 
                                    width="80" 
                                    height="32" 
                                    viewBox="0 0 80 32" 
                                    fill="none" 
                                    className="text-[#7964e4] drop-shadow-glow"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path 
                                        d="M4 4L40 28L76 4" 
                                        stroke="currentColor" 
                                        strokeWidth="6" 
                                        strokeLinecap="round" 
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </div>
                            <div className="animate-bounce-slower opacity-70">
                                <svg 
                                    width="80" 
                                    height="32" 
                                    viewBox="0 0 80 32" 
                                    fill="none" 
                                    className="text-[#7964e4] drop-shadow-glow"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path 
                                        d="M4 4L40 28L76 4" 
                                        stroke="currentColor" 
                                        strokeWidth="6" 
                                        strokeLinecap="round" 
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </div>
                            <div className="animate-bounce-slowest opacity-50">
                                <svg 
                                    width="80" 
                                    height="32" 
                                    viewBox="0 0 80 32" 
                                    fill="none" 
                                    className="text-[#7964e4] drop-shadow-glow"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path 
                                        d="M4 4L40 28L76 4" 
                                        stroke="currentColor" 
                                        strokeWidth="6" 
                                        strokeLinecap="round" 
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>

                    {/* Game Grid - Updated Diagonal Layout */}
                    <div className="relative max-w-7xl mx-auto pr-20 px-4 sm:px-6 lg:px-8">
                        {/* Chest 3D Model Container - Show only on larger screens */}
                        <div className="absolute left-[-200px] xl:left-[-150px] top-[-100px] w-[600px] h-[600px] hidden xl:block">
                            <Canvas 
                                camera={{ position: [0, 0, 25], fov: 35 }}
                                style={{ 
                                    position: 'absolute',
                                    width: '100%',
                                    height: '100%',
                                    pointerEvents: 'auto',
                                    zIndex: 10
                                }}
                                gl={{ preserveDrawingBuffer: true }}
                            >
                                <ambientLight intensity={2} />
                                <pointLight position={[10, 10, 10]} intensity={1} />
                                <ChestModel 
                                    scale={8}
                                    position={[0, 2, 0]}
                                    rotation={[0, Math.PI / 3, Math.PI / 6]}
                                />
                                <OrbitControls 
                                    enableZoom={false}
                                    enablePan={false}
                                    autoRotate
                                    autoRotateSpeed={3}
                                    minPolarAngle={Math.PI / 3}
                                    maxPolarAngle={Math.PI / 2}
                                />
                            </Canvas>
                        </div>

                        {/* First Row - Center on smaller screens, offset on larger screens */}
                        <div className="flex justify-center mb-8 xl:translate-x-[250px]">
                            <div className="flex flex-col md:flex-row gap-3">
                                {games.slice(0, 2).map((game) => (
                                    <button
                                        key={game.id}
                                        onClick={() => setSelectedGame(game)}
                                        className="group relative overflow-hidden rounded-xl min-h-[200px] w-[340px]
                                            transition-all duration-300 hover:scale-[1.02]
                                            border border-zinc-800/50 hover:border-zinc-700"
                                        style={{
                                            backgroundImage: `url('${game.banner}')`,
                                            backgroundSize: 'cover',
                                            backgroundPosition: 'center',
                                            backgroundRepeat: 'no-repeat'
                                        }}
                                    >
                                        {/* Arrow Icon - Bottom Right */}
                                        <div className="absolute right-4 bottom-4 z-[20] opacity-0 transition-all duration-200 group-hover:opacity-100">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M7 7L17 17M17 17V7M17 17H7" stroke="#CCCCCC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                        </div>

                                        {/* Game Info - Bottom Left */}
                                        <div className="items-left justify-left absolute bottom-0 left-0 z-[20] 
                                            w-full flex flex-col p-4 opacity-0 transition-all duration-200 
                                            group-hover:opacity-100">
                                            <span className="text-2xl font-semibold text-[#D7D5DD] text-left">{game.name}</span>
                                            <span className="text-zinc-100 text-left">Starting at ${game.startingPrice}/mo</span>
                                        </div>

                                        {/* Hover Overlay - Subtle Dark Effect */}
                                        <div className="absolute inset-0 z-[10] backdrop-blur-[2px] bg-black/10
                                            opacity-0 transition-all duration-200 group-hover:opacity-100
                                            group-hover:bg-black/30 rounded-xl" />
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Second Row - Center on smaller screens, offset on larger screens */}
                        <div className="flex justify-center xl:translate-x-[150px]">
                            <div className="flex flex-col md:flex-row gap-3">
                                {games.slice(2).map((game) => (
                                    <button
                                        key={game.id}
                                        onClick={() => setSelectedGame(game)}
                                        className="group relative overflow-hidden rounded-xl min-h-[200px] w-[340px]
                                            transition-all duration-300 hover:scale-[1.02]
                                            border border-zinc-800/50 hover:border-zinc-700"
                                        style={{
                                            backgroundImage: `url('${game.banner}')`,
                                            backgroundSize: 'cover',
                                            backgroundPosition: 'center',
                                            backgroundRepeat: 'no-repeat'
                                        }}
                                    >
                                        {/* Arrow Icon - Bottom Right */}
                                        <div className="absolute right-4 bottom-4 z-[20] opacity-0 transition-all duration-200 group-hover:opacity-100">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M7 7L17 17M17 17V7M17 17H7" stroke="#CCCCCC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                        </div>

                                        {/* Game Info - Bottom Left */}
                                        <div className="items-left justify-left absolute bottom-0 left-0 z-[20] 
                                            w-full flex flex-col p-4 opacity-0 transition-all duration-200 
                                            group-hover:opacity-100">
                                            <span className="text-2xl font-semibold text-[#D7D5DD] text-left">{game.name}</span>
                                            <span className="text-zinc-100 text-left">Starting at ${game.startingPrice}/mo</span>
                                        </div>

                                        {/* Hover Overlay - Subtle Dark Effect */}
                                        <div className="absolute inset-0 z-[10] backdrop-blur-[2px] bg-black/10
                                            opacity-0 transition-all duration-200 group-hover:opacity-100
                                            group-hover:bg-black/30 rounded-xl" />
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Plans Display */}
                    {selectedGame && (
                        <div className="relative mt-16 bg-zinc-950">
                            <div className="px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto">
                                <h2 className="text-3xl font-bold text-white text-center mb-8">
                                    {selectedGame.name} Hosting Plans
                                </h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                                    {selectedGame.plans.map((plan, index) => (
                                        <div 
                                            key={index}
                                            className="bg-[#141418] rounded-lg border border-[#7964e4] flex flex-col min-w-[280px] w-full max-w-[400px] mx-auto"
                                        >
                                            <div className="p-4 sm:p-6 border-b border-zinc-800">
                                                <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                                                <div className="text-2xl font-bold text-white">
                                                    ${plan.price}<span className="text-sm text-zinc-400">/mo</span>
                                                </div>
                                            </div>
                                            
                                            <div className="flex-grow">
                                                <table className="w-full">
                                                    <tbody className="divide-y divide-zinc-800">
                                                        <tr>
                                                            <td className="py-3 sm:py-4 px-4 sm:px-6 text-zinc-400">RAM</td>
                                                            <td className="py-3 sm:py-4 px-4 sm:px-6 text-right text-white">{plan.ram}</td>
                                                        </tr>
                                                        <tr className="bg-zinc-900/30">
                                                            <td className="py-3 sm:py-4 px-4 sm:px-6 text-zinc-400">CPU Power</td>
                                                            <td className="py-3 sm:py-4 px-4 sm:px-6 text-right text-white">{plan.cpu}</td>
                                                        </tr>
                                                        <tr>
                                                            <td className="py-3 sm:py-4 px-4 sm:px-6 text-zinc-400">Storage</td>
                                                            <td className="py-3 sm:py-4 px-4 sm:px-6 text-right text-white">{plan.storage}</td>
                                                        </tr>
                                                        <tr className="bg-zinc-900/30">
                                                            <td className="py-3 sm:py-4 px-4 sm:px-6 text-zinc-400">Player Slots</td>
                                                            <td className="py-3 sm:py-4 px-4 sm:px-6 text-right text-white">{plan.slots}</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>

                                            <div className="p-4 sm:p-6 border-t border-zinc-800">
                                                <button className="w-full bg-[#7964e4] text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-md font-medium 
                                                    hover:bg-[#6753d3] transition-all duration-300 hover:scale-[1.02]">
                                                    Deploy Now
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
}