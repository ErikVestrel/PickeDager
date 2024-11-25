import React from "react";
import back from '../../assets/images/fondo.jpg'
import perfil from '../../assets/images/perfil.jpg'


const Home = () =>{
    return(
        <>
        <div className="container-bgimg  w-full h-full grid place-items-center " style={{backgroundImage: 'url(back)'}} >

            <div className="presentation-card flex w-3/5">
                <figure className="w-60 h-60 rounded" >

                    <img className="object-contain" src="perfil" alt="perfil" />

                </figure>
                <div className="presentation-text">
                    <h1>HOLA, mi nombre es erik vela</h1>
                    <p>soy desarrollador front-end con experiencia propia haciendo interfaces de usuario, tiendas ecommerce y landing pages para influencers</p>
                </div>
            </div>
        </div>
        </>
    )
}


export { Home }