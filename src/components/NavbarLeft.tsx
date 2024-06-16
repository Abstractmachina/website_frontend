import React, { FC } from "react";
import Link from "next/link";

type NavbarLeftProps = {
    baseUrl: string
    items: { slug:string, name:string}[]
};

const NavbarLeft: FC<NavbarLeftProps> = ({ baseUrl, items }) => {
    

    
  return (
    <nav className=" min-w-[25%] bg-red-400 flex h-full justify-center pt-20">
      <ul>
        {items.map((item, index: number) => {
          return (
            <li key={index} className="hover:bg-gray-400">
              <Link href={`/${baseUrl}/${item["slug"]}`}>{item["name"]}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

NavbarLeft.propTypes = {};

export default NavbarLeft;
