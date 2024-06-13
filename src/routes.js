import { BrowserRouter, Route, Switch } from "react-router-dom";

import CartProvider from "./Context/cart";

import Principal from "./Pages/Principal";
import Carrinho from "./Pages/Carrinho";
import Cards from "./components/Cards";
import Navbar from "./components/NavBar";
import Modal from "./components/Modal/modal";
import Descricao from "./components/Descricao";
import ItemSlide from "./components/ItemSlide";
import Geis from "./Pages/Geis";
import Comestiveis from "./Pages/Geis/Comestiveis";
import Funcionais from "./Pages/Geis/Funcionais";
import FuncionaisPremium from "./Pages/Geis/Premium";
import Vibradores from "./Pages/Vibradores";
import Lubrificantes from "./Pages/Lubrificantes";
import Acessorios from "./Pages/Acessorios";
import Energeticos from "./Pages/Energetico";
import Proteses from "./Pages/Proteses";



// cadastrado por jamara
import Lingeries from "./Pages/Lingeries";
import Oleos from "./Pages/Oleos";
import Higienizadores from "./Pages/Higienizadores";
import Fantasias from "./Pages/Fantasias";
import BDSM from "./Pages/BDSM";
import Plugs from "./Pages/Plugs";
import Erro from "./Pages/Erro";

import Root from "./Adm/Root/Root";
import Cadastrar from "./Adm/Cadastrar";
import ListarProduto from "./Adm/Root/ListarProduto";
import Clientes from "./Adm/Clientes/Clientes";


const Routes = () => {
  return (
    <BrowserRouter>
      <CartProvider>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Principal} />
          <Route exact path="/Carrinho" component={Carrinho} />
          <Route exact path="/Cards/" component={Cards} />
          <Route exact path="/Modal" component={Modal} />
          <Route exact path="/ItemSlide/:id?/:titulo?/:categoria" component={ItemSlide} />
          <Route exact path="/Geis" component={Geis} />
          <Route exact path="/Comestiveis" component={Comestiveis} />
          <Route exact path="/Funcionais" component={Funcionais} />
          <Route exact path="/FuncionaisPremium" component={FuncionaisPremium} />
          <Route exact path="/Vibradores" component={Vibradores} />
          <Route exact path="/Acessorios" component={Acessorios} />
          <Route exact path="/Lubrificantes" component={Lubrificantes} />
          <Route exact path="/Energeticos" component={Energeticos} />
          <Route exact path="/Proteses" component={Proteses} />
          <Route exact path="/Lingeries" component={Lingeries} />
          <Route exact path="/Oleos" component={Oleos} />
          <Route exact path="/Higienizadores" component={Higienizadores} />
          <Route exact path="/Fantasias" component={Fantasias} />
          <Route exact path="/BDSM" component={BDSM} />
          <Route exact path="/Plugs" component={Plugs} />
          <Route exact path="/Descricao/:id?/:titulo?/:categoria" component={Descricao} />
          <Route exact path="/Cadastrar" component={Cadastrar} />
          <Route exact path="/ListarProduto" component={ListarProduto} />
          <Route exact path="/Clientes" component={Clientes} />
          <Route exact path="/Root" component={Root} />
          <Route path='/*' component={Erro} />

        </Switch>
      </CartProvider>
    </BrowserRouter>
  );
};

export default Routes;
