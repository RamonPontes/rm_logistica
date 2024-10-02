'use client'

import { useState, useEffect } from 'react'
import './style.css'

export default function Search() {
    const [rcode, setrcode] = useState('')

    const handleClick = (e) => {
        if (rcode === '') {
            e.preventDefault() 
        }
    }

    return (
        <div className="search-container">
            <h1>Digite o codigo de rastreio: </h1>
            <input type="search"autoComplete="off" name="rcode" id="rcode" placeholder='Codigo' value={rcode} onChange={event => setrcode(event.target.value)} />
            <a onClick={handleClick} href={'/user/traking/' + rcode} style={{ backgroundColor: rcode == '' ? '#3d967d' : '#67ffd4' }}>Rastrear</a>
        </div>
    )
}