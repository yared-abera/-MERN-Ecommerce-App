import React, { useEffect, useState } from "react"
import { useSelector ,useDispatch } from "react-redux"
import { Card, CardContent } from "@/components/ui/card"
import { FetchAllLaptops } from "@/store/laptop-slice"
 
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export default function Slider() {
  const {LaptopsList}= useSelector((state) => state.adminLaptops);
  const [api, setApi] = useState(null)
  const [isHovered, setIsHovered] = useState(false)
  const [filteredLaptops, setFilteredLaptops] = useState([]) ;
  const dispatch= useDispatch();
  console.log("LaptopsList from slider",LaptopsList);

 useEffect(() => {
   dispatch(FetchAllLaptops())
  },[dispatch]);
  
  useEffect(() => {
    if (!api || isHovered) return
   const interval = setInterval(() => {
   const count = api.scrollSnapList().length
   const current = api.selectedScrollSnap()
   const nextIndex = (current + 1) % count
          api.scrollTo(nextIndex)
        }, 3000)

    return () => clearInterval(interval)
  }, [api, isHovered]);


 useEffect(() => {
  if (LaptopsList.length > 0) {
    const filteredLaptops = LaptopsList.filter((laptop) => {
      return (
        laptop.condition === "brand_new" &&
        laptop.imageUrl &&
        laptop.imageUrl.trim() !== ""
      );
    });
    setFilteredLaptops(filteredLaptops);}
     
}, [LaptopsList]);
  
  return (
    <div
      className="flex items-center justify-center lg:h-[250px]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
     <Carousel
  setApi={setApi}
  opts={{ loop: true }}
  className="w-full max-w-6xl lg:h-[250px]"
>
  <CarouselContent className="w-full lg:h-[250px] items-center">
    {Array.from({ length: filteredLaptops.length }).map((_, index) => (
      <CarouselItem key={index}>
        <div className="p-1">
          <Card>
            <CardContent className="flex w-full  h-[250px] border-2 border-gray-200 items-center justify-center p-6">
              {filteredLaptops[index] && filteredLaptops[index].imageUrl ? (
               <img
             src={filteredLaptops[index].imageUrl}
          alt={`Laptop ${index + 1}`}
       className="w-full h-auto max-h-[250px] object-contain transition-transform duration-300 hover:scale-105"
            />

              ) : (
                <div className="h-[250px] w-full flex items-center justify-center bg-gray-200 text-gray-500">
                  No Image
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </CarouselItem>
    ))}
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>

    </div>
  )
}
