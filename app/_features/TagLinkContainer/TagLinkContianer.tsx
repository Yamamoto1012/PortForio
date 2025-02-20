import { Typography } from "@/app/_components/Typography/Typography";
import { NEWS_CARD_TAGS } from "../NewsCardList/NewsCard/constants";

export const CategoryNavBar = () => {
  const CategoryNavContainerClass =
    " w-fit py-[15.5px] px-[43.5px] rounded-full bg-white";
  const CategoryNavLinkClass = "flex text-center items-center gap-[50px] text-sha"
  return (
    <>
      <div className={CategoryNavContainerClass}>
        <ul className={CategoryNavLinkClass}>
          {NEWS_CARD_TAGS.map((news) => (
            // <li className=" hover:text-primary-accent">{news.label}</li>
            <Typography className="hover:text-primary-accent w-fit" text={news.label} />
          ))}
        </ul>
      </div>
    </>
  );
};
