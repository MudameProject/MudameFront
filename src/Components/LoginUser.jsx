import React from 'react';
import { Link } from 'react-router-dom';
import UpperRoad from './UpperRoad';



function LoginUser() {
    return (
        <div className='flex w-full h-screen overflow-hidden'>
            <div className='w-full flex items-center justify-center   lg:w-1/2 '>
                <div className='border-blue-500 px-10 py-20 rounded-3xl border-2 bg-white'>
                        <h1 className='text-5xl font-semibold'>Iniciar sesión</h1>
                        <p className='font-medium text-lg text-gray-500 mt-4'>Portal Cliente Mudame</p>

                        <div className='mt-8'>
                            <div>
                                <label className='text-lg font-medium'>Email</label>
                                <input 
                                className='w-full border-2 border-blue-500 rounded-xl p-4 mt-1 bg-transparent' 
                                placeholder='Ingresa tu Email' />
                            </div>

                            <div>
                                <label className='text-lg font-medium'>Password</label>
                                <input 
                                className='w-full border-2 border-blue-500 rounded-xl p-4 mt-1 bg-transparent' 
                                placeholder='Ingresa tu Contraseña'
                                type='password' />

                            </div>


                            <div className='mt-8 flex flex-col gap-y-4'>
                                <button className='active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all py-3 rounded-xl bg-blue-500 text-white text-lg font-bold'>Iniciar Sesion</button>
                                
                                <button className='active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all py-3 rounded-xl bg-blue-500 text-white text-lg font-bold'>
    <Link to="/register">
        Registrarse
    </Link>
</button>
                                
                            </div>
                        </div>
                </div>
            </div>


            <div className='hidden relative lg:flex h-full w-1/2 items-center justify-center lg:!border-blue-500'>
                    <div className='scale-105 animate-[pulse_5s_linear_infinite]'>
                    <img src="src/assets/logo.png" alt="eu" className='bg-white rounded-full'/>
                    </div>
            </div>
            <UpperRoad/>
        </div>
    );
}

export default LoginUser;