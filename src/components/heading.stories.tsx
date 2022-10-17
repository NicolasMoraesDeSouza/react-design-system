import { Heading, HeadingProps } from './heading'
import { Meta, StoryObj } from '@storybook/react'


export default {
    title: 'Components/Heading',
    component: Heading,
    args: {
        children: 'Lorem ipsum',
        size: 'sm'
    },
    argTypes: {

        size: {

            options: ['sm', 'md', 'lg'],
            control: {
                type: 'inline-radio'
            }
        }
    }

} as Meta<HeadingProps>
export const Default: StoryObj = {
    args: {
        size: 'md'
    }
}
export const Small: StoryObj = {
    args: {
        size: 'sm'
    }
}
export const Large: StoryObj = {
    args: {
        size: 'lg'
    }
}
export const CustomComp: StoryObj = {
    args: {
        size: 'lg',
        asChield: true,
        children: (
            <h1>Heading with {'h1'}</h1>
        )
    },
    argTypes: {

        children: {
            table: {
                disable: 'true'
            }
        },
        asChild: {
            table: {
                disable: 'true'
            }
        }
    }
}


