import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent, //for dropdown
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger, // to show dropdown
  navigationMenuTriggerStyle,
} from "./navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./dropdown-menu";
import { Button } from "./button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "../theme-provider";

interface Props {}

const Layout = (props: Props) => {
  const { setTheme } = useTheme();
  return (
    <div className="flex flex-col h-screen font-poppins">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavLink to="/">
              <NavigationMenuLink className="flex items-center flex-1 space-x-2 font-bold">
                <h1 className="text-5xl">OK</h1>
                <div className="text-base">
                  <p>Online</p>
                  <p>Kundoktor</p>
                </div>
              </NavigationMenuLink>
            </NavLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-primary  font-bold" : ""
              }
            >
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Home
              </NavigationMenuLink>
            </NavLink>

            <NavLink
              to="/about-us"
              className={({ isActive }) =>
                isActive ? "text-primary  font-bold" : ""
              }
            >
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                About
              </NavigationMenuLink>
            </NavLink>

            <NavLink
              to="/schedules"
              className={({ isActive }) =>
                isActive ? "text-primary  font-bold" : ""
              }
            >
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Schedule
              </NavigationMenuLink>
            </NavLink>

            <NavLink
              to="/rentals"
              className={({ isActive }) =>
                isActive ? "text-primary  font-bold" : ""
              }
            >
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Rentals
              </NavigationMenuLink>
            </NavLink>

            <NavLink
              to="/contacts"
              className={({ isActive }) =>
                isActive ? "text-primary  font-bold" : ""
              }
            >
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Contacts
              </NavigationMenuLink>
            </NavLink>
          </NavigationMenuItem>

          <NavigationMenuItem className="flex space-x-2">
            <Button variant="outline">Login</Button>
            <Button>Signup</Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">
                  <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                  <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                  <span className="sr-only">Toggle theme</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setTheme("light")}>
                  Light
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")}>
                  Dark
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("system")}>
                  System
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </NavigationMenuItem>

        </NavigationMenuList>
      </NavigationMenu>

      <Outlet />
    </div>
  );
};

export default Layout;
