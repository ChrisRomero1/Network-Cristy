import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 rounded-sm",
  {
    variants: {
      variant: {
        default: "bg-clay text-ivory hover:bg-terracotta",
        outline: "border border-charcoal/25 text-charcoal hover:bg-cream",
        ghost: "hover:bg-cream text-charcoal",
        dark: "bg-espresso text-ivory hover:bg-charcoal",
        ivory: "bg-ivory text-clay hover:bg-cream",
      },
      size: {
        default: "px-6 py-3",
        lg: "px-8 py-4 text-base",
        sm: "px-4 py-2 text-xs",
      },
    },
    defaultVariants: { variant: "default", size: "default" },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
