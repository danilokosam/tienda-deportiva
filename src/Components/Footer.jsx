import React from "react";

const Footer = () => {
  return (
    <footer className='bg-[url("/src/assets/images/bg.png")] bg-cover bg-no-repeat text-white mt-6'>
      <div className="grid grid-cols-4 gap-x-8 justify-center items-center p-[70px] px-36">
        <div className="flex flex-col">
          <img src="../src/assets/images/logo.png" alt="" className="w-40" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="flex flex-col justify-evenly">
          <p>3875683101</p>
          <p>Salta, Argentina</p>
          <p>modadeportiva@gmail.com</p>
        </div>
        <div className="flex flex-col justify-between gap-5">
          <p>Remeras</p>
          <p>Zapatillas</p>
          <p>Pantalones</p>
        </div>
        <div className="w-full flex flex-col">
          <input type="text" className="bg-white px-3 py-2 rounded-lg" placeholder="Correo Electronico"/>
          <button className="bg-blue-600 text-black p-2 rounded-md mt-2 hover:bg-[#FFB800]/80 transition duration-300 ease-in-out">
            Enviar
          </button>
        </div>
      </div>
      <div className="text-center pb-3">
        <p>Copyright © 2023 Todos los derechos reservados</p>
      </div>
    </footer>
  );
};

export default Footer;
