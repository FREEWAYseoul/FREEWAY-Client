import type { Meta, StoryObj } from '@storybook/react';

import MicIcon from '../../../assets/icons/mic-icon.svg';
import CircleButton from './CircleButton';

const meta = {
  title: 'Button/CircleButton',
  component: CircleButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CircleButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: <MicIcon style={{ color: '#fff' }} />,
  },
};

export const Large: Story = {
  args: {
    size: 75,
    children: <MicIcon style={{ color: '#fff' }} />,
  },
};

export const Small: Story = {
  args: {
    size: 50,
    children: <MicIcon style={{ color: '#fff' }} />,
  },
};
