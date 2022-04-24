import { ComponentStory, ComponentMeta } from "@storybook/react";
import { FormEvent, useState } from "react";
import { TextInput } from "../components/TextInput";

export default {
  title: "Example/TextInput",
  component: TextInput,
} as ComponentMeta<typeof TextInput>;

const Template: ComponentStory<typeof TextInput> = (args) => {
  const [text, setText] = useState<string>();

  return (
    <TextInput
      {...args}
      value={text}
      onChange={(event: FormEvent<HTMLInputElement>) =>
        setText(event.currentTarget.value)
      }
      onClear={() => setText("")}
    />
  );
};

export const WithState = Template.bind({});
WithState.args = {};
