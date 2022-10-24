import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx'
import { InputHTMLAttributes, ReactNode } from 'react';
export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {

}
export interface TextInputRootProps {
    children: ReactNode
}
function TextInputRoot(props: TextInputRootProps) {
    return (


        <div className='flex items-center gap-3 bg-gray-800 w-full h-12 rounded px-3 py-4 focus-within:ring-2 ring-cyan-hover' >
            {props.children}

        </div>
    )
}
export interface TextInputIconProps {
    children: ReactNode

}
function TextInputIcon(props: TextInputIconProps) {
    return (
        <Slot className='w-6 h-6 text-gray-400'>
            {props.children}
        </Slot>
    )
}

export interface TextInputInputProps extends InputHTMLAttributes<HTMLInputElement> { }

function TextInputInput(props: TextInputInputProps) {



    return (


        <input className='bg-transparent flex-1 text-gray-100 text-xs rounded  placeholder:text-gray-400 outline-none'   {...props} />

    )


}
export const TextInput = {
    Root: TextInputRoot,
    Input: TextInputInput,
    Icon: TextInputIcon


}