import * as React from "react"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link'
  size?: 'default' | 'sm' | 'lg' | 'icon'
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', size = 'default', ...props }, ref) => {
    const baseClasses =
      "btn-enhanced inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 font-sans"
    
    const variantClasses = {
      default: "btn-primary-enhanced bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-neural-md hover:-translate-y-0.5",
      destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90 hover:shadow-neural-md hover:-translate-y-0.5",
      outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground hover:shadow-neural-sm hover:-translate-y-0.5",
      secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 hover:shadow-neural-md hover:-translate-y-0.5",
      ghost: "hover:bg-accent hover:text-accent-foreground hover:shadow-neural-sm hover:-translate-y-0.5",
      link: "text-primary underline-offset-4 hover:underline"
    }
    
    const sizeClasses = {
      default: "h-10 px-4 py-2 tablet:h-11 tablet:px-5",
      sm: "h-9 rounded-md px-3 tablet:h-10 tablet:px-4",
      lg: "h-11 rounded-md px-8 tablet:h-12 tablet:px-10",
      icon: "h-10 w-10 tablet:h-11 tablet:w-11"
    }

    return (
      <button
        className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className || ''}`}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }