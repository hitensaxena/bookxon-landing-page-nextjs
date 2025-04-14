'use client'

import React, { useState, useRef } from 'react'
import Image from 'next/image'
import { useScrollReveal } from '@/hooks/useScrollReveal'

// Data for steps (can be moved to a separate file/CMS)
const freelancerSteps = [
  { 
    title: "Quick Personal Setup",
    description: "Create your professional profile in minutes. Add your services, define your working hours, and get your unique booking link ready to share.",
    quote: "\"Seriously, I went from signup to taking my first booking in less than 10 minutes!\" - Freelance User",
    img: "/images/how-it-works-step1.png",
    placeholder: "https://placehold.co/600x400/e2e8f0/94a3b8?text=Freelancer+Setup"
  },
  { 
    title: "Share Your Link & Get Booked",
    description: "Add your booking link to your social media bio, website, or email signature. Clients can easily view your availability and book appointments 24/7.",
    quote: "\"My clients love how simple it is. No more back-and-forth messages trying to find a time.\" - Freelance User",
    img: "/images/how-it-works-step2.png",
    placeholder: "https://placehold.co/600x400/e2e8f0/94a3b8?text=Freelancer+Booking"
  },
  { 
    title: "Manage & Grow",
    description: "Focus on your craft while Crow handles the admin. Manage appointments, track client history, process payments, and watch your independent business thrive.",
    quote: "\"Crow gives me back hours every week. It's like having a personal assistant for my business!\" - Freelance User",
    img: "/images/how-it-works-step3.png",
    placeholder: "https://placehold.co/600x400/e2e8f0/94a3b8?text=Freelancer+Growth"
  }
];

const businessSteps = [
  { 
    title: "Set Up Your Team & Services",
    description: "Easily add multiple staff members, assign services, manage individual schedules, and configure different locations if needed.",
    quote: "\"Onboarding our whole team was surprisingly straightforward. Huge time saver!\" - Business Owner",
    img: "/images/how-it-works-business-step1.png",
    placeholder: "https://placehold.co/600x400/e2e8f0/94a3b8?text=Business+Setup"
  },
  { 
    title: "Streamline Operations",
    description: "Manage bookings across your entire team from a central dashboard. Assign roles, track performance, and ensure smooth day-to-day operations.",
    quote: "\"Having a unified view of all appointments and staff availability is invaluable.\" - Business Owner",
    img: "/images/how-it-works-business-step2.png",
    placeholder: "https://placehold.co/600x400/e2e8f0/94a3b8?text=Business+Operations"
  },
  { 
    title: "Scale Your Business",
    description: "Leverage advanced analytics to understand booking trends, revenue streams, and client behavior. Make informed decisions to grow efficiently.",
    quote: "\"The insights from Crow's analytics have directly impacted our growth strategy.\" - Business Owner",
    img: "/images/how-it-works-business-step3.png",
    placeholder: "https://placehold.co/600x400/e2e8f0/94a3b8?text=Business+Scaling"
  }
];

// Step Component
const HowItWorksStep = ({ step, index }: { step: typeof freelancerSteps[0], index: number }) => {
  const stepRef = useRef<HTMLDivElement>(null);
  useScrollReveal();

  return (
    <div ref={stepRef} className="grid md:grid-cols-2 gap-8 md:gap-10 items-center reveal-on-scroll">
      <div className={`md:pr-6 ${index % 2 !== 0 ? 'md:order-2 md:pl-6' : ''}`}>
        <span className="inline-block bg-white text-gradient text-sm font-bold px-3 py-1 rounded-full mb-3 uppercase tracking-widest">Step {index + 1}</span>
        <h3 className="text-3xl lg:text-4xl font-semibold mb-3">{step.title}</h3>
        <p className="text-text-secondary mb-3">{step.description}</p>
        <p className="text-gray-600 text-sm italic">{step.quote}</p>
      </div>
      <div className={index % 2 !== 0 ? 'md:order-1' : ''}>
        <Image
          src={step.img}
          alt={step.title}
          width={600}
          height={400}
          className="rounded-lg w-full h-auto no-shadow"
          onError={(e) => { 
            const target = e.target as HTMLImageElement;
            target.src = step.placeholder;
          }}
          priority={false}
        />
      </div>
    </div>
  );
};

const HowItWorksSection = () => {
  const [isFreelancer, setIsFreelancer] = useState(true);
  const titleRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);

  useScrollReveal();

  const setActiveTab = (tab: 'freelancer' | 'business') => {
    setIsFreelancer(tab === 'freelancer');
  };

  return (
    <section id="how-it-works" className="py-16 md:py-20 lg:py-24 px-6 lg:px-8 bg-bg-light">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div ref={titleRef} className="text-center max-w-3xl mx-auto mb-10 reveal-on-scroll">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">How Crow Works <span className="text-gradient">For You</span></h2>
          <p className="text-lg text-text-secondary">
            Choose your path and see how Crow adapts to your specific business needs.
          </p>
        </div>

        {/* Toggle Buttons */}
        <div ref={toggleRef} className="flex justify-center items-center mb-12 reveal-on-scroll">
          <div id="how-it-works-toggle" className="bg-white p-1.5 rounded-full shadow-md border border-border-color inline-flex space-x-1">
            <button
              onClick={() => setActiveTab('freelancer')}
              className="relative px-6 py-2.5 rounded-full text-sm font-medium transition-colors duration-300 min-w-[140px] focus:outline-none"
            >
              <span className={`relative z-10 transition-colors duration-300 ${isFreelancer ? 'text-white' : 'text-text-primary'}`}>
                For Freelancers
              </span>
              <span
                className="absolute inset-0 bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] rounded-full transition-opacity duration-300"
                style={{ opacity: isFreelancer ? 1 : 0 }}
              ></span>
            </button>
            <button
              onClick={() => setActiveTab('business')}
              className="relative px-6 py-2.5 rounded-full text-sm font-medium transition-colors duration-300 min-w-[140px] focus:outline-none"
            >
              <span className={`relative z-10 transition-colors duration-300 ${!isFreelancer ? 'text-white' : 'text-text-primary'}`}>
                For Businesses
              </span>
              <span
                className="absolute inset-0 bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] rounded-full transition-opacity duration-300"
                style={{ opacity: !isFreelancer ? 1 : 0 }}
              ></span>
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div id="freelancerContent" className={`space-y-12 ${!isFreelancer ? 'hidden' : ''}`}>
          {freelancerSteps.map((step, index) => (
            <HowItWorksStep key={`f-${index}`} step={step} index={index} />
          ))}
        </div>

        <div id="businessContent" className={`space-y-12 ${isFreelancer ? 'hidden' : ''}`}>
          {businessSteps.map((step, index) => (
            <HowItWorksStep key={`b-${index}`} step={step} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;