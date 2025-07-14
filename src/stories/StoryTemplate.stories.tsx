import type { Meta, StoryObj } from '@storybook/react';

// This is a template file showing how to create new stories
// Copy this file and modify it for your components

/**
 * ## How to Create New Stories
 * 
 * 1. Copy this file to your component folder
 * 2. Replace `YourComponent` with your actual component
 * 3. Update the imports
 * 4. Define your component's props and stories
 * 5. Add different variations of your component
 * 
 * ### Example Structure:
 * ```typescript
 * import YourComponent from './YourComponent';
 * 
 * const meta = {
 *   title: 'Example/YourComponent',
 *   component: YourComponent,
 *   parameters: {
 *     layout: 'centered',
 *   },
 *   tags: ['autodocs'],
 *   argTypes: {
 *     backgroundColor: { control: 'color' },
 *   },
 * } satisfies Meta<typeof YourComponent>;
 * 
 * export default meta;
 * type Story = StoryObj<typeof meta>;
 * 
 * export const Primary: Story = {
 *   args: {
 *     primary: true,
 *     label: 'Button',
 *   },
 * };
 * 
 * export const Secondary: Story = {
 *   args: {
 *     label: 'Button',
 *   },
 * };
 * ```
 */

// Example button component for demonstration
const ExampleButton = ({ 
  primary = false, 
  label = 'Button', 
  backgroundColor,
  style,
  ...props 
}: {
  primary?: boolean;
  label?: string;
  backgroundColor?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}) => {
  const mode = primary ? 'primary' : 'secondary';
  return (
    <button
      type="button"
      className={`btn btn-${mode}`}
      style={{
        backgroundColor: backgroundColor || (primary ? '#1ea7fd' : 'transparent'),
        color: primary ? 'white' : '#333',
        border: '1px solid #ccc',
        padding: '8px 16px',
        borderRadius: '4px',
        cursor: 'pointer',
        ...style,
      }}
      {...props}
    >
      {label}
    </button>
  );
};

const meta = {
  title: 'Templates/Story Template',
  component: ExampleButton,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
This is an example of how to structure a Storybook story. Use this as a template for creating new stories.

### Key Features:
- **Controls**: Use the Controls panel to interact with component props
- **Actions**: Click events are logged in the Actions panel  
- **Multiple Stories**: Show different variations of your component
- **Documentation**: Add descriptions and usage examples

### Getting Started:
1. Copy the story structure shown in the code
2. Replace the example component with your own
3. Define the props and their types
4. Create multiple story variations
5. Add documentation and examples
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
    primary: { control: 'boolean' },
    label: { control: 'text' },
  },
  args: { onClick: () => console.log('Button clicked!') },
} satisfies Meta<typeof ExampleButton>;

export default meta;
type Story = StoryObj<typeof meta>;

// Different story variations
export const Primary: Story = {
  args: {
    primary: true,
    label: 'Primary Button',
  },
};

export const Secondary: Story = {
  args: {
    label: 'Secondary Button',
  },
};

export const Large: Story = {
  args: {
    label: 'Large Button',
    style: { 
      fontSize: '18px', 
      padding: '12px 24px' 
    },
  },
};

export const WithCustomColor: Story = {
  args: {
    label: 'Custom Color',
    backgroundColor: '#ff6b6b',
  },
};
