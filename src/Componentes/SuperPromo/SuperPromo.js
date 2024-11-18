/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import './index.css'

//criando uma função da seção de Promoção:const PromoSection
//criar uma seção cpm a tag section e adicionar uma classe para estilização específica depois
//dentro desta seção:section className='section-promocao, irei criar uma div com título e uma tag imagem

const SuperPromo = () => {
    return (
        <section className='container'>
            <div className='conteudo-promo'>
                <img src='bannerpromo.svg' alt='Banner Promocional'/>
            </div>
        </section>
    );
};


export default SuperPromo;