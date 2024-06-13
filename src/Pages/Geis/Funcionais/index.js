import { useContext, useState, useEffect } from 'react';
import firebase from '../../../firebase/firebaseConnection'
import { CartContext } from '../../../Context/cart';
import { Card, DivCards, NavFilter } from '../../../components/Cards/styles';
import { toast } from 'react-toastify';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';


import skeleton from '../../../img/skeleton.gif'


import Load from '../../../components/Load';


function Funcionais() {

    let { count, setCount } = useContext(CartContext);
    let { myCart, setMyCart } = useContext(CartContext);
    let { total, setTotal } = useContext(CartContext);
    const [busca, setBusca] = useState('');
    const [ordem, setOrdem] = useState('');
    let [lista] = useState([]);


    const { sidebar, closeSidebar } = useContext(CartContext);
    let { imagemModal, setImagemModal } = useContext(CartContext);

    let { loading, setLoading } = useContext(CartContext);

    let { handleItem } = useContext(CartContext);

    const [ativar, setAtivar] = useState(true)

    let { arrayProduto, setArrayProduto } = useContext(CartContext);


    useEffect(() => {

        async function loadProdutos() {
            await firebase.firestore().collection('Funcionais').onSnapshot((doc) => {
                let DataUser = [];

                doc.forEach((doc) => {
                    DataUser.push({
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
                setArrayProduto(DataUser)

            })
                .catch(() => {
                    console.log('Erro ao buscar no Banco!!!')
                    console.log('DEU ALGUM ERRO ')
                })

        }

        loadProdutos()

    }, [])


    useEffect(() => {
        setTimeout(AtivarModal, 1500)
    }, [])


    function AtivarModal() {
        setAtivar(false)
    }




    // filtro e busca

    if (busca === '') {
        if (ordem === '1' || ordem === '') {
            lista = arrayProduto.sort((a, b) => a.id - b.id);

        } else if (ordem === '2') {
            lista = arrayProduto.sort((a, b) => b.preco - a.preco);


        } else if (ordem === '3') {
            lista = arrayProduto.sort((a, b) => a.preco - b.preco);

        }
    } else {
        const lowerBusca = busca.toLowerCase();
        lista = arrayProduto.filter((p) => p.name.toLowerCase().includes(lowerBusca));

    }
    function salvarLocal(selecionado) {
        let selectt = arrayProduto.filter((item) => {
            return (item.titulo === selecionado.titulo)

        })

        localStorage.setItem('imgDados', JSON.stringify(selectt))


    }

    function addCart(produto) {
        pushCart(produto);
        handleItem(produto)
        calcTotal();
        calcCount();
        toast.success("Item adicionado com sucesso");
    }

    function pushCart(produto) {
        const inCart = myCart.find((p) => (p.id === produto.id))
        if (!inCart) {
            produto.qtd = 1
            myCart.push(produto)

        } else {
            produto.qtd++
        }

        produto.totalItem = produto.qtd * produto.preco;

        setMyCart(myCart)

    }

    function calcTotal() {
        total = myCart.reduce((acumulador, item) => {
            return acumulador += item.totalItem
        }, 0)

        setTotal(total)
    }


    function calcCount() {
        count = myCart.reduce((acc, item) => {
            return acc += item.qtd
        }, 0);

        setCount(count);
    }



    useEffect(() => {
        async function loadPagina() {
            setLoading(false)
        }

        setInterval(loadPagina, 1500)



    }, [])




    if (loading) {
        return (
            <Load />
        )

    }


    return (
        <DivCards onClick={closeSidebar} style={{ justifyContent: lista.length < 3 ? 'space-around' : 'space-between' }}>
            {lista.map((item) => {
                return (
                    <Card key={item.id}>
                        {item.type == 'array' ? <Link to={`/ItemSlide/${item.id}/${item.titulo}/${item.categoria}`} onClick={() => salvarLocal(item)}> <img className='imgItems' src={ativar ? skeleton : item.img[0]} alt={item.titulo} /> </Link> :
                            <Link to={`/Descricao/${item.id}/${item.titulo}/${item.categoria}`} onClick={() => salvarLocal(item)}> <img className='imgItems' src={ativar ? skeleton : item.img} alt={item.titulo} /> </Link>}
                        <div className="txtCard">
                            <p>{item.titulo}</p>
                            <span>{item.descricao}</span>
                            <span>{item.categoria}</span>
                            <p> por: <h3>R$ {item.preco.toFixed(2)} </h3> </p>
                        </div>
                        <div className='addCar'>
                            <button className='btnAdd' style={{ opacity: item.quantidade == 0 ? '0.5' : '1' }} disabled={item.quantidade == 0 ? true : false} onClick={() => addCart(item)}> <AiIcons.AiOutlineShoppingCart className='carIcon' /> {item.quantidade == 0 ? ' Indisponível' : 'Adicionar'}</button>
                        </div>

                    </Card>
                )
            })}
        </DivCards>
    )
}

export default Funcionais;