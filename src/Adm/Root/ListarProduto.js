import { useEffect, useState } from 'react'
import firebase from '../../firebase/firebaseConnection';
import Spinner from '../../../src/components/Spinner/index'

import { toast } from 'react-toastify';

import './ListarProduto.css'



const ListarProduto = () => {

    const [produtos, setProdutos] = useState([]);
    const [categoria, setCategoria] = useState();

    const [id, setId] = useState('');
    const [titulo, setTitulo] = useState('');
    const [quantidade, setQuantidade] = useState('');
    const [preco, setPreco] = useState('');

    const [buscar, setBuscar] = useState('');
    const [produtoFilter, setProdutoFilter] = useState([]);
    const [arrayFilter, setArrayFilter] = useState([])
    const [load, setLoad] = useState(false)



    // const produtosFiltrado = produtos.filter((produto) => produto.startsWith(buscar));

    useEffect(() => {

        async function loadProdutos() {
            await firebase.firestore().collection(`${categoria}`).onSnapshot((doc) => {
                let DataUser = [];

                doc.forEach((doc) => {
                    DataUser.push({
                        id: doc.id,
                        titulo: doc.data().titulo,
                        categoria: doc.data().categoria,

                    })

                })
                setArrayFilter(DataUser)

            })
                .catch(() => {
                    toast.error('Erro ao buscar no Banco!!!')
                })

        }

        loadProdutos()

    }, [categoria])


    function handleChangeSelect(e) {
        setCategoria(e.target.value);
    }


    async function listarBancoClientes() {

        setLoad(true)

        await firebase.firestore().collection(`${categoria}`)
            .get()
            .then((snapshot) => {
                let lista = []

                snapshot.forEach((doc) => {
                    lista.push({
                        id: doc.id,
                        titulo: doc.data().titulo,
                        categoria: doc.data().categoria,
                        type: doc.data().type,
                        quantidade: doc.data().quantidade,
                        descricao: doc.data().descricao,
                        completa: doc.data().completa,
                        indicacao: doc.data().indicacao,
                        ficha: doc.data().ficha,
                        preco: doc.data().preco,
                        img: doc.data().img,
                    })
                })

                setProdutos(lista)

                setLoad(false)

            })

            .then(() => {
                toast.info('Busca realizada, confira os items abaixo!')
            })

            .catch(() => {
                toast.error('Erro ao buscar no banco!')
            })
    }


    async function Excluir(idClicado) {

        await firebase.firestore().collection(`${categoria}`).doc(idClicado)
            .delete()
            .then(() => {
                toast.success('Excluido com sucesso!')

            })
            .catch((error) => {
                toast.error('Erro ao excluir!!!')
            })
    }


    async function buscarProduto() {

        await firebase.firestore().collection(`${categoria}`)
            .doc(id)
            .get()
            .then((snapshot) => {
                setTitulo(snapshot.data().titulo);
                setQuantidade(snapshot.data().quantidade);
                setPreco(snapshot.data().preco);
            })

    }

    async function atualizarProduto() {

        await firebase.firestore().collection(`${categoria}`)
            .doc(id)
            .update({
                titulo: titulo,
                quantidade: quantidade,
                preco: parseFloat(preco)

            })

            .then(() => {
                toast.success('Dados atualizados!!!')
                setId('')
                setTitulo('')
                setQuantidade('')
                setPreco('')

            })
            .catch((error) => {
                toast.error('Erro ao atualizar!!!')

            })
    }


    useEffect(() => {
        setProdutoFilter(
            Object.values(arrayFilter).filter((items) =>
                items.titulo.toLowerCase().includes(buscar.toLocaleLowerCase())
            ))

    }, [arrayFilter, buscar])


    return (
        <div className='containerLista'>
            {/* <div className='divFilterRadio'>
                <div className='divRadioAjuste'>
                    <small>Listar</small>
                    <input type='radio' name='opcao' value='listar' onChange={(e) => setCheck(e.target.value)} />
                </div>

                <div className='divRadioAjuste'>
                    <input type='radio' name='opcao' value='Filtrar' onChange={(e) => setCheck(e.target.value)} />
                    <small>Filtrar</small>
                </div>

            </div> */}

            <div className='divListar'>
                <section>
                    <h4>Selecione Categoria </h4>
                    <small>:</small>
                    <select className='select' value={categoria} onChange={handleChangeSelect} >
                        <option value="Selecionar">Selecionar</option>
                        <option value="Principal">Principal</option>
                        <option value="Acessorios">Acessorios</option>
                        <option value="Vibradores">Vibradores</option>
                        <option value="Energeticos">Energeticos</option>
                        <option value="Fantasias">Fantasias</option>
                        <option value="Lingeries">Lingeries</option>
                        <option value="Oleos">Oleos</option>
                        <option value="Higienizadores">Higienizadores</option>
                        <option value="Plugs">Plugs</option>
                        <option value="BDSM">BDSM</option>
                        <option value="Proteses">Proteses</option>
                        <option value="Lubrificantes">Lubrificantes</option>
                        <optgroup label='Gel'>
                            <option value="FuncionaisPremium">Premium </option>
                            <option value="Funcionais">Funcionais </option>
                            <option value="Comestiveis"> Comestiveis </option>
                            <option value="Geis"> Anais </option>
                        </optgroup>
                    </select>
                    <button className='btn' onClick={listarBancoClientes}> Listar  </button>
                </section>
            </div>

            <div className='divEdit'>

                <div className='editItems'>
                    <p>ID Produto:</p>
                    <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
                </div>


                <div className='editItems'>
                    <p>Nome do Produto:</p>
                    <input type="text" value={titulo} onChange={(e) => setTitulo(e.target.value)} />
                </div>

                <div className='editItems'>
                    <p>Quant:</p>
                    <input type="text" value={quantidade} onChange={(e) => setQuantidade(e.target.value)} />
                </div>

                <div className='editItems'>
                    <p>Preço:</p>
                    <input type="text" value={preco} onChange={(e) => setPreco(e.target.value)} />
                </div>

                <div className='editItems'>
                    <p>Buscar produto por nome:</p>
                    <input type='buscar' value={buscar} onChange={(e) => setBuscar(e.target.value)} />
                </div>

                <div className='handleItems'>
                    <button className='btn' onClick={buscarProduto}>1 - Buscar Item</button>
                    <button className='btn' onClick={atualizarProduto}>2 - Atualizar Item</button>
                </div>



            </div>

            <br />

            <div className='divDivisoria'>

                {load == true ? (
                    <Spinner />

                ) :

                    <ul className='listaBanned'>

                        <div className='divLiFilter'>

                            {buscar == '' ? (
                                <div className='divMsg'>
                                    <small>Nenhuma busca realizada</small>
                                </div>

                            ) :

                                produtoFilter.map((pro) => {
                                    return (
                                        <li key={pro.id}>
                                            <small>Id: {pro.id}</small><br></br>
                                            <small>Nome: {pro.titulo}</small>
                                        </li>
                                    )

                                })}

                        </div>


                        <hr />

                        <h4>Total de {produtos.length} Items </h4>

                        {produtos.map((item) => {
                            return (
                                <li className='divLi' key={item.id}>
                                    <span className='items'> <strong> Id: </strong>  {item.id} </span> <br />
                                    <span className='items'> <strong> Nome: </strong> {item.titulo} </span> <br />
                                    <span className='items'> <strong> Categoria: </strong> {item.categoria} </span> <br />
                                    <span className='items'> <strong> Quantidade: </strong> {item.quantidade} </span> <br />
                                    <span className='items'> <strong> Prévia: </strong> {item.descricao} </span> <br />
                                    <span className='items'> <strong> Descricao: </strong> {item.completa} </span> <br />
                                    <span className='items'> <strong> Modo de usar: </strong> {item.indicacao} </span> <br />
                                    <span className='items'> <strong> Ficha Técnica: </strong> {item.ficha} </span> <br />
                                    <span className='items'> <strong> Preco: </strong> {(item.preco).toFixed(2)} </span> <br />

                                    <button className='excluir' onClick={() => Excluir(item.id)}> Excluir produto </button>
                                    <hr />
                                </li>

                            )
                        })}
                    </ul>

                }


            </div>
        </div>
    )
}

export default ListarProduto