import { Typography } from "../Typography/Typography";

type PageTitleProps = {
  title: string;
};

export const PageTitle: React.FC<PageTitleProps> = ({ title }) => {
  return (
    <div className="pt-40 flex items-center justify-center">
      <Typography text={title} bold="bold" variant="title" color="text-primary-accent" />
    </div>
  );
};