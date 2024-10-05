'use client'

import { useEffect, useState } from 'react'
import './style.css'
import api from "@/app/services/api"
import { FilePlus, LucideSquarePen } from 'lucide-react'

export default function Traking({ params }) {

    const code = params.code

    const [historicos, setHistoricos] = useState()
    const [error, setError] = useState({})
    const [editorHidden, setEditorHidden] = useState(false)

    useEffect(() => {
        api
            .get(`/traking?trakingCode=${code}`, { trakingCode: '01' })
            .then((response) => {
                setHistoricos(response.data)
            })
            .catch((err) => {
                setError({
                    status: err.status !== undefined ? err.status : "Error",
                    message: err.response && err.response.data ? err.response.data : "Entre em contato com o suporte"
                })
            })
    }, [code])

    return (
        <div className="traking-container">
            {Object.keys(error).length > 0 && <h1>{error.status + ' - ' + error.message}</h1>}

            {historicos &&
                <div className="historico">
                    <div className='traking-itens'>
                        <div className="top">
                            <FilePlus onClick={() => {
                                setEditorHidden(true)
                            }} 
                                size={30} color='rgb(0, 255, 0)' style={{backgroundColor: '#1a1a22', padding: '5px', borderRadius: '5px'}} />
                           
                            <p style={{ gridColumn: "2 / 3" }}>Data/Hora</p>
                            <p>Ponto de origem</p>
                            <p>Status</p>
                            <p>Ponto Destino</p>
                        </div>
                        {historicos.map((historico, index) => (
                            <div key={index} className="item">
                                <LucideSquarePen style={{padding: '4px'}} size={20} color='white'/>
                                <p>{historico.data}</p>
                                <p>{historico.origen}</p>
                                <p>{historico.status}</p>
                                <p>{historico.destino}</p>
                            </div>
                        ))}
                    </div>
                </div>
            }
            
            {editorHidden && 
                <div className="editor_container">
                    <input type="text" autoComplete="off" placeholder='Codigo' value={code} disabled />
                    <input type="datetime-local" name="" id="" />
                    <input type="text" placeholder="Origem" />
                    <input type="text" placeholder="Status" />
                    <input type="text" placeholder="Destino" />
                </div>
            }
        </div>
    )
}
