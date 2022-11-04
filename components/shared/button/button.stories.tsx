import { storiesOf } from "@storybook/react";
import Button from ".";

storiesOf("Button", module).add("Button component", () => {
  return <Button text="Contact Us" />;
});
