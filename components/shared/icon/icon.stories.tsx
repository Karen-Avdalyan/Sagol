import { storiesOf } from "@storybook/react";
import Icon from ".";

storiesOf("Icon", module).add("Icon component", () => {
  return (
    <div style={{ backgroundColor: "blue" }}>
      <Icon width={200} height={100} name="arrow-right.svg" />
    </div>
  );
});
