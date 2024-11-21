import React from "react";
import logo from '../../assets/images/pdlogo.png'

export const Header = () => (
    <>
        <header className="flex px-8 justify-between w-full h-52 border-b-2 border-blue-300">
            <div className="grid place-items-center ">
                <img src={logo} alt="pickle" />
            </div>
            <div>
                <img src={logo} alt="pickle" />
            </div>
        </header>
    </>
)