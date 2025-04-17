import { 
  RocketLaunchIcon, 
  ArrowPathIcon, 
  CpuChipIcon, 
  BoltIcon, 
  ServerStackIcon,  // Add this import
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
    name: 'Service Level Agreement',
    description:
      'We guarantee 99.95% uptime for your VPS infrastructure through our comprehensive SLA, ensuring reliable service for your applications.',
    icon: ArrowPathIcon,
  },
  {
    name: 'Scalable Performance',
    description:
      'Upgrade resources instantly as your needs grow. Our flexible system allows seamless scaling without any service interruption or data migration.',
    icon: BoltIcon,
  },
  {
    name: 'Premium VPS',
    description:
      'Experience superior performance with dedicated CPU core allocation. Each VPS is equipped with exclusive processing power for consistent workload handling.',
    icon: ServerStackIcon,  // Changed from ShieldCheckIcon to ServerStackIcon
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
      <div className="p-5  container mx-auto flex flex-col gap-12 px-[44px]">
        <div className="mx-auto max-w-2xl lg:text-center mb-8">
          <span className="text-[#7964e4] text-xl uppercase tracking-[0.2em] mb-4 block font-semibold">
            Why Choose Our VPS ?
          </span>
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