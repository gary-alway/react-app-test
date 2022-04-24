import { ComponentStory, ComponentMeta } from "@storybook/react";
import { useState } from "react";
import { ToggleSwitch } from "../components/ToggleSwitch";

export default {
  title: "Example/ToggleSwitch",
  component: ToggleSwitch,
} as ComponentMeta<typeof ToggleSwitch>;

const Template: ComponentStory<typeof ToggleSwitch> = (args) => {
  const [checked, setChecked] = useState<boolean>(false);

  return (
    <ToggleSwitch
      {...args}
      checked={checked}
      onClick={() => setChecked(!checked)}
    />
  );
};

export const Default = Template.bind({});
Default.args = {};
