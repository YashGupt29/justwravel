"use client";
import React from "react";
import Link from "next/link";
import { Plus } from "lucide-react";
import { useLocalStorage } from "usehooks-ts";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { Accordion } from "@/components/ui/accordion";
import Image from "next/image";
import { Profile } from "./profile";
import { useRouter } from "next/navigation";
import { useMyContext } from "@/lib/reduxProvider";

interface SidebarProps {
  storageKey?: string;
}

export const Sidebar = ({ storageKey = "t-sidebar-state" }: SidebarProps) => {
  const [expanded, setExpanded] = useLocalStorage<Record<string, any>>(
    storageKey,
    {}
  );

  const router = useRouter();
  const { token } = useMyContext();

  return (
    <>
      <div className="pl-4 font-medium text-xs flex gap-2 mb-1 flex-col  items-start">
        <div className=" mb-10">
          <Image src="/logo.png" alt="logo" width={150} height={150} />
        </div>
        <div>
          {token ? (
            <Profile />
          ) : (
            <Button
              className="bg-blue-600 rounded-full h-12 hover:bg-blue-300 px-7 py-0 font-semibold text-md"
              onClick={() => router.push("/login")}
            >
              Login
            </Button>
          )}
        </div>
        <span className="pl-4">Backpacking Trips</span>
        <span className="pl-4">Treks</span>
        <span className="pl-4">Weekend Gateways</span>
        <span className="pl-4">Contact Us</span>
      </div>
    </>
  );
};
