/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import './index.css'

const Sobre = () => {
    return (
        <section className='sobreEmpresa'>
            <div className='conteudoempresa'>
                <p>
                    Bem-vindo ao Contra o Filé, um restaurante vegano que nasceu com a missão de oferecer comida saudável e acessível para todos.
                </p>
                <div className="text-info">
                    <img src="logo-contra-file.png" />
                    <p>
                        Acreditamos que a alimentação vegana pode ser saborosa, inclusiva e cheia de frescor, independentemente de onde você esteja em sua jornada com o veganismo.
                    </p>
                </div>
                <p>
                    Aqui, você encontrará pratos que vão encantar seu paladar, seja você um vegano experiente ou alguém que está apenas começando a explorar essa forma de se alimentar.<br></br>
                    Funcionamos de Segunda a Quinta, das 11:00h ás 15hrs.
                </p>
            </div>
        </section>
    );
};


export default Sobre;