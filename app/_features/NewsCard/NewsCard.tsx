import React from "react";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";

import { Typography } from "@/app/_components/Typography/Typography";

type NewsCardProps = {
  tag: string;
  date: string;
  title: string;
  link: string;
  image: StaticImageData;
  imageAlt?: string;
}

export const NewsCard: React.FC<NewsCardProps> = ({
  tag,
  date,
  title,
  link,
  image,
  imageAlt = ""
}) => {
  // カード全体のスタイル
  const cardStyle = "w-[298px] h-[350px] shadow-2xl"
  // 画像コンテナのスタイル
  const imageContainerStyle = "w-full h-[199px] relative";
  // カード下部のコンテンツ
  const cardContentStyle = "p-2";
  // タグと日付のコンテナスタイル
  const tagDateContainerStyle = "flex justify-between";
  //　タグのスタイル
  const tagStyle = "w-[90px] h-[26px] bg-primary-accent flex items-center justify-center rounded-full";
  // 日付のスタイル
  const dateStyle = "flex items-end"
  // タイトルのスタイル
  const titleStyle = "pt-2"

  return (
    <Link href={link} className="block">
      <div className={cardStyle}>
        <div className={imageContainerStyle}>
          <Image src={image} alt={imageAlt} fill className="object-cover" />
        </div>
        {/* Cardの下の部分 */}
        <div className={cardContentStyle}>
          <div className={tagDateContainerStyle}>
            <div className={tagStyle}>
              <Typography text={tag} variant="caption" bold="bold" color="white" />
            </div>
            <div className={dateStyle}>
              <Typography text={date} variant="card" color="black" />
            </div>
          </div>
          <div className={titleStyle}>
            <Typography text={title} variant="card" color="black" />
          </div>
        </div>
      </div>
    </Link>
  )
}