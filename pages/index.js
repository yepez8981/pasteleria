import Hero from '@/components/Hero';
import Head from 'next/head';

// Placeholder components for sections to be built
const FeaturedPlans = () => (
  <div className="py-20 bg-secondary">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-4xl font-sans font-bold mb-2">Nuestros Planes</h2>
      <p className="text-text-secondary mb-12">Elige el plan que te llevará al siguiente nivel.</p>
      {/* Plan cards will go here */}
      <div className="text-accent font-bold">[Contenido de Planes Próximamente]</div>
    </div>
  </div>
);

const FeaturedTrainers = () => (
  <div className="py-20 bg-primary">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-4xl font-sans font-bold mb-2">Entrenadores Expertos</h2>
      <p className="text-text-secondary mb-12">Conoce al equipo que te guiará en cada paso.</p>
      {/* Trainer cards will go here */}
      <div className="text-accent font-bold">[Contenido de Entrenadores Próximamente]</div>
    </div>
  </div>
);

const Testimonials = () => (
    <div className="py-20 bg-secondary">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-4xl font-sans font-bold mb-2">Qué Dicen Nuestros Miembros</h2>
      <p className="text-text-secondary mb-12">Resultados reales, historias reales.</p>
      {/* Testimonial cards will go here */}
      <div className="text-accent font-bold">[Contenido de Testimonios Próximamente]</div>
    </div>
  </div>
);


export default function Home() {
  return (
    <>
      <Head>
        <title>GYMX - Forja tu Mejor Versión</title>
        <meta name="description" content="Gimnasio moderno con instalaciones de élite, entrenadores expertos y una comunidad que te inspira a superar tus límites." />
      </Head>
      <Hero />
      <FeaturedPlans />
      <FeaturedTrainers />
      <Testimonials />
    </>
  );
}
