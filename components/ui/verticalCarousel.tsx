import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { Stars } from "lucide-react";
export function CarouselOrientation() {
  const testimonials = [
    {
      name: "Sarah Jones",
      title: "Marketing Manager",
      quote:
        "I've been using this product for a month now and I'm absolutely amazed by the results! It's completely transformed the way I [benefit of product].",
    },
    {
      name: "David Lee",
      title: "CEO of Acme Inc.",
      quote:
        "This service has been a lifesaver! It's so easy to use and has saved me countless hours of [time-consuming task]. I highly recommend it to anyone looking for a [solution].",
    },
    {
      name: "Emily Chen",
      title: "Web Developer",
      quote:
        "The customer support team is fantastic! They were incredibly helpful and patient when I was having trouble with [specific issue]. They went above and beyond to resolve my problem.",
    },
    {
      name: "Michael Brown",
      title: "Entrepreneur",
      quote:
        "[Product name] is a top-notch product with exceptional features. It's the perfect solution for [target audience] and has exceeded my expectations.",
    },
    {
      name: "Jessica Garcia",
      title: "Student",
      quote:
        "I can't believe the difference since using this service. My [area of improvement] has improved dramatically, and I feel so much more [positive emotion].",
    },
  ];
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
      orientation="vertical"
      className=""
    >
      <CarouselContent className="-mt-1 h-[550px]">
        {testimonials.map((testimonial, index) => (
          <CarouselItem key={index} className="pt-1 md:basis-3">
            <div className="p-1">
              <Card className="bg-black bg-opacity-15  w-[500px] border-r-0">
                <CardContent className="flex p-6 gap-4 justify-center">
                  <div>
                    <Avatar>
                      <AvatarImage
                        src="https://github.com/shadcn.png"
                        alt="@shadcn"
                        className="h-[50px] w-[200px] rounded-full"
                      />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                  </div>
                  <div className="flex flex-col gap-2">
                    <p className="flex">
                      {Array.from({ length: 5 }).map((_, index) => (
                        <Stars
                          key={index}
                          fill="yellow"
                          className="text-yellow-200"
                          height={20}
                          width={20}
                        />
                      ))}
                    </p>
                    <span className="text-xl font-semibold text-white line-clamp-3">
                      {testimonial.quote}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
