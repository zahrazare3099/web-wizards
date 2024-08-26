"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItems: navigationMenuItems[] = [
  { title: "صفحه اصلی", href: "/" },
  { title: "دوره ها", href: "/courses" },
  { title: "مقالات", href: "/blog" },
];
const TopNavigation = () => {
  const pathName = usePathname();
  return (
    <ul className="flex gap-x-5 mr-10">
      {menuItems.map((item) => {
        return (
          <li
            key={item.href}
            className={`dark:hover:text-primary transition-colors pb-2 ${
              pathName === item.href
                ? "dark:text-primary border-b-2 dark:border-primary/30"
                : null
            }`}
          >
            <Link href={item.href}> {item.title}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default TopNavigation;
