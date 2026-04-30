import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-bold tracking-wide uppercase transition-all duration-300 active:scale-95 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2",
  {
    variants: {
      variant: {
        default: "bg-gold text-white hover:bg-gold/90 shadow-lg border-none",
        destructive:
          "bg-destructive text-white hover:bg-destructive/90 shadow-lg border-none",
        outline:
          "border-2 border-gold bg-transparent text-gold hover:bg-gold hover:text-white",
        secondary:
          "bg-charcoal text-white hover:bg-gold transition-colors shadow-lg border-none",
        ghost:
          "hover:bg-gold/10 hover:text-gold",
        link: "text-gold underline-offset-4 hover:underline",
        white: "bg-white text-charcoal hover:bg-gold hover:text-white shadow-lg border-none",
        "outline-white": "border-2 border-white bg-transparent text-white hover:bg-white hover:text-charcoal",
      },
      size: {
        default: "h-12 px-6",
        sm: "h-10 px-4 text-xs",
        lg: "h-14 md:h-16 px-8 md:px-10 text-base",
        xl: "h-16 md:h-20 px-10 md:px-12 text-lg",
        icon: "size-12",
        "icon-sm": "size-10",
        "icon-lg": "size-14",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };