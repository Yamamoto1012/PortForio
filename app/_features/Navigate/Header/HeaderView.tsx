import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Typography } from "@/app/_components/Typography/Typography";
import Logo from "@/public/Logo.png";
import { HEADER_LINK } from "./constants";
import { HamburgerIcon } from "./components/HambugerIcon";
import { MobileMenu } from "./components/MobileMenu";

type HeaderViewProps = {
  isMenuOpen: boolean;
  currentPathname: string;
  onToggleMenu: () => void;
};

export const HeaderView: React.FC<HeaderViewProps> = ({
  isMenuOpen,
  currentPathname,
  onToggleMenu,
}) => {
  const headerContainerClass = "bg-white py-4 rounded-full shadow-2x";
  const linkContainerClass = "flex space-x-8";

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
      <div className="relative container mx-auto flex items-center justify-between px-2">
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

        <div className="xl:hidden">
          <button onClick={onToggleMenu}>
            <HamburgerIcon />
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
