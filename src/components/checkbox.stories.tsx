import { Button, ButtonProps } from './button'
import { Meta, StoryObj } from '@storybook/react'
import { Checkbox, CheckboxProps } from './checkbox'
import { Text } from './text'


export default {
    title: 'Components/Checkbox',
    component: Checkbox,
    args: {
    },
    decorators: [
        (Story) => {
            return (
                <div className='flex items-center gap-2'>
                    {Story()}
                    <Text size='sm' textColor='white'>Lembrar de mim</Text>
                </div>
            )
        }
    ]

} as Meta<CheckboxProps>

export const Default: StoryObj<CheckboxProps> = {}
