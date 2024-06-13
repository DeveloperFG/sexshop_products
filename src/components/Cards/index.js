import { useContext, useState } from 'react';
import { LubrificanteItems } from '../../Pages/Principal/items';
import { CartContext } from '../../Context/cart';
import { Card, DivCards, NavFilter } from './styles';
import { toast } from 'react-toastify';

import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';

export default function Cards() {
    let { count, setCount } = useContext(CartContext);
    let { myCart, setMyCart } = useContext(CartContext);
    let { total, setTotal } = useContext(CartContext);
    const [busca, setBusca] = useState('');
    const [ordem, setOrdem] = useState('');
    let [lista] = useState([]);

    let { handleItem } = useContext(CartContext);

    const { sidebar, closeSidebar } = useContext(CartContext);
    let { imagemModal, setImagemModal } = useContext(CartContext);

    // filtro e busca

    if (busca === '') {
        if (ordem === '1' || ordem === '') {
            lista = LubrificanteItems.sort((a, b) => a.id - b.id);

            console.log(lista)
        } else if (ordem === '2') {
            console.log("Maior");
            lista = LubrificanteItems.sort((a, b) => b.preco - a.preco);

            console.log(lista)


        } else if (ordem === '3') {
            lista = LubrificanteItems.sort((a, b) => a.preco - b.preco);

            console.log(lista)

        }
    } else {
        const lowerBusca = busca.toLowerCase();
        lista = LubrificanteItems.filter((p) => p.name.toLowerCase().includes(lowerBusca));

    }


    function salvarLocal(urlImagem) {
        console.log(urlImagem)
        setImagemModal(urlImagem)
        localStorage.setItem('imgDados', JSON.stringify(urlImagem))

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


    return (
        <DivCards onClick={closeSidebar} style={{ justifyContent: lista.length < 3 ? 'space-around' : 'space-between' }}>
            {lista.map((item) => {
                return (
                    <Card key={item.id}>
                        <Link to={`/Descricao/${item.id}/${item.titulo}/${item.preco}/${item.completa}`} onClick={() => salvarLocal(item.img)}> <img className='imgItems' src={item.img} alt={item.titulo} /> </Link>
                        <div className="txtCard">
                            <p>{item.titulo}</p>
                            <span>{item.descricao}</span>
                            <p> por: <h3>R$ {item.preco.toFixed(2)} </h3> </p>
                        </div>
                        <div className='addCar'>
                            <button onClick={() => addCart(item)}> <AiIcons.AiOutlineShoppingCart className='carIcon' /> Adicionar</button>
                        </div>

                    </Card>
                )
            })}
        </DivCards>
    )
}