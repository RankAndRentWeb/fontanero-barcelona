
export default function SiteFooter() {
  return (
    <footer className="w-full bg-primary text-white mt-16">
      <div className="mx-auto max-w-6xl px-6 py-8">
        {/* Main Footer Content */}
        <div className="grid gap-8 md:grid-cols-4">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img 
                src="/reformas-valencia-logo.png" 
                alt="Reformas Valencia" 
                className="w-8 h-8"
                loading="lazy"
              />
              <p className="font-semibold text-lg text-white">Reformas Valencia</p>
            </div>
            <p className="text-white/80 text-sm leading-relaxed">
              Empresa de reformas integrales en Valencia. Cocinas, baños, pisos y locales comerciales.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="font-semibold text-white mb-4">Navegación</p>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="text-white/80 hover:text-white transition-colors">Inicio</a></li>
              <li><a href="/servicios/" className="text-white/80 hover:text-white transition-colors">Servicios</a></li>
              <li><a href="/blog/" className="text-white/80 hover:text-white transition-colors">Blog</a></li>
              <li><a href="/precios/" className="text-white/80 hover:text-white transition-colors">Precios</a></li>
              <li><a href="/contacto/" className="text-white/80 hover:text-white transition-colors">Contacto</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <p className="font-semibold text-white mb-4">Servicios</p>
            <ul className="space-y-2 text-sm">
              <li><a href="/servicios/reformas-cocinas-valencia/" className="text-white/80 hover:text-white transition-colors">Reformas de Cocinas</a></li>
              <li><a href="/servicios/reformas-banos-valencia/" className="text-white/80 hover:text-white transition-colors">Reformas de Baños</a></li>
              <li><a href="/servicios/reformas-integrales-valencia/" className="text-white/80 hover:text-white transition-colors">Reformas Integrales</a></li>
              <li><a href="/presupuesto/" className="text-white font-medium hover:text-white/80 transition-colors">Solicitar presupuesto</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="font-semibold text-white mb-4">Contacto</p>
            <div className="space-y-2 text-sm">
              <div>
                <a href="tel:+34722208131" className="text-white font-medium hover:text-white/80 transition-colors">
                  722 208 131
                </a>
              </div>
              <div>
                <a href="mailto:info@mejoresreformasvalencia.es" className="text-white/80 hover:text-white transition-colors">
                  info@mejoresreformasvalencia.es
                </a>
              </div>
              <div className="text-white/80">Valencia, España</div>
              <div className="text-white/80">Lun–Sáb 08:00–20:00</div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/20 mt-6 pt-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <div className="text-white/80">
              © 2025 Reformas Valencia. Todos los derechos reservados.
            </div>
            <div className="flex gap-6">
              <a href="/aviso-legal/" className="text-white/80 hover:text-white transition-colors">
                Aviso Legal
              </a>
              <a href="/politica-privacidad/" className="text-white/80 hover:text-white transition-colors">
                Privacidad
              </a>
              <a href="/politica-cookies/" className="text-white/80 hover:text-white transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
