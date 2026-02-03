import Container from "./Container";

import DiscordHoverLogo from "../../general/assets/socials/cDiscord.svg?react";
import ENSHoverLogo from "../../general/assets/socials/cEns.svg?react";
import LinkedInHoverLogo from "../../general/assets/socials/cLinkedin.svg?react";
import TelegramHoverLogo from "../../general/assets/socials/cTelegram.svg?react";
import WeChatHoverLogo from "../../general/assets/socials/cWechat.svg?react";
import DiscordLogo from "../../general/assets/socials/discord.svg?react";
import ENSLogo from "../../general/assets/socials/ens.svg?react";
import GitHubLogo from "../../general/assets/socials/github.svg?react";
import LinkedInLogo from "../../general/assets/socials/linkedin.svg?react";
import MailLogo from "../../general/assets/socials/mail.svg?react";
import TelegramLogo from "../../general/assets/socials/telegram.svg?react";
import WeChatLogo from "../../general/assets/socials/wechat.svg?react";
import XLogo from "../../general/assets/socials/x.svg?react";

import { Fragment } from "react";
import Footer from "./footer/Footer";
import LinkCard, { type LinkCardProps } from "./linkCard/LinkCard";

function Links() {
  const linkCardList: LinkCardProps[] = [
    {
      Logo: XLogo,
      HoverLogo: XLogo,
      title: "X",
      handle: "@mmqeth",
      url: "https://x.com/mmqeth",
    },
    {
      Logo: GitHubLogo,
      HoverLogo: GitHubLogo,
      title: "GitHub",
      handle: "mmqeth",
      url: "https://github.com/mmqeth",
    },
    {
      Logo: TelegramLogo,
      HoverLogo: TelegramHoverLogo,
      title: "Telegram",
      handle: "mmqeth",
      url: "https://t.me/mmqeth",
    },
    {
      Logo: DiscordLogo,
      HoverLogo: DiscordHoverLogo,
      title: "Discord",
      handle: "mmqeth",
      url: "https://discord.com/users/556392934904430593",
    },
    {
      Logo: WeChatLogo,
      HoverLogo: WeChatHoverLogo,
      title: "WeChat",
      handle: "0xmmq",
      url: "https://github.com/mmqnym/mmqnym/blob/master/assets/wechat_p.png",
    },
    {
      Logo: ENSLogo,
      HoverLogo: ENSHoverLogo,
      title: "ENS",
      handle: "0xmmq.eth",
      url: "https://app.ens.domains/0xmmq.eth",
    },
    {
      Logo: LinkedInLogo,
      HoverLogo: LinkedInHoverLogo,
      title: "LinkedIn",
      handle: "mmqeth",
      url: "https://www.linkedin.com/in/mmqeth/",
    },
    {
      Logo: MailLogo,
      HoverLogo: MailLogo,
      title: "Mail",
      handle: "mail@mmq.dev",
      url: "mailto:mail@mmq.dev",
    },
  ];

  return (
    <Container>
      <div className="grid grid-cols-1 mt-24 mb-96 sm:mb-24 xl:w-1/2 gap-x-5 gap-y-10 sm:mt-36 sm:grid-cols-2 sm:gap-x-10 sm:gap-y-20 xl:mt-36 2k:mt-56 xl:grid-rows-2 xl:grid-cols-[repeat(4,_minmax(0,_1fr))] xl:gap-x-[calc((100%-4*240px)/3)]">
        {linkCardList.map(({ Logo, HoverLogo, title, handle, url }, index) => (
          // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
          <Fragment key={index}>
            <LinkCard Logo={Logo} HoverLogo={HoverLogo} title={title} handle={handle} url={url} />
          </Fragment>
        ))}
      </div>

      <Footer />
    </Container>
  );
}

export default Links;
