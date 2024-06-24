import React from 'react';
import '../styles/Footer.scss';
import facebook_icon from '../images/facebook-icon.png';
import phone_icon from '../images/phone-icon.png';
import info_icon from '../images/info-icon.png';
import arrow_button2 from '../images/arrow_button2.png';

function Footer(){
    const width = 30;

    return(
        <section className='footerContainer'>
            <footer id='contato'>
                <section className='footerInfo'>
                    <section className='footerName'>
                        <h1>Ecommerce Page</h1>
                        <h1>Marca fictícia</h1>
                    </section>
                    <section className='footerServices'>
                        <h1>Encontre uma loja</h1>
                        <h1>Cartão Presente</h1>
                        <h1>Mapa do site</h1>
                    </section>
                    <section className='footerHelp'>
                        <h1>Dúvidas gerais</h1>
                        <h1>Encontre seu tamanho</h1>
                        <h1>Entregas</h1>
                    </section>
                    <section className='footerAbout'>
                        <h1>Sobre Nós</h1>
                        <h1>Sustentabilidade</h1>
                        <h1>Termos e serviços</h1>
                    </section>
                </section>
                <hr/>
                <section className='footerLinks'>
                    <img src={facebook_icon} width={width} alt='facebook'/>
                    <img src={phone_icon} width={width} alt='phone'/>
                    <img src={info_icon} width={width} alt='info'/>
                    <h1>© Todos os direitos reservados, 2024</h1>
                </section>
            </footer>
            <a href='#nav' id='footerButton'><img src={arrow_button2} width={width}/></a>
        </section>
    );
}
export default Footer;