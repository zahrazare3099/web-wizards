import Image from "next/image";
import TopNavigation from "./TopNavigation";
import Link from "next/link";

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
        <Link className="flex flex-1 flex-row-reverse" href={"/signin"}>
          auth
        </Link>
      </div>
    </header>
  );
};
