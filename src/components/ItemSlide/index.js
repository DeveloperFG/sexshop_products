import React, { useEffect, useState, useContext } from "react";
import { useParams } from 'react-router-dom'
import { CartContext } from '../../Context/cart';
import Load from "../Load";


import * as BiIcons from 'react-icons/bi';

import "./itemSlide.css"
import '../Descricao/descricao.css'

import heart from "../../components/Descricao/img/coracao.png";
import fire from "../../components/Descricao/img/chama.png";
import detail from "../../components/Descricao/img/ficha.png";


import skeleton from '../../img/skeleton.gif'



function ItemSlide() {

    const { imagemModal, loading, setLoading, closeSidebar } = useContext(CartContext);

    const [receberImagem, setReceberImagem] = useState([])

    const [ativar, setAtivar] = useState(true)

    const { id, titulo, categoria } = useParams()


    // const precoConvert = (parseFloat(preco))


    useEffect(() => {

        function loadStorage() {
            const storageUser = localStorage.getItem('imgDados');

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
        <div className="slideshow-container">

            {receberImagem.map((item) => (
                <div key={item.id}>
                    <main className="conteudo">
                        <article className="card">
                            <img className={titulo === 'Ingula' ? "slideImg1" : "slideImg"} src={ativar ? skeleton : item.img[0]}></img>
                        </article>

                        {item.img.length > 1 ? (
                            <article className="card" >
                                <img className={titulo === 'Ingula' ? "slideImg1" : "slideImg"} src={ativar ? skeleton : item.img[1]}></img>
                            </article>
                        ) : null}

                        {item.img.length > 2 ? (
                            <article className="card" >
                                <img className={titulo === 'Ingula' ? "slideImg1" : "slideImg"} src={ativar ? skeleton : item.img[2]}></img>
                            </article>
                        ) : null}

                        {item.img.length > 3 ? (
                            <article className="card" >
                                <img className={titulo === 'Ingula' ? "slideImg1" : "slideImg"} src={ativar ? skeleton : item.img[3]}></img>
                            </article>
                        ) : null}

                        {item.img.length > 4 ? (
                            <article className="card" >
                                <img className={titulo === 'Ingula' ? "slideImg1" : "slideImg"} src={ativar ? skeleton : item.img[4]}></img>
                            </article>
                        ) : null}

                        {item.img.length > 5 ? (
                            <article className="card" >
                                <img className={titulo === 'Ingula' ? "slideImg1" : "slideImg"} src={ativar ? skeleton : item.img[5]}></img>
                            </article>
                        ) : null}

                        {item.img.length > 6 ? (
                            <article className="card" >
                                <img className={titulo === 'Ingula' ? "slideImg1" : "slideImg"} src={ativar ? skeleton : item.img[6]}></img>
                            </article>
                        ) : null}

                        {item.img.length > 7 ? (
                            <article className="card" >
                                <img className={titulo === 'Ingula' ? "slideImg1" : "slideImg"} src={ativar ? skeleton : item[7]}></img>
                            </article>
                        ) : null}

                        {item.img.length > 8 ? (
                            <article className="card" >
                                <img className={titulo === 'Ingula' ? "slideImg1" : "slideImg"} src={ativar ? skeleton : item[8]}></img>
                            </article>
                        ) : null}


                    </main>
                </div>

            ))}


            <BiIcons.BiArrowBack className="esquerda" size={22} color="black" />
            <BiIcons.BiArrowBack className="direita" size={22} color="black" />

            {receberImagem.map((item) => {
                return (
                    <div>
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


        </div >
    )
}

export default ItemSlide;