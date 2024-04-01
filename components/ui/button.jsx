import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-bold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 uppercase tracking-wide',
  {
    variants: {
      variant: {
        default: 'bg-white hover:bg-slate-100 text-slate-500 border-slate-200 border-2 border-b-4 active:border-b-2',
        primary: 'bg-black-400 hover:bg-black-400/90 text-primary-foreground border-black-500 border-b-4 active:border-b-0',
        primaryOutline: 'bg-white hover:bg-slate-100 text-black-500',
        secondary: 'bg-red-500 hover:bg-red-500/90 text-primary-foreground border-red-600 border-b-4 active:border-b-0',
        secondaryOutline: 'bg-white hover:bg-slate-100 text-red-500',
        danger: 'bg-rose-500 hover:bg-rose-500/90 text-primary-foreground border-rose-600 border-b-4 active:border-b-0',
        dangerOutline: 'bg-white hover:bg-slate-100 text-rose-500',
        super: 'bg-indigo-500 hover:bg-indigo-500/90 text-primary-foreground border-indigo-600 border-b-4 active:border-b-0',
        superindigoOutline: 'bg-white hover:bg-slate-100 text-indigo-500',
        ghost: 'bg-transparent hover:bg-slate-100 text-slate-500 border-transparent border-0',
        sidebar: 'bg-transparent hover:bg-slate-100 text-slate-500 border-transparent border-2 transition-none',
        sidebarOutline: 'bg-black-500/15 hover:bg-black-300 text-black-500 border-black-300 border-2 transition-none'
      },
      size: {
        default: 'h-11 px-4 py-2',
        sm: 'h-9 px-3',
        lg: 'h-12 px-8',
        icon: 'w-10 h-10',
        rounded: 'rounded-full'
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'default'
    }
  }
);

const Button = React.forwardRef(({ className, variant, size, asChild=false, ...props }, ref) => {
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props}
    />
  );
});

Button.displayName = 'Button';

export { Button, buttonVariants }
