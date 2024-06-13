import firebase from '../../src/firebase/firebaseConnection'

import { useState, createContext } from "react";
export const CartContext = createContext({});




function CartProvider({ children }) {

    const [count, setCount] = useState(0);
    const [myCart, setMyCart] = useState([]);
    let [total, setTotal] = useState(0);

    const [imagemModal, setImagemModal] = useState('')
    const [sidebar, setSidebar] = useState(false);
    const [loading, setLoading] = useState(true);

    const [nomeCliente, setNomeCliente] = useState('');
    const [senhaAdm, setSenhaAdm] = useState();

    const [receberImagem, setReceberImagem] = useState([]);

    const [itemProduto, setItemProduto] = useState([]);

    const [category, setCategory] = useState('Selecione');

    const [arrayProduto, setArrayProduto] = useState([]);

    const [admLoading, setAdmLoading] = useState(true)

    let [nomeStorage, setNomeStorage] = useState('');


    const [select, setSelect] = useState([]);




    // funcão para abri menu side bar
    const showSidebar = () => {
        setSidebar(!sidebar);

    }
    // funcão para fechar side bar tocando na tela
    const closeSidebar = () => {
        if (sidebar === true) {
            setSidebar(!sidebar);

        } else if (sidebar === false) {
            console.log('nda')
        }

    }

    // funcão para criar lista para whats app
    function handleItem(produto) {

        let dataItem = {
            id: produto.id,
            nome: produto.titulo,
            preco: produto.preco
        }

        setItemProduto([...itemProduto, dataItem])

    }


    // Aumentar quantidade em estoque

    async function aumEstoque(produto) {
        await firebase.firestore().collection('Principal')
            .doc(produto.id)
            .update({
                quantidade: produto.quantidade + 1,
            })

            .then(() => {
                console.log('Dados salvos!')
            })
            .catch((error) => {
                console.log(error + 'Erro ao salvar!')
            })
    }



    // Diminuir quantidade em estoque

    async function redEstoque(produto) {
        await firebase.firestore().collection('Principal')
            .doc(produto.id)
            .update({
                quantidade: produto.quantidade - 1,
            })

            .then(() => {
                console.log('Dados salvos!')
            })
            .catch((error) => {
                console.log(error + 'Erro ao salvar!')
            })
    }



    return (
        <CartContext.Provider value={{ count, setCount, myCart, setMyCart, total, setTotal, sidebar, setSidebar, showSidebar, closeSidebar, imagemModal, setImagemModal, loading, setLoading, handleItem, itemProduto, setItemProduto, receberImagem, setReceberImagem, nomeCliente, setNomeCliente, category, setCategory, arrayProduto, setArrayProduto, admLoading, setAdmLoading, senhaAdm, setSenhaAdm, nomeStorage, setNomeStorage, select, setSelect }}>
            {children}
        </CartContext.Provider>
    )
}


export default CartProvider;