import Footer from "./Footer";


import Link from "next/link";

export function ContactUs({ color, title,zIndex }) {
  return (
    <div id="footer" className={`contacto ${color}`}>
      <h1>
        {title ?? "¿Quieres llevar el Pickleball a tu país? Seremos tus mejores aliados."}
      </h1>
      <Link href="/contacto">
          <button>Contactanos</button>
      </Link>
      <Footer />
    </div>
  );
}