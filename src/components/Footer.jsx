import React from 'react'

export const Footer = () => {
    return (
        <footer>
            <div className='page-inner-content content'>
                <div className='download-options'>
                    <p>Baixa a nossa aplicacão</p>
                    <p>Android e Ios</p>
                    <div>
                        <img src='/images/app-store.png' alt='' />
                        <img src='/images/play-store.png' alt='' />
                    </div>
                </div>

                <div className='logo-footer'>
                    <h1 className='logo'>
                        ROCK<span>STORE</span>
                    </h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi quaerat dolorum veritatis minus fugit magni facilis voluptatem alias. Quo adipisci itaque veritatis molestias in dolorum autem reiciendis vel vitae voluptatum.</p>
                </div>

                <div class="links">
                    <h3>Links úteis</h3>
                    <ul>
                        <li><a href='#'>Cupons</a></li>
                        <li><a href='#'>Blogs</a></li>
                        <li><a href='#'>Politicas</a></li>
                        <li><a href='#'>Torna-se Afiliado</a></li>
                    </ul>
                </div>
            </div>
            <div className='pager-inner-content'>
                <hr />
                <p className='copyrigth'>
                    &copy; Copyright 2025 -Exce Roger  Todos Direitos Reservados
                </p>

            </div>

        </footer>
    )
}
