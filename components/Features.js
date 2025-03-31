import { 
  ShieldCheckIcon, 
  ArrowPathIcon, 
  CpuChipIcon, 
  ClockIcon, 
  ServerIcon, 
  CogIcon 
} from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Enterprise Security',
    description:
      'Advanced DDoS protection, enterprise firewall, and 24/7 network monitoring to keep your server secure and your data protected.',
    icon: ShieldCheckIcon,
  },
  {
    name: 'High Performance',
    description:
      'Powered by latest generation Intel Xeon and AMD EPYC processors, with NVMe SSDs and high-speed DDR4 RAM for maximum performance.',
    icon: CpuChipIcon,
  },
  {
    name: 'Network Reliability',
    description:
      'Multiple uplinks, redundant network infrastructure, and 1Gbps dedicated bandwidth with 99.99% uptime guarantee.',
    icon: ArrowPathIcon,
  },
  {
    name: 'Rapid Deployment',
    description:
      'Quick server setup within 24-48 hours with instant access to power controls and OS reinstallation through our control panel.',
    icon: ClockIcon,
  },
  {
    name: 'Full Root Access',
    description:
      'Complete control over your server with root access, allowing you to install any software, configure custom settings, and optimize performance.',
    icon: ServerIcon,
  },
  {
    name: 'Customizable Configuration',
    description:
      'Flexible hardware options with ability to upgrade RAM, storage, and bandwidth. Choose from various OS options and control panel solutions.',
    icon: CogIcon,
  },
]

export default function FeatureSection() {
  return (
    <div className="bg-zinc-950">
      <div className="p-5 py-24 container mx-auto flex flex-col gap-12 px-[44px]">
        <div className="mx-auto max-w-2xl lg:text-center mb-8">
        <span className="text-[#7964e4] text-xl uppercase tracking-[0.2em] mb-4 block font-semibold">
                                    Why Choose Us
                                </span>
          <p className="mt-2 ls sm:text-6xl text-5xl font-black text-white [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">
            Enterprise Grade Infrastructure
          </p>
          <p className="mt-6 text-lg/8 text-zinc-300">
            Experience unparalleled performance and reliability with our dedicated hosting solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 z-10">
          {features.map((feature) => (
            <div key={feature.name} className="flex flex-col gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#7964e4]">
                <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <span className="sa font-bold text-xl selection:bg-[#7964e4] mt-2 selection:text-white">
                {feature.name}
              </span>
              <span className="text-[#F2F4F7] sa font-light">
                {feature.description}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
