
const proyects = {
  landingpage: {
    title: 'la masa perrona pagina web',
    img: `https://fotografias.lasexta.com/clipping/cmsimages02/2019/04/12/4CDEE1E5-D78D-45D0-8D60-C555B6B58F2A/98.jpg?crop=1024,576,x0,y0&width=1900&height=1069&optimize=high&format=webply`,
  
  },
  landingpage2: {
    title: 'la masa perrona pagina web',
    img: `https://fotografias.lasexta.com/clipping/cmsimages02/2019/04/12/4CDEE1E5-D78D-45D0-8D60-C555B6B58F2A/98.jpg?crop=1024,576,x0,y0&width=1900&height=1069&optimize=high&format=webply`,
  
  },
  landingpage3: {
    title: 'la masa perrona pagina web',
    img: `https://fotografias.lasexta.com/clipping/cmsimages02/2019/04/12/4CDEE1E5-D78D-45D0-8D60-C555B6B58F2A/98.jpg?crop=1024,576,x0,y0&width=1900&height=1069&optimize=high&format=webply`,
  
  },
  landingpage4: {
    title: 'la masa perrona pagina web',
    img: `https://fotografias.lasexta.com/clipping/cmsimages02/2019/04/12/4CDEE1E5-D78D-45D0-8D60-C555B6B58F2A/98.jpg?crop=1024,576,x0,y0&width=1900&height=1069&optimize=high&format=webply`,
  
  },
  landingpage5: {
    title: 'la masa perrona pagina web',
    img: `https://fotografias.lasexta.com/clipping/cmsimages02/2019/04/12/4CDEE1E5-D78D-45D0-8D60-C555B6B58F2A/98.jpg?crop=1024,576,x0,y0&width=1900&height=1069&optimize=high&format=webply`,
  
  },
  landingpage6: {
    title: 'la masa perrona pagina web',
    img: `https://fotografias.lasexta.com/clipping/cmsimages02/2019/04/12/4CDEE1E5-D78D-45D0-8D60-C555B6B58F2A/98.jpg?crop=1024,576,x0,y0&width=1900&height=1069&optimize=high&format=webply`,
  
  }
}

const Galery = ()=> {

    return(
      <>
      

        <section id="gallery" className=" grid w-4/5 bg-white  mx-auto z-10">

        <h2 className=" text-3xl font-bold text-center p-12 text-gray-100 z-10">Galería</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl justify-self-center">
          {Object.entries(proyects).map(([name, {title, img}])  =>(
            <article  
              onClick={()=>{window.open('https://www.youtube.com/watch?v=AWdVNldFl1g&ab_channel=midulive', '_blank')}}
              key={name}
              className="col-span-1 border rounded-xl border-gray-50 overflow-hidden flex flex-col shadow-custom-light hover:shadow-custom-dark transform duration-300 ease-in-out cursor-pointer hover:scale-105 hover:-translate-y-[.5rem]">
              <figure className="proyect-image">
                <img src={img} alt="img" />
              </figure>
              <div className="proyect-title p-4">
                <h2 className="font-bold text-xl font-mono">{name}</h2>
                <p className="font-semibold text-lg font-mono text-slate-400">{title}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

        </>
    )
}
export {Galery}