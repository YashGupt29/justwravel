"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Image from "next/image";
import { PhoneCall, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Profile } from "./profile";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import { useMyContext } from "@/lib/reduxProvider";
import { MobileSidebar } from "./mobile-sidebar";
import { Sidebar } from "./sidebar";

const components: { title: string; href: string }[] = [
  {
    title: "Ladakh",
    href: "https://www.justwravel.com/backpacking-trips/india/ladakh",
  },
  {
    title: "Spiti",
    href: "/docs/primitives/hover-card",
  },
  {
    title: "Domestic Tours",
    href: "/docs/primitives/progress",
  },
  {
    title: "International Tours",
    href: "/docs/primitives/scroll-area",
  },
  {
    title: "Upcoming Trips",
    href: "/docs/primitives/tabs",
  },
  {
    title: "About",
    href: "/docs/primitives/tooltip",
  },
];

export function NavigationMenuBar() {
  const router = useRouter();
  const user = useSelector((state: RootState) => state.user);
  const { token } = useMyContext();
  const [isMounted, setIsMounted] = React.useState(false);
  const [isLargeScreen, setIsLargeScreen] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);
  React.useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!isMounted) {
    return null;
  }
  if (!isLargeScreen) {
    return (
      <div className="flex justify-between p-4 bg-gradient-to-b from-[#255CB8] to-sky-100">
        <Link href="/">
          <Image src="/logo.png" alt="logo" height={180} width={180} />
        </Link>
        <div className="flex justify-center items-center gap-2">
          <div className="bg-blue-300 h-8 w-8 p-2 rounded-full flex justify-center items-center">
            <PhoneCall fill="white" width={20} className="text-white" />
          </div>

          <MobileSidebar />
        </div>
      </div>
    );
  }
  return (
    <>
      <div className="flex justify-between py-11 lg:py-[20px] lg:px-[130px] shadow-bottom-lg">
        <Link href="/">
          <Image src="/logo.png" alt="logo" height={180} width={180} />
        </Link>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem></NavigationMenuItem>
            <NavigationMenuItem>
              <Link
                href="https://www.justwravel.com/backpacking-trips"
                legacyBehavior
                passHref
              >
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  <span className="hidden md:flex text-muted-foreground text-[17px]  font-normal">
                    Backpacking Trips
                  </span>
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link
                href="https://www.justwravel.com/treks"
                legacyBehavior
                passHref
              >
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  <span className="hidden md:flex text-muted-foreground text-[17px] font-normal">
                    Treks
                  </span>
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link
                href="https://www.justwravel.com/weekend-getaways"
                legacyBehavior
                passHref
              >
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  <span className="hidden md:flex text-muted-foreground text-[17px]  font-normal">
                    Weekend Gateways
                  </span>
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>
                <span className="hidden md:flex text-muted-foreground text-[17px]  font-normal">
                  More
                </span>
              </NavigationMenuTrigger>

              <NavigationMenuContent>
                <ul className="hidden md:flex md:flex-col  w-[100px] gap-1 text-md p-4 md:w-[150px] lg:w-[200px]">
                  {components.map((component) => (
                    <ListItem
                      className="text-muted-foreground gap-2"
                      key={component.title}
                      title={component.title}
                      href={component.href}
                    ></ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <div className="flex gap-[40px] items-center justify-center">
          <div className="flex gap-2">
            <div className="bg-gray-100 rounded-full p-3 flex items-center justify-center">
              <PhoneCall fill="black" width={20} />
            </div>
            <div className="hidden md:flex flex-col">
              <p>Call Us</p>
              <p className="font-medium">+91 8527273564</p>
            </div>
          </div>
          <Button className="hidden md:flex bg-blue-600 w-[50px] h-[50px]  rounded-full  md:justify-center md:items-center hover:bg-blue-300">
            <Search className="text-white" width={20} height={20} />
          </Button>
          {token ? (
            <Profile />
          ) : (
            <Button
              className="bg-blue-600 rounded-full h-12 hover:bg-blue-300 px-7 font-semibold text-md"
              onClick={() => router.push("/login")}
            >
              Login
            </Button>
          )}
        </div>
      </div>
    </>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-0 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
