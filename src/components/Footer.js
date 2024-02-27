import React from 'react';
import '../styles/Footer.scss';
import facebook_icon from '../images/facebook-icon.png';
import phone_icon from '../images/phone-icon.png';
import info_icon from '../images/info-icon.png';

function Footer(){
    const width = 40;
    return(
        <section className='footerContainer'>
            <footer>
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
                    <img src={facebook_icon} width={width}/>
                    <img src={phone_icon} width={width}/>
                    <img src={info_icon} width={width}/>
                    <h1>© Todos os direitos reservados, 2024</h1>
                </section>
            </footer>
        </section>
    );
}
export default Footer;