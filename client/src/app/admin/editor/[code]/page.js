'use client'

import { useEffect, useState } from 'react'
import './style.css'
import api from "@/app/services/api"
import { LucidePlus, LucideSquarePen } from 'lucide-react'

export default function Traking({ params }) {
    const [historicos, setHistoricos] = useState()
    const [error, setError] = useState({})
    const [button_color, setButton_color] = useState('white')

    useEffect(() => {
        api
            .get(`/traking?trakingCode=${params.code}`, { trakingCode: '01' })
            .then((response) => {
                setHistoricos(response.data)
            })
            .catch((err) => {
                setError({
                    status: err.status !== undefined ? err.status : "Error",
                    message: err.response && err.response.data ? err.response.data : "Entre em contato com o suporte"
                })
            })
    }, [params.code])

    return (
        <div className="traking-container">
            {Object.keys(error).length > 0 && <h1>{error.status + ' - ' + error.message}</h1>}

            {historicos &&
                <div className="historico">
                    <div className='traking-itens'>
                        <div className="top">
                            <LucidePlus size={20} color='rgb(0, 255, 0)' style={{backgroundColor: '#1a1a22', padding: '4px', borderRadius: '5px'}} />
                            <p style={{ gridColumn: "2 / 3" }}>Data/Hora</p>
                            <p>Ponto de origem</p>
                            <p>Status</p>
                            <p>Ponto Destino</p>
                        </div>
                        {historicos.map((historico, index) => (
                            <div key={index} className="item">
                                <LucideSquarePen style={{padding: '4px'}} size={20} color={button_color} />
                                <p>{historico.data}</p>
                                <p>{historico.origen}</p>
                                <p>{historico.status}</p>
                                <p>{historico.destino}</p>
                            </div>
                        ))}
                    </div>
                </div>
            }
        </div>
    )
}
