import { storiesOf } from "@storybook/react";
import Title from "./index";

storiesOf("Title", module).add("Title with underline", () => {
  return <Title titleText="Our Services" />;
});

storiesOf("Title", module).add("Title with left underline", () => {
  return <Title titleText="Our Services" alignBorder="left" />;
});

storiesOf("Title", module).add("Title with right underline", () => {
  return <Title titleText="Our Services" alignBorder="right" />;
});
