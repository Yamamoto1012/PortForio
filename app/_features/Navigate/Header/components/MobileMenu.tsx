import { CloseIcon } from "./CloseIcon";

type MobileMenuProps = {
  children: React.ReactNode;
  onClose: () => void;
};

export const MobileMenu: React.FC<MobileMenuProps> = ({
  children,
  onClose,
}) => (
  <div className="xl:hidden absolute top-0 left-0 h-screen w-full bg-white z-50">
    <div className="xl:hidden flex justify-end pr-3 py-6">
      <button onClick={onClose}>
        <CloseIcon />
      </button>
    </div>
    <ul className="grid grid-cols-1 items-center text-center py-4">
      {children}
    </ul>
  </div>
);
