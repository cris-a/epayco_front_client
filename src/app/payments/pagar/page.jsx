'use client'
import React, { useState } from 'react'
import clienteAxios from '@/app/config/clienteAxios'
import Swal from 'sweetalert2'
import { useRouter } from 'next/navigation'

const page = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [amount, setAmount] = useState(0)

    const router = useRouter()

    const handleSubmit = async (e) => {
        e.preventDefault()

        if ([email, password].includes('')) {
            alert('Todos los campos son obligatorios')
            return
        }

        try {
            const { data } = await clienteAxios.post('payment', { email, password, amount: parseInt(amount) })
            localStorage.setItem('idSession', data.data.idSession)
            Swal.fire({
                position: "center",
                icon: "success",
                title: data.data.message,
                showConfirmButton: false,
                timer: 2500
            });
            setTimeout(() => {
                router.push('confirmar')
            }, 2500);

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
                            Pagar con tu Saldo
                        </h1>
                        <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6" action="#">

                            <div>
                                <label htmlFor="id" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                                <input value={email} onChange={e => setEmail(e.target.value)} type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="email@email.com" required="" />
                            </div>
                            <div>
                                <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                <input value={password} onChange={e => setPassword(e.target.value)} type="password" name="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="••••••••" required="" />
                            </div>
                            <div>
                                <label htmlFor="saldo" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Monto a pagar</label>
                                <input value={amount} onChange={e => setAmount(e.target.value)} type="number" name="amount" id="amount" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="" />
                            </div>

                            <button type="submit" className="w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Pagar</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default page