import Footer from "./Footer";


export function ContactUs({color,zIndex}) {




  return (
    <div className={`contacto ${color}`} >
    <h1>
      ¿Quieres llevar el Pickleball a tu país? Seremos tus mejores
      aliados.
    </h1>
    <button>Contactanos</button>
    <Footer/>
  </div>
  );
}