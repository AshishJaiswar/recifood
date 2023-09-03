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
import { Menu, Search, User, Settings, LogOut } from "lucide-react";

function Navbar() {
  const isLoggedIn = true;

  return (
    <nav className="pt-2 flex justify-between items-center">
      <Image src="/logo.svg" width={100} height={50} alt="ReciFood" />
      {/* Search Input Desktop */}
      <div className="hidden w-full max-w-sm items-center space-x-2 md:flex">
        <Input type="text" placeholder="Search recipe" />
        <Button
          variant="outline"
          type="submit"
          className="bg-slate-900 text-slate-50"
        >
          Search
        </Button>
      </div>
      {/* Search Input Mobile */}
      <div className="md:hidden">
        <Button variant="ghost" size="icon">
          <Search size={30} strokeWidth={1} color="#393E41" />
        </Button>
      </div>
      {/* Menu for Desktop */}
      <NavigationMenu className="hidden md:block">
        <NavigationMenuList>
          {isLoggedIn ? (
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Home
                </NavigationMenuLink>
              </Link>
              <Link href="/courses" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Courses
                </NavigationMenuLink>
              </Link>
              <Link href="/cuisines" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Cuisines
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          ) : (
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink
                  className={`${navigationMenuTriggerStyle()} mr-2`}
                >
                  Sign in
                </NavigationMenuLink>
              </Link>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink
                  className={`${navigationMenuTriggerStyle()} bg-primary text-slate-50`}
                >
                  Sign up
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          )}
        </NavigationMenuList>
      </NavigationMenu>

      {/* Menu for Mobile */}
      <DropdownMenu>
        <DropdownMenuTrigger className="md:hidden">
          <Menu size={30} strokeWidth={1} color="#393E41" />
        </DropdownMenuTrigger>
        {isLoggedIn ? (
          <DropdownMenuContent className="md:hidden">
            <DropdownMenuLabel>Menu</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <Link href="/" legacyBehavior passHref>
              <DropdownMenuItem className="cursor-pointer">
                Home
              </DropdownMenuItem>
            </Link>
            <Link href="/courses" legacyBehavior passHref>
              <DropdownMenuItem className="cursor-pointer">
                Courses
              </DropdownMenuItem>
            </Link>
            <Link href="/cuisines" legacyBehavior passHref>
              <DropdownMenuItem className="cursor-pointer">
                Cuisines
              </DropdownMenuItem>
            </Link>
            <DropdownMenuSeparator />
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <Link href="/" legacyBehavior passHref>
              <DropdownMenuItem className="cursor-pointer">
                <User
                  size={20}
                  strokeWidth={1}
                  color="#393E41"
                  className="mr-1"
                />
                Profile
              </DropdownMenuItem>
            </Link>
            <Link href="/courses" legacyBehavior passHref>
              <DropdownMenuItem className="cursor-pointer">
                <Settings
                  size={20}
                  strokeWidth={1}
                  color="#393E41"
                  className="mr-1"
                />
                Settings
              </DropdownMenuItem>
            </Link>
            <Link href="/" legacyBehavior passHref>
              <DropdownMenuItem className="!text-red-600 cursor-pointer">
                <LogOut
                  size={20}
                  strokeWidth={1}
                  color="#393E41"
                  className="mr-1"
                />
                Logout
              </DropdownMenuItem>
            </Link>
          </DropdownMenuContent>
        ) : (
          <DropdownMenuContent>
            <Link href="/" legacyBehavior passHref>
              <DropdownMenuItem className="cursor-pointer h-10 font-medium justify-center">
                Sign in
              </DropdownMenuItem>
            </Link>
            <DropdownMenuSeparator />
            <Link href="/" legacyBehavior passHref>
              <DropdownMenuItem className="cursor-pointer h-10 font-medium bg-primary text-slate-50 justify-center">
                Sign up
              </DropdownMenuItem>
            </Link>
          </DropdownMenuContent>
        )}
      </DropdownMenu>
    </nav>
  );
}

export default Navbar;
