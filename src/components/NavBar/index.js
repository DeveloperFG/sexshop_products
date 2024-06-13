import React, { useState, useContext } from "react";
import { CartContext } from '../../Context/cart';
import styled from 'styled-components';

import { Link } from 'react-router-dom';

import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { BsFillCartDashFill, BsFillCartCheckFill } from 'react-icons/bs'

import { SidebarData } from '../NavBar/SideBarData'

import SubMenu from './SubMenu';

import { IconContext } from 'react-icons/lib';

import headerImg from "../../img/header.png";

import "./navBar.css";

const Nav = styled.div`
  background: #000;
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: fixed;
  z-index: 100;
  /* margin-top: 1%; */
`;

const NavIcon = styled(Link)`
  margin-left: 1rem;
  margin-top: 1.5rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  
`;

const SidebarNav = styled.nav`
  background: #a80e63;
  width: 300px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
  transition: 350ms;
  z-index: 102;
  
`;

const SidebarWrap = styled.div`
  width: 100%;

  &:hover {
    overflow-y: scroll;
  }
  
`;

const NavBar = () => {


  const { count, } = useContext(CartContext);
  const { sidebar, showSidebar, } = useContext(CartContext);
  let { total, setTotal } = useContext(CartContext);
  const [bag, setBag] = useState(false);

  let { nomeCliente, senhaAdm, } = useContext(CartContext);


  console.log(nomeCliente)


  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav>
          <NavIcon to='#'>
            <FaIcons.FaBars className="close" onClick={showSidebar} />
          </NavIcon>
          <div className="headerTop">
            <div className="div1">
              <Link to={senhaAdm == 15112022 ? '/Root' : '/'}>
                <img className="imgHeader" src={headerImg} alt="imagemHeader" />
              </Link>
            </div>
            <div className="bag">
              <Link className="linkCarrinho" to='/Carrinho'>
                <div className="count">
                  <div>
                    {total > 0 ? <BsFillCartCheckFill className="icon" /> : <BsFillCartDashFill className="icon" />}
                    <p className='valor'>R$ {total === 0.00 ? total.toFixed(2) : (total).toFixed(2)} </p>
                  </div>
                  <p className="circuloP" style={{ display: count > 0 ? 'block' : 'none' }}>{count}</p>
                </div>
              </Link>
            </div>
          </div>
        </Nav>
        <SidebarNav sidebar={sidebar}>
          <SidebarWrap >
            <NavIcon to='#'>
              <AiIcons.AiOutlineClose onClick={showSidebar} />
            </NavIcon>
            {SidebarData.map((item, index) => {
              return (
                <SubMenu item={item} key={index} />
              )
            })}
          </SidebarWrap>
        </SidebarNav>
      </IconContext.Provider>

    </>
  );
};

export default NavBar;
