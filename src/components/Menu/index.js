import React from 'react';

import Logo from '../../assets/images/logo.png';
import './menu.css';
import {Link} from 'react-router-dom';
// import ButtonLink from './components/ButtonLink';
import Button from '../Button';

function Menu() {
    return (
        <nav className="Menu">
            {/* <a href="/">
                <img className="Logo" src={Logo} alt="MyFlix" />
            </a> */}

            <Link to="/">
                <img className="Logo" src={Logo} alt="MyFlix" />
            </Link>

            {/* <ButtonLink className="ButtonLink" href="/" >
                Novo vídeo
            </ButtonLink> */}

            {/* <Button className="ButtonLink" href="/" >
                Novo vídeo
            </Button> */}

            {/* <Button as="a" className="ButtonLink" href="/cadastro/video" >
                Novo vídeo
            </Button> */}
             <Button as={Link} className="ButtonLink" to="/cadastro/video" >
                Novo vídeo
            </Button>
        </nav>
    )
}

export default Menu;