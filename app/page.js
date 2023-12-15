"use client"
import Image from 'next/image'
import './fonts.css';
import { ReactLenis, useLenis } from '@studio-freight/react-lenis'
import { Parallax } from '@/components/Parallax';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <ReactLenis root options={{lerp:0.1}}>
      <div className='h-screen relative'>
  <img className="grafitti1" src="./images/grafitti1.png"/>
  <img className="arrow" src="./images/arrow-down.png"/>
 <img src="./logo.png" alt="La Cocina Pickleball Logo" className="w-1/2 md:w-auto lg:w-auto max-w-sm md:max-w-full lg:max-w-full h-auto absolute top-5 left-5" />

 <div className="flex flex-row w-10/12 h-2/3 absolute top-48 right-0 justify-between">
<div className='home-element'>
  <h2 className='event'>Events</h2>
  <div className='image-home'>
  <img className="image-no-hover"src='./images/1.jpg'/>
  <img className="image-hover" src='./images/2.jpg'/>
  <img  className="grafitti2" src='./images/grafitti2.png'/>
  </div>
  
</div>
<div className='home-element middle-element'>
  <h2 className='event'>Catalogo</h2>
  <div className='image-home'>
  <img className="image-no-hover"src='./images/4.jpg'/>
  <img className="image-hover" src='./images/3.jpg'/>

  </div>
  
</div>

<div className='home-element last-element'>
  <h2 className='event'>Sobre Nosotros</h2>
  <div className='image-home'>
  <img className="image-no-hover"src='./images/4.jpg'/>
  <img className="image-hover" src='./images/3.jpg'/>

  </div>
  
</div>
</div>
 <h1 className="text-sm md:text-base lg:text-lg text-gray-400 absolute bottom-0 left-5">LA CASA DEL PICKLEBALL EN ESPAÑOL</h1>
 </div>

 <div className='min-h-screen relative'>
<div className='flex flex-row w-9/12 h-2/3 absolute top-38 right-0 justify-between pr-5'>
  <div className="w-11/12 object-cover ">
<Parallax speed={1} className="self-start object-cover">
<img src='./images/5.jpg' className='object-cover min-w-full h-[70vh]' />
</Parallax>
</div>
<Parallax speed={-2} className="self-end ">
<p className='uppercase text-gray-400 ml-14 mt-32 text-sm md:text-base lg:text-lg '>
La casa del pickleball en español que busca promover el deporte a todas las comunidades de habla hispana en el mundo, enfocándonos primordialmente en Latinoamérica.
Llegó el momento de marcar la diferencia en el mundo de este emocionante deporte y llevar nuestras comunidades deportivas al siguiente nivel. Un deporte que une diversión y actividad física para todas las edades. Fácil de aprender y perfecto para construir conexiones.
</p>
</Parallax>
</div>

  </div>

  <div className='contacto'>
    <h1>¿Quieres llevar el Pickleball a tu país? Seremos tus mejores aliados.</h1>
<button>Contactanos</button>
  </div>


    </ReactLenis>



    </main>
  )
}
