import React from 'react'
import {useState} from "react"

export default function Botao({estilo, noClick, titulo}) {
    
    return (
        <div>
            <button className = {estilo} onClick ={noClick}>
                {titulo}

            </button>
        </div>
    )
}
