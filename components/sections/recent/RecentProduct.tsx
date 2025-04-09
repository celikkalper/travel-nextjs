"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { packages } from "@/constans";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import { Badge } from "@/components/ui/badge";
import { Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const RecentProduct = () => {
  return (
    <div>
      <Carousel
        className="container mx-auto px-10 lg:px-36 mt-10"
        opts={{ align: "start", loop: true }}
        plugins={[
          Autoplay({
            delay: 3000,
          }),
        ]}
      >
        <CarouselContent>
          {packages.map((item, index) => (
            <CarouselItem key={index} className="lg:basis-1/2 xl:basis-1/4">
              <div className="p-3  pb-5">
                <Card className="shadow-lg">
                  <CardHeader className="relative">
                    <Image
                      width={500}
                      height={500}
                      src={item.image}
                      alt={item.title}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    {item.discount && (
                      <Badge className="absolute top-2 left-2 bg-red-500 hover:bg-red-600 text-white px-2 py-1 text-sm font-semibold">
                        {item.discount}
                      </Badge>
                    )}
                  </CardHeader>
                  <CardContent className="p-4">
                    <CardTitle className="text-xl h-[100px]">{item.title}</CardTitle>
                    <CardDescription className="flex items-center text-sm text-gray-500 mt-2">
                      <MapPin size={16} className="mr-2" />
                      {item.location}
                    </CardDescription>
                    <CardDescription className="flex items-center text-sm text-gray-500 mt-2">
                      <Clock size={16} className="mr-2" />
                      {item.duration}
                    </CardDescription>
                    <div className="flex justify-between items-center mt-4">
                      <div>
                        <span className="text-green-600 font-bold text-xl">
                          {item.price}
                        </span>
                        {item.oldPrice && (
                          <span className="line-through text-gray-500 ml-2">
                            {item.oldPrice}
                          </span>
                        )}
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-sky-500 hover:bg-sky-600 text-white">
                      View Details
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-0 bg-sky-500 hover:bg-sky-600  text-white hover:text-white py-6 px-6" />
        <CarouselNext className="right-0 bg-sky-500 hover:bg-sky-600  text-white hover:text-white py-6 px-6" />
      </Carousel>
    </div>
  );
};

export default RecentProduct;
