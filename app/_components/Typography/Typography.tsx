import Link from "next/link";

type TypographyVariant =
  | "title"
  | "hero"
  | "subtitle"
  | "section"
  | "button"
  | "profile"
  | "contact"
  | "link"
  | "caption"
  | "card"
  | "appTag";

type TypographyBold =
  | "black"
  | "bold"
  | "medium"
  | "regular"
  | "light"

type TypographyProps = {
  text: string;
  variant?: TypographyVariant;
  bold?: TypographyBold;
  color?: string;
  className?: string;
  href?: string;
};

const fontSizeMap: Record<TypographyVariant, string> = {
  title: "64px",
  hero: "52px",
  subtitle: "48px",
  section: "40px",
  button: "32px",
  profile: "24px",
  contact: "18px",
  link: "16px",
  caption: "14px",
  card: "12px",
  appTag: "11px",
};

const fontBoldMap: Record<TypographyBold, string> = {
  black: "900",
  bold: "700",
  medium: "500",
  regular: "400",
  light: "300"
}

export const Typography: React.FC<TypographyProps> = ({
  text,
  variant = "caption",
  bold = "medium",
  color = "inherit",
  className = "",
  href,
}) => {
  const style = {
    fontSize: fontSizeMap[variant],
    fontWeight: fontBoldMap[bold],
  };

  const textStyle = `${color} ${className}`

  // リンクが存在する場合
  if (href) {
    return (
      <Link href={href} className={className} style={style}>
        {text}
      </Link>
    );
  }
  return (
    <p className={textStyle} style={style}>
      {text}
    </p>
  );
};
