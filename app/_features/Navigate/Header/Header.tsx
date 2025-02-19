"use client";

import React, { useState, useCallback } from "react";
import { usePathname } from "next/navigation";
import { HeaderView } from "./HeaderView";

export const Header = () => {
  // ページのパス管理
  const currentPathname = usePathname();

  // メニューの状態管理
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // メニューの開閉ハンドラー
  const handleToggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  return (
    <HeaderView
      isMenuOpen={isMenuOpen}
      currentPathname={currentPathname}
      onToggleMenu={handleToggleMenu}
    />
  );
};
