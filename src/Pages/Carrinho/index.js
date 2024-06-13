import React, { useState, useContext, useEffect } from "react";
import { CartContext } from "../../Context/cart";
import ListaCarrinho from "../../components/ListaCarrinho";
import Total from "../../components/Total";

import Load from "../../components/Load";

import { SectionCart } from "./styles";

function Carrinho() {

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
        <SectionCart onClick={closeSidebar}>
            <div className="containerCar">
                <div className="containerList">
                    <div className="listCart">
                        <ListaCarrinho />
                    </div>

                    <div className="total">
                        <Total />
                    </div>
                </div>
            </div>
        </SectionCart>
    )
}

export default Carrinho;