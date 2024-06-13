
import { useContext } from "react";
import { CartContext } from "../../Context/cart";
import { DivTotal } from "./styles";



export default function Total() {

    const { total } = useContext(CartContext);

    // let totalFinal = total + 5

    let totalFinal = total

    let { itemProduto, setItemProduto, redEstoque } = useContext(CartContext);

    let { myCart, setMyCart } = useContext(CartContext);

    let { nomeCliente, setNomeCliente } = useContext(CartContext);

    // const dataItem = itemProduto;


    function Pagar() {

        if (myCart.length == 0) {
            alert(`SEU CARRINHO ESTAR VAZIO EFETUE ALGUMA COMPRA.`)
            return
        } else if (myCart.length > 0) {

            window.open(`//api.whatsapp.com/send?phone=+5588992901576&text=%F0%9F%98%80%20%7C%20Ol%C3%A1%20Fulano%2C%20Me%20chamo%20${nomeCliente}%0A%0A%F0%9F%93%92%20%7C%20Segue%20lista%20de%20produtos%20que%20desejo%20comprar%0A%0A%F0%9F%9A%80%20%7C%20Produtos%3A%20%0A%0A${myCart.length > 0 ? '• ' + myCart[0].titulo + '%3A' + '%20' + '|' + 'Quant:' + '%20' + myCart[0].qtd + '%20' + 'Und' + '%20' + 'X' + '%20' + 'R$' + myCart[0].preco + ',00' + '%0A' : ''}${myCart.length > 1 ? '• ' + myCart[1].titulo + '%3A' + '%20' + '|' + 'Quant:' + '%20' + myCart[1].qtd + '%20' + 'Und' + '%20' + 'X' + '%20' + 'R$' + myCart[1].preco + ',00' + '%0A' : ''}${myCart.length > 2 ? '• ' + myCart[2].titulo + '%3A' + '%20' + '|' + 'Quant:' + '%20' + myCart[2].qtd + '%20' + 'Und' + '%20' + 'X' + '%20' + 'R$' + myCart[2].preco + ',00' + '%0A' : ''}${myCart.length > 3 ? '• ' + myCart[3].titulo + '%3A' + '%20' + '|' + 'Quant:' + '%20' + myCart[3].qtd + '%20' + 'Und' + '%20' + 'X' + '%20' + 'R$' + myCart[3].preco + ',00' + '%0A' : ''}${myCart.length > 4 ? '• ' + myCart[4].titulo + '%3A' + '%20' + '|' + 'Quant:' + '%20' + myCart[4].qtd + '%20' + 'Und' + '%20' + 'X' + '%20' + 'R$' + myCart[4].preco + ',00' + '%0A' : ''}${myCart.length > 5 ? '• ' + myCart[5].titulo + '%3A' + '%20' + '|' + 'Quant:' + '%20' + myCart[5].qtd + '%20' + 'Und' + '%20' + 'X' + '%20' + 'R$' + myCart[5].preco + ',00' + '%0A' : ''}${myCart.length > 6 ? '• ' + myCart[6].titulo + '%3A' + '%20' + '|' + 'Quant:' + '%20' + myCart[6].qtd + '%20' + 'Und' + '%20' + 'X' + '%20' + 'R$' + myCart[6].preco + ',00' + '%0A' : ''}${myCart.length > 7 ? '• ' + myCart[7].titulo + '%3A' + '%20' + '|' + 'Quant:' + '%20' + myCart[7].qtd + '%20' + 'Und' + '%20' + 'X' + '%20' + 'R$' + myCart[7].preco + ',00' + '%0A' : ''}${myCart.length > 8 ? '• ' + myCart[8].titulo + '%3A' + '%20' + '|' + 'Quant:' + '%20' + myCart[8].qtd + '%20' + 'Und' + '%20' + 'X' + '%20' + 'R$' + myCart[8].preco + ',00' + '%0A' : ''}${myCart.length > 9 ? '• ' + myCart[9].titulo + '%3A' + '%20' + '|' + 'Quant:' + '%20' + myCart[9].qtd + '%20' + 'Und' + '%20' + 'X' + '%20' + 'R$' + myCart[9].preco + ',00' + '%0A' : ''}${myCart.length > 10 ? '• ' + myCart[10].titulo + '%3A' + '%20' + '|' + 'Quant:' + '%20' + myCart[10].qtd + '%20' + 'Und' + '%20' + 'X' + '%20' + 'R$' + myCart[10].preco + ',00' + '%0A' : ''}${myCart.length > 11 ? '• ' + myCart[11].titulo + '%3A' + '%20' + '|' + 'Quant:' + '%20' + myCart[11].qtd + '%20' + 'Und' + '%20' + 'X' + '%20' + 'R$' + myCart[11].preco + ',00' + '%0A' : ''}${myCart.length > 12 ? '• ' + myCart[12].titulo + '%3A' + '%20' + '|' + 'Quant:' + '%20' + myCart[12].qtd + '%20' + 'Und' + '%20' + 'X' + '%20' + 'R$' + myCart[12].preco + ',00' + '%0A' : ''}%0A%0A%F0%9F%92%B3l%20Total%3A%20${totalFinal.toFixed(2)} `)
        }



    }




    return (
        <DivTotal>
            <div className="txtTotal">
                <p>Subtotal</p>
                <p>R$ {total.toFixed(2)}</p>
            </div>

            <div className="txtTotal">
                <p>Entrega</p>
                <p> Grátis </p>
                {/* <p> R$ {total !== 0 ? 5.00.toFixed(2) : 0.00.toFixed(2)}</p> */}
            </div>

            <div className="txtTotal">
                <p>Total</p>
                <p> R$ {(total).toFixed(2)} </p>
                {/* <p> R$ {total !== 0 ? (5 + total).toFixed(2) : 0.00.toFixed(2)}</p> */}
            </div>

            <hr />
            <div>
                <button className="button" onClick={Pagar}> Finalizar Compra </   button>
            </div>
        </DivTotal>
    )
}



// <a className="button" target='blank' href={`//api.whatsapp.com/send?phone=+5588992901576&text=%F0%9F%98%80%20%7C%20Ol%C3%A1%20Jamara%0A%0A%F0%9F%93%92%20%7C%20Segue%20lista%20de%20produtos%20que%20desejo%20comprar%0A%0A%F0%9F%9A%80%7C%20Produtos%3A%20%0A%0A${dataItem.length > 0 ? '• ' + dataItem[0].nome + '%3A' + '%20' + 'R$' + dataItem[0].preco + '%0A' : ''}${dataItem.length > 1 ? '• ' + dataItem[1].nome + '%3A' + '%20' + 'R$' + dataItem[1].preco + '%0A' : ''}${dataItem.length > 2 ? '• ' + dataItem[2].nome + '%3A' + '%20' + 'R$' + dataItem[2].preco + '%0A' : ''}${dataItem.length > 3 ? '• ' + dataItem[3].nome + '%3A' + '%20' + 'R$' + dataItem[3].preco + '%0A' : ''}${dataItem.length > 4 ? '• ' + dataItem[4].nome + '%3A' + '%20' + 'R$' + dataItem[4].preco + '%0A' : ''}${dataItem.length > 5 ? '• ' + dataItem[5].nome + '%3A' + '%20' + 'R$' + dataItem[5].preco + '%0A' : ''}${dataItem.length > 6 ? '• ' + dataItem[6].nome + '%3A' + '%20' + 'R$' + dataItem[6].preco + '%0A' : ''}${dataItem.length > 7 ? '• ' + dataItem[7].nome + '%3A' + '%20' + 'R$' + dataItem[7].preco + '%0A' : ''}${dataItem.length > 8 ? '• ' + dataItem[8].nome + '%3A' + '%20' + 'R$' + dataItem[8].preco + '%0A' : ''}${dataItem.length > 9 ? '• ' + dataItem[9].nome + '%3A' + '%20' + 'R$' + dataItem[9].preco + '%0A' : ''}${dataItem.length > 10 ? '• ' + dataItem[10].nome + '%3A' + '%20' + 'R$' + dataItem[10].preco + '%0A' : ''}${dataItem.length > 11 ? '• ' + dataItem[11].nome + '%3A' + '%20' + 'R$' + dataItem[11].preco + '%0A' : ''}${dataItem.length > 12 ? '• ' + dataItem[12].nome + '%3A' + '%20' + 'R$' + dataItem[12].preco + '%0A' : ''}${dataItem.length > 13 ? '• ' + dataItem[13].nome + '%3A' + '%20' + 'R$' + dataItem[13].preco + '%0A' : ''}${dataItem.length > 14 ? '• ' + dataItem[14].nome + '%3A' + '%20' + 'R$' + dataItem[14].preco + '%0A' : ''}%0A%0A%F0%9F%92%B3l%20Total%3A%20${totalFinal.toFixed(2)}`}>  <BSIcons.BsWhatsapp size={22} style={{ marginRight: '4' }} /> Finalizar Compra
// </a> 