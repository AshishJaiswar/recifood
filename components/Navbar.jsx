"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { Menu, Search } from "lucide-react";
import { useMediaQuery } from "@uidotdev/usehooks";

function Navbar() {
  const isMediumDevice = useMediaQuery("only screen and (min-width : 769px)");
  return (
    <nav className="pt-2 flex justify-between items-center">
      <Image src="/logo.svg" width={100} height={50} alt="ReciFood" />
      {isMediumDevice ? (
        // Search Input Desktop
        <div className="flex w-full max-w-sm items-center space-x-2">
          <Input type="text" placeholder="Search recipe" className="" />
          <Button
            variant="outline"
            type="submit"
            className="bg-slate-900 text-slate-50"
          >
            Search
          </Button>
        </div>
      ) : (
        // Search Input Mobile
        <Button variant="ghost" size="icon">
          <Search size={30} strokeWidth={1} color="#393E41" />
        </Button>
      )}

      {isMediumDevice ? (
        // Menu for Desktop
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Home
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      ) : (
        // Menu for Mobile
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Menu size={30} strokeWidth={1} color="#393E41" />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Setting</DropdownMenuItem>
            <DropdownMenuItem>
              <Button
                variant="secondary"
                className="text-slate-700 font-bold tracking-wide"
              >
                Sign in
              </Button>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Button className="font-bold tracking-wide">Sign up</Button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )}
    </nav>
  );
}

export default Navbar;
