"use client";

import React, { useState, useCallback } from "react";
import { usePathname } from "next/navigation";
import { HeaderView } from "./HeaderView";
import { CloseIcon } from "./components/CloseIcon";
import { HamburgerIcon } from "./components/HambugerIcon";

export const Header = () => {
  // ページのパス管理
  const currentPathname = usePathname();

  // メニューの状態管理
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // メニューの開閉ハンドラー
  const handleToggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  const menuIcon = isMenuOpen ? <CloseIcon/> : <HamburgerIcon />

  return (
    <HeaderView
      isMenuOpen={isMenuOpen}
      currentPathname={currentPathname}
      onToggleMenu={handleToggleMenu}
      menuIcon={menuIcon}
    />
  );
};
