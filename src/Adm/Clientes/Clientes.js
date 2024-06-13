import { useContext, useState, useEffect } from 'react';
import firebase from '../../firebase/firebaseConnection'
import { CartContext } from '../../Context/cart';
import Spinner from '../../../src/components/Spinner/index'
import { toast } from 'react-toastify';
import './clientes.css'
import Load from '../../components/Load';


function Clientes() {


    const { closeSidebar } = useContext(CartContext);

    let { loading, setLoading } = useContext(CartContext);

    const [load, setLoad] = useState(false)

    const [produtos, setProdutos] = useState([]);

    const [produtoFilter, setProdutoFilter] = useState([]);

    const [arrayFilter, setArrayFilter] = useState([])

    const [buscar, setBuscar] = useState('');



    useEffect(() => {

        async function loadProdutos() {
            await firebase.firestore().collection('clientes').onSnapshot((doc) => {
                let DataUser = [];

                doc.forEach((doc) => {
                    DataUser.push({
                        nome: doc.data().nome,
                        email: doc.data().email,

                    })

                })
                setArrayFilter(DataUser)

            })
                .catch(() => {
                    toast.error('Erro ao buscar no Banco!!!')
                })

        }

        loadProdutos()

    }, [produtos])


    useEffect(() => {

        async function loadProdutos() {
            setLoad(true)
            await firebase.firestore().collection('clientes').onSnapshot((doc) => {
                let DataUser = [];

                doc.forEach((doc) => {
                    DataUser.push({
                        nome: doc.data().nome,
                        email: doc.data().email,

                    })

                })
                setProdutos(DataUser)
                setLoad(false)
            })
                .catch(() => {
                    console.log('Erro ao buscar no Banco!!!')
                    console.log('DEU ALGUM ERRO ')
                })

        }

        loadProdutos()

    }, [])



    useEffect(() => {
        async function loadPagina() {
            setLoading(false)
        }

        setInterval(loadPagina, 1500)



    }, [])


    useEffect(() => {
        setProdutoFilter(
            Object.values(arrayFilter).filter((items) =>
                items.nome.toLowerCase().includes(buscar.toLocaleLowerCase())
            ))

    }, [arrayFilter, buscar])





    if (loading) {
        return (
            <Load />
        )

    }


    return (

        <div className='containerClientes' onClick={closeSidebar}>
            <div className='divBuscar'>
                <h4>Buscar Cliente</h4>
                <input type='buscar' value={buscar} onChange={(e) => setBuscar(e.target.value)} />
            </div>

            <div className='divResult'>
                {buscar == '' ? (
                    <p>Nenhum filtro realizado</p>
                ) :

                    produtoFilter.map((pro) => {
                        return (
                            <li key={pro.id}>
                                <small>Nome: {pro.nome}</small><br></br>
                                <small>Email: {pro.email}</small>
                            </li>
                        )

                    })}

            </div>

            {load == true ? (
                <Spinner />

            ) :
                produtos.map((item) => {
                    return (
                        <ul>
                            <li key={item.id}>
                                <span> <strong> Nome: </strong> {item.nome} </span> <br />
                                <span> <strong> Email: </strong> {item.email} </span> <br />
                                <hr />
                                <br />
                            </li>
                        </ul>
                    )
                })}
        </div>
    )
}

export default Clientes;