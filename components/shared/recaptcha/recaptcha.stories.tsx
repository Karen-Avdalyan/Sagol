import { storiesOf } from "@storybook/react";
import Recaptcha from ".";

storiesOf("Recaptcha", module).add("Recaptcha component", () => {
  return (
    <div>
      <Recaptcha onChange={() => { ''; }} onExpired={() => { ''; }} />
    </div>
  );
});