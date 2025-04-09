import {
  Facebook,
  Instagram,
  MessageCircle,
  Phone,
  Search,
  Twitter,
  User,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import MobileMenu from "./MobileMenu";
import { navigationLinks } from "@/constans";
import SearchPage from "./SearchPage";

const Header = () => {
  const socialLinks = [
    { href: "#", icon: <Facebook size={16} /> },
    { href: "#", icon: <Twitter size={16} /> },
    { href: "#", icon: <Instagram size={16} /> },
  ];

  return (
    <header className="bg-slate-900 text-white">
      {/* Top Bar */}
      <div className="flex container mx-auto h-16 justify-center md:justify-between items-center px-4 py-2 text-sm">
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-3">
            <div className="bg-white p-2 rounded-full">
              <MessageCircle size={16} className="text-sky-500" />
            </div>
            info@travel.com
          </div>
          <div className="flex items-center gap-3">
            <div className="bg-white p-2 rounded-full">
              <Phone size={16} className="text-sky-500" />
            </div>
            0500-123-4567
          </div>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          {socialLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className=" hover:text-sky-500 transition duration-300"
            >
              {link.icon}
            </Link>
          ))}
        </div>
      </div>

      {/* Navigation Bar */}
      <div className="bg-white shadow-xl flex items-center">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <Image
            src={"/logo.png"}
            alt="Travel Logo"
            width={210}
            height={50}
            className="w-36 lg:w-52 h-auto"
          />
          <nav className="hidden lg:flex space-x-8 text-md font-semibold">
            {navigationLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="text-slate-900 hover:text-sky-500 transition duration-300"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center space-x-4">
            <SearchPage />
            <div className="p-3 bg-sky-400 cursor-pointer text-white rounded-full">
              <User size={16} />
            </div>
            <MobileMenu />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
