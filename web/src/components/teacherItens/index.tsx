import React from 'react'

import WhatsappIcon from '../../assets/images/icons/whatsapp.svg';


function TeacherItem() {
    return (
        <article className="teacher-item">
                    <header>
                        <img src=" https://avatars0.githubusercontent.com/u/41456182?s=460&u=c1937c37c93a89fecf5f0081cfe4d81fc931effa&v=4" alt="Brasta"/>
                        <div>
                            <strong> Brasta Jah </strong>
                            <span> História </span>
                        </div>

                        <p>
                            Conheceu a história do mundo aos 15 anos
                            <br /> <br/>
                            Antes mesmo de ele saber até onde ele iria e como conhecerias 
                            as coisas ele já sabia muitas verdades que hoje nem mesmo os estudiosos sabem
                        </p>

                        <footer>
                            <p>
                                Preço/hora 
                                <strong> R$ 80,00 </strong>
                            </p>

                            <button type="button">
                                <img src={WhatsappIcon} alt="whatsapp"/>
                                Entrar em Contato
                            </button>
                        </footer>
                    </header>
                </article>
    )
}


export default TeacherItem;