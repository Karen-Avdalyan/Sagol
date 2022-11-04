import { storiesOf } from "@storybook/react";
import SubTitleText from "./index";

storiesOf("SubTitleText", module).add("Light subtitle with paragraph", () => {
  return (
    <SubTitleText
      subTitle="About Sagol"
      description="Sagol is your N1 place for blockchain and 
                        software development, providing all-in-one-place services  
                        with innovative and state of the art technologies. We offer 
                        a wide range of services, including decentralized applications,
                        mobile and web development, UI/UX design, NFT marketplaces and
                        decentralized exchange (DEX) development, Crypto Wallet development
                        and setup, Smart Contract development, and testing using the right frameworks."
    />
  );
});

storiesOf("SubTitleText", module).add("Dark subtitle with paragraph", () => {
  return (
    <SubTitleText
      textColor="#fff"
      subTitle="About Sagol"
      description="Sagol is your N1 place for blockchain and 
                        software development, providing all-in-one-place services 
                        with innovative and state of the art technologies. We offer 
                        a wide range of services, including decentralized applications,
                        mobile and web development, UI/UX design, NFT marketplaces and
                        decentralized exchange (DEX) development, Crypto Wallet development
                        and setup, Smart Contract development, and testing using the right frameworks."
    />
  );
});
