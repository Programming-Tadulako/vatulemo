import { SlideUp } from "@/components/animations/slide-up";
import { Carousel, CarouselContent, CarouselItem, CarouselNavigation } from "@/components/ui/carousel";
import Image from "next/image";
import { GALLERY_IMAGES } from "../constants";

export default function AboutSection() {
  return (
    <section id="about" className="scroll-mt-28 md:scroll-mt-56">
      <SlideUp>
        <div className="container">
          <Carousel>
            <div className="flex flex-col-reverse gap-10 lg:flex-row lg:gap-16">
              <div className="basis-1/2">
                <CarouselContent>
                  {GALLERY_IMAGES.map((gallery, index) => (
                    <CarouselItem key={index}>
                      <Image
                        src={gallery.src}
                        alt={gallery.alt}
                        width={1000}
                        height={500}
                        className="aspect-2/1 size-full rounded-md object-cover shadow-lg"
                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </div>
              <div className="basis-1/2 gap-4 lg:-mt-16">
                <div className="flex flex-col gap-2 lg:items-end lg:gap-4">
                  <h1 className="text-pt-primary text-3xl font-bold lg:text-4xl">About Us</h1>
                  <h2 className="text-lg font-bold lg:text-right lg:text-[28px] lg:leading-10">
                    Mewujudkan Ekosistem Teknologi Inovatif bagi Mahasiswa Universitas Tadulako
                  </h2>
                  <div className="flex flex-col gap-3 lg:items-end">
                    <p className="text-sm leading-relaxed text-neutral-700 lg:text-right lg:text-base lg:leading-7">
                      <strong>Programming Tadulako</strong> hadir untuk mendukung mahasiswa Universitas Tadulako
                      terkhusus jurusan Teknologi Informasi dalam mengembangkan keterampilan yang relevan dengan dunia
                      kerja, sehingga mereka lebih siap bersaing di industri teknologi.
                    </p>
                    <div className="flex items-center gap-2">
                      <CarouselNavigation className="border-black" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Carousel>
        </div>
      </SlideUp>
    </section>
  );
}
