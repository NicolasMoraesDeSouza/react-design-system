import { clsx } from 'clsx';
import { Slot } from '@radix-ui/react-slot'
import { ReactNode } from 'react';
export interface ButtonProps {
    
    children: ReactNode;
    asChild?: boolean;
    
}

export function Button({ children, asChild }: ButtonProps) {

    const Comp = asChild ? Slot : 'button'

    return (
        <div>
            <Comp
                className={clsx(
                    
                    'py-4 px-3 bg-cyan rounded text-sm text-black font-semibold w-full transition-colors hover:bg-cyan-hover focus:bg-cyan-focus ring-white ',
                   

                )}
            >

                {children}
            </Comp>
        </div>
    )
}