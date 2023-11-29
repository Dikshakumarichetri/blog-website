import Link from "next/link";
import React from "react";
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
    <div>
      <Link href="/">FullStack</Link>
      <div>
        {linkData.map((eachLinkData) => {
          <Link key={eachLinkData.id} href={eachLinkData.url}>
            {eachLinkData.title}
          </Link>
        })}
      </div>
    </div>
  );
};

export default Navbar;
