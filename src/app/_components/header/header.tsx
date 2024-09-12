import Image from "next/image";
import TopNavigation from "./TopNavigation";

export const Header = () => {
  return (
    <header className="border-b dark:border-base-content dark:border-opacity-5 px-5">
      <div className="flex justify-between items-center container">
        <Image
          src="/images/logo-light.svg"
          width={100}
          height={36}
          alt="logo"
        />
        <TopNavigation />
        <span className="flex flex-1 flex-row-reverse">auth</span>
      </div>
    </header>
  );
};
