import { 
  RocketLaunchIcon, 
  ArrowPathIcon, 
  CpuChipIcon, 
  BoltIcon, 
  ShieldCheckIcon, 
  CommandLineIcon 
} from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Instant Deployment',
    description:
      'Deploy your VPS in minutes with our automated system. Choose your preferred OS, configure resources, and launch your server instantly.',
    icon: RocketLaunchIcon,
  },
  {
    name: 'Optimized Resources',
    description:
      'Smart resource allocation ensures balanced performance across CPU, RAM, and storage. Experience stable hosting with efficient workload management.',
    icon: CpuChipIcon,
  },
  {
    name: 'High Availability',
    description:
      'Benefit from enterprise-grade infrastructure with redundant systems. Our network and storage setup guarantees 99.9% service availability.',
    icon: ArrowPathIcon,
  },
  {
    name: 'Scalable Performance',
    description:
      'Upgrade resources instantly as your needs grow. Our flexible system allows seamless scaling without any service interruption or data migration.',
    icon: BoltIcon,
  },
  {
    name: 'Advanced Security',
    description:
      'Stay protected with enterprise DDoS mitigation and automated backups. Enhanced security features include private networking and regular updates.',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Full Root Access',
    description:
      'Get complete control with root-level server access. Install custom software, configure server settings, and manage via secure SSH connection.',
    icon: CommandLineIcon,
  },
]

export default function FeaturesVPS() {
  return (
    <div className="bg-zinc-950">
      <div className="p-5 py-24 container mx-auto flex flex-col gap-12 px-[44px]">
        <div className="mx-auto max-w-2xl lg:text-center mb-8">
          <span className="text-[#7964e4] text-xl uppercase tracking-[0.2em] mb-4 block font-semibold">
            Why Choose Our VPS
          </span>
          <p className="mt-2 ls sm:text-6xl text-5xl font-black text-white [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">
            Powerful Virtual Infrastructure
          </p>
          <p className="mt-6 text-lg/8 text-zinc-300">
            Experience the perfect balance of performance, flexibility, and control with our VPS hosting solutions.
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