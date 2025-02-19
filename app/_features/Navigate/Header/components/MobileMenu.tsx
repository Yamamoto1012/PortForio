import { CloseIcon } from "./CloseIcon";
import { gsap } from "gsap";
import { useRef, useEffect } from "react";

type MobileMenuProps = {
  children: React.ReactNode;
  onClose: () => void;
};

export const MobileMenu: React.FC<MobileMenuProps> = ({
  children,
}) => {
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (menuRef.current) {
      gsap.fromTo(
        menuRef.current,
        { x: "100%" },
        { x: "0%", duration: 0.3, ease: "power2.inOut" }
      );
    }
  }, []);

  return (
    <div
      className="xl:hidden absolute top-0 left-0 h-screen w-full bg-white z-40"
      ref={menuRef}
    >
      <ul className="grid grid-cols-1 items-center text-center py-20">
        {children}
      </ul>
    </div>
  );
};