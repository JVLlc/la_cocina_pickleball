import Footer from "./Footer";


import Link from "next/link";

export function ContactUs({ color, title,zIndex,footer,transparent }) {
  return (
    <div id="footer" className={transparent ? `contacto ${color} transparent`:`contacto ${color} `}>
      <h1>
        {title ?? "¿Quieres llevar el Pickleball a tu país? Seremos tus mejores aliados."}
      </h1>
      <Link href="/contacto">
          <button>contáctanos</button>
      </Link>
      {!footer &&
      <Footer />}
    </div>
  );
}