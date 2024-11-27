import back from '../../../public/images/fondo.jpg'
import perfil from '../../../public/images/perfil.jpg'


const Home = () =>{
    return(
        <>
    <div className="relative w-full h-full grid place-items-center bg-black"  >

        <img src={back} alt="fondo" className="absolute w-full h-full object-cover blur-md opacity-60 " />

            <div className="animate-fade-left z-10 grid grid-flow-col w-3/6 border-none rounded-3xl  shadow-custom-dark cursor-pointer hover">
                <figure className="w-60 h-60 m-12 rounded-full overflow-hidden hover-scale  " >

                    <img className="object-contain" src={perfil} alt="perfil" />

                </figure>
                <div className="presentation-text text-center  p-14 flex flex-col gap-12 hover-scale
                " >
                    <h1 className="text-2xl font-bold">HOLA, mi nombre es ERIK VELA</h1>
                    <p className="text-lg font-semibold font-mono">soy desarrollador front-end con experiencia propia haciendo interfaces de usuario, tiendas ecommerce y landing pages para influencers</p>
                </div>
            </div>
        </div>
        </>
    )
}


export { Home }