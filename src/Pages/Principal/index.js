import React, { useEffect, useState, useContext } from "react";
import { CartContext } from '../../Context/cart';
import firebase from '../../firebase/firebaseConnection'
import { toast } from 'react-toastify';
import swal from 'sweetalert';
import "./principal.css";

import ModalPromo from '../../components/ModalPromo';

import Load from '../../components/Load';

import { Card, DivCards, NavFilter } from '../../components/Cards/styles';

import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';


import skeleton from '../../img/skeleton.gif'

import promo2 from '../../img/destaques/promo1.gif'
import banner1 from "../../img/banner/banner1.jpeg";
import banner2 from "../../img/banner/banner2.jpeg";
import banner3 from "../../img/banner/banner3.jpeg";
import banner4 from "../../img/banner/banner4.jpeg";

import Carousel from "../../components/Carrosel/carousel";
import Loading from '../../components/BlockLoading/Loading';

import { Link } from 'react-router-dom';


function Principal() {

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');

  const [isModalVisible, setIsModalVisible] = useState();

  const [ativar, setAtivar] = useState(false)

  const slides = [banner1, banner2, banner3, banner4];

  let { count, setCount } = useContext(CartContext);
  let { myCart, setMyCart } = useContext(CartContext);
  let { total, setTotal } = useContext(CartContext);

  let { imagemModal, setImagemModal } = useContext(CartContext);

  let { handleItem } = useContext(CartContext);

  let { loading, setLoading } = useContext(CartContext);

  const { sidebar, closeSidebar } = useContext(CartContext);

  let { arrayProduto, setArrayProduto } = useContext(CartContext);

  const [ativarLoad, setAtivarLoad] = useState(true)

  let { admLoading, setAdmLoading } = useContext(CartContext);




  useEffect(() => {

    async function loadProdutos() {
      await firebase.firestore().collection('Principal').onSnapshot((doc) => {
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
        })

    }

    loadProdutos()

  }, [])




  useEffect(() => {
    setTimeout(AtivarModal, 1500)
  }, [])


  function AtivarModal() {
    setAtivarLoad(false)
  }



  useEffect(() => {
    async function loadPagina() {
      setLoading(false)
    }

    setInterval(loadPagina, 1500)



  }, [])



  var msg = document.querySelector('.msgInical');
  var texto = `ATINJA SEU POTÊNCIAL`


  useEffect(() => {
    function escrever(str, el) {
      var char = str.split('').reverse();
      var typer = setInterval(function () {
        if (!char.length) return clearInterval(typer);
        var next = char.pop();
        el.innerHTML += next
      }, 100);


    }
    setTimeout(() => {
      setAtivar(true)
      setTimeout(escrever(texto, msg), 2000)
    }, 2000)


  }, [ativar])


  function salvarLocal(selecionado) {
    let selectt = arrayProduto.filter((item) => {
      return (item.titulo === selecionado.titulo)

    })

    localStorage.setItem('imgDados', JSON.stringify(selectt))


  }


  const small = window.innerWidth
  const type = ['info', 'info2']
  var info = document.querySelector('.infos')
  var info1 = document.querySelector('.infos1')
  var info2 = document.querySelector('.infosEntrega')
  var info3 = document.querySelector('.infosEndereco')
  var info4 = document.querySelector('.infosAtendimento')

  const [busca, setBusca] = useState('');
  const [ordem, setOrdem] = useState('');
  let [lista] = useState([]);

  // funcoes de informacoes

  function notifyPagamentos() {
    if (small >= 375) {
      swal("Prezado Cliente", "Parcelamento no cartão até 4x" + "----" +
        " Aceitamos Pix ");
    } else if (small <= 375) {
      info.classList.toggle('active')
      info1.classList.toggle('active')
    }

  }

  function notifyEntrega() {
    if (small >= 375) {
      swal("Prezado Cliente", "Entregas de 17:hs as 20:hs e Finais de semana");
    } else if (small <= 375) {
      info2.classList.toggle('active')
    }

  }

  function notifyEndereco() {
    if (small >= 375) {
      swal("Endereço", "Vereador Edmilson Patricio / N-510 / Pompeia");
    } else if (small <= 375) {
      info3.classList.toggle('active')
    }

  }

  function notifyContato() {
    if (small >= 375) {
      swal("Fale conosco", " Whatsapp: +55 (88) 99290-1576");
    } else if (small <= 375) {
      info4.classList.toggle('active')
    }

  }


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


  // funcao para modal

  function handelModal() {
    setIsModalVisible(!isModalVisible)
  }


  // salvar cliente no banco
  async function salvarDados() {

    if (nome && email == "") {
      alert('Preencha os campos')
      return;
    }

    await firebase.firestore().collection('clientes')
      .doc(nome)
      .set({
        nome: nome,
        email: email,

      })

      .then(() => {
        alert('Cadastrado com sucesso!!!')
        setNome('')
        setEmail('')
        setIsModalVisible(false)
      })
      .catch((error) => {
        console.log('gerou algum erro:' + error)
        alert('Deu algum erro!!!')
      })
  }


  // funcoes para carrinho

  function addCart(produto) {
    pushCart(produto);
    handleItem(produto);
    calcTotal();
    calcCount();
    toast.success("Item adicionado com sucesso")

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


  if (loading) {
    return (
      <Load />
    )


  }

  return (
    <div className='sideberOpen'>
      {admLoading ? (
        <Loading />
      ) : ''}
      <div className="containerPrincipal" onClick={closeSidebar}>
        <div className='divCarrousel'>
          <Carousel slides={slides}></Carousel>
        </div>
        <div className="pag">
          <div className="filho">
            <a className="linkFilho" onClick={notifyPagamentos}>  <FaIcons.FaCcVisa className="icon" size={28} color='yellow' /> PAGAMENTOS</a>
          </div>
          <p className='infos' >Parcelamento no cartão até 4x </p>
          <p className='infos1' >Aceitamos Pix </p>

          <div className="filho">
            <a className="linkFilho" onClick={notifyEntrega}> <FaIcons.FaBiking className="icon" size={28} color='yellow' />ENTREGA </a>
          </div>
          <p className='infosEntrega'  > Das 17:hs as 20:hs e Finais de Semana </p>
          <div className="filho">
            <a className="linkFilho" onClick={notifyEndereco}> <FaIcons.FaMapMarkerAlt className="icon" size={28} color='yellow' />ENDEREÇO </a>
          </div>
          <p className='infosEndereco'  > Vereador Edmilson Patricio / N-510 / Pompeia </p>
          <div className="filho">
            <a className="linkFilho" onClick={notifyContato} > <FaIcons.FaHeadset className="icon" size={28} color='yellow' /> ATENDIMENTO </a>
          </div>
          <p className='infosAtendimento'  > Whatsapp: +55 (88) 99290-1576 </p>
        </div>

        <div className="msgInical"></div>

        <DivCards style={{ justifyContent: lista.length < 3 ? 'space-around' : 'space-between' }}>
          {lista.map((item) => {
            return (
              <Card key={item.identificador}>
                {item.type == 'array' ? <Link to={`/ItemSlide/${item.id}/${item.titulo}/${item.categoria}`} onClick={() => salvarLocal(item)}> <img className='imgItems' src={ativar ? skeleton : item.img[0]} alt={item.titulo} /> </Link> :
                  <Link to={`/Descricao/${item.id}/${item.titulo}/${item.categoria}`} onClick={() => salvarLocal(item)}> <img className='imgItems' src={ativarLoad ? skeleton : item.img} alt={item.titulo} /> </Link>}
                <div className="txtCard">
                  <p>{item.titulo}</p>
                  <span>{item.descricao}</span>
                  <p> por: <h3>R$ {item.preco.toFixed(2)} </h3> </p>
                </div>
                <div className='addCar'>
                  <button className='btnAdd' style={{ opacity: item.quantidade == 0 ? '0.5' : '1' }} disabled={item.quantidade == 0 ? true : false} onClick={() => addCart(item)}> <AiIcons.AiOutlineShoppingCart className='carIcon' /> {item.quantidade == 0 ? ' Indisponível' : 'Adicionar'}</button>
                </div>

                {/* <div className='divQuant'>
                  <small> Estoque: <small className='quant' style={{ color: `${item.quantidade >= 5 ? 'green' : item.quantidade === 4 || item.quantidade === 3 ? 'orange' : 'red'}` }}> {item.quantidade} </small> </small>
                </div> */}

              </Card>
            )
          })}
        </DivCards>

        {isModalVisible ? (
          <ModalPromo onClose={() => setIsModalVisible(false)}>
            <div className='divModal' id='modalPromo'>
              <div className="geral">

                <div className="container">
                  <input type="text" required
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}

                  />
                  <span className='span2'> Nome/Sobrenome </span>

                </div>

                <div className="container1">
                  <input className="input1" type="text" required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}

                  />
                  <span className="span1">Seu email</span>
                </div>

              </div>

              <br></br>

              <div className='divBtn'>
                <button className='btnPromo' onClick={salvarDados}>Cadastrar</button>
              </div>

            </div>
          </ModalPromo>
        ) : null}

      </div>

      <a className='promocao' href='#modalPromo'>
        <img className='promo' src={promo2} onClick={handelModal} />
      </a>
    </div >
  );
}

export default Principal;
