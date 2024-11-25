import { AiFillLinkedin, AiOutlineLink, AiFillGithub } from "react-icons/ai";
import '../../App.css'
import React from "react";

import logo from '../../assets/images/pdlogo.png'
import { NavLink} from "react-router";

export const Header = () => (
    <>
        <header className="row-span-1 grid grid-cols-5 gap-16 px-16 justify-between items-center w-full h-14 border-none  bg-blue-200 ">
            <div className="col-span-1 w-36 h-full justify-self-center ">
                <img className="w-full h-full object-contain" src={logo} alt="pickle" />
                
            </div>
            <div className="col-span-4 flex justify-between">
                <div className="flex justify-center items-center gap-6 w-full h-14 border-none pl-12 ">
                        
                
                    <NavLink  style={({isActive}) => ({backgroundColor: isActive ? 'red' : 'blue'})}
                    className="w-32 h-12 rounded-xl border-none bg-blue-300 grid place-items-center" to={'/'} >about me </NavLink>
                    <NavLink  style={({isActive}) => ({backgroundColor: isActive ? 'red' : 'blue'})} className="w-32 h-12 rounded-xl border-none bg-blue-300 grid place-items-center" to={'/principal'}>about me </NavLink>
                    <NavLink  style={({isActive}) => ({backgroundColor: isActive ? 'red' : 'blue'})} className="w-32 h-12 rounded-xl border-none bg-blue-300 grid place-items-center" to={'/culo'} >contact</NavLink>

                </div>
                <div>
                    <ul className="w-48 h-full flex justify-center gap-6 items-center">
                        <li><a className=" roundedfull hover:scale-50" href="https://github.com/MarianoVilla" target="_blank"><AiFillGithub className="w-8 h-8" /></a></li>
                        <li><a className=" roundedfull hover:scale-50 " href="https://www.linkedin.com/in/mariano-luis-villa/?locale=en_US"  target="_blank"><AiFillLinkedin className="w-8 h-8" /></a></li>
                        <li><a className=" roundedfull hover:scale-50" href="https://linktr.ee/DotDager" target="_blank">
                            <AiOutlineLink className="w-8 h-8" /></a></li>
                    </ul>
                </div>
            </div> 
            
        </header>
    </>
)