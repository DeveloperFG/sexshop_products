import React, { useState, useContext, useEffect } from "react";
import { CartContext } from "../../Context/cart";

import Load from "../../components/Load";
import './erro.css'
import alertErro from '../../Pages/Erro/img/erro.png'
import { Link } from "react-router-dom";




function Erro() {

    let { closeSidebar, loading, setLoading } = useContext(CartContext);


    useEffect(() => {

        async function loadPagina() {

            setLoading(false)

        }

        setInterval(loadPagina, 1000)

    }, [])

    if (loading) {
        return (
            <Load />
        )

    }

    return (
        <div className="containerError" onClick={closeSidebar}>
            <img className="imgErro" src={alertErro} />
            <Link className="btnErro" to='/'>PAGINAL INICIAL</Link>
        </div>
    )
}

export default Erro;