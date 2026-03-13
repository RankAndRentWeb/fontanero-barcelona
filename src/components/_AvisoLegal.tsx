import SEOHead from '@/components/SEOHead';

const AvisoLegal = () => {
  return (
    <>
      <SEOHead
        title="Aviso Legal - Mejores Reformas Valencia"
        description="Aviso legal de mejoresreformasvalencia.es. Información sobre titularidad, uso del sitio y condiciones generales."
        canonicalUrl="https://mejoresreformasvalencia.es/aviso-legal/"
        noindex={true}
      />

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Aviso Legal</h1>
          
          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Información General</h2>
              <p className="mb-4">
                En cumplimiento con el deber de información dispuesto en la Ley 34/2002 de Servicios de la 
                Sociedad de la Información y del Comercio Electrónico (LSSI-CE) de 11 de julio, se facilitan 
                a continuación los siguientes datos de información general de este sitio web:
              </p>
              
              <div className="bg-muted/50 p-6 rounded-lg mb-6">
                <h3 className="font-semibold mb-3">Datos del titular:</h3>
                <ul className="space-y-1">
                  <li><strong>Titular:</strong> Edgar Berrio Jiménez</li>
                  <li><strong>Dominio:</strong> https://mejoresreformasvalencia.es</li>
                  <li><strong>Email de contacto:</strong> info@mejoresreformasvalencia.es</li>
                  <li><strong>Datos identificativos adicionales:</strong> no se publican en esta versión provisional y se facilitarán cuando proceda legalmente.</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Objeto</h2>
              <p className="mb-4">
                El presente sitio web tiene por objeto facilitar al público en general el conocimiento de las 
                actividades que esta organización realiza y de los servicios que presta, en particular servicios 
                de información y captación de solicitudes de contacto, información y presupuesto relacionadas 
                con servicios de reformas en Valencia y alrededores.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Condiciones de Uso</h2>
              <p className="mb-4">
                La utilización del sitio web le otorga la condición de usuario, e implica la aceptación completa 
                de todas las cláusulas y condiciones de uso incluidas en las páginas:
              </p>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li>Si no está conforme con todas y cada una de estas condiciones, absténgase de utilizar este sitio web.</li>
                <li>El acceso a este sitio web es responsabilidad exclusiva de los usuarios.</li>
                <li>El simple acceso a este sitio web no supone entablar una relación comercial entre el titular del sitio web y el usuario.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Responsabilidad</h2>
              <p className="mb-4">
                El titular del sitio web no se hace responsable de la información publicada en su página web 
                siempre que esta información haya sido manipulada o introducida por un tercero ajeno al mismo.
              </p>
              <p className="mb-4">
                Desde el sitio web, es posible que se redirija a contenidos de terceros. Dado que el titular 
                del sitio web no puede controlar siempre los contenidos introducidos por los terceros en sus 
                respectivas páginas web, no asume ningún tipo de responsabilidad respecto a dichos contenidos.
              </p>
              <p className="mb-4">
                La información publicada en este sitio tiene carácter informativo y orientativo. Los importes,
                plazos o condiciones mostrados no constituyen oferta vinculante hasta su confirmación en un
                presupuesto personalizado.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Propiedad Intelectual</h2>
              <p className="mb-4">
                Todos los contenidos del sitio web, como textos, fotografías, gráficos, imágenes, iconos, 
                tecnología, software, así como su diseño gráfico y códigos fuente, constituyen una obra cuya 
                propiedad pertenece al titular del sitio web, sin que puedan entenderse cedidos al usuario 
                ninguno de los derechos de explotación sobre los mismos más allá de lo estrictamente necesario 
                para el correcto uso del sitio web.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Modificaciones</h2>
              <p className="mb-4">
                El titular del sitio web se reserva el derecho de efectuar sin previo aviso las modificaciones 
                que considere oportunas en su portal, pudiendo cambiar, suprimir o añadir tanto los contenidos 
                y servicios que se presten a través de la misma como la forma en la que éstos aparezcan 
                presentados o localizados en su portal.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Legislación Aplicable</h2>
              <p className="mb-4">
                La relación entre el titular del sitio web y el usuario se regirá por la normativa española 
                vigente y cualquier controversia se someterá a los Juzgados y tribunales de la ciudad de Valencia.
              </p>
            </section>

            <div className="mt-12 p-4 bg-primary/10 rounded-lg">
              <p className="text-sm text-center">
                <strong>Última actualización:</strong> abril 2026
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AvisoLegal;
