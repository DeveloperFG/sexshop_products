import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { CartContext } from "../../Context/cart";
import { ItemCart, CartVazio } from "./styles";
import { MdShoppingCart, MdKeyboardArrowLeft } from "react-icons/md"
import { toast } from 'react-toastify';



export default function ListaCarrinho() {

    let { count, setCount } = useContext(CartContext);
    let { myCart, setMyCart } = useContext(CartContext);
    let { total, setTotal } = useContext(CartContext);

    let { handleItem, aumEstoque, redEstoque } = useContext(CartContext);


    let { itemProduto, setItemProduto } = useContext(CartContext);

    var data2 = itemProduto


    function add(produto) {
        produto.qtd++
        produto.totalItem = produto.qtd * produto.preco;
        setMyCart(myCart);
        calcTotal();
        calcCount();
        handleItem(produto)


    }


    function removeQtd(produto) {

        if (produto.qtd == 1) {
            produto.qtd--;
            remove(produto)
            removerFull(produto);

        }


        if (produto.qtd > 1) {
            produto.qtd--;
            produto.totalItem = produto.qtd * produto.preco;


        }

        removeItem(produto)
        setMyCart(myCart);
        calcTotal();
        calcCount();


    }

    function removeItem({ titulo, preco }) {

        let index = data2.findIndex(item => item.nome === titulo && item.preco === preco)


        if (index > -1) {
            data2.splice(index, 1)
        }

        setItemProduto(data2)


    }

    function removerFull(produto) {
        let removeItems = data2.filter((item) => {
            return (item.id !== produto.id)

        })

        setItemProduto(removeItems)

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

    function remove(produto) {
        let newlist = myCart.filter((p) => {
            return (p.id !== produto.id)
        })

        myCart = newlist

        setMyCart(myCart)
        calcTotal();
        calcCount();
        removerFull(produto);
        toast.info("Item removido com sucesso")


    }


    return (
        <div>
            {myCart.length === 0 && <CartVazio>
                <h1 className="carrinhoVazio"> Carrinho vazio </h1>
                <Link to="/"> <MdKeyboardArrowLeft /> Voltar</Link>
            </CartVazio>
            }


            {myCart.map((item) => {
                return (
                    <ItemCart key={item.id}>
                        {item.type === 'array' ? <img src={item.img[0]} alt={item.titulo} /> : <img src={item.img} alt={item.titulo} />}


                        <div className="txtCart">
                            <h3>{item.titulo}</h3>
                            <p>R$ {item.preco.toFixed(2)}</p>
                            <span>{item.descricao}</span>
                        </div>

                        <div className="qtdItem">
                            <button onClick={() => removeQtd(item)}>-</button>
                            <p>{item.qtd}</p>
                            <button onClick={() => add(item)}>+</button>
                        </div>

                        <button className="removebtn" onClick={() => remove(item)}>Remover</button>

                    </ItemCart>
                )
            })}


        </div>
    )
}