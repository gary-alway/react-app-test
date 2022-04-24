import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Spinner } from "../components/Spinner";

export default {
  title: "Example/Spinner",
  component: Spinner,
} as ComponentMeta<typeof Spinner>;

const Template: ComponentStory<typeof Spinner> = (args) => (
  <Spinner {...args}>
    <div>this is the content that loaded...</div>
  </Spinner>
);

export const Default = Template.bind({});
Default.args = {
  isLoading: true,
};
