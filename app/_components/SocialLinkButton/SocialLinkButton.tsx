import React from "react";

import Image from "next/image";
import Link from "next/link";

type SocialLinkButtonProps = {
  image: string;
  href: string;
  alt?: string;
  size?: "small" | "medium" | "large";
};

export const SocialLinkButton: React.FC<SocialLinkButtonProps> = ({
  image,
  href,
  alt = "ソーシャルメディアリンク",
  size = "medium",
}) => {
  // サイズに応じたwidth/height
  // NonNullableはundefinedを削除する
  const sizeMap: Record<NonNullable<SocialLinkButtonProps["size"]>, number> = {
    small: 50,
    medium: 100,
    large: 150,
  };

  const imageSize = sizeMap[size];

  return (
    <>
      <Link href={href} className="inline-block">
        <Image src={image} alt={alt} width={imageSize} height={imageSize} />
      </Link>
    </>
  );
};
