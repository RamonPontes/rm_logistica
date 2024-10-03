'use client'

import { useEffect } from 'react'
import './style.css'
import api from "@/app/services/api"

export default function Traking({ params }) {
    useEffect(() => {
        api
            .get("/traking", { trakingCode: '01' })
            .then((response) => console.log(response.data))
            .catch((err) => {
            console.error(err)
            })
    }, [])

    return(
        <div className="traking-container">
            <div className='traking-itens'>
                <div className="top">
                    <p>Data/Hora</p>
                    <p>Ponto de origem</p>
                    <p>Status</p>
                    <p>Ponto Destino</p>
                </div>
            </div>
        </div>
    )
}