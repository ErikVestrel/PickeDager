
const MainContainer = () => {
    return(
        <>
        <div>
      
      <section
        id="info"
        className="bg-gray-100 text-gray-800 py-20 px-4 text-center"
      >
        <h2 className="text-3xl font-bold mb-6">Sobre Nosotros</h2>
        <p className="text-lg max-w-2xl mx-auto">
          Somos una compañía dedicada a ofrecer las mejores soluciones
          digitales. Nuestro enfoque está en la innovación y la excelencia.
        </p>
      </section>

      {/* Galería */}
      
      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 text-center">
        <p>
          © 2024 Todos los derechos reservados |{" "}
          <a
            href="#info"
            className="text-cyan-400 hover:underline"
          >
            Contáctanos
          </a>
        </p>
      </footer>
    </div>

        </>
    )
}

export {MainContainer}