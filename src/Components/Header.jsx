import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { AiOutlineClose } from "react-icons/ai";
import Objectiv from "./Objectiv";
import Mudanza1 from "../assets/Truck.jpg";
import Mudanza2 from "../assets/Mudanza1.jpg";
import Mudanza3 from "../assets/Mudanza2.jpg";
import Mudanza4 from "../assets/Mudanza3.jpg";
import Services from "./Services";
import FAQ from "./FAQ";
import InteresedOnTheWork from "./InteresedOnTheWork";
import Contact from "./Contact";
import Footer from "./Footer";

function Header() {
  return (
    <div className="bg-white/70 min-h-screen font-roboto overflow-x-hidden">
      <div className="bg-white rounded-b-lg  w-full">
        <nav className="flex justify-between items-center w-11/12 mx-auto">
          <div class="">
            <img
              class="w-14 object-contain items-center justify-center flex"
              src={logo}
              alt=""
            ></img>
          </div>
          <div className="md:static md:min-h-fit absolute bg-white/5 min-h-[60vh] left-0 top-[100%] md:w-auto w-full flex items-center px-5">
            <ul className="flex md:flex-row flex-col md:items-center md:gap-16 gap-8">
              <li>
                <div className="p-6 flex items-center justify-center">
                  <div className="">
                    <button
                      className="hidden bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
                      id="btnModal"
                    >
                      bitoncito
                    </button>
                    <div
                      className="hidden inset-0 items-center justify-center bg-black/50 z-50"
                      id="contentModal"
                    >
                      <div className="bg-white rounded-lg p-6 w-2/3 md:w-1/2 lg:w-1/4 max-w-full shadow-lg transform transition-all duration-300">
                        <div className="flex justify-between items-center border-b-2 border-gray-900 pb-4">
                          <h2 class="text-3xl font-semibold text-gray-900 text-center">
                            Login
                          </h2>
                          <button className="text-gray-500 hover:text-gray-700 focus:outline-none">
                            <AiOutlineClose className="text-2xl" />
                          </button>
                        </div>
                        <form>
                          <div className="mt-5 space-y-4">
                            <p class="text-lg text-black">Correo Electronico</p>
                            <input
                              class="border border-slate-500-500 p-1 w-full"
                              type="text"
                              name=""
                              id="userEmailLogin"
                            ></input>
                            <p class="text-lg text-black">Contraseña</p>
                            <input
                              class="border border-slate-500-500 p-1 w-full"
                              type="password"
                              name=""
                              id="userPasswordLogin"
                            ></input>
                            <select
                              class=" w-full p-2 rounded-lg bg-blue-500 text-center text-white"
                              id="userTypeLogin"
                            >
                              <option value="Usuario">Usuario</option>
                              <option value="Carguero">Carguero</option>
                              <option value="Conductor">Conductor</option>
                            </select>
                            <div class="flex flex-col space-y-4">
                              <button class="bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-300 transition duration-300">
                                Log In
                              </button>
                              <button class="flex items-center justify-center gap-2 bg-gray-900 text-gray-100 px-4 py-2 rounded-lg hover:bg-black transition duration-300">
                                Sign Up
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div class="flex items-center gap-5">
          <button class="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-sky-500 transition-colors">
              <Link to="/LoginUser" class="text-decoration-none">
                Iniciar Sesión
              </Link>
            </button>
            <button class="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-sky-500 transition-colors">
              <Link to="/Register" class="text-decoration-none">
                Registrarse
              </Link>
            </button>
            <button id="open-modal">
              <ion-icon
                name="log-out-outline"
                class="text-3xl cursor-pointer"
                id="Login"
              ></ion-icon>
            </button>
          </div>
        </nav>
      </div>
      <div class="h-5/6 w-full bg-white/90 grid items-center md:grid-cols-2 rounded-e-lg">
        <div class="w-full bg-AzulCyan/20 flex p-10 pt-10 flex-col md:p-18 md:px-32 justify-center md:h-full lg:h-screen">
          <div class="">
            <h5 class="text-3xl text-black/40">Bienvenido</h5>
          </div>
          <div class="w-full py-12 pb-12">
            <h1 class="text-7xl font-semibold text-azulvivo">
              No te preocupes por el camino
            </h1>
            <h1 class="text text-5xl font-thin">
              nosotros nos encargamos del destino
            </h1>
          </div>
          <div className="">
            <button class="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-sky-500 transition-colors">
              <a href="/src/RegisterCollaborator.html">Registrarse</a>
            </button>
            <button>Ver mas</button>
          </div>
        </div>
        <div class="w-full hidden h-full md:flex items-center flex-wrap justify-center bg-AzulCyan/20">
          <div class="w-1/2 h-1/2 border-r-[15px] border-white/5  rounded-b-full">
            <img
              className="w-full rounded-b-full h-full object-cover"
              src={Mudanza1}
              alt=""
            />
          </div>
          <div class="w-1/3 h-1/3  rounded-full">
            <img
              className="w-full rounded-full h-full object-cover"
              src={Mudanza2}
              alt=""
            />
          </div>
          <div class="w-1/3 h-1/3 border-r-[15px] animate-wiggle1 border-white/5  rounded-full">
            <img
              className="w-full rounded-full h-full object-cover"
              src={Mudanza3}
              alt=""
            />
          </div>

          <div class="w-1/2 h-1/2  rounded-t-full">
            <img
              className="w-full rounded-t-full h-full object-cover"
              src={Mudanza4}
              alt=""
            />
          </div>
        </div>
        <div className="flex justify-center w-screen px-48 max-[1300px]:px-0">
          <div className="flex flex-col flex-wrap">
            <Objectiv />
            <Services />
            <InteresedOnTheWork/>
            <FAQ/>

          </div>
        </div>
      </div>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default Header;