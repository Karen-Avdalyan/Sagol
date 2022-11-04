import { storiesOf } from "@storybook/react";
import ContactUsForm from ".";

storiesOf("Forms", module).add("Form component", () => {
  return (
    <div style={{ width: "500px" }}>
      <ContactUsForm />;
    </div>
  );
});
