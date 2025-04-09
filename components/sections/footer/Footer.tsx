import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { navigationLinks } from "@/constans";
import { Facebook, Instagram, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  const socialLinks = [
    { href: "#", icon: <Facebook size={16} /> },
    { href: "#", icon: <Twitter size={16} /> },
    { href: "#", icon: <Instagram size={16} /> },
  ];

  const instagramImages = Array.from(
    { length: 11 },
    (_, index) => `/instagram/${index + 1}.jpg`
  );

  return (
    <footer className="relative bg-slate-900 text-white">
      <div
        className="absolute -top-16 left-1/2 transform -translate-x-1/2 
      bg-sky-500 text-left px-6 py-12 rounded-md shadow-lg w-11/12 max-w-6xl h-72
       grid grid-cols-1 md:grid-cols-2 items-center gap-6"
      >
        <div>
          <h2 className="text-3xl font-bold">Ready to get started?</h2>
          <p className="mt-2 text-lg">
            It only takes a few minutes to register your FREE Travel account.
          </p>
          <Link href="/register">
            <Button className="mt-4 bg-white text-sky-500 px-6 py-2 font-semibold rounded shadow-md hover:bg-gray-100">
              OPEN AN ACCOUNT
            </Button>
          </Link>
        </div>
        <div className="flex justify-center relative">
          <Image
            height={456}
            width={564}
            src="/travelfooter.png"
            alt="Call to action graphic"
            className="hidden md:block absolute w-full -bottom-28 "
          />
        </div>
      </div>
      <div className="container mx-auto relative py-56 px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-8">
        <div className="lg:col-span-2 mt-16">
          <h3 className="text-2xl font-bold">Travel</h3>
          <p className="mt-4 text-sm">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            consectetur omnis ullam iure tempore ab doloremque neque repellendus
            enim, dolore ratione error, corrupti consequatur nesciunt.
          </p>
          <div className="flex space-x-4 mt-4">
            {socialLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className=" hover:text-orange-500 transition duration-300"
              >
                {link.icon}
              </Link>
            ))}
          </div>
        </div>
        <div className="mt-16">
          <h4 className="text-xl font-bold mb-4">Useful Links</h4>
          <div className=" relative w-16 h-1 bg-sky-500">
            <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-sky-500"></div>
            <div className="absolute h-3 w-3 bg-sky-500 rounded-full top-1/2 -translate-y-1/2 animate-move-dot"></div>
            <div className="absolute h-1.5 w-1.5 ml-0.5 bg-white rounded-full top-1/2 -translate-y-1/2 animate-move-dot"></div>
          </div>
          <div className="space-y-2 text-sm mt-8">
            {navigationLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="block hover:text-sky-500"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="lg:col-span-2 mt-16">
          <h4 className="text-xl font-bold mb-4">Instagram</h4>
          <div className=" relative w-16 h-1 bg-sky-500">
            <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-sky-500"></div>
            <div className="absolute h-3 w-3 bg-sky-500 rounded-full top-1/2 -translate-y-1/2 animate-move-dot"></div>
            <div className="absolute h-1.5 w-1.5 ml-0.5 bg-white rounded-full top-1/2 -translate-y-1/2 animate-move-dot"></div>
          </div>
          <div className="grid grid-cols-6 gap-2 mt-8 ">
            {instagramImages.map((src, index) => (
              <Image
                key={index}
                src={src}
                width={50}
                height={50}
                alt={`Instagram Image ${index + 1}`}
                className="w-full h-auto rounded-md"
              />
            ))}
          </div>
        </div>
        <div className="lg:col-span-2 mt-16">
          <h4 className="text-xl font-bold mb-4">Subscribe</h4>
          <p className="text-sm mb-4">
            Subscribe our newsletter to get our latest news and updates.
          </p>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0">
            <Input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2"
            />
            <Button className="px-4 py-2 md:mx-1 bg-sky-500 hover:bg-sky-600 text-white transition duration-300 ">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
      <div className="container mx-auto py-4 text-center text-sm border-t border-gray-700 ">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div>
            &copy; {new Date().getFullYear()}{" "}
            <span className="text-sky-500">
              <Link href="/">Travel.</Link>
            </span>{" "}
            All rights reserved.
          </div>
          <div>Coded by</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
