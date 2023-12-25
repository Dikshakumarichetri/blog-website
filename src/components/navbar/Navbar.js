"use client"
import Link from "next/link";
import React from "react";
import styles from './navbar.module.css'
import DarkLightToggle from "../DarkLightToggle/DarkLightToggle";
import { signOut } from "next-auth/react";

const linkData = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "Portfolio",
    url: "/portfolio",
  },
  {
    id: 3,
    title: "Blogs",
    url: "/blog",
  },
  {
    id: 4,
    title: "About",
    url: "/about",
  },
  {
    id: 5,
    title: "Contact",
    url: "/contact",
  },
  {
    id: 6,
    title: "Dashboard",
    url: "/dashboard",
  },
];
const Navbar = () => {
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>LOGO</Link>

      <div className={styles.links}>
      <DarkLightToggle />

        {linkData.map((eachLinkData) => (
          <Link key={eachLinkData.id} href={eachLinkData.url} className={styles.link}>
            {eachLinkData.title}
          </Link>
        ))}
        <button 
        className={styles.logout}
         onClick={signOut}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
