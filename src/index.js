import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';

import CadastroVideo from './pages/Cadastro/Video';
import CadastroCategoria from './pages/Cadastro/Categoria';

const Pagina404 = () => (<div>Pagina 404</div>);

ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,

  // Adding router system around our app
  <BrowserRouter>
    <Switch>
      {/* <Route component={()=>(<div>Pagina 404</div>)} /> */}
      <Route path="/" component={Home} exact />
      <Route path="/cadastro/video" component={CadastroVideo} exact />
      <Route path="/cadastro/categoria" component={CadastroCategoria} exact />
      <Route component={Pagina404} />
    </Switch>
    {/* <App /> */}
  </BrowserRouter>,
  document.getElementById('root'),
);
