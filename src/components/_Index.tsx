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
    "@type": ["LocalBusiness", "HomeAndConstructionBusiness", "GeneralContractor"],
    "@id": "https://mejoresreformasvalencia.es/#business",
    name: "Reformas Valencia",
    description: "Empresa de reformas en Valencia especializada en reformas integrales, cocinas, baños, pisos y locales. Presupuesto rápido y trabajo profesional.",
    url: "https://mejoresreformasvalencia.es",
    image: "https://mejoresreformasvalencia.es/og-home.webp",
    telephone: "+34722208131",
    email: "info@mejoresreformasvalencia.es",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Valencia",
      addressRegion: "Comunitat Valenciana",
      addressCountry: "ES",
    },
    openingHours: ["Mo-Sa 08:00-20:00"],
    priceRange: "€€",
    areaServed: [
      {
        "@type": "City",
        name: "Valencia",
        containedInPlace: {
          "@type": "AdministrativeArea",
          name: "Comunitat Valenciana"
        }
      },
      // Centro histórico y Ciutat Vella
      { "@type": "PostalCodeSpecification", postalCode: "46001", addressLocality: "Valencia", addressCountry: "ES" },
      { "@type": "PostalCodeSpecification", postalCode: "46002", addressLocality: "Valencia", addressCountry: "ES" },
      { "@type": "PostalCodeSpecification", postalCode: "46003", addressLocality: "Valencia", addressCountry: "ES" },
      // Eixample
      { "@type": "PostalCodeSpecification", postalCode: "46004", addressLocality: "Valencia", addressCountry: "ES" },
      { "@type": "PostalCodeSpecification", postalCode: "46005", addressLocality: "Valencia", addressCountry: "ES" },
      { "@type": "PostalCodeSpecification", postalCode: "46006", addressLocality: "Valencia", addressCountry: "ES" },
      { "@type": "PostalCodeSpecification", postalCode: "46007", addressLocality: "Valencia", addressCountry: "ES" },
      { "@type": "PostalCodeSpecification", postalCode: "46008", addressLocality: "Valencia", addressCountry: "ES" },
      { "@type": "PostalCodeSpecification", postalCode: "46009", addressLocality: "Valencia", addressCountry: "ES" },
      { "@type": "PostalCodeSpecification", postalCode: "46010", addressLocality: "Valencia", addressCountry: "ES" },
      // Extramurs y otras zonas
      { "@type": "PostalCodeSpecification", postalCode: "46011", addressLocality: "Valencia", addressCountry: "ES" },
      { "@type": "PostalCodeSpecification", postalCode: "46012", addressLocality: "Valencia", addressCountry: "ES" },
      { "@type": "PostalCodeSpecification", postalCode: "46013", addressLocality: "Valencia", addressCountry: "ES" },
      { "@type": "PostalCodeSpecification", postalCode: "46014", addressLocality: "Valencia", addressCountry: "ES" },
      { "@type": "PostalCodeSpecification", postalCode: "46015", addressLocality: "Valencia", addressCountry: "ES" },
      { "@type": "PostalCodeSpecification", postalCode: "46016", addressLocality: "Valencia", addressCountry: "ES" },
      { "@type": "PostalCodeSpecification", postalCode: "46017", addressLocality: "Valencia", addressCountry: "ES" },
      { "@type": "PostalCodeSpecification", postalCode: "46018", addressLocality: "Valencia", addressCountry: "ES" },
      { "@type": "PostalCodeSpecification", postalCode: "46019", addressLocality: "Valencia", addressCountry: "ES" },
      { "@type": "PostalCodeSpecification", postalCode: "46020", addressLocality: "Valencia", addressCountry: "ES" },
      // Campanar, Benimaclet, Poblados marítimos
      { "@type": "PostalCodeSpecification", postalCode: "46021", addressLocality: "Valencia", addressCountry: "ES" },
      { "@type": "PostalCodeSpecification", postalCode: "46022", addressLocality: "Valencia", addressCountry: "ES" },
      { "@type": "PostalCodeSpecification", postalCode: "46023", addressLocality: "Valencia", addressCountry: "ES" },
      { "@type": "PostalCodeSpecification", postalCode: "46024", addressLocality: "Valencia", addressCountry: "ES" },
      { "@type": "PostalCodeSpecification", postalCode: "46025", addressLocality: "Valencia", addressCountry: "ES" }
    ],
    knowsAbout: [
      "Reformas integrales en Valencia",
      "Reformas de cocinas completas",
      "Reformas de baños modernos",
      "Reforma de pisos y viviendas",
      "Reformas de locales comerciales",
      "Reformas de terrazas y balcones",
      "Reformas de chalets en Valencia",
      "Reformas de fachadas de edificios",
      "Instalación de pladur y falsos techos",
      "Obras y reformas completas",
      "Reforma vivienda Valencia",
      "Reformas de casas antiguas"
    ],
    contactPoint: [{
      "@type": "ContactPoint",
      "telephone": "+34722208131",
      "contactType": "customer service",
      "areaServed": "ES",
      "availableLanguage": ["Spanish", "Valencian"]
    }],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Servicios de Reformas en Valencia",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Reformas Integrales",
            description: "Reformas completas de viviendas con gestión integral del proyecto",
            url: "https://mejoresreformasvalencia.es/servicios/reformas-integrales-valencia/",
            areaServed: {
              "@type": "City",
              name: "Valencia",
              sameAs: "https://www.wikidata.org/wiki/Q8818"
            },
            serviceType: "Home Renovation",
            provider: {
              "@id": "https://mejoresreformasvalencia.es/#business"
            }
          },
          priceCurrency: "EUR"
        },
        {
          "@type": "Offer", 
          itemOffered: {
            "@type": "Service",
            name: "Reformas de Cocinas",
            description: "Reforma completa de cocinas con diseño personalizado",
            url: "https://mejoresreformasvalencia.es/servicios/reformas-cocinas-valencia/",
            areaServed: {
              "@type": "City",
              name: "Valencia",
              sameAs: "https://www.wikidata.org/wiki/Q8818"
            },
            serviceType: "Kitchen Renovation",
            provider: {
              "@id": "https://mejoresreformasvalencia.es/#business"
            }
          },
          priceCurrency: "EUR"
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Reformas de Baños",
            description: "Renovación completa de baños con materiales de calidad",
            url: "https://mejoresreformasvalencia.es/servicios/reformas-banos-valencia/",
            areaServed: {
              "@type": "City",
              name: "Valencia",
              sameAs: "https://www.wikidata.org/wiki/Q8818"
            },
            serviceType: "Bathroom Renovation",
            provider: {
              "@id": "https://mejoresreformasvalencia.es/#business"
            }
          },
          priceCurrency: "EUR"
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Reformas de Pisos",
            description: "Reforma integral de pisos y viviendas en Valencia",
            url: "https://mejoresreformasvalencia.es/servicios/reformas-pisos-valencia/",
            areaServed: {
              "@type": "City",
              name: "Valencia",
              sameAs: "https://www.wikidata.org/wiki/Q8818"
            },
            serviceType: "Apartment Renovation",
            provider: {
              "@id": "https://mejoresreformasvalencia.es/#business"
            }
          },
          priceCurrency: "EUR"
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
          text: "Sí. Envíanos fotos de lo que necesitas reformar y te mandamos presupuesto detallado en menos de 24 horas, sin compromiso y sin visitas innecesarias."
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
          text: "Depende del tipo y tamaño. Una cocina suele tardar 2-3 semanas, un baño 1-2 semanas y una reforma integral de piso 1-2 meses. Te damos calendario exacto en el presupuesto."
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
        title="Empresa de Reformas en Valencia | Reformas Integrales y Presupuesto"
        description="Empresa de reformas en Valencia especializada en reformas integrales, cocinas, baños y pisos. Presupuesto rápido, trabajo profesional y acabado cuidado."
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
              alt="Empresa de reformas trabajando en Valencia" 
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
              Reformas integrales con presupuesto claro
            </p>
            <p className="text-xl mb-12 text-white/90">
              Realizamos reformas integrales en Valencia para viviendas, pisos, cocinas, baños y locales. Te ayudamos a renovar tu espacio con un trabajo cuidado, materiales de calidad y presupuesto claro desde el primer momento.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              {/* Botón Presupuesto Gratis naranja */}
              <Button
                asChild
                size="lg"
                className="bg-accent hover:bg-accent/90 text-white shadow-lg font-bold text-lg py-4 px-8"
              >
                <a href="/presupuesto/" className="flex items-center justify-center">
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
                <span className="font-medium">Presupuesto gratuito</span>
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
                <span className="font-medium">Garantía escrita</span>
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
              Reformas en Valencia con un servicio claro y profesional
            </h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
              Si estás buscando una <strong>empresa de reformas en Valencia</strong>, en nuestro equipo trabajamos cada proyecto de forma personalizada para conseguir un resultado práctico, duradero y bien acabado. Nos encargamos de reformas completas y parciales, adaptándonos al tipo de vivienda, al estado del inmueble y a lo que realmente necesitas.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-primary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Servicios de reformas que realizamos en Valencia
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Nos adaptamos a cada tipo de proyecto: desde reformas integrales completas hasta trabajos específicos en cocinas, baños o terrazas.
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
                  <a href="/servicios/reformas-cocinas-valencia/">Ver detalles</a>
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
                  <a href="/servicios/reformas-banos-valencia/">Ver detalles</a>
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
                  Reforma completa de viviendas en Valencia. Nos encargamos de todo: albañilería, instalaciones, carpintería, pintura y acabados. Proyecto, licencias y ejecución.
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
                  <a href="/servicios/reformas-integrales-valencia/">Ver detalles</a>
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
                  Renovamos pisos completos en Valencia: distribución, instalaciones, pavimentos, pintura y carpintería. Ideal para actualizar antes de vender o alquilar.
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
                  <a href="/servicios/reformas-pisos-valencia/">Ver detalles</a>
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
                    <span>Garantía por escrito</span>
                  </li>
                </ul>
                <Button
                  asChild
                  size="sm"
                  className="bg-white text-primary border border-primary hover:bg-primary hover:text-white transition-colors"
                >
                  <a href="/servicios/reforma-terraza-valencia/">Ver detalles</a>
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
                  <a href="/servicios/reformas-locales-comerciales-valencia/">Ver detalles</a>
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
              Reformas integrales en Valencia para viviendas, pisos y locales
            </h2>
            
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                <strong>¿Acabas de comprar un piso en Ruzafa o Benimaclet?</strong> Si quieres renovarlo completamente, nuestras <a href="/servicios/reformas-integrales-valencia/" className="text-primary hover:underline font-semibold">reformas integrales</a> incluyen todo: albañilería, fontanería, electricidad, carpintería, pintura y acabados. Te coordinamos todos los gremios para que no tengas que preocuparte de nada. Envíanos fotos y te decimos cuánto cuesta y cuánto tardamos.
              </p>
              
              <p>
                <strong>¿Necesitas renovar la cocina?</strong> Hacemos <a href="/servicios/reformas-cocinas-valencia/" className="text-primary hover:underline font-semibold">reformas de cocinas completas</a> con diseño funcional, muebles de calidad, electrodomésticos y todas las instalaciones. Cambiamos azulejos, encimera, muebles y dejamos todo listo para que cocines a gusto. Ideal si quieres modernizar tu casa sin hacer una obra completa.
              </p>
              
              <p>
                <strong>¿El baño se ha quedado antiguo?</strong> Nuestras <a href="/servicios/reformas-banos-valencia/" className="text-primary hover:underline font-semibold">reformas de baños</a> incluyen impermeabilización correcta, plato de ducha, mamparas, sanitarios y azulejos. Todo con garantía y sin filtraciones. Trabajamos rápido y limpio para que puedas usar el baño cuanto antes.
              </p>
              
              <p>
                <strong>¿Quieres renovar tu piso completo?</strong> Hacemos <a href="/servicios/reformas-pisos-valencia/" className="text-primary hover:underline font-semibold">reformas de pisos</a> en Valencia cambiando distribución si hace falta, actualizando instalaciones, poniendo suelos nuevos y pintando. Perfecto si acabas de heredar un piso viejo o quieres venderlo a buen precio.
              </p>
              
              <p>
                <strong>¿Tienes un local o negocio?</strong> Reformamos <a href="/servicios/reformas-locales-comerciales-valencia/" className="text-primary hover:underline font-semibold">locales comerciales</a> en horarios que no te interrumpan (noches o fines de semana). Hacemos el diseño, las instalaciones, los acabados y cumplimos los plazos para que abras a tiempo. Conocemos la normativa y te ayudamos con las licencias.
              </p>

              <p>
                ¿Quieres saber cuánto cuesta tu reforma? Consulta nuestra <a href="/precios/" className="text-primary hover:underline font-semibold">página de precios</a> con tarifas orientativas o envíanos fotos para un presupuesto personalizado sin compromiso.
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
              Por qué elegir nuestra empresa de reformas en Valencia
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Presupuesto detallado y sin compromiso, asesoramiento personalizado y materiales de calidad. Trabajamos con seriedad y dejamos cada reforma bien acabada.
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
                    alt="Equipo profesional realizando reformas en Valencia"
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
                    Llevamos años haciendo <a href="/servicios/reformas-integrales-valencia/" className="text-primary hover:underline"><strong>reformas integrales</strong></a>, <a href="/servicios/reformas-cocinas-valencia/" className="text-primary hover:underline"><strong>cocinas</strong></a>, <a href="/servicios/reformas-banos-valencia/" className="text-primary hover:underline"><strong>baños</strong></a> y <a href="/servicios/reformas-pisos-valencia/" className="text-primary hover:underline"><strong>pisos completos</strong></a> por toda Valencia capital y alrededores. También reformamos <a href="/servicios/reformas-locales-comerciales-valencia/" className="text-primary hover:underline"><strong>locales comerciales</strong></a> y hacemos reformas de fachadas.
                  </p>
                  
                  <p>
                    Trabajamos con materiales de calidad y te damos <strong>garantía por escrito</strong> en cada reforma. <strong>Envíanos fotos de tu espacio</strong> y te mandamos presupuesto detallado en menos de 24 horas, sin que tengas que perder tiempo con visitas. Mira ejemplos de trabajos hechos en <a href="/trabajos/" className="text-primary hover:underline"><strong>proyectos realizados</strong></a>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Proceso de Trabajo */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Cómo trabajamos nuestras reformas
            </h2>
            
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed mb-12">
              <p>
                Llevamos <strong>más de 10 años</strong> haciendo <strong>reformas en Valencia</strong> y alrededores. Hemos ayudado a cientos de familias, negocios y comunidades a renovar sus espacios con buenos resultados. Nuestro equipo está formado por profesionales con experiencia en albañilería, fontanería, electricidad y acabados.
              </p>
              
              <p>
                Sabemos que buscar una <strong>empresa de reformas de confianza</strong> no es fácil, por eso somos transparentes desde el principio. <strong>Envíanos fotos de lo que necesitas reformar</strong> y te mandamos presupuesto en menos de 24 horas, con todos los detalles: materiales, mano de obra, cuánto tardamos y qué garantía te damos. Sin perder tiempo con visitas ni esperas.
              </p>
              
              <p>
                Cumplimos los plazos que acordamos y dejamos tu casa limpia. Protegemos muebles, aspiramos el polvo cada día y al terminar lo limpiamos todo a fondo. Todos nuestros trabajos incluyen <strong>garantía por escrito</strong> y factura oficial con todos los datos.
              </p>
              
              <p>
                Usamos <strong>materiales de calidad</strong> de marcas reconocidas porque una buena reforma se ve mejor y dura más. Además tenemos <strong>seguro de responsabilidad civil</strong> y cumplimos toda la normativa de prevención de riesgos.
              </p>
            </div>
            
            {/* Grid de beneficios */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start space-x-3 p-4 bg-primary/5 rounded-lg">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Más de 10 años de experiencia</h3>
                  <p className="text-sm text-gray-600">Profesionales certificados en reformas</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 p-4 bg-primary/5 rounded-lg">
                <Clock className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Presupuesto por fotos en 24h</h3>
                  <p className="text-sm text-gray-600">Sin desplazamientos, detallado y sin compromiso</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 p-4 bg-primary/5 rounded-lg">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Limpieza total incluida</h3>
                  <p className="text-sm text-gray-600">Protección de muebles y limpieza diaria</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 p-4 bg-primary/5 rounded-lg">
                <Shield className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Garantía por escrito</h3>
                  <p className="text-sm text-gray-600">Factura oficial y seguro RC vigente</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 p-4 bg-primary/5 rounded-lg">
                <Star className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Materiales de calidad</h3>
                  <p className="text-sm text-gray-600">Marcas reconocidas y garantizadas</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 p-4 bg-primary/5 rounded-lg">
                <Building className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Valencia y área metropolitana</h3>
                  <p className="text-sm text-gray-600">Servicio en toda la provincia</p>
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
            El precio depende del tipo de obra, metros, materiales e instalaciones. Envíanos fotos y te damos un presupuesto detallado en menos de 24h.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <CustomButton
              variant="accent"
              size="lg"
              asChild
              href="/presupuesto/"
            >
              Pedir presupuesto gratis
            </CustomButton>
            <CustomButton
              variant="secondary"
              size="lg"
              asChild
              href="/precios/"
              className="bg-white text-primary hover:bg-white/90"
            >
              Ver precios orientativos
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
              Empresa de reformas en Valencia y alrededores
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Trabajamos por toda Valencia capital: Ruzafa, El Carmen, Benimaclet, Campanar, Patraix, Extramurs, y todos los barrios. También nos desplazamos a localidades del área metropolitana como Torrent, Mislata, Paterna, Burjassot, Manises, Xirivella, Aldaia, Quart de Poblet, Alboraya y más. 
            </p>
            <p className="text-lg text-muted-foreground">
              ¿Estás más lejos? Consúltanos tu zona y vemos si podemos llegar.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Preguntas Frecuentes
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Las dudas más habituales sobre cómo trabajamos, precios y garantías.
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
                  Sí. Envíanos fotos de lo que necesitas reformar (por WhatsApp o email) y te mandamos un presupuesto detallado en menos de 24 horas, totalmente gratis y sin compromiso. No hace falta que nos esperes en casa para una visita.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-2">
                  ¿Cuánto tarda una reforma?
                </h3>
                <p className="text-muted-foreground">
                  Depende del tipo y tamaño. Una cocina suele tardar 2-3 semanas, un baño completo 1-2 semanas y una reforma integral de piso entre 1 y 2 meses. Te damos un calendario exacto en el presupuesto y cumplimos los plazos.
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
                  Sí, hacemos tanto reformas integrales como reformas parciales. Puedes reformar solo la cocina, solo el baño, cambiar el suelo de una habitación o pintar el piso completo. Nos adaptamos a lo que necesites y a tu presupuesto.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-2">
                  ¿Qué incluye el presupuesto?
                </h3>
                <p className="text-muted-foreground">
                  El presupuesto incluye materiales, mano de obra, gestión de escombros, limpieza final y garantía por escrito. Te especificamos todo de forma transparente para que sepas exactamente qué estás contratando. Si quieres aportar tú algún material, te ajustamos el precio.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-2">
                  ¿Dais factura y garantía?
                </h3>
                <p className="text-muted-foreground">
                  Sí, siempre. Somos una empresa legal con todos los papeles en regla. Te damos factura oficial con IVA y garantía por escrito en todos los trabajos. También tenemos seguro de responsabilidad civil para que estés tranquilo.
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
            Envíanos fotos de lo que quieres reformar y te damos presupuesto detallado en menos de 24 horas
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CustomButton
              variant="accent"
              size="lg"
              asChild
              href="/presupuesto/"
            >
              Pedir presupuesto gratis
            </CustomButton>
            <CustomButton
              variant="secondary"
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
