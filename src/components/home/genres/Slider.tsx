import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Genre from "./Genre";

const Slider = () => {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full "
    >
      <CarouselContent>
        {Array.from({ length: 19 }).map((_, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-[12%]">
            <h2>sdjfjksjd</h2>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="bg-white/50 border-none hover:bg-blue-200" />
      <CarouselNext className="bg-white/50 border-none hover:bg-blue-200" />
    </Carousel>
  );
};

export default Slider;
