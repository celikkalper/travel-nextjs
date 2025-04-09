import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navigationLinks } from "@/constans";
import { Menu } from "lucide-react";
import Link from "next/link";

import React from "react";

const MobileMenu = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <div className="p-3 lg:hidden bg-sky-500 cursor-pointer text-white rounded-full">
          <Menu size={16} />
        </div>
      </SheetTrigger>
      <SheetContent>
        <SheetTitle className="mt-10 ml-4 text-3xl text-slate-900 ">Travel</SheetTitle>
          <div className="flex flex-col gap-3 space-y-2 text-sm mt-8 ml-5">
            {navigationLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="block text-slate-900  hover:text-sky-500"
              >
                {link.label}
              </Link>
            ))}
          </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
