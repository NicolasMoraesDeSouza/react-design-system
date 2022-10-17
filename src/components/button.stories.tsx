import { Button, ButtonProps } from './button'
import { Meta, StoryObj } from '@storybook/react'


export default {
    title: 'Components/Button',
    component: Button,
    args: {
        children: 'Create account',
        size: 'sm'
    },
    argTypes: {

        size: {

            options: ['sm', 'md', 'lg'],
            control: {
                type: 'inline-radio'
            }
        },
        asChild: {
            table: {
                disable: true
            }
        }
    }

} as Meta<ButtonProps>

export const Default: StoryObj<ButtonProps> = {}


