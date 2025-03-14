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
    <div className="bg-zinc-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="ls font-semibold text-[#7964e4] text-xl uppercase">Why Choose Us</h2>
          <p className="mt-2 ls sm:text-6xl text-5xl font-black text-white [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">
            Enterprise Grade Infrastructure
          </p>
          <p className="mt-6 text-lg/8 text-zinc-300">
            Experience unparalleled performance and reliability with our dedicated hosting solutions backed by enterprise-grade hardware and 24/7 support.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-6xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base/7 font-semibold text-white">
                  <div className="absolute top-0 left-0 flex h-10 w-10 items-center justify-center rounded-lg bg-[#7964e4]">
                    <feature.icon aria-hidden="true" className="h-6 w-6 text-white" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base/7 text-zinc-300">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
