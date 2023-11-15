"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Menu, User, Settings, LogOut } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import Link from "next/link";

function UserMenu() {
  const isLoggedIn = true;
  const active = "text-primary";
  return (
    <div className="flex items-center justify-center">
      {/* Menu for Desktop */}
      <NavigationMenu className="hidden md:block">
        <NavigationMenuList id="nav-items">
          {isLoggedIn ? (
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink
                  className={`${navigationMenuTriggerStyle()} text-base ${active}`}
                >
                  Home
                </NavigationMenuLink>
              </Link>
              {/* <Link href="/categories" legacyBehavior passHref>
                <NavigationMenuLink
                  className={`${navigationMenuTriggerStyle()} text-base text-slate-600`}
                >
                  Categories
                </NavigationMenuLink>
              </Link> */}
              <Link href="/recipes" legacyBehavior passHref>
                <NavigationMenuLink
                  className={`${navigationMenuTriggerStyle()} text-base text-slate-600`}
                >
                  Recipes
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
            {/* <Link href="/categories" legacyBehavior passHref>
              <DropdownMenuItem className="nav-item cursor-pointer md:hidden">
                Categories
              </DropdownMenuItem>
            </Link> */}
            <Link href="/recipes" legacyBehavior passHref>
              <DropdownMenuItem className="nav-item cursor-pointer md:hidden">
                Recipes
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
  );
}

export default UserMenu;
