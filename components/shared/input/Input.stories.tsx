import { storiesOf } from "@storybook/react";
import Input from ".";

storiesOf("Input", module).add("Input component", () => {
  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "#1049b3",
        padding: 12,
      }}
    >
      <Input label="Write in me :)" />
    </div>
  );
});
