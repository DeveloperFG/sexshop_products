
import React from "react";
import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css';
import "./modal.css";


import img2 from './img/02.jpeg'
import img3 from './img/03.jpeg'
import img4 from './img/04.png'

const proprietes = {
    duration: 10000,
    infinite: true,
    indicators: true,
    arrows: true
}

const Modal = () => {

    const Produtos = [
        {
            url: {},
            titulo: 'Vibrador Golfinho'

        },
        {
            url: { img3 },
            titulo: 'Plug Anal'
        },
        {
            url: { img4 },
            titulo: 'Chana loka'
        },
    ];

    return (
        <Slide {...proprietes}>
            <div className="each-slide-effect">
                <div className="divModal">
                    <img className="imgModal" src={img2}></img>
                    <span className="produtosTittle">  </span>

                </div>
            </div>
            <div className="each-slide-effect">
                <div className="divModal">
                    <img className="imgModal" src={img3}></img>
                    <span> {Produtos.titulo} </span>

                </div>
            </div>
            <div className="each-slide-effect">
                <div className="divModal">
                    <img className="imgModal" src={img4}></img>
                    <span> {Produtos.titulo} </span>
                </div>
            </div>
        </Slide>
    );
};

export default Modal;