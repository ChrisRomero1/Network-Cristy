import * as React from "react"
import { cn } from "@/lib/utils"

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {}

function Badge({ className, ...props }: BadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center px-3 py-1 text-xs font-medium tracking-widest uppercase border rounded-sm",
        className
      )}
      {...props}
    />
  )
}

export { Badge }
