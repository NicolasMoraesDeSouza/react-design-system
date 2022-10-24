import { Text, TextProps } from './text'
import { Meta, StoryObj } from '@storybook/react'


export default {
    title: 'Components/Text',
    component: Text,
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

} as Meta<TextProps>
export const Default: StoryObj<TextProps> = {
    args: {
        size: 'md',
        textColor: 'gray'
    },
    argTypes: {

        asChild: {
            table: {
                disable: true
            }
        }
    }
}
export const Small: StoryObj<TextProps> = {
    args: {
        size: 'sm'
    },
    argTypes: {

        asChild: {
            table: {
                disable: true
            }
        }
    }
}
export const Large: StoryObj<TextProps> = {
    args: {
        size: 'lg'
    },
    argTypes: {

        asChild: {
            table: {
                disable: true
            }
        }
    }
}
export const CustomComp: StoryObj<TextProps> = {
    args: {
        asChild: true,
        children: (
            <p>Test with {'<p>'} tag</p>
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
    },
}


