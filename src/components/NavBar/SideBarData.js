import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';
import * as BsIcons from 'react-icons/bs';


export const SidebarData = [


  {
    title: 'Pagina inicial',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  },
  {
    title: ' + Produtos',
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill fontSize={26} />,
    iconOpened: <RiIcons.RiArrowUpSFill fontSize={26} />,

    subNav: [

      {
        title: 'Acessórios',
        path: '/Acessorios',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'Energéticos',
        path: 'Energeticos',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'Óleos',
        path: '/Oleos',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'Higienizadores',
        path: '/Higienizadores',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'Fantasias',
        path: '/Fantasias',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'BDSM',
        path: '/BDSM',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      // {
      //   title: 'Anéis Penianos',
      //   path: '/reports/reports3',
      //   icon: <IoIcons.IoIosPaper />
      // },
      // {
      //   title: 'Capas Penianas',
      //   path: '/reports/reports3',
      //   icon: <IoIcons.IoIosPaper />
      // },
      {
        title: 'Próteses Peniana',
        path: '/Proteses',
        icon: <IoIcons.IoIosPaper />
      },
      // {
      //   title: 'Ducha Higiênica',
      //   path: '/reports/reports3',
      //   icon: <IoIcons.IoIosPaper />
      // },
      {
        title: 'Lubrificantes',
        path: '/Lubrificantes',
        icon: <IoIcons.IoIosPaper />
      },

      {
        title: 'Vibradores',
        path: '/Vibradores',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Plugs Anais',
        path: '/Plugs',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Lingeries',
        path: '/Lingeries',
        icon: <IoIcons.IoIosPaper />
      }

    ],

  },

  {
    title: 'Géis',
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill fontSize={26} />,
    iconOpened: <RiIcons.RiArrowUpSFill fontSize={26} />,

    subNav: [

      {
        title: 'Premium',
        path: '/FuncionaisPremium',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },

      {
        title: 'Comestíveis',
        path: '/Comestiveis',
        icon: <IoIcons.IoIosPaper />
      },

      {
        title: 'Anais',
        path: '/Geis',
        icon: <IoIcons.IoIosPaper />
      },

      {
        title: 'Funcionais',
        path: '/Funcionais',
        icon: <IoIcons.IoIosPaper />
      },

    ]

  },

  // {
  //   title: 'cads',
  //   path: '/Cadastrar',
  //   icon: <IoIcons.IoMdFemale />
  // },
  // {
  //   title: 'Para Homens',
  //   path: '/ItemSlide',
  //   icon: <IoIcons.IoMdMale />
  // },

  {
    title: 'Iperium',
    icon: <FaIcons.FaGem />,
    iconClosed: <RiIcons.RiArrowDownSFill fontSize={26} />,
    iconOpened: <RiIcons.RiArrowUpSFill fontSize={26} />,

    subNav: [
      {
        email: 'iperiumstore@gmail.com',
        icon: <AiIcons.AiOutlineMail />
      },
      {
        instagram: '@iperium_sexshop',
        icon: <AiIcons.AiOutlineInstagram />
      },
      {
        contato: '(88) 99290-1576',
        icon: <BsIcons.BsWhatsapp />

      },
      {
        endereço: 'Endereço',
        icon: <AiIcons.AiOutlineEnvironment />
      }
    ]
  },
  // {
  //   title: 'Administrador',
  //   icon: <FaIcons.FaUsersCog />,
  //   iconClosed: <RiIcons.RiArrowDownSFill fontSize={26} />,
  //   iconOpened: <RiIcons.RiArrowUpSFill fontSize={26} />,

  //   subNav: [
  //     {
  //       title: 'Cadastrar Produto',
  //       path: '/Cadastrar',
  //       icon: <FaIcons.FaArrowCircleUp />
  //     },

  //   ]
  // }
];
