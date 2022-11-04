import { storiesOf } from "@storybook/react";
import navLists from "../../feature/header/index";
import DropdownHeader from "./index";

storiesOf("DropdownHeader", module).add("DropdownHeader Component", () => {
    return <DropdownHeader overlay={navLists} />;
});
