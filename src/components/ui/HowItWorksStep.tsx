interface HowItWorksStepProps {
  number: string
  title: string
  description: string
}

export default function HowItWorksStep({ number, title, description }: HowItWorksStepProps) {
  return (
    <div className="flex items-start gap-4">
      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-white font-bold text-xl">
        {number}
      </div>
      <div>
        <h4 className="text-xl font-semibold mb-2">{title}</h4>
        <p className="text-[var(--text-secondary)]">{description}</p>
      </div>
    </div>
  )
}