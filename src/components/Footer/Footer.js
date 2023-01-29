import React from 'react';
import './Footer.css';
import Logo from '../../assets/logo.png';
import Face from '../../assets/facebook.png';
import Twitter from '../../assets/twitter.png';
import Linkedin from '../../assets/linkedin.png';
import Dribble from '../../assets/dribble.png';
import Behance from '../../assets/behance.png';
import GooglePlus from '../../assets/google-plus.png';

function Footer( props ) {
  return (
    <footer className={ props.modo + '__footer' }>
      <img className='footer__img' src={ Logo } alt="Logomarca" title="Logomarca"></img>
      <p>Ajudamos a criar uma personalidade digital construindo sua marca no ambiente online utilizando estratégias, ferramentas e tecnologias personalizadas.</p>
      <div className='redesSociais'>
        <img className='redeSocial' src={ Face } alt=" Facebook " title="Facebook"></img>
        <img className='redeSocial' src={ Twitter } alt=" Facebook " title="Facebook"></img>
        <img className='redeSocial' src={ Linkedin } alt=" Facebook " title="Facebook"></img>
        <img className='redeSocial' src={ Dribble } alt=" Facebook " title="Facebook"></img>
        <img className='redeSocial' src={ Behance } alt=" Facebook " title="Facebook"></img>
        <img className='redeSocial' src={ GooglePlus } alt=" Facebook " title="Facebook"></img>
      </div>
      <p>Copyright 2022 | <span>Bruno Arruda</span></p>
    </footer>
  )
}

export default Footer;