import React, { useContext, useEffect } from "react";
import { CartContext } from '../../Context/cart';
import { Link, useHistory } from "react-router-dom";
import './Root.css'

import Senha from "../../components/BlockLoading/Senha";

import add from '../img/add.png'
import lista from '../img/lista.png'
import clientes from '../img/clientes.png'


const Root = () => {


    const history = useHistory();

    let { admLoading, setAdmLoading, nomeCliente, setNomeCliente, senhaAdm, setSenhaAdm, nomeStorage, setNomeStorage } = useContext(CartContext);

    const nomeClient = 'Administrador'

    useEffect(() => {

        function loadStorage() {
            const storageUser = localStorage.getItem('userName');

            if (storageUser) {
                setNomeCliente(JSON.parse(storageUser))

            }
        }

        loadStorage()

    }, [])



    if (nomeClient == 'Administrador') {

        return (
            <div className="containerRoot">
                {admLoading ? (
                    <Senha />
                ) : ''}
                <h4> ADMINISTRADOR </h4>
                <div className="rootLinks">
                    <div className="rootOpcao">
                        <img src={add} />
                        <Link className="links" to='/Cadastrar'> Cadadastrar Produtos</Link>
                    </div>
                    <div className="rootOpcao">
                        <img src={lista} />
                        <Link className="links" to='ListarProduto'> Editar Produtos </Link>
                    </div>
                    <div className="rootOpcao">
                        <img src={clientes} />
                        <Link className="links" to='Clientes'> Clientes Cadastrados </Link>
                    </div>
                </div>

            </div>
        )
    }

    history.replace('/')
    return;


}

export default Root



