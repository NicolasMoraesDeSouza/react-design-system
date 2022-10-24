import { clsx } from 'clsx';
import { Slot } from '@radix-ui/react-slot'
import { ReactNode } from 'react';
export interface TextProps {
    size?: 'sm' | 'md' | 'lg',
    children: ReactNode;
    asChild?: boolean;
    textColor?: 'white' | 'gray';
    
}

export function Text({ size= 'md', children, asChild, textColor='gray' }: TextProps) {

    const Comp = asChild ? Slot : 'span'

    return (
        <div>
            <Comp
                className={clsx(

                    {
                        'text-white':  textColor == 'white',
                        'text-gray-400': textColor == 'gray',
                        'text-xs': size == 'sm',
                        'text-sm': size == 'md',
                        'text-md': size == 'lg'
                    })}>

                {children}
            </Comp>
        </div>
    )
}