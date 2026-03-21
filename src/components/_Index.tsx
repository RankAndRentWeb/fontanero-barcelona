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
      link: "/servicios/reformas-cocinas-valencia/",
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
              Empresa de Reformas en Valencia
            </h1>
            <p className="text-2xl md:text-3xl mb-8 font-medium">
              Especialistas en Reformas Integrales y Parciales
            </p>
            <p className="text-xl mb-12 text-white/90">
              Realizamos reformas de <strong>cocinas, baños y pisos completos</strong> en Valencia. Coordinamos a todos los gremios para cumplir los plazos y ofrecerte un presupuesto detallado y sin sorpresas.
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
                  <span>722 208 131</span>
                </a>
              </Button>
            </div>

            {/* Benefits Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-white" />
                <span className="font-medium">Presupuesto sin compromiso</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-white" />
                <span className="font-medium">Reforma a medida</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-white" />
                <span className="font-medium">Acabados profesionales</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-white" />
                <span className="font-medium">Garantía en cada proyecto</span>
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
              Tu empresa de obras y reformas en Valencia capital
            </h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
              Si buscas una <strong>empresa de reformas en Valencia</strong> que trabaje con transparencia, llevamos años ayudando a propietarios y negocios a renovar viviendas, pisos y locales. Desde <strong>reformas integrales</strong> hasta <strong>reformas de cocinas</strong>, baños o cambios de distribución. Nos encargamos de cada obra adaptándonos a lo que necesita cada proyecto.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-primary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Qué tipo de obras y reformas hacemos
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Desde <strong>reformas integrales de viviendas</strong> completas hasta trabajos específicos como <strong>reformas de cocinas</strong>, baños, pisos o locales comerciales. Nos encargamos de todo: albañilería, fontanería, electricidad, carpintería y acabados.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            
            {/* Reformas de Cocinas */}
            <Card className="hover:shadow-card transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary">
                    <Home className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-semibold">Reformas de Cocinas</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Reformamos cocinas completas en Valencia con diseño funcional, materiales de calidad y acabados profesionales. Electricidad, fontanería, alicatado, muebles y electrodomésticos.
                </p>
                <ul className="text-sm text-muted-foreground space-y-2 mb-4">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Diseño personalizado</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Materiales de calidad</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Gestión completa</span>
                  </li>
                </ul>
                <Button
                  asChild
                  size="sm"
                  className="bg-white text-primary border border-primary hover:bg-primary hover:text-white transition-colors"
                >
                  <a href="/servicios/reformas-cocinas-valencia/">Ver reformas de cocinas</a>
                </Button>
              </CardContent>
            </Card>

            {/* Reformas de Baños */}
            <Card className="hover:shadow-card transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary">
                    <Shield className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-semibold">Reformas de Baños</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Renovación completa de baños con instalaciones modernas, impermeabilización correcta y acabados duraderos. Platos de ducha, mamparas, sanitarios y revestimientos.
                </p>
                <ul className="text-sm text-muted-foreground space-y-2 mb-4">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Impermeabilización garantizada</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Instalaciones certificadas</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Acabados impecables</span>
                  </li>
                </ul>
                <Button
                  asChild
                  size="sm"
                  className="bg-white text-primary border border-primary hover:bg-primary hover:text-white transition-colors"
                >
                  <a href="/servicios/reformas-banos-valencia/">Ver reformas de baños</a>
                </Button>
              </CardContent>
            </Card>

            {/* Reformas Integrales */}
            <Card className="hover:shadow-card transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary">
                    <Building className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-semibold">Reformas Integrales</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Reforma completa de viviendas en Valencia. Nos encargamos de todo: albañilería, instalaciones, carpintería, revestimientos y acabados. Proyecto, licencias y ejecución.
                </p>
                <ul className="text-sm text-muted-foreground space-y-2 mb-4">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Gestión integral del proyecto</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Todos los gremios coordinados</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Presupuesto cerrado</span>
                  </li>
                </ul>
                <Button
                  asChild
                  size="sm"
                  className="bg-white text-primary border border-primary hover:bg-primary hover:text-white transition-colors"
                >
                  <a href="/servicios/reformas-integrales-valencia/">Ver reformas integrales</a>
                </Button>
              </CardContent>
            </Card>

            {/* Reformas de Pisos */}
            <Card className="hover:shadow-card transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary">
                    <Home className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-semibold">Reformas de Pisos</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Renovamos pisos completos en Valencia: distribución, instalaciones, pavimentos, revestimientos y carpintería. Ideal para actualizar antes de vender o alquilar.
                </p>
                <ul className="text-sm text-muted-foreground space-y-2 mb-4">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Renovación completa</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Calendario definido</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Limpieza incluida</span>
                  </li>
                </ul>
                <Button
                  asChild
                  size="sm"
                  className="bg-white text-primary border border-primary hover:bg-primary hover:text-white transition-colors"
                >
                  <a href="/servicios/reformas-pisos-valencia/">Ver reformas de pisos</a>
                </Button>
              </CardContent>
            </Card>

            {/* Reformas de Terrazas */}
            <Card className="hover:shadow-card transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary">
                    <Shield className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-semibold">Reformas de Terrazas</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Impermeabilización, pavimentos exteriores, cerramientos y acabados para terrazas. Solucionamos filtraciones y aprovechamos el espacio exterior.
                </p>
                <ul className="text-sm text-muted-foreground space-y-2 mb-4">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Impermeabilización efectiva</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Pavimentos resistentes</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Garantía en cada proyecto</span>
                  </li>
                </ul>
                <Button
                  asChild
                  size="sm"
                  className="bg-white text-primary border border-primary hover:bg-primary hover:text-white transition-colors"
                >
                  <a href="/servicios/reforma-terraza-valencia/">Ver reformas de terrazas</a>
                </Button>
              </CardContent>
            </Card>

            {/* Locales Comerciales */}
            <Card className="hover:shadow-card transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary">
                    <Building className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-semibold">Locales Comerciales</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Reformas de locales, tiendas, oficinas y restaurantes en Valencia. Trabajamos en horarios flexibles para no interrumpir tu actividad comercial.
                </p>
                <ul className="text-sm text-muted-foreground space-y-2 mb-4">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Horarios nocturnos</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Mínima interrupción</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Cumplimiento normativa</span>
                  </li>
                </ul>
                <Button
                  asChild
                  size="sm"
                  className="bg-white text-primary border border-primary hover:bg-primary hover:text-white transition-colors"
                >
                  <a href="/servicios/reformas-locales-comerciales-valencia/">Ver reformas de locales</a>
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <p className="text-muted-foreground mb-6">
              También realizamos reformas de fachadas, instalación de pladur, reformas de chalets y mucho más.
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
              Reformas de casas, pisos y locales en Valencia
            </h2>
            
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                ¿Acabas de comprar un piso y necesitas reformarlo antes de mudarte? Hacemos <a href="/servicios/reformas-integrales-valencia/" className="text-primary hover:underline font-semibold">reformas integrales</a> que incluyen todo: demoliciones, albañilería, fontanería, electricidad, carpintería y acabados. Te coordinamos todos los gremios para que no tengas que estar pendiente de cada detalle. Envíanos fotos y te decimos cuánto cuesta y cuándo podemos empezar.
              </p>
              
              <p>
                Si lo que necesitas es <a href="/servicios/reformas-cocinas-valencia/" className="text-primary hover:underline font-semibold">renovar la cocina</a>, cambiamos muebles, electrodomésticos, azulejos, encimera y todas las instalaciones. Diseñamos espacios funcionales que aprovechan bien cada metro. Ideal si quieres modernizar sin hacer obra completa en toda la casa.
              </p>
              
              <p>
                Para <a href="/servicios/reformas-banos-valencia/" className="text-primary hover:underline font-semibold">baños</a> trabajamos con impermeabilización correcta, platos de ducha, mamparas, sanitarios y alicatados de calidad. Todo con garantía en cada proyecto y una ejecución cuidada para evitar problemas de filtraciones. Un baño bien hecho dura años sin darte quebraderos de cabeza.
              </p>
              
              <p>
                ¿Quieres <a href="/servicios/reformas-pisos-valencia/" className="text-primary hover:underline font-semibold">renovar tu piso completo</a>? Cambiamos distribución si hace falta, actualizamos instalaciones anticuadas, ponemos suelos nuevos y dejamos todos los acabados listos. Perfecto si has heredado un piso viejo o lo quieres vender a buen precio.
              </p>
              
              <p>
                Para <a href="/servicios/reformas-locales-comerciales-valencia/" className="text-primary hover:underline font-semibold">locales y negocios</a> trabajamos en horarios que no interrumpan tu actividad. Hacemos el diseño, las instalaciones y los acabados con una planificación clara para ayudarte a abrir cuanto antes. Conocemos la normativa y te ayudamos con las licencias.
              </p>

              <p>
                Si quieres ver precios orientativos, consulta nuestra <a href="/precios/" className="text-primary hover:underline font-semibold">página de precios de reformas</a> o envíanos fotos para un presupuesto personalizado.
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
              Cómo trabajamos las reformas en Valencia
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Presupuesto detallado, materiales de calidad y trabajo ordenado. Así dejamos cada reforma bien terminada.
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
                    Llevamos años realizando <a href="/servicios/reformas-integrales-valencia/" className="text-primary hover:underline"><strong>reformas integrales</strong></a>, <a href="/servicios/reformas-cocinas-valencia/" className="text-primary hover:underline"><strong>cocinas</strong></a>, <a href="/servicios/reformas-banos-valencia/" className="text-primary hover:underline"><strong>baños</strong></a> y <a href="/servicios/reformas-pisos-valencia/" className="text-primary hover:underline"><strong>pisos completos</strong></a> en la ciudad y alrededores. También hacemos <strong>reformas de casas</strong>, <a href="/servicios/reformas-locales-comerciales-valencia/" className="text-primary hover:underline"><strong>locales comerciales</strong></a> y fachadas.
                  </p>
                  
                  <p>
                    Usamos materiales de calidad y ofrecemos <strong>garantía en cada proyecto</strong>. Si nos envías fotos de tu espacio, te damos una respuesta rápida con un presupuesto detallado sin que tengas que esperarnos en casa. Puedes ver nuestros <a href="/servicios/" className="text-primary hover:underline"><strong>servicios de reformas en Valencia</strong></a>.
                  </p>

                  <p>
                    Si estás comparando opciones, revisa <a href="/servicios/reformas-integrales-valencia/" className="text-primary hover:underline"><strong>reformas integrales en Valencia</strong></a>, <a href="/servicios/reformas-cocinas-valencia/" className="text-primary hover:underline"><strong>reformas de cocinas</strong></a> y <a href="/servicios/reformas-banos-valencia/" className="text-primary hover:underline"><strong>reformas de baños</strong></a>. También puedes consultar <a href="/precios/" className="text-primary hover:underline"><strong>precios orientativos de reformas</strong></a> o pedir presupuesto directo desde <a href="/contacto/" className="text-primary hover:underline"><strong>nuestra página de contacto</strong></a>.
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
            Presupuesto de reformas en Valencia
          </h2>
          <p className="text-xl mb-8 text-white max-w-2xl mx-auto">
            El precio depende del tipo de obra, metros, materiales e instalaciones. Envíanos fotos y te damos un presupuesto detallado y personalizado sin coste.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
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
              href="/precios/"
              className="bg-white text-primary hover:bg-white/90"
            >
              Consultar precios de reformas
            </CustomButton>
          </div>
          <p className="text-white/90">
            O llámanos: <a href="tel:+34722208131" className="font-bold hover:underline">722 208 131</a>
          </p>
        </div>
      </section>

      {/* Zonas */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Reformas de viviendas en Valencia capital y área metropolitana
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Hacemos <strong>reformas en general</strong> por toda la ciudad: Ruzafa, El Carmen, Benimaclet, Campanar, Patraix, Extramurs y todos los barrios. También trabajamos en Torrent, Mislata, Paterna, Burjassot, Manises, Xirivella, Aldaia, Quart de Poblet, Alboraya y otras localidades del área metropolitana y la provincia.
            </p>
            <p className="text-lg text-muted-foreground">
              ¿Estás en otra zona? Consúltanos y te decimos si llegamos a tu localidad.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Preguntas frecuentes sobre reformas
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Dudas habituales sobre cómo trabajamos, plazos, precios y garantías.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-2">
                  ¿Qué tipo de reformas realizáis?
                </h3>
                <p className="text-muted-foreground">
                  Hacemos reformas integrales completas, reformas de cocinas, baños, pisos, terrazas, locales comerciales, fachadas e instalación de pladur. Nos adaptamos a cada proyecto, desde trabajos pequeños hasta reformas completas.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-2">
                  ¿Hacéis presupuestos sin compromiso?
                </h3>
                <p className="text-muted-foreground">
                  Sí. Envíanos fotos de lo que necesitas reformar (por WhatsApp o email) y te mandamos un presupuesto detallado en el menor tiempo posible, totalmente gratis y sin compromiso. No hace falta que nos esperes en casa para una visita.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-2">
                  ¿Cuánto tarda una reforma?
                </h3>
                <p className="text-muted-foreground">
                  Depende del tipo y tamaño. Una cocina suele tardar 2-3 semanas, un baño completo 1-2 semanas y una reforma integral de piso entre 1 y 2 meses. Te damos un calendario orientativo en el presupuesto y trabajamos con seguimiento de plazos.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-2">
                  ¿Trabajáis solo en Valencia capital?
                </h3>
                <p className="text-muted-foreground">
                  Trabajamos en toda Valencia capital y en el área metropolitana: Torrent, Mislata, Paterna, Burjassot, Manises, Xirivella, Aldaia, Quart de Poblet, Alboraya, etc. Si estás en otra zona, consúltanos y vemos si podemos llegar.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-2">
                  ¿Se puede hacer una reforma parcial?
                </h3>
                <p className="text-muted-foreground">
                  Sí, hacemos tanto reformas integrales como reformas parciales. Puedes reformar solo la cocina, solo el baño, cambiar el suelo de una habitación o hacer una reforma parcial en el piso. Nos adaptamos a lo que necesites y a tu presupuesto.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-2">
                  ¿Qué incluye el presupuesto?
                </h3>
                <p className="text-muted-foreground">
                  El presupuesto incluye materiales, mano de obra, gestión de escombros, limpieza final y condiciones de garantía por escrito. Te especificamos todo de forma transparente para que sepas exactamente qué estás contratando. Si quieres aportar tú algún material, te ajustamos el precio.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-2">
                  ¿Dais factura y garantía?
                </h3>
                <p className="text-muted-foreground">
                  Trabajamos con factura y con las condiciones de garantía por escrito en cada proyecto. Si necesitas más detalle sobre la documentación, te lo explicamos antes de empezar la obra.
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
            Pide tu presupuesto para reformar en Valencia
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Envíanos fotos de lo que quieres reformar y te damos una respuesta rápida con presupuesto detallado
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
              <span>722 208 131</span>
            </CustomButton>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
