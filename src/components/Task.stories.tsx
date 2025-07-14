import type { Meta, StoryObj } from "@storybook/react-vite";

import Task from "./Task";
import { fn } from "storybook/test";

export const ActionsData = {
    onArchiveTask: fn(),
    onPinTask: fn(),    
}

const meta = {
    component: Task,
    title: "Task",
    tags: ["autodocs"],
    excludeStories: /.*Data$/,
    args: {
        ...ActionsData,
    }
} satisfies Meta<typeof Task>;

export default meta;
type Story = StoryObj<typeof Task>;

export const Default: Story = {
    args: {
        task: {
            id: "1",
            title: "My Task",
            state: "TASK_INBOX",
        },
    },
};

export const Pinned: Story = {
    args: {
        task: {
            id: "2",
            title: "My Pinned Task",
            state: "TASK_PINNED",
        },
    },
};

export const Archived: Story = {
    args: {
        task: {
            id: "3",
            title: "My Archived Task",
            state: "TASK_ARCHIVED",
        },
    },
};

export const Aaaa: Story = {
    args: {
        task: {
            "id": "1",
            "title": "My Taskaaaa",
            "state": "TASK_INBOX"
        }
    }
};

