# Contributing to Our Storybook

This guide explains how to create new stories based on existing ones.

## Quick Start

1. **View existing stories** in the published Storybook
2. **Copy a similar story file** as your starting point
3. **Modify the component and props** for your needs
4. **Submit a pull request** with your new story

## Story Structure

Every story file follows this pattern:

```typescript
import type { Meta, StoryObj } from '@storybook/react';
import YourComponent from './YourComponent';

const meta = {
  title: 'Category/YourComponent',
  component: YourComponent,
  tags: ['autodocs'],
  argTypes: {
    // Define controls for your props
  },
} satisfies Meta<typeof YourComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    // Default props
  },
};

export const Variant: Story = {
  args: {
    // Different props for variations
  },
};
```

## Examples to Copy From

### Task Component
- **File**: `src/components/Task.stories.tsx`
- **Use for**: Individual UI components with different states
- **Features**: Multiple variants (default, pinned, archived)

### TaskList Component  
- **File**: `src/components/TaskList.stories.tsx`
- **Use for**: Components that need Redux/state management
- **Features**: Mock store, data handling

### InboxScreen Component
- **File**: `src/components/InboxScreen.stories.tsx`  
- **Use for**: Full screen/page components
- **Features**: API mocking, error states

## How to Contribute

1. **Fork the repository**
2. **Create a new branch**: `git checkout -b feature/new-story`
3. **Copy an existing story** that's similar to what you need
4. **Modify the story** for your component
5. **Test locally**: `yarn storybook`
6. **Submit a pull request**

## Story Best Practices

- **Use descriptive names** for your stories
- **Include multiple variants** (default, error, loading, etc.)
- **Add documentation** in the component description
- **Use controls** to make stories interactive
- **Include realistic data** in your examples

## Available Controls

You can make your stories interactive by adding these controls:

```typescript
argTypes: {
  text: { control: 'text' },
  number: { control: 'number' },
  boolean: { control: 'boolean' },
  color: { control: 'color' },
  select: { 
    control: 'select', 
    options: ['option1', 'option2'] 
  },
  radio: { 
    control: 'radio', 
    options: ['A', 'B', 'C'] 
  },
}
```

## Need Help?

- Check the **Story Template** in the Storybook
- Look at existing stories for inspiration
- Create an issue in the repository for questions
- The Storybook documentation: https://storybook.js.org/docs
