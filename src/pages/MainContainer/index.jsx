
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
      <section id="gallery" className="bg-white py-20 px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Galería</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div
            className="w-full h-52 bg-cover bg-center rounded-lg shadow-md"
            style={{
              backgroundImage: "url('https://via.placeholder.com/400')",
            }}
          ></div>
          <div
            className="w-full h-52 bg-cover bg-center rounded-lg shadow-md"
            style={{
              backgroundImage: "url('https://via.placeholder.com/400')",
            }}
          ></div>
          <div
            className="w-full h-52 bg-cover bg-center rounded-lg shadow-md"
            style={{
              backgroundImage: "url('https://via.placeholder.com/400')",
            }}
          ></div>
          <div
            className="w-full h-52 bg-cover bg-center rounded-lg shadow-md"
            style={{
              backgroundImage: "url('https://via.placeholder.com/400')",
            }}
          ></div>
        </div>
      </section>

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