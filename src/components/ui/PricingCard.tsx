interface PricingFeature {
  name: string
  included: boolean
}

interface PricingCardProps {
  name: string
  price: string
  description: string
  features: string[]
  isPopular?: boolean
}

export default function PricingCard({ name, price, description, features, isPopular }: PricingCardProps) {
  return (
    <div className={`bg-white rounded-lg p-8 shadow-lg relative ${isPopular ? 'border-2 border-bx-primary' : ''}`}>
      {isPopular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-primary text-white px-4 py-1 rounded-full text-sm font-medium">
          Most Popular
        </div>
      )}
      <h3 className="text-2xl font-bold mb-2">{name}</h3>
      <div className="mb-4">
        <span className="text-4xl font-bold">${price}</span>
        <span className="text-text-secondary">/month</span>
      </div>
      <p className="text-text-secondary mb-6">{description}</p>
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <svg className="w-5 h-5 text-bx-primary mr-2 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <button className={`w-full py-3 rounded-lg font-semibold transition-all ${
        isPopular 
          ? 'bg-gradient-primary text-white hover:opacity-90'
          : 'bg-bx-secondary text-text-primary hover:bg-bx-secondary-hover'
      }`}>
        Get Started
      </button>
    </div>
  )
}