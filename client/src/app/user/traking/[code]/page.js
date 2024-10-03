'use client'

import { useEffect, useState } from 'react'
import './style.css'
import api from "@/app/services/api"

export default function Traking({ params }) {
    const [historicos, setHistoricos] = useState([])
    const [error, setError] = useState({})

    api
        .get(`/traking?trakingCode=${params.code}`, { trakingCode: '01' })
        .then((response) => {
            setHistoricos(
                response.data
            )
        })
        .catch((err) => {
            console.log(err.response.data)
            setError({
                status: err.status,
                message: err.response.data
            })
        })

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
                    {historicos.map((historico, index) => (
                        <div key={index} className="item">
                            <p>{historico.data}</p>
                            <p>{historico.origen}</p>
                            <p>{historico.status}</p>
                            <p>{historico.destino}</p>
                        </div>
                    ))}
                </div>
            }
        </div>
    )
}