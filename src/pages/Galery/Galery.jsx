
const Galery = ()=> {
    return(
        <>
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

        </>
    )
}
export {Galery}