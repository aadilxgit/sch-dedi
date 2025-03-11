// src/app/dedicated-servers/page.js
import Plans from '../../components/Plans.js';

export default function DedicatedServers() {
    return (
        <div>
            <section className="relative bg-gray-900">
                <div className="container mx-auto px-4 sm:px-6 py-24 sm:py-32 lg:px-8 text-center max-w-[1440px]">
                    <h1 className="flex flex-col lg:flex-row lg:justify-center lg:items-center gap-2">
                        <span className="text-7xl sm:text-8xl md:text-8xl lg:text-7xl xl:text-8xl font-black text-white [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">
                            Dedicated
                        </span>
                        <span className="text-7xl sm:text-8xl md:text-8xl lg:text-7xl xl:text-8xl font-black text-white [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">
                            Servers
                        </span>
                    </h1>
                    <p className="mt-6 text-base sm:text-lg md:text-xl text-gray-300">
                        Experience the ultimate in performance and reliability with our dedicated server solutions.
                    </p>
                    <p className="mt-3 text-base sm:text-lg md:text-xl text-gray-300">
                        Empower your business with uncompromised speed, control, and security.
                    </p>
                </div>
            </section>
            <Plans />
        </div>
    );
}