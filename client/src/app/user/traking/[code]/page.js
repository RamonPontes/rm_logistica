'use client'

import { useEffect, useState } from 'react'
import './style.css'
import api from "@/app/services/api"

export default function Traking({ params }) {

    const [error, setError] = useState({})

    useEffect(() => {
        api
            .get(`/traking?trakingCode=${params.code}`, { trakingCode: '01' })
            .then((response) => console.log(response.data))
            .catch((err) => {
                setError({
                    status: 500,
                    message: 'Erro interno entre em contato com o suporte!'
                })
            })
    }, [])

    return (
        <div className="traking-container">
            {Object.keys(error).length > 0 && <h1>{error.status + ' - ' + error.message}</h1>}

            {Object.keys(error).length == 0 &&
                <div className='traking-itens'>
                    <div className="top">
                        <p>Data/Hora</p>
                        <p>Ponto de origem</p>
                        <p>Status</p>
                        <p>Ponto Destino</p>
                    </div>
                </div>
            }
        </div>
    )
}