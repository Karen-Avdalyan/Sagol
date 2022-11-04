import { storiesOf } from "@storybook/react";
import imgUrl from "public/image/bitcoin.webp";
import TechCard from "./index";

storiesOf("TechCard", module).add("Tech Card", () => {
  return <TechCard src={imgUrl} />;
});
