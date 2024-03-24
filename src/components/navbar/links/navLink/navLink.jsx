'use client';

import { usePathname } from "next/navigation";
import styles from "./navLink.module.css";
import Link from "next/link";

const navLink = ({ item }) => {
  const pathName = usePathname(); // Add parentheses after usePathname

  return (
    <Link
      href={item.path}
      className={`${styles.container} ${
        pathName === item.path && styles.active
      }`}
    >
      {item.title}
    </Link>
  );
};

export default navLink;
