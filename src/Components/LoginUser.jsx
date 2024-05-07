import React from 'react';

function LoginUser() {
    return (
        <div className='flex w-full h-screen'>
            <div className='w-full flex items-center justify-center lg:w-1/2'>
                <div className='bg-white px-10 py-20 rounded-3xl border-2 border-gray-100'>
                        <h1 className='text-5xl font-semibold'>Iniciar sesión</h1>
                        <p className='font-medium text-lg text-gray-500 mt-4'>Portal Cliente</p>

                        <div className='mt-8'>
                            <div>
                                <label className='text-lg font-medium'>Email</label>
                                <input 
                                className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent' 
                                placeholder='Ingresa tu Email' />
                            </div>

                            <div>
                                <label className='text-lg font-medium'>Password</label>
                                <input 
                                className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent' 
                                placeholder='Ingresa tu Contraseña'
                                type='password' />

                            </div>

                            <div className='mt-8 flex justify-between items-center'>
                                <div>
                                    <input type="checkbox"
                                    id='remember' />
                                    <label className="ml-2 font-medium text-base" for="remember"> Recordar por 30 dias</label>
                                </div>
                                <button className='font-medium text-base text-violet-500'>Olvidaste tú contraseña?</button>
                            </div>
                            <div className='mt-8 flex flex-col gap-y-4'>
                                <button className='active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all py-3 rounded-xl bg-violet-500 text-white text-lg font-bold'>Iniciar Sesion</button>
                                <button className=''>
                               
                                    
                                    Iniciar Sesion con Google</button>
                            </div>
                        </div>
                </div>
            </div>


            <div className='hidden relative lg:flex h-full w-1/2 items-center justify-center bg-gray-200'>

                <div className='w-60 h-60 bg-gradient-to-tr from-violet-500 to-pink-500 rounded-full animate-spin'/>
 
                <div className='w-full h-1/2 absolute bottom-0 bg-white/10 backdrop-blur-lg'/> 

            </div>
        </div>
    );
}

export default LoginUser;