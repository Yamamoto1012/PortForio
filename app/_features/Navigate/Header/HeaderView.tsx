import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Typography } from "@/app/_components/Typography/Typography";
import Logo from "@/public/Logo.png";
import { HEADER_LINK } from "./constants";
import { MobileMenu } from "./components/MobileMenu";

type HeaderViewProps = {
  isMenuOpen: boolean;
  currentPathname: string;
  onToggleMenu: () => void;
  menuIcon: React.ReactNode
};

export const HeaderView: React.FC<HeaderViewProps> = ({
  isMenuOpen,
  currentPathname,
  onToggleMenu,
  menuIcon
}) => {
  const headerContainerClass = "bg-white py-2 rounded-full w-full md:max-w-[1350px] shadow-2x fixed";
  const linkContainerClass = "flex flex-wrap justify-center md:justify-start gap-2 md:space-x-4";

  const createLinkItem = (href: string, text: string, index: number) => {
    const isActive = currentPathname === href;
    const linkStyle = isActive
      ? "text-primary-accent"
      : "hover:text-primary-accent hover:underline delay-100";

    return (
      <li key={index} className={linkStyle}>
        <Typography text={text} href={href} variant="link" />
      </li>
    );
  };

  const createMobileLinkItem = (href: string, text: string, index: number) => {
    const isActive = currentPathname === href;
    const linkStyle = isActive
      ? "text-primary-accent"
      : "hover:text-yellow-500 hover:underline delay-50";

    return (
      <li key={index} className={`py-2 ${linkStyle}`}>
        <Typography text={text} href={href} variant="profile" />
      </li>
    );
  };

  return (
    <header className={headerContainerClass}>
      <div className="relative container mx-auto flex items-center justify-between px-2 sm:px-4 md:px-6">
        <Link href="/" className="flex-shrink-0">
          <Image src={Logo} alt="Logo" width={169} height={66} priority />
        </Link>

        <nav className="hidden xl:block">
          <ul className={linkContainerClass}>
            {HEADER_LINK.map((link, index) =>
              createLinkItem(link.href, link.text, index)
            )}
          </ul>
        </nav>

        <div className="z-50 xl:hidden">
          <button onClick={onToggleMenu}>
            {menuIcon}
          </button>
        </div>

        {isMenuOpen && (
          <MobileMenu onClose={onToggleMenu}>
            {HEADER_LINK.map((link, index) =>
              createMobileLinkItem(link.href, link.text, index)
            )}
          </MobileMenu>
        )}
      </div>
    </header>
  );
};
