import React, { useState, useContext } from "react";
import { CartContext } from '../../Context/cart';
import './Loading.css';

function Senha() {

    let { admLoading, setAdmLoading, senhaAdm, setSenhaAdm } = useContext(CartContext);

    function ADM() {

        setAdmLoading(false)

        if (senhaAdm == 15112022) {
            return;
        } else {
            window.location.href = "/";
        }


    }


    return (
        <div className='load-overlay centralize' data-testid="load">
            <div>
                <small>Confirme sua senha de Acesso </small>
                <input value={senhaAdm} onChange={(e) => setSenhaAdm(e.target.value)} type="password" placeholder='Digite sua senha ' />
                <button onClick={ADM}>Confirmar senha</button>
            </div>
        </div>
    )
}

export default Senha;