import { useMyContext } from "@/lib/reduxProvider";
import Image from "next/image";
import { clsx } from "clsx";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { TrendingDown } from "lucide-react";
import { useEffect, useState } from "react";
import { FlipWords } from "@/components/ui/flip-words";
import { CarouselOrientation } from "@/components/ui/verticalCarousel";

export const Body = () => {
  const { isLargeScreen, setIsLargeScreen } = useMyContext();
  const words = [
    "Meghalaya",
    "Spiti",
    "Shillong",
    "Himachal",
    "Tawang",
    "Uttrakhand",
  ];
  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        const { width } = entry.contentRect;
        setIsLargeScreen(width >= 1024);
      }
    });

    resizeObserver.observe(document.body);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  if (!isLargeScreen) {
    return null;
  }
  return (
    <div
      className="relative h-screen bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: 'url("/banner.jpg")' }}
    >
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="relative z-10 flex h-full justify-between mx-3">
        <div>
          <div className="flex items-center gap-8  mt-[140px]">
            <span className="text-white text-[90px] font-bold">Book Your</span>
            <Image
              src="/banner.jpg"
              alt="image"
              height={100}
              width={200}
              className="rounded-full"
            />
          </div>
          <div className="text-[85px] font-bold ">
            <span className="text-white">Trip to </span>
            <FlipWords words={words} className="text-[#AFDE1E]" />
          </div>
          <div className="mt-9">
            <p className="text-white text-2xl font-semibold">
              <span className="text-[#AFDE1E]">Wander</span> | Travel |{" "}
              <span className="text-[#AFDE1E]">Connect</span> | Repeat
            </p>
            <p className="text-white font-semibold text-lg mt-2">
              Where Adventure meets Community
            </p>
            <p className="text-white font-normal mt-[-5px]">#wravelerforlife</p>
          </div>
          <div className="mt-16 ml-2">
            <Input
              className="h-[80px] w-[500px] rounded-full font-semibold text-xl placeholder:text-gray-400 placeholder:font-semibold"
              placeholder="Type Location.."
            />
            <Button className="relative top-[-65px] right-[-360px] bg-blue-600 rounded-full w-1/6 h-12 font-semibold px-[65px]">
              Explore Trip
            </Button>
            <TrendingDown
              className="text-[#AFDE1E] rotate-90 relative top-[-280px] right-[-550px]"
              height={200}
              width={150}
              strokeWidth={1}
            />
          </div>
        </div>
        <div className="mt-[100px]">
          <CarouselOrientation />
        </div>
      </div>
    </div>
  );
};
