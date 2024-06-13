import React, { useEffect, useState, useContext } from "react";
import { useParams } from 'react-router-dom'
import { CartContext } from '../../Context/cart';

import Load from "../Load";

import heart from "../../components/Descricao/img/coracao.png";
import detail from "../../components/Descricao/img/ficha.png";
import fire from "../../components/Descricao/img/chama.png";

import skeleton from '../../img/skeleton.gif'

import './descricao.css'



function Descricao() {


    let espaco = document.querySelector('.containerDescricao')

    let { imagemModal, loading, setLoading, closeSidebar } = useContext(CartContext);

    const [receberImagem, setReceberImagem] = useState([])

    const [ativar, setAtivar] = useState(true)

    const { id, titulo, categoria } = useParams()


    // const precoConvert = (parseFloat(preco))



    useEffect(() => {
        function loadStorage() {

            let storageUser = localStorage.getItem('imgDados');

            if (storageUser) {

                setReceberImagem(JSON.parse(storageUser))

            }

        }

        loadStorage()

    }, [])


    useEffect(() => {
        setTimeout(AtivarModal, 1500)
    }, [])


    function AtivarModal() {
        setAtivar(false)
    }



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

        <div className="containerDescricao" onClick={closeSidebar}>

            {receberImagem.map((item) => {
                return (
                    <div key={item.id}>

                        <img className={categoria == 'Funcionais' ? "desImag" : "desImag1"} src={ativar ? skeleton : item.img} />

                        <h2 className="descTitulo"> {item.titulo} </h2>
                        <hr className="divisor"></hr>
                        <h3 className="descH3"> <span className="descSpan"> R$ </span> {(item.preco).toFixed(2)}</h3>
                        <hr className="divisor"></hr>
                        <div className='divDetalhes'>
                            <img className='heart' src={heart} />
                            <h3 className='detalhesFinal'> CONHEÇA O PRODUTO </h3>
                        </div>
                        <p className="desDesc"> {item.completa} </p>
                        <hr className="divisor"></hr>
                        <div className='divDetalhes'>
                            <img className='heart' src={fire} />
                            <h3 className='detalhesFinal'> INDICAÇÃO DE USO </h3>
                        </div>
                        <p className="desDesc"> {item.indicacao} </p>
                        <hr className="divisor"></hr>
                        <div className='divDetalhes'>
                            <img className='heart' src={detail} />
                            <h3 className='detalhesFinal'> Ficha Técnica </h3>
                        </div>
                        <p className="desDesc"> {item.ficha} </p>

                    </div>

                )
            })}

        </div>
    )
}

export default Descricao;