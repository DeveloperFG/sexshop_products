import React, { useState, useContext, useRef } from 'react'
import firebase from '../../src/firebase/firebaseConnection';
import { storage } from "../../src/firebase/firebaseConnection";
import { CartContext } from '../../src/Context/cart';
import { toast } from 'react-toastify';

import { Link } from 'react-router-dom';

import * as FaIcons from 'react-icons/fa';

import './cadastrar.css'


function Cadastrar() {


    // criados para teste
    const [titulo, setTitulo] = useState('')
    const [tipo, setTipo] = useState('')
    const [quantidade, setQuantidade] = useState('')
    const [descricao, setDescricao] = useState('')
    const [completa, setCompleta] = useState('')
    const [indicacao, setIndicacao] = useState('')
    const [ficha, setFicha] = useState('')
    const [preco, setPreco] = useState('')



    let { category, setCategory } = useContext(CartContext);

    const { sidebar, closeSidebar } = useContext(CartContext);

    const [loading, setLoading] = useState(false)
    const [loading2, setLoading2] = useState(false)


    const [images, setImages] = useState([]);
    const [urls, setUrls] = useState([]);
    const [progress, setProgress] = useState(0);

    let [imgInput, setImgInput] = useState()


    function handleChangeSelect(e) {
        setCategory(e.target.value);
    }

    function handleChangeSelect2(e) {
        setTipo(e.target.value);
    }


    const handleFile = (e) => {
        setImgInput()

        for (let i = 0; i < e.target.files.length; i++) {
            const newImage = e.target.files[i];
            newImage["id"] = Math.random();
            setImages((prevState) => [...prevState, newImage]);
        }
    };


    async function handleUpload() {

        if (titulo, descricao, completa, quantidade, tipo, indicacao, category, ficha, preco == '' || null) {
            alert('Preencha todos os campos!')

        }

        setLoading(true)

        const promises = [];
        images.map((image) => {
            const uploadTask = storage.ref(`img/${category}/${image.name}`).put(image);
            promises.push(uploadTask);
            uploadTask.on(
                "state_changed",
                (snapshot) => {
                    const progress = Math.round(
                        (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                    );
                    setProgress(progress);
                },
                (error) => {
                    console.log(error);
                },
                async () => {
                    await firebase.storage()
                        .ref(`img/${category}`)
                        .child(image.name)
                        .getDownloadURL()
                        .then(async (url) => {
                            setUrls((prevState) => [...prevState, url]);

                        });
                    setLoading(false)
                }
            );
        });

        Promise.all(promises)
            .then(() => toast.success("Imagem salva com sucesso!"))
            .catch((err) => {
                toast.error('Ops! parace que deu algum erro!')
                console.log(err);
            })
    };


    async function handleDados() {

        setLoading(true)

        await firebase.firestore().collection(`${category}`)
            .doc()
            .set({
                titulo: titulo,
                type: tipo,
                quantidade: parseInt(quantidade),
                categoria: category,
                descricao: descricao,
                completa: completa,
                indicacao: indicacao,
                ficha: ficha,
                preco: parseFloat(preco),
                img: urls
            })
            .then(() => {
                setLoading(false)
                setTitulo('');
                setTipo('');
                setQuantidade('');
                setDescricao('');
                setCompleta('');
                setIndicacao('')
                setFicha('')
                setPreco('');
                setUrls('');
                setImgInput('')
                toast.success('Produto cadastrado com sucesso!')

            })
            .catch((error) => {
                toast.error('Ops! parace que deu algum erro!')
                console.log(error + 'Deu algum erro')
            })

        setImages([])
        setUrls([])

    }



    return (
        <div className='cadastrarConteiner' onClick={closeSidebar}>
            <Link to='/Root' className='linkA'>
                <FaIcons.FaAngleLeft size='35px' />
                <small>CADASTRAR NOVO PRODUTO</small>
            </Link>

            <section className='cadastrar'>
                {/* <div className='divTop1' >
                    <span className='ajuste'>Id:</span>
                    <input className='InputTitulo'
                        value={identificador}
                        onChange={(e) => setIdentificador(e.target.value)}
                        placeholder='Id do produto'
                    />

                </div> */}

                <div className='divTop1' >
                    <span className='ajuste'>Nome:</span>
                    <input className='InputTitulo'
                        value={titulo}
                        onChange={(e) => setTitulo(e.target.value)}
                        placeholder='Nome do produto'
                    />

                </div>

                <div className='divTop1' >
                    <span className='ajuste'>Prévia:</span>
                    <input className='InputTitulo'
                        value={descricao}
                        onChange={(e) => setDescricao(e.target.value)}
                        placeholder='Prévia do produto'
                    />

                </div>

                <div className='divTop1' >
                    <span className='ajuste'>Quantidade:</span>
                    <input className='InputTitulo'
                        value={quantidade}
                        onChange={(e) => setQuantidade(e.target.value)}
                        placeholder='Produtos em estoque'
                    />

                </div>

                <div className='divTop1' >
                    <span className='ajuste'>Preço:</span>
                    <input className='InputTitulo'
                        value={preco}
                        onChange={(e) => setPreco(e.target.value)}
                        placeholder='Preço do produto'
                    />

                </div>

                <div className='divTop2' >
                    <section>
                        <div>
                            <span className='ajuste3'>Categoria:</span>
                        </div>
                        <select className='select' value={category} onChange={handleChangeSelect} >
                            <option value="Selecionar">Selecione</option>
                            <option value="Principal">Principal</option>
                            <option value="Acessorios">Acessorios</option>
                            <option value="Vibradores">Vibradores </option>
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
                    </section>

                    <div className='divTop1' >
                        <div className='top1AjustesDiv'>
                            <span className='ajuste2'>Tipo:</span>
                        </div>
                        <select className='select' value={tipo} onChange={handleChangeSelect2} >
                            <option value="Selecionar">Selecione</option>
                            <option value="unico">unico</option>
                            <option value="array">array</option>
                        </select>


                    </div>

                    <span>Imagem:</span>
                    <label className='label-avatar'>
                        <input type='file' multiple accept='image/*' value={imgInput} onChange={handleFile} /> <br />
                    </label>

                    {/* adicionando barra de progresso */}
                    {/* <progress value={progress} max="100" /> */}

                    <span>Descrição Completa:</span>
                    <textarea
                        value={completa}
                        onChange={(e) => setCompleta(e.target.value)}
                        placeholder='Digite aqui'
                    />


                    <span>Indicação de uso :</span>
                    <textarea
                        value={indicacao}
                        onChange={(e) => setIndicacao(e.target.value)}
                        placeholder='Digite aqui'
                    />

                    <span> Ficha do Produto :</span>
                    <textarea
                        value={ficha}
                        onChange={(e) => setFicha(e.target.value)}
                        placeholder='Items que acompanham o produto'
                    />

                </div>


                <div className='divTop2'>
                    <button disabled={urls.length > 0 ? true : false} onClick={handleUpload}>{!loading ? ' (1) Upload Imagens' : 'Salvando Imagens...'}</button>

                    <button disabled={urls.length == 0 ? true : false} onClick={handleDados}>{!loading2 ? '(2) Cadastrar Produto' : 'Cadastrando Produto...'}</button>

                </div>

            </section>


        </div>
    )
}

export default Cadastrar
