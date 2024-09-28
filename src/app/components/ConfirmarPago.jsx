'use client'
import React, { useState, useEffect } from 'react'
import clienteAxios from '../config/clienteAxios'
import Swal from 'sweetalert2'
import { useRouter } from 'next/navigation'

const ConfirmarPago = () => {
    const [token, setToken] = useState('')
    const [idSession, setIdSession] = useState('')

    const router = useRouter()

    useEffect(() => {
        const getIdSession = () => {
            const tokenTWT = localStorage.getItem('idSession')
            setIdSession(tokenTWT)
        }
        getIdSession()
    }, [])


    const handleSubmit = async (e) => {
        e.preventDefault()

        if ([token].includes('')) {
            alert('Debes ingresaer el código que te enviamos a tu correo.')
            return
        }

        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${idSession}`,
                },
            };
            const { data } = await clienteAxios.post('payment/confirm-payment', { token }, config)
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: data.message,
                showConfirmButton: false,
                timer: 1500
            });
            setTimeout(() => {
                router.push('/')
            }, 1500);

        } catch (error) {
            if (error.response) {
                alert(error.response.data.message)
            }
            console.log(error);
        }
    }
    return (
        <section className="bg-gray-50 dark:bg-gray-900 mb-4">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <a href="/" className="flex items-center mb-6 text-3xl font-semibold text-gray-900 dark:text-white">
                    ePayco
                </a>
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Confirmar Pago
                        </h1>
                        <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6" action="#">
                            <h1>Ingresa el codigo que te hemos envíado a tu correo.</h1>
                            <div>
                                <label htmlFor="token" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Codigo</label>
                                <input value={token} onChange={e => setToken(e.target.value)} type="text" name="token" id="token" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="234xxx88" required="" />
                            </div>
                            <button type="submit" className="w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Confirmar tu pago</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ConfirmarPago