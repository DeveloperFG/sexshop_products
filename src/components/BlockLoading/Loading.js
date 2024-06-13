import React, { useState, useContext } from "react";
import { CartContext } from '../../Context/cart';
import './Loading.css';

function Loading() {

    let { nomeCliente, setNomeCliente } = useContext(CartContext);

    let { admLoading, setAdmLoading } = useContext(CartContext);

    function ADM() {
        localStorage.setItem('userName', JSON.stringify(nomeCliente))

        setAdmLoading(false)

        if (nomeCliente === 'Administrador') {

            window.location.href = "./Root";

        } else {
            return
        }


    }

    return (
        <div className='load-overlay centralize' data-testid="load">
            <div>
                <small>Bem vindo a Iperium</small>
                <input value={nomeCliente} onChange={(e) => setNomeCliente(e.target.value)} type="text" placeholder='Digite seu nome ' />
                <button onClick={ADM}>Entrar</button>
            </div>
        </div>
    )
}

export default Loading;