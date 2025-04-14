'use client'

import Link from 'next/link'
import { ReactNode } from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  href?: string;
  className?: string;
}

interface ProButtonProps {
  children: ReactNode
  variant: 'primary' | 'secondary'
  href?: string | Record<string, any>
  className?: string
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
}

export default function ProButton({ 
  children, 
  variant = 'primary', 
  href, 
  className = '', 
  onClick,
  type = 'button'
}: ProButtonProps) {
  const baseClasses = variant === 'primary' 
    ? 'pro-button-primary' 
    : 'pro-button-secondary'
    
  const classes = `${baseClasses} ${className}`
  
  // Check if href is valid (not an object or undefined)
  // This prevents [object Object] from appearing in URLs
  const isValidHref = (href?: any): href is string => {
    return typeof href === 'string' && href.length > 0 && href !== '[object Object]';
  }
  
  // If href exists and is valid
  if (href) {
    // If href is an object or [object Object], use '#' as fallback
    const linkHref = isValidHref(href) ? href : '#';
    
    return (
      <Link href={linkHref} className={classes} onClick={onClick}>
        {children}
      </Link>
    )
  }
  
  return (
    <button type={type} className={classes} onClick={onClick}>
      {children}
    </button>
  )
}