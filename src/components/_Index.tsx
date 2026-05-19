/* 
---
title: "Cómo quitar el gotelé paso a paso (Guía profesional en Valencia)"
excerpt: "Aprende cómo quitar el gotelé y dejar las paredes lisas. Guía completa con métodos, herramientas y precios reales en Valencia."
categorySlug: "gotele"
postSlug: "como-quitar-gotele-paredes"
cover: "/assets/blog/como-quitar-gotele.jpg"
date: "2025-09-30"
tags: ["quitar gotelé", "alisar paredes", "gotelé Valencia", "pintores Valencia"]
description: "Guía profesional para quitar gotelé paso a paso. Descubre métodos, herramientas, precios reales en Valencia y cuándo es mejor contratar a un pintor especializado."
---
*/

import SEOHead from "@/components/SEOHead";

import { Button } from "@/components/ui/button";
import { CustomButton } from "@/components/ui/custom-button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Phone,
  MessageCircle,
  CheckCircle,
  Star,
  Shield,
  Brush,
  Home,
  Building,
  Clock,
} from "lucide-react";
import trabajadoresImage from "../assets/madre-hijo-salon-pequeno.jpg";

interface IndexProps {
  heroImage?: any;
  featureImage?: any;
}

// ⭐ Estrellas accesibles sin ARIA prohibido
const RatingStars = ({ value = 5 }: { value?: number }) => (
  <div className="flex items-center space-x-1 mb-3">
    <span className="sr-only">Valoración {value} de 5</span>
    {Array.from({ length: value }).map((_, i) => (
      <Star key={i} className="w-4 h-4 fill-accent text-accent" aria-hidden="true" />
    ))}
  </div>
);

const Index = ({ heroImage, featureImage }: IndexProps = {}) => {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    "@id": "https://mejoresreformasvalencia.es/#business",
    name: "Reformas Valencia",
    url: "https://mejoresreformasvalencia.es",
    telephone: "+34722208131",
    email: "info@mejoresreformasvalencia.es",
    description: "Empresa de reformas en Valencia especializada en reformas integrales, cocinas, baños, pisos, terrazas y locales comerciales.",
    areaServed: {
      "@type": "City",
      name: "Valencia"
    },
    openingHours: ["Mo-Sa 08:00-20:00"],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Servicios de Reformas en Valencia",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Reformas integrales en Valencia",
            url: "https://mejoresreformasvalencia.es/servicios/reformas-integrales-valencia/"
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Reformas de cocinas en Valencia",
            url: "https://mejoresreformasvalencia.es/servicios/reformas-cocinas-valencia/"
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Reformas de baños en Valencia",
            url: "https://mejoresreformasvalencia.es/servicios/reformas-banos-valencia/"
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Reformas de pisos en Valencia",
            url: "https://mejoresreformasvalencia.es/servicios/reformas-pisos-valencia/"
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Reformas de terrazas en Valencia",
            url: "https://mejoresreformasvalencia.es/servicios/reforma-terraza-valencia/"
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Reformas de locales comerciales en Valencia",
            url: "https://mejoresreformasvalencia.es/servicios/reformas-locales-comerciales-valencia/"
          }
        }
      ]
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Qué tipo de reformas realizáis?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Realizamos reformas integrales, cocinas, baños, pisos, locales comerciales, terrazas y fachadas en Valencia. Nos adaptamos a cada proyecto con materiales de calidad."
        }
      },
      {
        "@type": "Question",
        name: "¿Hacéis presupuestos sin compromiso?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. Envíanos fotos de lo que necesitas reformar y te mandamos un presupuesto detallado lo antes posible, sin compromiso y sin visitas innecesarias."
        }
      },
      {
        "@type": "Question",
        name: "¿Trabajáis solo en Valencia capital?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Trabajamos en toda Valencia capital y en el área metropolitana (Torrent, Mislata, Paterna, Burjassot, Manises, etc.). Consúltanos tu zona."
        }
      },
      {
        "@type": "Question",
        name: "¿Se puede hacer una reforma parcial?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí, hacemos reformas completas e integrales, pero también reformas parciales de cocinas, baños o habitaciones. Nos adaptamos a lo que necesites."
        }
      },
      {
        "@type": "Question",
        name: "¿Cuánto tarda una reforma?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Depende del tipo y tamaño. Una cocina suele tardar 2-3 semanas, un baño 1-2 semanas y una reforma integral de piso 1-2 meses. Te damos calendario orientativo en el presupuesto."
        }
      }
    ]
  };

  const services = [
    {
      title: "Reformas de Cocinas",
      description: "Reformamos tu cocina completa",
      link: "/servicios/fugas-agua-barcelona/",
      icon: <Home className="w-6 h-6" />,
    },
    {
      title: "Reformas de Baños",
      description: "Baños modernos y funcionales",
      link: "/servicios/reformas-banos-valencia/",
      icon: <Shield className="w-6 h-6" />,
    },
    {
      title: "Reformas Integrales",
      description: "Reforma completa de tu vivienda",
      link: "/servicios/reformas-integrales-valencia/",
      icon: <Building className="w-6 h-6" />,
    },
    {
      title: "Reformas de Pisos",
      description: "Renovamos tu piso por completo",
      link: "/servicios/reformas-pisos-valencia/",
      icon: <Home className="w-6 h-6" />,
    },
    {
      title: "Reformas de Terrazas",
      description: "Aprovecha tu espacio exterior",
      link: "/servicios/reforma-terraza-valencia/",
      icon: <Shield className="w-6 h-6" />,
    },
    {
      title: "Locales Comerciales",
      description: "Reformamos tu negocio",
      link: "/servicios/reformas-locales-comerciales-valencia/",
      icon: <Building className="w-6 h-6" />,
    },
  ];

  const testimonials = [
    {
      name: "María García",
      location: "Russafa, Valencia",
      text: "Nos reformaron la cocina completa. Trabajo impecable, cumplieron los plazos y el resultado es espectacular.",
      rating: 5,
    },
    {
      name: "José Martínez",
      location: "Benimaclet, Valencia",
      text: "Reforma integral de nuestro piso. Muy profesionales, presupuesto claro y acabados perfectos. 100% recomendable.",
      rating: 5,
    },
    {
      name: "Ana López",
      location: "Centro, Valencia",
      text: "Reformaron el baño en tiempo récord. Materiales de calidad y atención excelente. Volveremos a contar con ellos.",
      rating: 5,
    },
  ];

  const homeCanon = "https://mejoresreformasvalencia.es";

  return (
    <>
      <SEOHead
        title="Reformas en Valencia | Reformas Integrales, Cocinas y Baños"
        description="Empresa de reformas en Valencia especializada en reformas integrales, cocinas y baños. Presupuesto gratis, precios claros y acabados profesionales."
        canonicalUrl={homeCanon}
        schema={[localBusinessSchema, faqSchema]}
        preloadImages={heroImage ? [heroImage.src] : []}
        ogImage="https://mejoresreformasvalencia.es/og-home.jpg"
      />

      {/* Hero Section - Background image with overlay */}
      <section className="relative min-h-[56vh] overflow-clip">
        {heroImage && (
          <>
            <img 
              src={heroImage.src} 
              alt="Profesionales realizando reforma integral en vivienda de Valencia" 
              fetchPriority="high"
              loading="eager"
              width={heroImage.width}
              height={heroImage.height}
              className="absolute inset-0 -z-10 w-full h-full object-cover"
            />
            <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/35 via-black/15 to-transparent"></div>
          </>
        )}
        <div className="relative z-10 container mx-auto px-4 py-20 text-white">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Fontanero en Barcelona
            </h1>
            <p className="text-2xl md:text-3xl mb-8 font-medium">
              Urgencias, <strong>fugas</strong>, <strong>desatascos</strong> y <strong>reparaciones de fontanería</strong> en Barcelona con respuesta rápida, presupuesto claro y servicio profesional.
            </p>
            <p className="text-xl mb-12 text-white/90">
              Si necesitas un <strong>fontanero en Barcelona</strong>, atendemos viviendas, locales y comunidades con soluciones rápidas de <strong>fontanería en Barcelona</strong> y sin complicarte la vida.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              {/* Botón Presupuesto Gratis naranja */}
              <Button
                asChild
                size="lg"
                className="bg-accent hover:bg-accent/90 text-white shadow-lg font-bold text-lg py-4 px-8"
              >
                <a href="/contacto/" className="flex items-center justify-center">
                  Presupuesto Gratis
                </a>
              </Button>
              
              {/* Botón Llamar azul */}
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white shadow-lg font-bold text-lg py-4 px-8"
              >
                <a
                  href="tel:+34722208131"
                  className="flex items-center justify-center space-x-2"
                >
                  <Phone className="w-5 h-5" />
                  <span>Llamar ahora</span>
                </a>
              </Button>
            </div>

            {/* Benefits Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-white" />
                <span className="font-medium">Respuesta rápida</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-white" />
                <span className="font-medium">Presupuesto claro</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-white" />
                <span className="font-medium">Servicio profesional</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-white" />
                <span className="font-medium">Barcelona y alrededores</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introducción Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Tu empresa de fontanería en Barcelona
            </h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
              Si buscas un <strong>fontanero en Barcelona</strong> que trabaje con claridad y sin marearte, te ayudamos con averías, reparaciones y mantenimiento en viviendas, negocios y comunidades. Realizamos <strong>fontanería en Barcelona</strong> con atención rápida y presupuesto detallado, para que sepas desde el principio qué se va a hacer y cuánto te va a costar. Puedes ver nuestro <a href="/servicios/" className="font-semibold hover:underline">servicio de fontanería en Barcelona</a> para elegir la solución que mejor encaja con tu caso.<br /><br />Trabajamos incidencias habituales como <a href="/servicios/fugas-agua-barcelona/" className="font-semibold hover:underline">fugas de agua en Barcelona</a>, fugas de gas, <a href="/servicios/desatascos-barcelona/" className="font-semibold hover:underline">desatascos en Barcelona</a>, tuberías obstruidas, arquetas, inodoros atascados y fregaderos que no tragan bien. Como <strong>empresa de fontanería en Barcelona</strong>, buscamos una cosa muy simple: resolver el problema bien, sin rodeos y sin dejarte una chapuza.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-primary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Servicios de fontanería que realizamos en Barcelona
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Ofrecemos soluciones de reparaciones de fontanería en Barcelona para incidencias urgentes y trabajos habituales. Estos son algunos de los servicios más solicitados.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            
            {/* Fugas de agua */}
            <Card className="hover:shadow-card transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary">
                    <Home className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-semibold">Fugas de agua</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Localizamos y reparamos <strong>fugas de agua en Barcelona</strong> en viviendas, comunidades y locales. Actuamos en escapes visibles, humedades, pérdidas ocultas y problemas en tuberías o conexiones.
                </p>
                <ul className="text-sm text-muted-foreground space-y-2 mb-4">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Fugas visibles y ocultas</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Humedades y pérdidas</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Reparación de conexiones</span>
                  </li>
                </ul>
                <Button
                  asChild
                  size="sm"
                  className="bg-white text-primary border border-primary hover:bg-primary hover:text-white transition-colors"
                >
                  <a href="/servicios/fugas-agua-barcelona/">Ver fugas de agua</a>
                </Button>
              </CardContent>
            </Card>

            {/* Fugas de gas */}
            <Card className="hover:shadow-card transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary">
                    <Shield className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-semibold">Fugas de gas</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Revisamos incidencias relacionadas con <strong>fugas de gas en Barcelona</strong> y actuamos con rapidez para detectar el problema y dejar la instalación en condiciones seguras.
                </p>
                <ul className="text-sm text-muted-foreground space-y-2 mb-4">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Revisión del punto afectado</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Intervención rápida</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Actuación segura</span>
                  </li>
                </ul>
                <Button
                  asChild
                  size="sm"
                  className="bg-white text-primary border border-primary hover:bg-primary hover:text-white transition-colors"
                >
                  <a href="/servicios/fugas-gas-barcelona/">Ver fugas de gas</a>
                </Button>
              </CardContent>
            </Card>

            {/* Desatascos */}
            <Card className="hover:shadow-card transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary">
                    <Building className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-semibold">Desatascos</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Realizamos <strong>desatascos en Barcelona</strong> en fregaderos, bajantes, tuberías y desagües. Si el agua no corre como debería o hay malos olores, buscamos el origen y lo resolvemos.
                </p>
                <ul className="text-sm text-muted-foreground space-y-2 mb-4">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Desagües y bajantes</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Malos olores</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Obstrucciones recurrentes</span>
                  </li>
                </ul>
                <Button
                  asChild
                  size="sm"
                  className="bg-white text-primary border border-primary hover:bg-primary hover:text-white transition-colors"
                >
                  <a href="/servicios/desatascos-barcelona/">Ver desatascos</a>
                </Button>
              </CardContent>
            </Card>

            {/* Desatasco de tuberías */}
            <Card className="hover:shadow-card transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary">
                    <Home className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-semibold">Desatasco de tuberías</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Limpiamos y desobstruimos tuberías para eliminar acumulaciones, suciedad y residuos. Servicio de <strong>desatasco de tuberías en Barcelona</strong> para viviendas, cocinas y redes de evacuación.
                </p>
                <ul className="text-sm text-muted-foreground space-y-2 mb-4">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Limpieza en profundidad</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Redes de evacuación</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Prevención de atascos</span>
                  </li>
                </ul>
                <Button
                  asChild
                  size="sm"
                  className="bg-white text-primary border border-primary hover:bg-primary hover:text-white transition-colors"
                >
                  <a href="/servicios/desatasco-tuberias-barcelona/">Ver desatasco de tuberías</a>
                </Button>
              </CardContent>
            </Card>

            {/* Limpieza de arquetas */}
            <Card className="hover:shadow-card transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary">
                    <Shield className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-semibold">Limpieza de arquetas</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Hacemos <strong>limpieza de arquetas en Barcelona</strong> para evitar atascos recurrentes, malos olores y problemas de evacuación en comunidades, casas y locales.
                </p>
                <ul className="text-sm text-muted-foreground space-y-2 mb-4">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Mantenimiento preventivo</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Control de olores</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Mejor evacuación</span>
                  </li>
                </ul>
                <Button
                  asChild
                  size="sm"
                  className="bg-white text-primary border border-primary hover:bg-primary hover:text-white transition-colors"
                >
                  <a href="/servicios/limpieza-arquetas-barcelona/">Ver limpieza de arquetas</a>
                </Button>
              </CardContent>
            </Card>

            {/* Desatasco de WC y fregadero */}
            <Card className="hover:shadow-card transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary">
                    <Building className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-semibold">Desatasco de WC y fregadero</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Si tienes el váter bloqueado, actuamos con servicio de <strong>desatasco de WC en Barcelona</strong> para eliminar el atasco sin dañar la instalación. También resolvemos <a href="/servicios/desatasco-fregadero-barcelona/" className="font-semibold hover:underline"><strong>desatasco de fregadero en Barcelona</strong></a> cuando el agua traga mal o el atasco ya es serio.
                </p>
                <ul className="text-sm text-muted-foreground space-y-2 mb-4">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Inodoros atascados</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Fregaderos obstruidos</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Recuperación rápida</span>
                  </li>
                </ul>
                <Button
                  asChild
                  size="sm"
                  className="bg-white text-primary border border-primary hover:bg-primary hover:text-white transition-colors"
                >
                  <a href="/servicios/desatasco-wc-barcelona/">Ver desatasco de WC</a>
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <p className="text-muted-foreground mb-6">
              También atendemos todo tipo de incidencias habituales de fontanería en viviendas, locales y comunidades.
            </p>
            <CustomButton 
              variant="accent" 
              size="lg" 
              asChild 
              href="/servicios/"
            >
              Ver todos los servicios
            </CustomButton>
          </div>
        </div>
      </section>

      {/* Nueva sección: ¿Qué servicio necesitas? */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              ¿Qué problema de fontanería necesitas resolver?
            </h2>
            
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                ¿Has notado humedad, una factura de agua más alta de lo normal o una pérdida que no sabes de dónde sale? Revisamos <a href="/servicios/fugas-agua-barcelona/" className="text-primary hover:underline font-semibold"><strong>fugas de agua en Barcelona</strong></a> en pisos, casas, locales y comunidades para detectar el origen y repararlo cuanto antes.
              </p>
              
              <p>
                ¿Te preocupa una instalación con olor a gas o una posible pérdida? Actuamos en casos de <a href="/servicios/fugas-gas-barcelona/" className="text-primary hover:underline font-semibold"><strong>fugas de gas en Barcelona</strong></a> con intervención rápida y revisión del punto afectado para evitar riesgos.
              </p>
              
              <p>
                ¿El agua del fregadero, lavabo o ducha baja muy lenta? Nuestro servicio de <a href="/servicios/desatascos-barcelona/" className="text-primary hover:underline font-semibold"><strong>desatascos en Barcelona</strong></a> está pensado para resolver obstrucciones habituales antes de que acaben en una avería mayor.
              </p>
              
              <p>
                ¿Tienes un <a href="/servicios/desatasco-wc-barcelona/" className="text-primary hover:underline font-semibold"><strong>WC atascado</strong></a>, una <a href="/servicios/desatasco-tuberias-barcelona/" className="text-primary hover:underline font-semibold"><strong>tubería obstruida</strong></a> o una <a href="/servicios/limpieza-arquetas-barcelona/" className="text-primary hover:underline font-semibold"><strong>arqueta que da problemas</strong></a>? Podemos ayudarte con trabajos de desatasco y limpieza para recuperar el funcionamiento normal de la instalación.
              </p>
              
              <p>
                Si quieres ver el detalle por especialidad, entra en nuestra página de <a href="/servicios/" className="text-primary hover:underline font-semibold">servicios de fontanería en Barcelona</a>.
              </p>

              <p>
                Si necesitas importes orientativos, puedes consultar la sección de <a href="/precios/" className="text-primary hover:underline font-semibold"><strong>precios de fontanería en Barcelona</strong></a>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Excellence Section */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-primary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Fontaneros en Barcelona que trabajan con claridad
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Sabemos que cuando alguien busca un <strong>fontanero Barcelona</strong>, normalmente no quiere leer teoría: quiere <strong>respuesta rápida</strong>, una explicación clara del problema y un presupuesto sin sorpresas.
            </p>
          </div>

          {/* Content layout - Image left, Text right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-center">
            
            {/* Left side - Image */}
            <div className="order-2 lg:order-1">
              {featureImage ? (
                <figure className="relative rounded-3xl overflow-hidden shadow-lg">
                  <img
                    src={featureImage.src}
                    alt="Equipo de reformistas trabajando en proyecto de reforma en Valencia"
                    loading="lazy"
                    width={featureImage.width}
                    height={featureImage.height}
                    className="w-full h-auto object-cover"
                  />

                </figure>
              ) : (
                <div className="relative overflow-hidden rounded-2xl shadow-xl">

                  <div className="w-full h-[300px] sm:h-[400px] md:h-[450px] bg-gradient-to-r from-accent to-accent/80"></div>
                </div>
              )}
            </div>

            {/* Right side - Text content */}
            <div className="order-1 lg:order-2">
              <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-6 md:p-8 lg:p-10 h-[300px] sm:h-[400px] md:h-[450px] flex flex-col justify-center">
                <div className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed space-y-3 sm:space-y-4 md:space-y-6">
                  <p>
                    Por eso trabajamos con una forma sencilla de hacer las cosas: <strong>respuesta rápida</strong>, diagnóstico claro y <strong>presupuesto claro</strong>. Atendemos trabajos de <strong>fontanería en Barcelona</strong> en viviendas particulares, negocios y comunidades.
                  </p>
                  
                  <p>
                    Nos centramos en resolver incidencias frecuentes de forma ordenada, con materiales adecuados y explicándote qué se hace en cada intervención. Si quieres una visión global, consulta nuestros <a href="/servicios/" className="text-primary hover:underline font-semibold">servicios de fontanería</a>.
                  </p>

                  <p>
                    <strong>Respuesta rápida</strong>: Atención ágil para averías y problemas urgentes. <strong>Presupuesto claro</strong>: Sin precios confusos ni explicaciones raras. <strong>Servicio profesional</strong>: Reparaciones y actuaciones bien ejecutadas. Todo tipo de incidencias: Fugas, desatascos, tuberías, arquetas, WC y fregaderos. Barcelona y alrededores: Servicio en distintos barrios y zonas cercanas. Trato directo: Te explicamos el problema de forma simple y clara.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Precios */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            ¿Quieres saber el precio de un fontanero en Barcelona?
          </h2>
          <p className="text-xl mb-8 text-white max-w-2xl mx-auto">
            Si estás comparando opciones y quieres saber el <strong>precio de un fontanero en Barcelona</strong>, podemos orientarte según el tipo de avería o trabajo. No todos los servicios cuestan lo mismo: depende de si hablamos de una fuga, un atasco, una limpieza de tuberías o una actuación más urgente.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <CustomButton
              variant="accent"
              size="lg"
              asChild
              href="/contacto/"
            >
              Pedir presupuesto
            </CustomButton>
            <CustomButton
              variant="blue"
              size="lg"
              asChild
              href="/precios/"
              className="bg-white text-primary hover:bg-white/90"
            >
              Ver precios
            </CustomButton>
          </div>
          <p className="text-white/90">
            Consulta nuestros <a href="/precios/" className="font-bold hover:underline"><strong>precios de fontanería en Barcelona</strong></a> o pídenos presupuesto directo desde <a href="/contacto/" className="font-bold hover:underline">contacto</a> y te respondemos con claridad.
          </p>
        </div>
      </section>

      {/* Zonas */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Servicio de fontanería en Barcelona y alrededores
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Trabajamos en Barcelona capital y también en municipios y zonas cercanas con <strong>servicio de fontanería en Barcelona y alrededores</strong>. Si buscas un <a href="/zonas/fontanero-hospitalet-de-llobregat/" className="font-semibold hover:underline"><strong>fontanero en Hospitalet de Llobregat</strong></a>, un <a href="/zonas/fontanero-cornella-de-llobregat/" className="font-semibold hover:underline"><strong>fontanero en Cornellà</strong></a>, <a href="/zonas/fontanero-sants-barcelona/" className="font-semibold hover:underline">Sants</a>, <a href="/zonas/fontanero-les-corts-barcelona/" className="font-semibold hover:underline">Les Corts</a>, <a href="/zonas/fontanero-sant-andreu-barcelona/" className="font-semibold hover:underline">Sant Andreu</a> o <a href="/zonas/fontanero-gracia-barcelona/" className="font-semibold hover:underline">Gràcia</a>, podemos ayudarte.
            </p>
            <p className="text-lg text-muted-foreground">
              También puedes ver todas nuestras zonas de servicio en <a href="/zonas/" className="font-semibold hover:underline">/zonas/</a>.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Preguntas frecuentes
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Resolvemos las dudas más habituales sobre nuestro servicio de fontanería en Barcelona.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-2">
                  ¿Qué servicios de fontanería hacéis en Barcelona?
                </h3>
                <p className="text-muted-foreground">
                  Realizamos trabajos de <strong>fontanería en Barcelona</strong> relacionados con fugas de agua, fugas de gas, desatascos, limpieza de tuberías, arquetas, inodoros y fregaderos, además de reparaciones habituales en viviendas, locales y comunidades. Puedes ver todos los detalles en <a href="/servicios/" className="font-semibold hover:underline">servicios</a>.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-2">
                  ¿Atendéis urgencias?
                </h3>
                <p className="text-muted-foreground">
                  Sí, también atendemos incidencias urgentes. Si tienes una fuga, un atasco grave o un problema que no puede esperar, lo mejor es llamarnos directamente o escribirnos desde <a href="/contacto/" className="font-semibold hover:underline">contacto</a>.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-2">
                  ¿Cuál es el precio de un fontanero en Barcelona?
                </h3>
                <p className="text-muted-foreground">
                  Depende del tipo de servicio, la dificultad del trabajo y si hace falta una actuación urgente. Puedes consultar la página de <a href="/precios/" className="font-semibold hover:underline"><strong>precios de fontanería en Barcelona</strong></a> o pedirnos presupuesto para tu caso concreto.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-2">
                  ¿Trabajáis solo en Barcelona capital?
                </h3>
                <p className="text-muted-foreground">
                  No. Además de Barcelona, también trabajamos en zonas cercanas y municipios del área metropolitana.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-2">
                  ¿Hacéis desatascos de WC y fregadero?
                </h3>
                <p className="text-muted-foreground">
                  Sí. Son dos de los servicios más habituales. También hacemos desatasco de tuberías y limpieza de arquetas cuando el problema viene de más atrás.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-2">
                  ¿Podéis detectar fugas de agua?
                </h3>
                <p className="text-muted-foreground">
                  Sí. Revisamos pérdidas visibles y también casos en los que hay indicios de fuga aunque no se vea claramente el punto exacto. Puedes ampliar esta parte en <a href="/servicios/fugas-agua-barcelona/" className="font-semibold hover:underline">fugas de agua</a>.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-2">
                  ¿Dónde puedo ver más servicios o pedir presupuesto?
                </h3>
                <p className="text-muted-foreground">
                  Puedes revisar todos los servicios en <a href="/servicios/" className="font-semibold hover:underline">/servicios/</a>, consultar precios en <a href="/precios/" className="font-semibold hover:underline">/precios/</a> o contactar directamente desde <a href="/contacto/" className="font-semibold hover:underline">/contacto/</a>.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-gradient-to-br from-primary to-primary/90 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            ¿Necesitas un fontanero en Barcelona?
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Cuéntanos qué problema tienes y te ayudamos a valorar la mejor solución. <strong>Servicio rápido</strong>, <strong>presupuesto claro</strong> y atención de <strong>fontanero en Barcelona</strong> para <strong>Barcelona y alrededores</strong>.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CustomButton
              variant="accent"
              size="lg"
              asChild
              href="/contacto/"
            >
              Pedir presupuesto gratis
            </CustomButton>
            <CustomButton
              variant="blue"
              size="lg"
              asChild
              href="tel:+34722208131"
              className="bg-white text-primary hover:bg-white/90 flex items-center space-x-2"
            >
              <Phone className="w-5 h-5" aria-hidden="true" />
              <span>Llamar ahora</span>
            </CustomButton>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
