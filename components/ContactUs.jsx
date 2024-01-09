import Footer from "./Footer";


import Link from "next/link";

export function ContactUs({ color, zIndex }) {
  return (
    <div className={`contacto ${color}`}>
      <h1>
        ¿Quieres llevar el Pickleball a tu país? Seremos tus mejores aliados.
      </h1>
      <Link href="/contacto">
          <button>Contactanos</button>
      </Link>
      <Footer />
    </div>
  );
}