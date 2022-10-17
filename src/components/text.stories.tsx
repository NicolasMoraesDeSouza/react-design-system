import { Text, TextProps } from './text'
import { Meta, StoryObj } from '@storybook/react'


export default {
    title: 'Components/Text',
    component: Text,
    args: {
        children: 'Lorem ipsum',
        size: 'sm'
    }
    
} as Meta<TextProps>
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
            <p>Testando</p>
        )
    }
}


