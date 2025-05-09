import React, { useRef } from 'react';
import Image from 'next/image';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const IMAGE_URL = "/images/about-us.png";
const PLACEHOLDER_IMAGE = 'https://placehold.co/600x450/e2e8f0/94a3b8?text=About+Us+Image';

const AboutSection = () => {
  const textContentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  useScrollReveal();

  return (
    <section id="about" className="py-16 md:py-20 lg:py-24 px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Text Content */}
        <div ref={textContentRef} className="reveal-on-scroll">
          <span className="inline-block bg-bx-secondary-hover text-gradient text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">About Us</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Empowering Service Professionals Since 2023</h2>
          <p className="text-lg text-text-secondary mb-6">
            At Crow, we're dedicated to revolutionizing how service professionals manage their businesses. Our platform combines cutting-edge technology with user-friendly design to create the most efficient business management solution available.
          </p>
          <p className="text-lg text-text-secondary mb-8">
            Founded by a team of industry experts and innovative developers, we understand the unique challenges service professionals face. Our mission is to eliminate administrative burdens, allowing you to focus on what truly matters - delivering exceptional service to your clients.
          </p>
          <div className="grid grid-cols-2 gap-6 mt-10">
            <div className="text-center p-6 bg-bg-light rounded-xl border border-gray-200">
              <p className="text-4xl font-bold text-gradient mb-2">10K+</p>
              <p className="text-sm text-text-secondary font-medium">Active Users</p>
            </div>
            <div className="text-center p-6 bg-bg-light rounded-xl border border-gray-200">
              <p className="text-4xl font-bold text-gradient mb-2">98%</p>
              <p className="text-sm text-text-secondary font-medium">Client Satisfaction</p>
            </div>
          </div>
        </div>

        {/* Image */}
        <div ref={imageRef} className="reveal-on-scroll">
          <Image
            src={IMAGE_URL}
            alt="Diverse team collaborating on the Crow project"
            width={600}
            height={450}
            className="mx-auto no-shadow object-cover w-full h-auto max-h-[480px]"
            style={{ transitionDelay: '0.15s' }}
            onError={(e) => { 
              const target = e.target as HTMLImageElement;
              target.src = PLACEHOLDER_IMAGE;
            }}
            priority={false}
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
