import { storiesOf } from "@storybook/react";
import TextArea from "./index";

storiesOf("TextArea", module).add("TextArea component", () => {
  return (
    <div style={{ backgroundColor: "blue" }}>
      <TextArea label="Write in me :)" />;
    </div>
  );
});
