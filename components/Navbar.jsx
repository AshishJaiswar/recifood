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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { Menu, Search, User, Settings, LogOut } from "lucide-react";

function Navbar() {
  const isLoggedIn = true;

  return (
    <nav id="nav-container" className="pt-2 flex justify-between items-center">
      <Image id="logo" src="/logo.svg" width={100} height={50} alt="ReciFood" />
      {/* Search Input Desktop */}
      <div className="hidden w-full max-w-sm items-center space-x-2 lg:flex">
        <Input id="search-input" type="text" placeholder="Search recipe" />
        <Button
          id="search-btn"
          variant="outline"
          type="submit"
          className="bg-slate-900 text-slate-50"
        >
          Search
        </Button>
      </div>
      {/* Search Input Mobile */}
      <div className="lg:hidden">
        <Button id="search-btn-icon" variant="ghost" size="icon">
          <Search size={30} strokeWidth={1} color="#393E41" />
        </Button>
      </div>

      <div className="flex items-center justify-center">
        {/* Menu for Desktop */}
        <NavigationMenu className="hidden md:block">
          <NavigationMenuList id="nav-items">
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
                <Link href="/login" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={`${navigationMenuTriggerStyle()} mr-2`}
                  >
                    Sign in
                  </NavigationMenuLink>
                </Link>
                <Link href="/login" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={`${navigationMenuTriggerStyle()} bg-primary text-slate-50 hover:bg-violet-600 hover:text-slate-50 active:bg-violet-600 active:text-slate-50`}
                  >
                    Sign up
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            )}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Menu for Mobile */}
        <DropdownMenu id="menu-items">
          <DropdownMenuTrigger>
            {isLoggedIn ? (
              <Avatar className="md:ml-2">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            ) : (
              <Menu
                size={30}
                strokeWidth={1}
                color="#393E41"
                className="md:hidden"
              />
            )}
          </DropdownMenuTrigger>
          {isLoggedIn ? (
            <DropdownMenuContent>
              <DropdownMenuLabel className="md:hidden">Menu</DropdownMenuLabel>
              <DropdownMenuSeparator className="md:hidden" />
              <Link href="/" legacyBehavior passHref>
                <DropdownMenuItem className="nav-item cursor-pointer md:hidden">
                  Home
                </DropdownMenuItem>
              </Link>
              <Link href="/courses" legacyBehavior passHref>
                <DropdownMenuItem className="nav-item cursor-pointer md:hidden">
                  Courses
                </DropdownMenuItem>
              </Link>
              <Link href="/cuisines" legacyBehavior passHref>
                <DropdownMenuItem className="nav-item cursor-pointer md:hidden">
                  Cuisines
                </DropdownMenuItem>
              </Link>
              <DropdownMenuSeparator className="md:hidden" />
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <Link href="/" legacyBehavior passHref>
                <DropdownMenuItem className="nav-item cursor-pointer">
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
                <DropdownMenuItem className="nav-item cursor-pointer">
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
                <DropdownMenuItem className="nav-item !text-red-600 cursor-pointer">
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
                <DropdownMenuItem className="nav-item cursor-pointer h-10 font-medium justify-center">
                  Sign in
                </DropdownMenuItem>
              </Link>
              <DropdownMenuSeparator />
              <Link href="/" legacyBehavior passHref>
                <DropdownMenuItem className="nav-item cursor-pointer h-10 font-medium bg-primary text-slate-50 justify-center">
                  Sign up
                </DropdownMenuItem>
              </Link>
            </DropdownMenuContent>
          )}
        </DropdownMenu>
      </div>
    </nav>
  );
}

export default Navbar;
