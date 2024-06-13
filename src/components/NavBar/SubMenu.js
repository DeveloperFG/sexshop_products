import React, { useState, useContext } from "react";
import { CartContext } from '../../Context/cart';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SidebarLink = styled(Link)`
  display: flex;
  color: #e1e9fc;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  list-style: none;
  height: 60px;
  text-decoration: none;
  font-size: 18px;

  &:hover {
    background: #8f0c5b;
    border-left: 4px solid #fff;
    cursor: pointer;
  }
`;

const SidebarLabel = styled.span`
  margin-left: 16px;
`;

const DropdownLink = styled(Link)`
  background: #8f0c5b;
  height: 60px;
  padding-left: 3rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #f5f5f5;
  font-size: 18px;

  &:hover {
    background: #632ce4;
    cursor: pointer;
  }
`;

const SubMenu = ({ item }) => {

  const { closeSidebar } = useContext(CartContext);

  const [subnav, setSubnav] = useState(false);

  const showSubnav = () => setSubnav(!subnav);

  const instagram = 'https://www.instagram.com/iperiumsexshop/?igshid=YmMyMTA2M2Y%3D'
  const email = 'mailto:iperiumstore@gmail.com'
  const local = 'https://goo.gl/maps/XDWAwUdnaEr7r8rZ8'
  const whats = 'https://wa.me/5588992901576?text=olá'

  // const cadastrar = ''

  function Instagram() {
    window.open(instagram)
  }

  function Email() {
    window.location = email
  }

  function Local() {
    window.open(local)
  }

  function WhastApp() {
    window.open(whats)
  }



  return (

    <>
      <SidebarLink to={item.path} onClick={item.subNav && showSubnav}>
        <div>
          {item.icon}
          <SidebarLabel>{item.title} </SidebarLabel>
        </div>
        <div>
          {item.subNav && subnav
            ? item.iconOpened
            : item.subNav
              ? item.iconClosed
              : null}
        </div>
      </SidebarLink>
      {subnav &&
        item.subNav.map((item, index) => {
          return (
            <DropdownLink to={item.path} key={index}>
              {item.icon}
              <SidebarLabel onClick={closeSidebar}>{item.title}</SidebarLabel>
              <a className='infor' onClick={Email}>{item.email}</a>
              <a className='infor' onClick={Instagram}>{item.instagram}</a>
              <a className='infor' onClick={WhastApp}>{item.contato}</a>
              <a className='infor' onClick={Local} >{item.endereço}</a>
            </DropdownLink>
          );
        })}
    </>
  );
};

export default SubMenu;
