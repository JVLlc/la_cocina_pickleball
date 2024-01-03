"use client";
import Image from "next/image";
import "./fonts.css";
import { ReactLenis, useLenis } from "@studio-freight/react-lenis";
import { Parallax } from "@/components/Parallax";
import { ContactUs } from "@/components/ContactUs";
import { HomeCard } from "@/components/HomeCard";
import Menu from "@/components/Menu";
import ScrollSection from "@/components/HorizontalScroll";
import AlianceCarousel from "@/components/carousel/Carousel";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Menu/>
   
      <ScrollSection/>
    
      <ReactLenis root options={{ lerp: 0.1 }}>

        <div className="min-h-screen relative mobile-section" >
          <div className="flex flex-row w-9/12 h-2/3 absolute top-38 right-0 justify-between pr-5 section-2">
            <div className="w-11/12 object-cover ">
              <Parallax speed={1} className="self-start object-cover">
                <img
                  src="./images/5.jpg"
                  className="object-cover min-w-full h-[70vh]"
                />
              </Parallax>
            </div>
            <Parallax speed={-2} className="self-end ">
              <p className="uppercase text-gray-400 ml-14 mt-32 text-sm md:text-base lg:text-lg section-2-content">
                La casa del pickleball en español que busca promover el deporte
                a todas las comunidades de habla hispana en el mundo,
                enfocándonos primordialmente en Latinoamérica. Llegó el momento
                de marcar la diferencia en el mundo de este emocionante deporte
                y llevar nuestras comunidades deportivas al siguiente nivel. Un
                deporte que une diversión y actividad física para todas las
                edades. Fácil de aprender y perfecto para construir conexiones.
              </p>
            </Parallax>
          </div>
        </div>
      <AlianceCarousel />
      <ContactUs />
      </ReactLenis>
      
    </main>
  );
}
