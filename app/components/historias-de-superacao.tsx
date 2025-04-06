"use client";
import Section from "@/components/Section";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Testimonial, testimonials } from "@/lib/constants/testimonials";
import { useRef } from "react";
function HistoriasDeSuperacao() {
  const plugin = useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false }) // aqui é o plugin funcionando
  );
  return (
    <Section
      className="bg-purple-50"
      title="Historias de Superação"
      description="Mulheres que conseguiram romper o ciclo da violência e reconstruir suas vidas."
    >
      <Carousel
        className="w-full max-w-[1200px] overflow-hidden "
        plugins={[plugin.current]}
        opts={{ loop: true }}
      >
        <CarouselContent className="mt-12">
          {testimonials.map((testimonial) => (
            <CarouselItem
              className="md:basis-1/2 lg:basis-1/2"
              key={testimonial.name}
            >
              <CarouselTestimonialCard {...testimonial} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </Section>
  );
}

const CarouselTestimonialCard = ({
  description,
  quote,
  name,
  location,
  image,
}: Testimonial) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-center mb-4">
          <Image
            src={image}
            className="w-20 h-20 rounded-full object-cover"
            alt="mulher olhando morena  com olhos fechado sorringo"
          ></Image>
        </CardTitle>
        <CardDescription className="text-center">
          <h3 className="text-black font-medium">{name}</h3>
          <span>{location}</span>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="w-full border-l-4 border-purple-300 p-4">
          <p className="text-muted-foreground text-sm">{quote}</p>
        </div>
        <p className="font-light text-muted-foreground text-sm mt-5">
          {description}
        </p>
      </CardContent>
    </Card>
  );
};

export default HistoriasDeSuperacao;
